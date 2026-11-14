<script setup >
import { ref,onMounted } from 'vue';
import CardPadrao from '@/components/CardPadrao.vue';

const personagens = ref([]) //VARIÁVEL REATIVA

// async PORQUE O VUE PRECISA DESSA INFORMAÇÃO PORQUE ESSES DADOS DEMORAM
async function buscarPersonagens(){
   try{
        const resposta = await fetch('https://rickandmortyapi.com/api/character');
        const dados = await resposta.json();
        personagens.value = dados.results;
   }catch(erro){
        console.error('ERRO AO CARREGAR A API.',erro);
   }
}
onMounted(buscarPersonagens); // É O MÉTODO QEU VAI CHAMAR A FUNÇÃO QUANDO A PÁGINA
// ESTIVER MONTADA, ISTO É, PRONTA 
</script>

<template>
    <h2>RICK AND MORTY</h2>
    <section>
        <CardPadrao v-for="item in personagens" :key="item.id" 
        :titulo="item.name"
        :subtitulo="item.species"
        :imagem="item.image"
        :url="item.origin.url"
    />
    </section>
</template>
<style scoped>
section{
    display: flex;
    flex-wrap: wrap
}
</style>

