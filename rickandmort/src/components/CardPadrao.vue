<script setup>
import {type} from 'os';

defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="card">
        <h3>{{ name}}</h3>

    </div>
</template>