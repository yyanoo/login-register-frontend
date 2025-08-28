<script setup>
import Sidenav from './Sidenav.vue';
import Sliderbar from './component/Siderbar.vue';

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
    <div class="slider-box text-bg-dark h5">
        <Sliderbar />
    </div>
</template>

<style scoped>
.slider-box {
    position: fixed;
    height: 100vh;
    width: 15%;
}

@media screen and (max-width: 992px) {
    .slider-box {
        display: none;
    }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}
</style>