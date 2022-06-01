<template>
  <header class="pb-4  md:pb-0">
  <nav class="text-white flex justify-center items-center bg-[#3e869d] font-bold h-12 mb-10 midScreen:mb-0 border-b-4 border-[#ED69BD]">
    <a href="/"   class="duration-500 decoration-2 underline-offset-4 underline decoration-PinkTransparent hover:decoration-[#ED69BD]">Pictures</a>
  </nav>
</header>
<main class="flex flex-col justify-center items-center h-screen">
      <router-view/>
      <SuccessAlert @statusMessageReset="statusMessageReset" v-if="status == 'success'"/>
      <DangerAlert @statusMessageReset="statusMessageReset" v-if="status == 'error'" />
</main>
  <footer class="pt-6  text-white bg-[#3e869d] mt-8 border-t-4 border-[#ED69BD]"  style="max-height: 150px;">
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
    },
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
  position: relative;
  background-image: linear-gradient(176deg, #3e869d 60%, #F4F4F4 calc(60% + 2px));
}
</style>
