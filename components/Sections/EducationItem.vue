<script setup lang="ts">
import bgImg from '@/assets/img/module1.png'
import { PropType } from 'vue';
defineProps({
    bgBtn: String as PropType<any>,
    title: String,
    id: Number,
    open: Boolean
})
</script>

<template>
   <button class="p-11 w-full text-left group bg-center  flex justify-between bg-[length:100%_auto] bg-no-repeat" :style="{backgroundImage: `url(${bgBtn})`}"><span class="text-2xl leading-none font-semibold">{{ title }}</span>
    <div class="inline-flex items-center flex-shrink-0 justify-center overflow-hidden">
        <span class="uppercase translate-x-full opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 duration-500 text-xs mr-5 text-[#E5F3AA] underline decoration-dashed decoration-[#E5F3AA]/50	">{{open ? 'Скрыть подробности':'Посмотреть подробнее'}}</span>
        <div :class="['w-7 h-7 bg-[#E5F3AA]/80 ml-auto rounded-full inline-flex justify-center items-center flex-shrink-0 transition-transform', open && 'rotate-90']">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjEwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNiAxMCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTUuMTk3IDQuMTkyIDEuMTUxLjE0NUEuNDk0LjQ5NCAwIDAgMCAuNzk5IDBhLjQ5NC40OTQgMCAwIDAtLjM1Mi4xNDVMLjE1LjQ0M2EuNDk4LjQ5OCAwIDAgMCAwIC43MDRsMy4zOTggMy4zOThMLjE0NSA3Ljk0N2EuNDk1LjQ5NSAwIDAgMCAwIC43MDRsLjI5OC4yOTdhLjQ5NC40OTQgMCAwIDAgLjM1Mi4xNDYuNDk0LjQ5NCAwIDAgMCAuMzUyLS4xNDZsNC4wNS00LjA1YS40OTUuNDk1IDAgMCAwIC4xNDYtLjM1My40OTQuNDk0IDAgMCAwLS4xNDYtLjM1M1oiLz48L3N2Zz4=" alt="arrow">
        </div>
    </div>
   </button>
   <div v-show="open" class="px-12 pt-14">
        <p class="text-2xl font-semibold uppercase">Содержание:</p>
        <ul class="text-2xl mt-6">
            <li>— Введение и история ML/AI</li>
            <li>— Типы машинного обучения</li>
            <li>— Supervised Learning vs Unsupervised Learning</li>
            <li>— Reinforcement Learning</li>
            <li>— Методология CRISP-DM</li>
            <li>— Процесс выбора модели</li>
            <li>— Введение в среду Python для машинного обучения (знакомство с основными библиотеками NumPy, Pandas итд)</li>
        </ul>
   </div>
</template>

<style scoped>
</style>