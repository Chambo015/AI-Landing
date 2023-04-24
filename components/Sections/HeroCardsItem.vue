<template>
      <li class=" first_card pt-[1px] flex-shrink-0 block" ref="targetOne" :style="{'--x': card.x, '--y': card.y}">
        <slot />
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
        left: -1px;
        right: -1px;
        bottom: -1px;
        top: -1px;
        position: absolute;
        background:rgba(255, 255, 255, 0.156) radial-gradient(300px circle at var(--x) var(--y),#1cd1c6 0,#0e8948 50%,transparent 100%);
    }
}

</style>