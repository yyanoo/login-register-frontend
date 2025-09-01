<script setup>
import Sliderbar from './header/Siderbar.vue';


</script>

<template>
    <div class="slider-box fixed-top" style="top: 55px;">
        <Sliderbar />
    </div>
    <div class="pages_container">
        <div class="container text-bg-dark">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.pages_container {
    height: 100%;
    width: auto;
    margin-left: 10vh;
    margin-right: auto;
    margin-top: 50px;
    padding: 50px 50px;

    display: flex;
    justify-content: center;
}

@media screen and (max-width: 992px) {
    .pages_container {
        width: 100%;
        margin: 50px 0 0 0;
        padding: 30px 20px;
    }
}
</style>
