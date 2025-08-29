<script setup>
import SideBody from './SIdeBody/SideBody.vue';

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
    <div class="offcanvas offcanvas-start sidebody" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header text-bg-dark">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Information</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div data-bs-dismiss="offcanvas" aria-label="Close">
                <SideBody />
            </div>
        </div>
    </div>
</template>


<style scoped>
.offcanvas-body {
    background-color: var(--sub-color);
    color: white;
    padding: 0;
}

.offcanvas.offcanvas-start {
    width: 300px
}

.btn-close {
    --bs-btn-close-focus-shadow: 0 0 0 0.25rem #000;
}

.slider-button {
    display: none;
}

@media screen and (min-width: 992px) {
    .sidebody{
        display: none;
    }
    .offcanvas-backdrop{
        background-color: #00000000 !important;
    }
}

@media screen and (max-width: 992px) {
    .slider-button {
        display: inline;
    }
}
</style>