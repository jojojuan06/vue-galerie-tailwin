<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" class="w-8 flex justify-center items-center">
  </div>
  <div class="flex justify-center items-center">
    <h1>{{ msg }}</h1>
  </div>
  <div class="flex flex-wrap justify-center items-center">
    <PictureHome/>
  </div>
  </template>

<script>
import PictureHome from '@/components/PictureHome.vue'

export default {
  name: 'HomeView',
  components: {
    PictureHome
  },
  data() {
    return {
      msg:"ma galleries d'images",
    }
  }
}
</script>
