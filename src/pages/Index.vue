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
        <div class="main_text">welcome {{ playerStore.data.playerid }}</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
        <div class="main_text">welcome</div>
    </div>
</template>

<style scoped></style>