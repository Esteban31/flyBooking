<template>
      <div class="card">
            <MegaMenu id="TopNav">
                  <template #start>
                        <img
                              alt="logo"
                              src="../assets/logo.png"
                              height="24"
                              class="mr-2"
                        />
                  </template>
                  <template #end>
                        <Button
                              v-if="userSession == undefined"
                              label="Start"
                              icon="pi pi-user"
                              iconPos="right"
                              style="border-radius: 22px"
                              v-on:click="$router.push('/signin')"
                        />
                        <Button
                              v-if="
                                    userSession &&
                                    $router.currentRoute.value.fullPath ===
                                          '/app'
                              "
                              label="Bookings"
                              style="border-radius: 22px"
                              v-on:click="$router.push('/booking')"
                        />
                        <Button
                              v-if="
                                    userSession &&
                                    $router.currentRoute.value.fullPath ===
                                          '/booking'
                              "
                              label="Search Flights"
                              style="border-radius: 22px"
                              v-on:click="$router.push('/app')"
                        />
                        <Button
                              v-if="userSession"
                              label="Logout"
                              style="border-radius: 22px; margin-left: 4px"
                              v-on:click="logout"
                        />
                  </template>
            </MegaMenu>
      </div>
</template>

<script>
export default {
      data() {
            return {
                  userSession: localStorage.getItem("userSession"),
            };
      },
      methods: {
            logout() {
                  localStorage.removeItem("userSession");
                  this.$router.push('/')
            },
      },
};
</script>

<style scoped>
#TopNav {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
            0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      margin: 20px;
      border-radius: 22px;
      background-color: white;
}
</style>
