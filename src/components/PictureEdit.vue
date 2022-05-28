<!-- composant permettent d'encapsuler un ensemble d'éléments HTML, de façon réutilisable et facilement maintenable. -->
<template>
    <div class="bg-[#d9d9d9] p-4 rounded-t-lg w-[300px] border-2 border-black mt-4">
        <h2 class="bg-[#3e869d] rounded-t-lg text-center text-white font-bold">modifier l'image</h2>
            <form>
                <label class="block mb-6">
                        <span class="text-black font-bold">Votre nom</span>
                        <input v-model="form.name" type="text" name="name" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-white  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Joe Bloggs"/>
                </label>
                <label class="block mb-6">
                        <span class="text-black font-bold">Votre tags</span>
                        <input  v-model="form.tags" type="text" name="tags" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-white shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Joe Bloggs"/>
                </label>
                <label class="block mb-6">
                        <span class="text-black font-bold">Votre tags</span>
                        <input  v-model="form.path" type="text" name="tags" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-wite  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Joe Bloggs"/>
                </label>
                <!-- au clic appel a la methode createNewAccount--> 
                <div class="w-full flex justify-between">
                    <bouton   @click="updatePicture"  class="cursor-pointer hover:bg-[#3e869d] bg-transparent text-black font-semibold hover:text-white py-2 px-2 border-2 border-[#3e869d]  hover:border-transparent rounded">
                        modifier
                    </bouton>
                    <bouton   @click="CancelEditPicture"  class=" ml-4 cursor-pointer hover:bg-[#3e869d] bg-transparent text-black font-semibold hover:text-white py-2 px-2 border-2 border-[#3e869d]  hover:border-transparent rounded">
                    Annuler
                    </bouton>  
                </div>
               
            </form>
    </div>
</template>
<script>

// IMPORT (mélange les getters en calcul avec l'opérateur de propagation d'objet)
import { mapState } from 'vuex'

export default {
    name:'PictureEdit',
    // Props  est un attribut que vous pouvez définir au niveau du composant qui sera transmis directement au template
    props: { 
        picture: {
            type:Object
        },
        mode:String
    },
    data: function() {
        return { 
                form : {
                    //afficher les ancienne valeur dans le post a modifier
                    name: this.picture.name,
                    path: this.picture.path,
                    tags:this.picture.tags 
                },
            }
        },    
    computed: {
            //importation de l'objet depuis state
            ...mapState(['status']) 
        },
    methods: {                                       
        updatePicture(){ 
            let This = this; 
            let updatedPicture = 
                {
                name:this.form.name,
                path:this.form.path,
                tags:this.form.tags,
            } 
            this.$store.dispatch('updatePicture',
            {
                //postid et egale au props picture.id , qui est un objet 
                id:this.picture.id , 
                //correspond a l'argument dans le store
                updatedPicture:updatedPicture
            }).then(function (){
                This.CancelEditPicture()
                //this.$store.commit('SETSTATUS' , {status:'success',message:`Votre Picture a etait mis a jour`});
            }),
            function (error) {
                console.log(error);
            }
        },
        displayPicture() {
            this.$store.dispatch('getAllPictures');
        },
        //annuler l'action , emettre un evenemznt avec emit
        CancelEditPicture() { 
            //emmettre au parent             
            this.$emit('CancelEditPicture');
        },
    },
}
</script>

<style scoped>
</style>




