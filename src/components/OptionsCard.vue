<template>
      <Card id="optionsCard">
            <template #title>Choose Options to find the best Flight</template>
            <template #content>
                  <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
                        <div class="p-inputgroup flex-1">
                              <RadioButton v-model="FlyOptions.flyType" inputId="oneWay" value="oneWay"
                                    style="margin-right: 10px" v-on:change="changeFlightType('oneWay')" />
                              <label for="ingredient1">One Way</label>
                        </div>
                        <div class="p-inputgroup flex-1">
                              <RadioButton v-model="FlyOptions.flyType" inputId="roundTrip" value="roundTrip"
                                    style="margin-right: 10px" v-on:change="changeFlightType('roundTrip')" />
                              <label for="ingredient1">Round Trip</label>
                        </div>
                        <div class="flex flex-1 gap-10">
                              <InputText id="username" type="number" placeholder="Passangers" aria-describedby="username-help"
                                    v-model="FlyOptions.passangers" />
                        </div>
                        <div class="flex flex-1 gap-10">
                              <InputText id="username" type="number" placeholder="Children" aria-describedby="username-help"
                                    v-model="FlyOptions.boys" />
                        </div>
                  </div>
                  <br />
                  <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
                        <div class="flex flex-1 gap-10">
                              <Dropdown optionLabel="name" placeholder="Select a Origin" class="w-full md:w-14rem"
                                    :options="origins" v-model="FlyOptions.origin" />
                        </div>
                        <div class="flex flex-1 gap-10">
                              <Dropdown optionLabel="name" placeholder="Select Destiny" class="w-full md:w-14rem"
                                    :options="destiny" v-model="FlyOptions.destiny" />
                        </div>
                        <div class="flex flex-1 gap-10">
                              <Calendar dateFormat="yy-mm-dd" placeholder="Departure date"
                                    v-model="FlyOptions.departureDate" />
                        </div>
                        <div class="flex flex-1 gap-10" v-if="flyType != 'oneWay'">
                              <Calendar dateFormat="yy-mm-dd" placeholder="Arrive date" v-model="FlyOptions.arriveDate" />
                        </div>
                  </div>
                  <br />
                  <center>
                        <Button label="Search Flighs" style="border-radius: 22px" type="button"
                              v-on:click="searchFlight"></Button>
                  </center>
            </template>
      </Card>
      <br />
      <div class="empty-results" v-if="results.length == 0">
            <center>
                  <img src="../assets/empty-results.png" alt="" />
                  <br />
                  <h6>
                        Upps, maybe thresn’t flights right now, choose new
                        options to find it
                  </h6>
            </center>
      </div>
      <a href="#" v-for="result in results" style="text-decoration: none"
            v-on:click="book(result.id, result.calculatedPrice)">
            <flightCard :startHour="result.startHour" :finishHour="result.finishHour" :origin="result.origin"
                  :destiny="result.destiny" :duration="result.duration" :isDirect="result.isDirect"
                  :calculatedPrice="result.calculatedPrice" :departure="result.departure" :arrive="result.arrive" />
      </a>
</template>

<script>
import flightCard from "./FlightCard.vue";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

export default {
      components: { flightCard },
      data() {
            return {
                  option: "",
                  value: "",
                  origins: [
                        { name: "MDE", code: "MDE" },
                        { name: "BGO", code: "BGO" },
                  ],
                  destiny: [
                        { name: "MDE", code: "MDE" },
                        { name: "BGO", code: "BGO" },
                  ],
                  FlyOptions: {
                        flyType: 0,
                        passangers: "",
                        boys: "",
                        origin: "",
                        destiny: "",
                        departureDate: "",
                        arriveDate: "",
                  },
                  results: [
                        // {
                        //       startHour: "10:26 AM",
                        //       finishHour: "13:45 PM",
                        //       origin: "EOH",
                        //       destiny: "BOG",
                        //       duration: "2 hour",
                        //       isDirect: true,
                        // },
                        // {
                        //       startHour: "11:00 AM",
                        //       finishHour: "13:45 PM",
                        //       origin: "BOG",
                        //       destiny: "MED",
                        //       duration: "50 min",
                        //       isDirect: false,
                        // },
                  ],
            };
      },
      methods: {
            async searchFlight() {
                  const data = {
                        origin: this.FlyOptions.origin.code,
                        destiny: this.FlyOptions.destiny.code,
                        departure: this.FlyOptions.departureDate
                              ? moment(this.FlyOptions.departureDate).format(
                                    "YYYY-MM-DD"
                              )
                              : moment().format("YYYY-MM-DD"),
                        arrive: this.FlyOptions.arriveDate
                              ? moment(this.FlyOptions.arriveDate).format(
                                    "YYYY-MM-DD"
                              )
                              : moment().format("YYYY-MM-DD"),
                  };

                  if (this.FlyOptions.passangers === "") {
                        Swal.fire({
                              title: "Upps!",
                              text: "You must be assign the passangers number",
                              icon: "info",
                              confirmButtonText: "Search again",
                        });
                  } else {
                        const request = await axios.post(
                              `${import.meta.env.VITE_BACK_URI}/flight/search`,
                              data
                        );

                        this.results = [];

                        if (request.data.destiny === null) {
                              Swal.fire({
                                    title: "Upps!",
                                    text: "No flights available in this search",
                                    icon: "info",
                                    confirmButtonText: "Search again",
                              });
                        } else {
                              request.data.forEach((element) => {
                                    let calcP =
                                          this.FlyOptions.passangers *
                                          element.price_per_passanger;
                                    let calcC =
                                          this.FlyOptions.boys *
                                          element.price_per_child;
                                    const total = calcP + calcC;

                                    this.results.push({
                                          startHour: "11:00 AM",
                                          finishHour: "13:45 PM",
                                          origin: element.origin,
                                          destiny: element.destiny,
                                          duration: "50 min",
                                          isDirect: element.is_direct,
                                          calculatedPrice: total,
                                          departure: element.departure,
                                          arrive: element.arrive,
                                          id: element.id,
                                    });
                              });
                        }
                  }
            },
            changeFlightType(type) {
                  this.flyType = type;
                  console.log(this.flyType);
            },
            async book(id, payed) {
                  Swal.fire({
                        title: "You are booking this flight",
                        text: "Do u want to continue",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, book",
                  }).then(async (result) => {
                        if (result.isConfirmed) {

                              if (localStorage.getItem("userSession") === undefined) {
                                    Swal.fire({
                                          title: "Upps!",
                                          text: "You are not logged in, please click on Start Button to continue",
                                          icon: "info",
                                          confirmButtonText: "Confirm",
                                    });
                              } else {
                                    const data = {
                                          passangers: this.FlyOptions.passangers,
                                          children: this.FlyOptions.boys
                                                ? this.FlyOptions.boys
                                                : 0,
                                          total_payed: payed,
                                          user_id: localStorage.getItem(
                                                "userSession"
                                          ),
                                          flight_id: id,
                                    };

                                    const request = await axios.post(
                                          `${import.meta.env.VITE_BACK_URI
                                          }/booking/create`,
                                          data
                                    );

                                    if (request.data.passangers != null) {
                                          Swal.fire({
                                                title: "Great!",
                                                text: "Your flight was booking successfully",
                                                icon: "success",
                                                confirmButtonText: "Continue",
                                          });
                                    }
                              }
                        }
                  });
            },
      },
};
</script>

<style scoped>
#optionsCard {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
            0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      margin: 20px;
      border-radius: 22px;
}
</style>
