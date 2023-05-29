<template>
      <li class="p-[1px] 2xl:h-[206px] h-[150px]" ref="targetOne" :style="{'--x': card.x, '--y': card.y}">
        <div class="first_card p-[1px] items-center justify-center flex w-full h-full"><slot /></div>
        </li>
</template>

<script setup lang="ts">
const targetOne = ref(null)
const { elementX, elementY } = useMouseInElement(targetOne)

const card =  computed(() => ({x: elementX.value + 'px', y: elementY.value + 'px'}))
</script>

<style scoped lang="scss">
.first_card {
    position: relative;
    --x: v-bind(card.x);
    --y: v-bind(card.y);
    &::before {
        content: '';
        contain: size;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
        position: absolute;
        will-change: background;
        background:rgba(255, 255, 255, 0.156) radial-gradient(300px circle at var(--x) var(--y),#1cd1c6 0,#0e8948 50%,transparent 100%);
    }
}

</style>