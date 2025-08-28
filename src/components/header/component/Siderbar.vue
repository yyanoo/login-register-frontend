<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SideBody from './SideBody.vue';

const sidebarBox = ref(null);

const handleMouseOver = () => {
    sidebarBox.value.classList.add('expanded');
};

const handleMouseLeave = () => {
    sidebarBox.value.classList.remove('expanded');
};

onMounted(() => {
    sidebarBox.value.addEventListener('mouseover', handleMouseOver);
    sidebarBox.value.addEventListener('mouseleave', handleMouseLeave);

});

onUnmounted(() => {
    sidebarBox.value.removeEventListener('mouseover', handleMouseOver);
    sidebarBox.value.removeEventListener('mouseleave', handleMouseLeave);
});
</script>

<template>
    <div ref="sidebarBox" class="box bg-dark">
        <SideBody />
    </div>
</template>

<style>
.box {
    height: 100vh;
    width: 10vh;
    overflow: hidden;
    transition: width 0.5s ease 0.1s;

    color: var(--main-color);
}

.box.expanded {
    width: 240px;
}

.box.expanded {
    opacity: 1;
}
</style>