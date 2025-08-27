<script setup>
import './LoginAndResgister.scss';
import media_screen from './components/Media_screen.vue';

import { ref } from 'vue';
import { useAuthStore } from "../../stores/authStore";

const username = ref('');
const password = ref('');
const authStore = useAuthStore();

const login = () => {
    authStore.login({
        username: username.value,
        password: password.value,
    });
}
</script>

<template>
    <div class="container bg-dark">
        <div class="main_text">Login</div>
        <form @submit.prevent="login">
            <media_screen>
                <div class="input_container">
                    <div class="input_text">UserName:</div><input type="text" autocomplete="username"
                        v-model="username">
                </div>
                <div class="input_container">
                    <div class="input_text">Password:</div><input type="password" autocomplete="password"
                        v-model="password">
                </div>
            </media_screen>
            <div class="d-flex justify-content-center"><button class="requst-button" type="submit">Login</button></div>
        </form>
    </div>
</template>
