<template>
  <header>
  <nav class="text-white flex justify-center items-center bg-[#3e869d] font-bold h-10">
    <router-link to="/">Pictures</router-link>
  </nav>
</header>
<main class="flex flex-col justify-center items-center md:h-screen">
      <router-view/>
      <!--<div  class="alert-message--container --alert" v-if="status == 'error' || status == 'success'" >
         importer status depuis les states directement mapstate evite this.$store.state.status 
          <flash-message v-if="status =='success'" class="myCustomClass"   type="success">
            {{ this.$store.state.message }}
            function au clic on remet a zero et on enleve l'alert  reset du status et message 
            <font-awesome-icon @click="statusMessageReset" :icon="['fas', 'xmark']"/> 
          </flash-message>
          <flash-message v-if="status =='error'" type="error" class="myCustomClass">
            {{this.$store.state.message}}
            <font-awesome-icon @click="statusMessageReset" :icon="['fas', 'xmark']"/>
          </flash-message>
      </div> -->
</main>
  <footer class="pt-6  text-white bg-[#3e869d]"  style="max-height: 150px;">
    <FooterApp />
  </footer>
</template>

<script>
import FooterApp from './components/FooterApp.vue'


export default {
  components: {
    FooterApp
  },
  methods: {
    statusMessageReset(){
    //commit qui modifie les state
    this.$store.commit('RESET_STATUS')
    this.$store.commit('RESET_MESSAGE')
    }
  },
}
</script>



<style>
@import url('@/assets/css/alert.css');
body {
  background-color: #d9d9d9;
}
</style>
