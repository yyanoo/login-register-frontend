<script setup>
import { ref } from "vue"

const mode = ref("email")

// map 對應不同 mode 的顯示文字
const modeMap = {
    email: "Email",
    next: "Next",
    reset: "Reset Password"
}

const switchMode = (target) => {
    mode.value = target
}

</script>

<template>
    <div class="modal fade" id="forgetBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="forgetBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-bg-dark">
                <!-- Header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="forgetBackdropLabel">{{ modeMap[mode] }}</h1>
                </div>

                <!-- Body -->
                <div class="modal-body" v-if="mode === 'email'">
                    <input type="email" class="input" placeholder="Please Enter Your Email">
                </div>
                <div class="modal-body" v-if="mode === 'next'">
                    <input type="email" class="input" placeholder="Please Enter Code">
                </div>

                <!-- Footer -->
                <div class="modal-footer" v-if="mode === 'email'">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="switchMode('next')">Next</button>
                </div>

                <div class="modal-footer" v-if="mode === 'next'">
                    <button type="button" class="btn btn-secondary" @click="switchMode('email')">Back</button>
                    <button type="button" class="btn btn-primary" @click="switchMode('next')">Next</button>
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