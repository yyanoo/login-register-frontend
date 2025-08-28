<script setup>
import IsLogin from '../../IsLogin.vue';
</script>

<template>
    <div class="slider-inbox">
        <div class="box1">
            <div class="box2">
                <router-link to="/">HomePage</router-link>
                <router-link to="/logfile" style="margin-top:20px;">Daily_Details</router-link>
                <router-link to="/logfile" style="margin-top:20px;">Logfile</router-link>
                <router-link to="/profile" style="margin-top:20px;">Profile</router-link>
            </div>
            <IsLogin />
        </div>
    </div>
</template>

<style scoped>
.box1 {
    padding: 20px;
    height: 90vh;
    display: grid;
    justify-content: center;
    align-content: space-between;
    justify-items: center;
}

.box2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>