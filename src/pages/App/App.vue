<template>
      <div class="container">
            <TopNav/>
            <OptionsCard/>
      </div>
</template>

<script>
import TopNav from '../../components/TopNav.vue';
import OptionsCard from '../../components/OptionsCard.vue';

export default {
      components: { TopNav, OptionsCard },
      methods: {
            checkSession() {
                  if (localStorage.getItem("userSession")==undefined) {
                        this.$router.push("/signin")
                  }
            }
      },
      mounted() {
            this.checkSession()
      },
}
</script>