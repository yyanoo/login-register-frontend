<script setup>
import Sidebar from './Sidebar.vue';
import IsLogin from '../IsLogin.vue';

import { useAuthStore } from "../../stores/authStore";

const authStore = useAuthStore();

</script>

<template>
    <nav class="navbar fixed-top text-bg-dark">
        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <Sidebar />
                <a class="navbar-brand text-bg-dark" style="margin-left: 20px;">Api_test</a>
            </div>
            <div class="">{{ authStore.data.username }}</div>
        </div>
    </nav>
    <div class="slider-box text-bg-dark">
        <div class="box">
            <div class="d-flex flex-column align-items-center" style="height: 750px; display: grid;">
                <router-link to="/">HomePage</router-link>
                <router-link to="/" style="margin-top:10px;">Daily_Details</router-link>
                <router-link to="/" style="margin-top:10px;">Logfile</router-link>
                <router-link to="/" style="margin-top:10px;">Profile</router-link>
            </div>
            <IsLogin />
        </div>
    </div>
</template>

<style scoped>
.slider-box {
    position: fixed;
    height: 100vh;
    width: 12%;
}

.box {
    height: 95vh;
    padding: 30px 20px;

    display: grid;
    justify-items: center;
}

@media screen and (max-width: 1300px) {
    .slider-box {
        display: none;
    }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 576px) {}
</style>