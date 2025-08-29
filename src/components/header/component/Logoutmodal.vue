<script setup>
import { useAuthStore } from '../../../stores/authStore';

const authStore = useAuthStore();

const logout = () => {
    authStore.logout();
}
</script>

<template>
    <div class="modal fade" id="logoutBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="logoutBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-bg-dark">
                <!-- Header -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="logoutBackdropLabel">Logout</h1>
                </div>

                <!-- Body -->
                <div class="modal-body">
                    <div class="">Are you sure you want to log out?</div>
                </div>

                <!-- Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="logout"
                        data-bs-dismiss="modal">Logout</button>
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