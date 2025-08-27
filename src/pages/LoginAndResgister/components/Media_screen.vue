<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const isLargeScreen = ref(false)

function checkScreen() {
    isLargeScreen.value = window.innerWidth > 1000
}

onMounted(() => {
    checkScreen() // 初始化判斷
    window.addEventListener("resize", checkScreen)
})

onUnmounted(() => {
    window.removeEventListener("resize", checkScreen)
})
</script>

<template>
    <div class="" :class="{ 'd-flex justify-content-center': isLargeScreen }">
        <slot />
    </div>
</template>