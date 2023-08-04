<template>
      <Card id="leftCard">
            <template #content>
                  <h2 style="padding: 20px">Sign In</h2>
                  <form style="padding: 20px" v-on:submit.prevent="login">
                        <label>Email</label><br />
                        <InputText
                              type="email"
                              placeholder="Email"
                              aria-describedby="username-help"
                              style="border-radius: 22px"
                              v-model="email"
                        />
                        <br /><br />
                        <label>Password</label><br />
                        <InputText
                              type="password"
                              placeholder="password"
                              aria-describedby="username-help"
                              style="border-radius: 22px"
                              v-model="password"
                        />
                        <br /><br />
                        <a href="#" style="text-decoration: none; color: gray"
                              >Forgot password?</a
                        ><br /><br />
                        <Button
                              label="Sign In"
                              style="border-radius: 22px"
                              type="submit"
                        ></Button
                        ><br /><br />
                        <router-link
                              to="/signup"
                              style="text-decoration: none; color: gray"
                              >Do you have an accont?, create one</router-link
                        >
                  </form>
            </template>
      </Card>
</template>

<script>
import axios from "axios"
import Swal from 'sweetalert2'

export default {
      data() {
            return {
                  email: "",
                  password:""
            }
      },
      methods: {
            async login() {
                  const data = {
                        email: this.email,
                        password: this.password
                  }

                  const request = await axios.post(`${import.meta.env.VITE_BACK_URI}/auth/login`, data)
                  if (request.data!="") {
                        localStorage.setItem("userSession", request.data)
                        this.$router.push("/app")
                  } else {
                        Swal.fire({
                              title: 'Upps!',
                              text: 'Incorrect credentials',
                              icon: 'error',
                              confirmButtonText: 'Try again'
                        })
                  }
            }
      },
}
</script>

<style scoped>
#leftCard {
      border-radius: 22px;
      height: 500px;
      max-height: 500px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
            0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
