<template>
      <div class="container">
            <TopNav/>
            <!-- <OptionsCard/> -->
            <a href="#" v-for="result in results" style="text-decoration: none;" v-on:click="deleteBook(result.flight_id)">
                  <flightCard
                        :startHour="result.startHour"
                        :finishHour="result.finishHour"
                        :origin="result.origin"
                        :destiny="result.destiny"
                        :duration="result.duration"
                        :isDirect="result.isDirect"
                        :calculatedPrice="result.calculatedPrice"
                        :departure="result.departure"
                        :arrive="result.arrive"
                  />    
            </a>
            <div class="empty-results" v-if="results.length<1">
                  <center>
                        <img src="../../assets/empty-results.png" alt="" />
                        <br />
                        <h6>
                              Bookings pandora Box, it's empty
                        </h6>
                  </center>
            </div>
      </div>
</template>

<script>
import TopNav from '../../components/TopNav.vue';
import FlightCard from '../../components/FlightCard.vue';
import axios from "axios";

export default {
      components: { TopNav, FlightCard },
      data() {
            return {
                  results:[]
            }
      },
      methods: {
            async getBookings() {
                  const userId = localStorage.getItem("userSession")
                  const request = await axios.get(`${import.meta.env.VITE_BACK_URI}/booking/bookings/${userId}`)

                  request.data.forEach(element => {
                        this.results.push({
                              startHour: "11:00 AM",
                              finishHour: "13:45 PM",
                              origin: element.origin,
                              destiny: element.destiny,
                              duration: "50 min",
                              isDirect: element.is_direct,
                              calculatedPrice: 0,
                              departure: element.departure,
                              arrive: element.arrive,
                              id: element.id,
                        });
                  });
            },
            deleteBook(id) {
                  // alert(id)
            }
      },
      mounted() {
            this.getBookings()
      },
}
</script>+
