<template>
  <div class="flex flex-col" v-if="mode=='bydefault'">
    <div class="flex flex-row justify-center md:justify-around flex-wrap">
      <div class="flex  items-center">
      <h1 class="font-bold">{{ msg }}</h1>
      </div>
      <div class="flex justify-center ml-4 pt-4 md:pt-0">
          <button type="button" @click="switchToCreate()" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ajouter une image</button>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center">
      <PictureHome/>
    </div>
  </div>
      <PictureAdd :mode="mode" @CancelAddPicture="switchToCancelAdd()"  v-if="mode == 'create'"/> 
</template>

<script>
import PictureHome from '@/components/PictureHome.vue';
import PictureAdd from '@/components/PictureAdd.vue';

export default {
  name: 'HomeView',
  components: {
    PictureHome,
    PictureAdd
  },
  data() {
    return {
      mode:'bydefault',
      msg:'ma galleries d\'images',
    }
  },
  methods: {
    switchToCancelAdd() {
      this.mode = 'bydefault';
    },
    switchToCreate() {
      this.mode = 'create';
    }
  },
}
</script>