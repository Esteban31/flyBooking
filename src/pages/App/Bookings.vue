<template>
      <div class="container">
            <TopNav/>
            <!-- <OptionsCard/> -->
            <div class="empty-results" v-if="1>0">
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
import OptionsCard from '../../components/OptionsCard.vue';

export default {
      components:{TopNav, OptionsCard}
}
</script>+
