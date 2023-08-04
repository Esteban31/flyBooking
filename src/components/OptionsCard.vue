<template>
      <Card id="optionsCard">
            <template #title>Choose Options</template>
            <template #content>
                  <div
                        class="flex flex-column md:flex-row md:justify-content-between row-gap-3"
                  >
                        <div class="p-inputgroup flex-1">
                              <RadioButton
                                    v-model="FlyOptions.flyType"
                                    inputId="oneWay"
                                    value="oneWay"
                                    style="margin-right: 10px"
                              />
                              <label for="ingredient1">One Way</label>
                        </div>
                        <div class="p-inputgroup flex-1">
                              <RadioButton
                                    v-model="FlyOptions.flyType"
                                    inputId="roundTrip"
                                    value="roundTrip"
                                    style="margin-right: 10px"
                              />
                              <label for="ingredient1">Round Trip</label>
                        </div>
                        <div class="flex flex-1 gap-10">
                              <InputText
                                    id="username"
                                    type="number"
                                    placeholder="Passangers"
                                    aria-describedby="username-help"
                                    v-model="FlyOptions.passangers"
                              />
                        </div>
                        <div class="flex flex-1 gap-10">
                              <InputText
                                    id="username"
                                    type="number"
                                    placeholder="Children"
                                    aria-describedby="username-help"
                                    v-model="FlyOptions.boys"
                              />
                        </div>
                  </div>
                  <br />
                  <div
                        class="flex flex-column md:flex-row md:justify-content-between row-gap-3"
                  >
                        <div class="flex flex-1 gap-10">
                              <Dropdown
                                    optionLabel="name"
                                    placeholder="Select a Origin"
                                    class="w-full md:w-14rem"
                                    :options="origins"
                                    v-model="FlyOptions.origin"
                              />
                        </div>
                        <div class="flex flex-1 gap-10">
                              <Dropdown
                                    optionLabel="name"
                                    placeholder="Select Destiny"
                                    class="w-full md:w-14rem"
                                    :options="destiny"
                                    v-model="FlyOptions.destiny"
                              />
                        </div>
                        <div class="flex flex-1 gap-10">
                              <Calendar
                                    dateFormat="dd/mm/yy"
                                    placeholder="Departure date"
                                    v-model="FlyOptions.departureDate"
                              />
                        </div>
                        <div class="flex flex-1 gap-10">
                              <Calendar
                                    dateFormat="dd/mm/yy"
                                    placeholder="Arrive date"
                                    v-model="FlyOptions.destiny"
                              />
                        </div>
                  </div>
                  <br />
                  <center>
                        <Button
                              label="Search Flighs"
                              style="border-radius: 22px"
                        ></Button>
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
      <flightCard
            v-for="result in results"
            :startHour="result.startHour"
            :finishHour="result.finishHour"
            :origin="result.origin"
            :destiny="result.destiny"
            :duration="result.duration"
            :isDirect="result.isDirect"
      />
</template>

<script>
import flightCard from "./FlightCard.vue";

export default {
      components: { flightCard },
      data() {
            return {
                  option: "",
                  value: "",
                  origins: [{ "name": "MDE", "code": "MDE" }, { "name": "BGO", "code": "BGO" }],
                  destiny:[{"name":"MDE", "code": "MDE"}, {"name":"BGO", "code": "BGO"}],
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
