<script setup>
import { onMounted } from 'vue';
import { usePlayerStore } from '../stores/player';

const playerStore = usePlayerStore()

onMounted(() => {
    playerStore.player()
})
</script>

<template>
    <div class="container bg-dark">
        <div class="main_text">ID:{{ playerStore.data.playerid }}</div>
        <div class="main_text">Gold:{{ playerStore.data.gold }}</div>
    </div>
</template>

<style scoped></style>