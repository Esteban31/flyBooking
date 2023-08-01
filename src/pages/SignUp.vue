<template>
      <div class="container" style="margin: 40px">
            <div class="grid">
                  <div class="col">
                        <router-link to="/">
                              <img
                              src="../assets/logo.png"
                              alt=""
                              style="width: 20%"
                        />
                        </router-link>
                        <br /><br />
                        <RegisterForm/>
                  </div>
                  <div class="col">
                        <loginBgCard/>
                  </div>
            </div>
      </div>
</template>

<script>
import loginBgCard from '../components/loginBgCard.vue';
import RegisterForm from '../components/RegisterForm.vue';
export default {
      components:{loginBgCard, RegisterForm}
}
</script>
