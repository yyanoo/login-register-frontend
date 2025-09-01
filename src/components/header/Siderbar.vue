<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SideBody from '../header/component/SIdeBody/SideBody.vue';

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
    <div ref="sidebarBox" class="sider-mianbox bg-dark">
        <SideBody />
    </div>
</template>

<style scoped>
.sider-mianbox {
    height: 100vh;
    width: 10vh;
    overflow: hidden;
    transition: width 0.5s ease 0.1s;

    color: var(--main-color);

    position: absolute;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.sider-mianbox.expanded {
    width: 260px;
    opacity: 1;
}

@media screen and (max-width: 992px) {
    .sider-mianbox {
        display: none;
    }
}
</style>