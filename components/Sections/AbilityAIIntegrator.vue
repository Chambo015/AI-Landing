<template>
    <section>
        <div class="container mt-32">
            <h2>
                На что способен  <span class="block leading-none">ai - интегратор? </span>
            </h2>
            <ul class="flex gap-20 mt-16 flex-wrap">
                <li v-for="([text]) in ability" :key="text" class="flex items-center flex-shrink-0">
                    <div class="w-20 h-20 mr-5 flex-shrink-0 rounded-[5px] border-2 flex items-center justify-center bg-[rgba(21,21,21,0.51)] border-[#31302F]">
                        <IconsBox />
                    </div>
                    <p class="text-2xl max-w-[380px] leading-tight">{{ text }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const ability = [
    ['Пишет и запускает смарт-контракты (программы) в сеть блокчейна'],
    ['Работает над инновационными Web3.0 платформами и проектами'],
    ['Пишет и запускает смарт-контракты (программы) в сеть блокчейна']
]
</script>

<style scoped>

</style>