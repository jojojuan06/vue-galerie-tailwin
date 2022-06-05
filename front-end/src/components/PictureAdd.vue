<!-- composant permettent d'encapsuler un ensemble d'éléments HTML, de façon réutilisable et facilement maintenable. -->
<template>
    <div class="bg-[#333333] p-1.5 rounded-t-lg w-[300px]  mt-4">
        <h2 class="bg-[#3e869d] rounded-t-lg text-center text-white font-bold border-b-2 border-[#ED69BD]">Ajouter une l'image</h2>
            <form>
                <label class="block mb-6">
                        <span class="text-white font-bold">Votre nom</span>
                        <input v-model="form.name" type="text" name="name" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-white  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Votre nom" required="required"/>
                </label>
                <label class="block mb-6">
                        <span class="text-white font-bold">Votre tags</span>
                        <input  v-model="form.tags" type="text" name="tags" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-white shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Votre tags" required="required"/>
                </label>
                <label class="block mb-6">
                        <span class="text-white font-bold">Votre tags</span>
                        <input  v-model="form.path" type="text" name="path" class="py-3 text-center placeholder-[black] block w-full mt-1 bg-wite  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Votre path" required="required"/>
                </label>
                <!-- au clic appel a la methode createNewAccount--> 
                <div class="w-full flex justify-between">
                    <bouton   @click="CreatePicture"  class="cursor-pointer hover:bg-[#3e869d] bg-transparent text-white font-semibold  py-2 px-2 border-2 border-[#3e869d]  hover:border-transparent rounded">
                        Valider
                    </bouton>
                    <bouton   @click="CancelAddPicture"  class=" ml-4 cursor-pointer hover:bg-[#3e869d] bg-transparent text-white font-semibold  py-2 px-2 border-2 border-[#3e869d]  hover:border-transparent rounded">
                    Annuler
                    </bouton>  
                </div>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
// IMPORT (mélange les getters en calcul avec l'opérateur de propagation d'objet)
import { mapState } from 'vuex'

export default {
    name:'PictureAdd',
    // Props  est un attribut que vous pouvez définir au niveau du composant qui sera transmis directement au template
    props: { 
        mode:String,
    },
    data: function() {
        return { 
                form : {
                    name: "",
                    path: "",
                    tags:"" 
                },
            }
        },       
    computed: {
            //importation de l'objet depuis state
            ...mapState(['status']) ,
        },
    methods: {  
        ...mapActions({add: 'createPicture'}),                                   
        CreatePicture(){ 
            let This = this; 
             let AddPicture = 
                {
                name:this.form.name,
                path:this.form.path,
                tags:this.form.tags,
                } 
            this.add({ picture:AddPicture }).then(() => { 
            This.CancelAddPicture()
            }).catch(error => (console.log(error)));
        },
        //annuler l'action , emettre un evenemznt avec emit
        CancelAddPicture() { 
            //emmettre au parent             
            this.$emit('CancelAddPicture');
        },
    },
}
</script>





