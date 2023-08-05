<template>
      <div>
            <Card id="flightCard">
                  <template #content >
                        <div class="flex flex-column md:flex-row md:justify-content-between align-items-center row-gap-3">
                              <div class="flex flex-1 gap-10">
                                    <img src="../assets/american.png" alt="american airlines">
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <small>{{ departure }}</small>
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <h2>{{ startHour }}</h2>
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <h2>{{ origin }}</h2>
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <small>{{ duration }}</small>
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <small>{{ arrive }}</small>
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <h2>{{ finishHour }}</h2>
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <h2>{{ destiny }}</h2>
                              </div>
                              <div class="flex flex-1 gap-10" v-if="calculatedPrice>0">
                                    <h2>COP ${{ calculatedPrice }}</h2>
                              </div>
                              <div class="flex flex-1 gap-10">
                                    <small>{{ isDirect ? "Direct":"With Scales" }}</small>
                              </div>
                        </div>
                  </template>
            </Card>
      </div>
</template>

<script>
export default {
      props:['startHour','finishHour', 'origin', 'destiny', 'duration', 'isDirect', 'calculatedPrice', 'departure', 'arrive'],
      data() {
            return {
                  
            }
      },
}
</script>

<style scoped>
      #flightCard {
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            margin: 20px;
            border-radius: 22px;
      }
</style>