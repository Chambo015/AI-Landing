<script setup lang="ts">
import bgImg from '@/assets/img/module1.png'
import { PropType } from 'vue';
defineProps({
    bgBtn: String as PropType<any>,
    bgDetails: String as PropType<any>,
    title: String,
    id: Number,
    open: Boolean,
    details: Array as PropType<string[]>,
    project: Object as PropType<{desc: string, title: string}>
})
</script>

<template>
   <button :class="['2xl:p-11 p-5 w-full text-left group  flex justify-between relative isolate', open ? '' : '2xl:mb-8 mb-3']" ><span class="2xl:text-2xl text-sm leading-none 2xl:font-semibold relative z-30">{{ title }}</span>
    <div class="inline-flex items-center flex-shrink-0 justify-center overflow-hidden relative z-30">
        <span class="uppercase translate-x-full opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 duration-500 xl:block hidden text-xs mr-5 text-[#E5F3AA] underline decoration-dashed decoration-[#E5F3AA]/50	">{{open ? 'Скрыть подробности':'Посмотреть подробнее'}}</span>
        <div :class="['2xl:w-7 2xl:h-7 w-3 h-3 bg-[#E5F3AA]/80 ml-auto rounded-full inline-flex justify-center items-center flex-shrink-0 transition-transform', open && 'rotate-90']">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjEwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNiAxMCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTUuMTk3IDQuMTkyIDEuMTUxLjE0NUEuNDk0LjQ5NCAwIDAgMCAuNzk5IDBhLjQ5NC40OTQgMCAwIDAtLjM1Mi4xNDVMLjE1LjQ0M2EuNDk4LjQ5OCAwIDAgMCAwIC43MDRsMy4zOTggMy4zOThMLjE0NSA3Ljk0N2EuNDk1LjQ5NSAwIDAgMCAwIC43MDRsLjI5OC4yOTdhLjQ5NC40OTQgMCAwIDAgLjM1Mi4xNDYuNDk0LjQ5NCAwIDAgMCAuMzUyLS4xNDZsNC4wNS00LjA1YS40OTUuNDk1IDAgMCAwIC4xNDYtLjM1My40OTQuNDk0IDAgMCAwLS4xNDYtLjM1M1oiLz48L3N2Zz4=" alt="arrow" class="max-lg:w-[5px] max-lg:h-[5px] ">
        </div>
    </div>
    <div :class="[' bg-cover bg-no-repeat absolute inset-0 bg-center z-10 transition-all group-hover:saturate-100', open ? 'saturate-100' : ' saturate-0']" :style="{backgroundImage: `url(${bgBtn})`}"></div>
    <div :class="['absolute inset-0 z-[11] bg-[linear-gradient(90deg,rgba(21,21,21,.83)0%,rgba(21,21,21,.51)49%,rgba(21,21,21,.83)101%)] transition-opacity group-hover:opacity-50', open ? 'opacity-50' : 'opacity-100']"></div>
   </button>
   <div v-show="open" class="2xl:px-12 px-4 py-5 2xl:py-14  bg-center bg-cover bg-no-repeat relative" :style="{backgroundImage: `url(${bgDetails})`}" >
        <div class="absolute inset-0 backdrop-blur-md bg-black/70"></div>
        <div class="relative z-30">
            <p class="2xl:text-2xl text-xs font-semibold uppercase">Содержание:</p>
            <ul class="2xl:text-2xl text-xs leading-normal mt-6">
                <li v-for="text of details"><span class="mr-1 font-extrabold">—</span> {{ text }}</li>
            </ul>
            <p class="mt-5 2xl:text-2xl text-xs italic" v-if="project"><span class="font-bold">{{ project.title }}</span> <span v-if="project.desc">- {{ project.desc }}</span></p>
        </div>
   </div>
</template>

<style scoped>
</style>