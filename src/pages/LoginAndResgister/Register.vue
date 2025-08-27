<script setup>
import './LoginAndResgister.scss'
import media_screen from './components/Media_screen.vue';

import { ref } from 'vue';
import { useAuthStore } from "../../stores/authStore";

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const authStore = useAuthStore();

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const register = () => {
    if (!isValidEmail(email.value)) {
        alert("Please enter a valid Email format!");
        return;
    }
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }
    authStore.register({
        username: username.value,
        email: email.value,
        password: password.value,
    });
}
</script>

<template>
    <div class="container bg-dark">
        <div class="main_text">Register</div>
        <form @submit.prevent="register">
            <media_screen>
                <div class="">
                    <div class="input_container">
                        <div class="input_text">UserName:</div><input type="text" autocomplete="username"
                            v-model="username">
                    </div>
                    <div class="input_container">
                        <div class="input_text">Email:</div><input type="email" autocomplete="email" v-model="email">
                    </div>
                </div>
                <div class="">
                    <div class="input_container">
                        <div class="input_text">Password:</div><input type="password" autocomplete="new-password"
                            v-model="password">
                    </div>
                    <div class="input_container">
                        <div class="input_text">Confirm Password:</div><input type="password"
                            autocomplete="new-password" v-model="confirmPassword">
                    </div>
                </div>
            </media_screen>
            <div class="d-flex justify-content-center"><button class="requst-button" type="submit">Register</button>
            </div>
        </form>
    </div>
</template>