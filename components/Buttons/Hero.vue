<template>
    <button class="bg-btn-gradient text-3xl font-Dewi uppercase py-8 px-20 before:absolute isolate before:bg-light-btn-gradient relative before:inset-0 before:z-[-1] before:opacity-0 hover:before:opacity-100 before:transition-opacity active:scale-95 transition-transform">
       <span class="mr-7">записаться</span> <IconsFingerPrint class="w-7 h-7" />
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
button {
    clip-path: polygon(100% 0, 100% calc(100% - 20px),calc(100% - 20px)  100%, 0 100%, 0 20px, 20px 0);
}
</style>