
<script setup>
import { ref, onMounted } from 'vue'

const estados = ref([])

async function buscarEstados() {
    try {
        const resposta = await fetch(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
        )

        const dados = await resposta.json()
        estados.value = dados

    } catch (erro) {
        console.error('Erro ao carregar os estados:', erro)
    }
}

onMounted(buscarEstados)
</script>

<template>
    <h2>ESTADOS DO BRASIL</h2>

    <section>
        <div v-for="estado in estados" :key="estado.id" class="card">
            <h3>{{ estado.nome }}</h3>
            <p>Sigla: {{ estado.sigla }}</p>
            <p>Região: {{ estado.regiao.nome }}</p>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    width: 200px;
}
</style>
