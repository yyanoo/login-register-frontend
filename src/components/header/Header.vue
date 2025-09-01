<script setup>
import Sidenav from './component/Sidenav.vue';
import Authmodal from './component/Authmodal.vue';
import Forgetmodal from './component/Forgetmodal.vue';
import Logoutmodal from './component/Logoutmodal.vue';



import { useAuthStore } from "../../stores/authStore";

const authStore = useAuthStore();

</script>

<template>
    <nav class="navbar fixed-top text-bg-dark">
        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <Sidenav />
                <a class="navbar-brand text-bg-dark" style="margin-left: 20px;">Api_test</a>
            </div>
            <div style="margin-right: 20px;">User ID: {{ authStore.data.username }}</div>
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