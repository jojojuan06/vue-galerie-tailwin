<template>
  <header>
  <nav class="text-white flex justify-center items-center bg-[#3e869d] font-bold h-10">
    <router-link to="/">Pictures</router-link>
  </nav>
</header>
<main class="flex flex-col justify-center items-center md:h-screen">
      <router-view/>
        <SuccessAlert @statusMessageReset="statusMessageReset" v-if="status == 'success'"/>
        <DangerAlert @statusMessageReset="statusMessageReset" v-if="status == 'error'" />
</main>
  <footer class="pt-6  text-white bg-[#3e869d]"  style="max-height: 150px;">
    <FooterApp />
  </footer>
</template>

<script>
import FooterApp from './components/FooterApp.vue'
import { mapState } from 'vuex'
import SuccessAlert from './components/SuccessAlert.vue'
import DangerAlert from './components/DangerAlert.vue'

export default {
  components: {
    FooterApp,
    SuccessAlert,
    DangerAlert
},
  methods: {
    statusMessageReset(){
    //commit qui modifie les state
    this.$store.commit('RESET_STATUS')
    this.$store.commit('RESET_MESSAGE')
    }
  },
  computed: {
        //importation de l'objet depuis state (généré des function calculer pour nous)
        ...mapState(['status']) 
  },
}
</script>



<style>
@import url('@/assets/css/alert.css');
body {
  background-color: #d9d9d9;
}
</style>
