<script setup>
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();

const logout = () => {
    authStore.logout();
}
</script>

<template>
    <div class="" v-if="authStore.isLoggedIn === true">
        <router-link to="/" @click="logout">LoginOut</router-link>
    </div>
    <div class="" v-if="authStore.isLoggedIn === false">
        <router-link to="/login">Login</router-link> / <router-link to="/register">Register</router-link>
    </div>
</template>