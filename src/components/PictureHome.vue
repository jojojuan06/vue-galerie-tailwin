<template>
  <div v-for="picture of this.pictures" :key="picture.id" class="flex justify-center  items-center flex-wrap">
    <a @click="switchDisplayPicture(picture)" v-if="mode == 'bydefault'">
      <div class="flex flex-wrap justify-center" style="max-width:1440px">
        <div class="container--img flex flex-wrap bg-[#d9d9d9] m-4 rounded-t-lg overflow-hidden w-full shadow-xl">
        <div class="w-full">
          <img alt="gallery" class="block object-fill object-center w-full h-60  rounded-t-lg md:min-w-[350px]"
            :src="picture.path">
          <div class="flex flex-col justify-center items-center truncate">
            <h2 class="picture--subtitle font-bold opacity-70 img--name fles justify-center items-center">{{picture.name}}</h2>
            <span class="font-bold">{{picture.tags}}</span> 
          </div> 
        </div>
      </div>
    </div>
  </a>  
  </div>
  <PictureById @CancelDisplayPicture="switchToAllpicture()" :picture="$store.state.pictureInfos" v-if="mode == 'displayOnePicture'"/>
</template>

<script>
// mélange les getters en calcul avec l'opérateur de propagation d'objet
import { mapState } from 'vuex'
import PictureById from './PictureById.vue';
export default {
  components: { PictureById },
  data() {
    return {
      mode:'bydefault',
    }
  },
  name: 'PictureHome',
  mounted() {
        //permet de recuperer les pictures depuis ma methode
        this.displayPictures();
        // setTimeout(() => {
        //   document.getElementsByClassName('picture--subtitle')[1].innerHTML = "leonardo";
        //   document.getElementsByClassName('picture--subtitle')[2].innerHTML = "chocolat";
        // }, 100);   
  },
  methods: {                                       
    getImg(picture){  
        this.$store.dispatch('getOnePicture', picture.id)
    },
    switchDisplayPicture(picture) {                     
            this.mode = 'displayOnePicture';
            this.getImg(picture)
        },
    switchToAllpicture() {              
        this.mode = 'bydefault';
        this.displayPictures();
    },
    displayPictures() {
      this.$store.dispatch('getAllPictures');
    }
  },
  computed: {
        //importation de l'objet depuis state (généré des function calculer pour nous)
        ...mapState(['status','pictures']) 
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  cursor: pointer;
}
.container--img {
  min-width: 300px;
  max-width: 300px;
}
@media screen and (min-width:768px) {
  .container--img {
    min-width: 400px;
    max-width: 400px;
  }
}
</style>
