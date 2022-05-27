<template>
            <div class="justify-center items-center">
                <!-- boucle sur chaque link (ajouter dans le futur et je les affiches   -->  
                <div  class="flex justify-center items-center">
                    <a  class="hover:text-[#ED69BD] .no-underline" href="mailto:jonh_06@live.fr">
                    <div class="flex">
                        <span class="mr-2 text-center mdi mdi-mail"></span>
                        <h2 class="text-base font-bold">Nous Contacter</h2>  
                    </div>
                    </a>
                </div>
                <div class="pb-3 text-center">
                    <strong>{{ new Date().getFullYear() }} — Gallerie</strong>
                </div>
            </div>
</template>

<script>
export default {
name:'FooterApp',

}
</script>

<style scoped>
</style>