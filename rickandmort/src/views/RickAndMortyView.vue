<script setup >
import { ref,onMounted } from 'vue';

const personagens = ref([]) //VARIÁVEL REATIVA

// async PORQUE O VUE PRECISA DESSA INFORMAÇÃO PORQUE ESSES DADOS DEMORAM
async function buscarPersonagens(){
    const resposta = await fetch('https://rickandmortyapi.com/api/character');
    const dados = await resposta.json();

    personagens.value = dados.results;
}
onMounted(buscarPersonagens); // É O MÉTODO QEU VAI CHAMAR A FUNÇÃO QUANDO A PÁGINA
// ESTIVER MONTADA, ISTO É, PRONTA 
</script>

<template>
    <h2>RICK AND MORTY</h2>
    <CardPadrao v-for="item in personagens" :key="item.id" :name="item.name"/>
    <div v-for="item in personagens" :key="item.id">
        {{ item.name}} - {{ item.species }}
        <img :src="item.image" alt="">
    </div>
</template>

<style scoped>
div.card {
width: 300px;
border: 1px solid #e0e0e0;
border-radius: 8px;
background-color: #ffffff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
margin: 1rem;
}
div img {
width: 100%;
height: 180px;
}
div.card div{
padding: 12px 16px;
color: #333333;
}
div.card h3 {
margin: 0 0 4px 0;
font-size: 1.1rem;
}
div.card p {
margin: 0 0 8px 0;
font-size: 0.9rem;
color: #444444;
}
</style>