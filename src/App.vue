<template>
<header>
  <nav class="text-white flex justify-center items-center bg-[#3e869d] font-bold h-10">
    <router-link to="/">Pictures</router-link>
  </nav>
  </header>
  <main class="flex flex-col justify-center items-center h-screen">
      <router-view/>
  </main>
  <footer class="pt-6 mt-12 text-white bg-[#3e869d]"  style="max-height: 150px;">
    <FooterApp />
  </footer>
</template>

<script>
import FooterApp from './components/FooterApp.vue'

export default {
  components: {
    FooterApp
},
}
</script>



<style>
</style>
