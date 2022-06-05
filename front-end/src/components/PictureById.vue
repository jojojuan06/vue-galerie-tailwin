<template>
    <div class="flex flex-col justify-center  items-center flex-wrap" v-if="mode == 'bydefault'">
        <h2>Mon image</h2>
        <div class="flex flex-wrap justify-center" style="max-width:1440px">
            <div class="container--img flex flex-wrap bg-[#d9d9d9] m-4 rounded-t-lg overflow-hidden w-full shadow-xl">
            <div class="w-full">
                <img alt="gallery" class="block object-fill object-center w-full h-60  rounded-t-lg md:min-w-[350px]"
                :src="picture.path">
                <div class="flex flex-col justify-center items-center truncate">
                    <div>
                        <h2 class="picture--subtitle font-bold opacity-70 img--name fles justify-center items-center">{{picture.name}}</h2>
                    </div>
                    <div class="flex items-center w-full justify-between mb-4 mr-4">
                        <div class="flex justify-center items-center">
                            <font-awesome-icon @click="CancelDisplayPicture" :icon="['fas', 'arrow-left']" class="hover:cursor-pointer scrollUp duration-500 border-2 hover:scale-75 bg-[#3E869D] border-black  mr-2 ml-6 w-4 p-2  rounded-full"/> 
                            <span class="font-bold mr-8">{{picture.tags}}</span> 
                        </div>
                        <div>
                            <font-awesome-icon  @click="deletePicture()" :icon="['fas', 'trash-can']" class="hover:cursor-pointer  text-white duration-500 border-2 hover:scale-90 bg-[red] border-black  ml-6 w-3 py-[0.3rem] px-[0.4rem]  rounded-full"/>
                            <font-awesome-icon @click="switchToUpdate()" :icon="['fas', 'pen']" class="hover:cursor-pointer  duration-500 border-2 hover:scale-90 bg-[#3E869D] border-black  ml-3 w-3 py-[0.3rem] px-[0.4rem]  rounded-full"/>
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        </div>
    </div>
        <PictureEdit v-if="mode == 'update'" :picture="picture" :mode="mode" @CancelEditPicture="switchToDisplayPicture"/>
</template>

<script>
import PictureEdit from '@/components/PictureEdit';
export default {
    data() {
        return {
            name: "PictureById",
            mode: 'bydefault',
        };
    },
    props: {
        picture: {
            type: Object
        }
    },
    methods: {
        CancelDisplayPicture() {
            this.$emit("CancelDisplayPicture");
        },
        switchToUpdate() {                     
            this.mode = 'update';
        },
        switchToDisplayPicture() {              
            this.mode = 'bydefault';
        },
        deletePicture() {
            if (confirm("Etes vous sur , cette action est irréversible !")) {
                this.$store.dispatch('deletePicture',{id:this.picture.id})
                .then( () =>{
                    this.CancelDisplayPicture()
                    this.$store.commit('SETSTATUS' , {status:'success',message:`Votre Picture a bien etait suprimer`}); //type et payload
                })
                .catch(error => {
                    this.$store.commit('SETSTATUS' , {status:'error',message:`Impossible de supprimer la picture ${error}`}); //type et payload
                })
            } else {
                this.switchToDisplayPicture()
            }    
        },
        refreshPicture(){
            //dispatch apliquer l'action (recuperer a nouveau les post)
            this.$store.dispatch('getAllPictures')
        },

    },
    components: { PictureEdit }
}
</script>

<style>

</style>