<script setup>
import Sidenav from './component/Sidenav.vue';
import Authmodal from './component/Authmodal.vue';
import Forgetmodal from './component/Forgetmodal.vue';
import Logoutmodal from './component/Logoutmodal.vue';

import { onMounted } from 'vue';
import { useAuthStore } from '../../stores/authStore';
import { usePlayerStore } from '../../stores/player';

const playerStore = usePlayerStore()
const authStore = useAuthStore()

onMounted(() => {
    playerStore.player()
})
</script>

<template>
    <nav class="navbar fixed-top text-bg-dark">
        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <Sidenav />
                <a class="navbar-brand text-bg-dark" style="margin-left: 20px;">Api_test</a>
            </div>
            <div class="d-flex align-items-center" v-if="authStore.isLoggedIn">
                <div class="" style="margin-right: 20px;">ID:{{ playerStore.data.playerid }}</div>
                <div class="" style="margin-right: 20px;">Gold:{{ playerStore.data.gold }}</div>
            </div>
        </div>
    </nav>
    <Authmodal />
    <Forgetmodal />
    <Logoutmodal />
</template>

<style scoped>
.navbar {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}
</style>