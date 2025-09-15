<script setup>
import { ref } from "vue"
import { useAuthStore } from "../../../stores/authStore";

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const authStore = useAuthStore();

const login = async () => {
    await authStore.login({
        username: username.value,
        password: password.value,
    });
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const register = async () => {
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
    })
        .then(() => {
            // 註冊成功
            switchMode("login");
            alert("Successful Register");
        })
        .catch((error) => {
            // 註冊失敗
            console.error(error);
            alert("Register Failed: " + error.message);
        });
}

const mode = ref("login")
const modeMap = {
    login: "Login",
    register: "Register",
}

const switchMode = async (target) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mode.value = target
            resolve()
        }, 0)
    })
}
</script>

<template>
    <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-bg-dark">

                <!-- Header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="authModalLabel">
                        {{ modeMap[mode] }}
                    </h1>
                </div>

                <!-- Body -->
                <div v-if="mode === 'login'">
                    <form @submit.prevent="login">
                        <div class="modal-body">
                            <input type="text" class="input" autocomplete="username" v-model="username"
                                placeholder="Username">
                            <input type="password" class="input" autocomplete="password" v-model="password"
                                placeholder="Password">
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                                style="margin-top: 5px;">
                                {{ modeMap[mode] }}
                            </button>
                        </div>
                    </form>
                </div>

                <div v-else-if="mode === 'register'">
                    <form @submit.prevent="register">
                        <div class="modal-body">
                            <input type="text" class="input" autocomplete="username" v-model="username"
                                placeholder="UserName">
                            <input type="email" class="input" autocomplete="email" v-model="email" placeholder="Email">
                            <input type="password" class="input" autocomplete="new-password" v-model="password"
                                placeholder="Password">
                            <input type="password" class="input" autocomplete="new-password" v-model="confirmPassword"
                                placeholder="ConfirmPassword">
                            <button type="submit" class="btn btn-primary" style="margin-top: 5px;">
                                {{ modeMap[mode] }}
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Footer -->
                <div class="modal-footer" v-if="mode !== 'login'">
                    <button type="button" class="btn btn-secondary" @click="switchMode('login')">
                        Back to Login
                    </button>
                </div>

                <div class="modal-footer" v-if="mode !== 'register'">
                    <!--
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                        data-bs-target="#forgetBackdrop">
                        Forget Password
                    </button>
                -->
                    <button type="button" class="btn btn-success" @click="switchMode('register')">
                        Register
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

.modal {
    transform: translateY(200px);
}

.modal-header {
    justify-content: center;
}

.modal-body {
    display: grid;
}

.input {
    margin: 10px 0;
    padding: 5px 5px;
    background-color: rgba(255, 255, 255, 0);
    color: var(--main-color);
    border-color: rgb(255, 255, 255);
}

.modal-footer {
    justify-content: space-between;
}
</style>