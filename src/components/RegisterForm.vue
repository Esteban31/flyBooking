<template>
      <Card id="leftCard">
            <template #content>
                  <h2 style="padding: 20px">Sign Up</h2>
                  <form style="padding: 20px" v-on:submit.prevent="signUp">
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
                        <label>Repeat Password</label><br />
                        <InputText
                              type="password"
                              placeholder="Repeat password"
                              aria-describedby="username-help"
                              style="border-radius: 22px"
                              v-model="repeatPassword"
                        />
                        <br><br>
                        <Button
                              label="Sign Up"
                              style="border-radius: 22px"
                              type="submit"
                        ></Button
                        ><br /><br />
                        <router-link
                              to="/signin"
                              style="text-decoration: none; color: gray"
                              >Do you have an accont?, Sign In</router-link
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
                  password: "",
                  repeatPassword: "",
            }
      },
      methods: {
            async signUp() {
                  const data = {
                        email: this.email,
                        password: this.password
                  }

                  if (this.password === this.repeatPassword) {
                        try {
                              const request = await axios.post(`${import.meta.env.VITE_BACK_URI}/auth/signUp`, data)

                              Swal.fire({
                                    title: 'Great!',
                                    text: 'Your account has been created, please Login',
                                    icon: 'success',
                                    confirmButtonText: 'Confirm'
                              })

                              this.$router.push("/signin")
                        } catch (error) {
                              Swal.fire({
                                    title: 'Upps!',
                                    text: 'Error when we create your account',
                                    icon: 'error',
                                    confirmButtonText: 'Try again'
                              })
                        }
                  } else {
                        Swal.fire({
                                    title: 'Upps!',
                                    text: 'The password does not match',
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
