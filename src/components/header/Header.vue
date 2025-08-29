<script setup>
import Sidenav from './component/Sidenav.vue';
import Sliderbar from './component/Siderbar.vue';
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
    <div class="slider-box fixed-top" style="top: 55px;">
        <Sliderbar />
    </div>
    <Authmodal />
    <Forgetmodal />
    <Logoutmodal />
</template>

<style scoped>
@media screen and (max-width: 992px) {
    .slider-box {
        display: none;
    }
}
</style>