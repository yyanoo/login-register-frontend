<script setup>
import { ref } from "vue"

const mode = ref("login")

const modeMap = {
    login: "Login",
    register: "Register",
}

const switchMode = (target) => {
    mode.value = target
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
                <div class="modal-body" v-if="mode === 'login'">
                    <input type="text" class="input" placeholder="UserName">
                    <input type="password" class="input" placeholder="Password">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="margin-top: 5px;">
                        {{ modeMap[mode] }}
                    </button>
                </div>

                <div class="modal-body" v-else-if="mode === 'register'">
                    <input type="text" class="input" placeholder="UserName">
                    <input type="email" class="input" placeholder="Email">
                    <input type="password" class="input" placeholder="Password">
                    <input type="password" class="input" placeholder="Confirm Password">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="margin-top: 5px;">
                        {{ modeMap[mode] }}
                    </button>
                </div>

                <!-- Footer -->
                <div class="modal-footer" v-if="mode !== 'login'">
                    <button type="button" class="btn btn-secondary" @click="switchMode('login')">
                        Back to Login
                    </button>
                </div>

                <div class="modal-footer" v-if="mode !== 'register'">
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                        data-bs-target="#forgetBackdrop">
                        Forget Password
                    </button>
                    <button type="button" class="btn btn-success" @click="switchMode('register')">
                        Register
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
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