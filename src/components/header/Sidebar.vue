<script setup>
import IsLogin from '../IsLogin.vue';
</script>

<template>
    <div class="slider-button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions">
        <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
            <div style="width: 100%; height: 100%; display: block; fill: white">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"
                    aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%">
                    <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                </svg>
            </div>
        </button>
    </div>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header text-bg-dark">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="slider-box">
                <div class="box h3">

                    <div class="d-flex flex-column align-items-center" style="height: 720px; display: grid;">
                        <router-link to="/">HomePage</router-link>
                        <router-link to="/" style="margin-top:20px;">Profile</router-link>
                        <router-link to="/" style="margin-top:20px;">Details</router-link>
                    </div>
                    <IsLogin />
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.offcanvas-body {
    background-color: var(--sub-color);
    color: white;

    display: flex;
    flex-direction: column;
}

.box {
    height: 80vh;
    padding: 20px;

    display: grid;
    justify-items: center;
}

.btn-close {
    --bs-btn-close-focus-shadow: 0 0 0 0.25rem #000;
}

.slider-button {
    display: none;
}

@media screen and (max-width: 1299px) {
    .slider-button {
        display: inline;
    }
}
</style>