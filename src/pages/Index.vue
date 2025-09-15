<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { usePlayerStore } from '../stores/player';

const authStore = useAuthStore();
const playerStore = usePlayerStore()

onMounted(() => {
    authStore.init();
    playerStore.player();
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