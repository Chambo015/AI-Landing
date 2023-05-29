<template>
    <section>
        <div class="container mt-32"><h2><span>Зарплаты</span> AI Специалиста</h2>
        <p class="2xl:text-2xl text-sm 2xl:mt-7 mt-5">По данным <a href="https://web3.career/" target="_blank" class="text-[#E5F3AA] decoration-slice underline underline-offset-4">web3.career</a>, в среднем в год составляет:</p>
        <ul class="flex justify-between 2xl:flex-row flex-col 2xl:mt-16 mt-8 gap-6">
            <li v-for="([key, value]) in salaries" :key="key">
                <p class="font-Dewi 2xl:text-[28px] leading-none font-bold">{{ value }}</p>
                <p class="2xl:text-2xl text-sm text-white/50">{{ key }}</p>
            </li>
        </ul>
    </div>
    </section>
</template>

<script setup lang="ts">

const salaries = [
    ['Machine Learning Engineer', '90 000 - 150 000 $'],
    ['Deep Learning Engineer', '100 000 - 200 000 $'],
    ['AI Researcher', '120 000 - 250 000 $'],
]
</script>

<style scoped>

</style>