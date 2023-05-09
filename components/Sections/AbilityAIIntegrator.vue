<template>
    <section>
        <div class="container mt-32">
            <h2>
                На что способен  <span class="block leading-snug">ai - интегратор? </span>
            </h2>
            <ul class="flex gap-20 mt-16 flex-wrap">
                <li v-for="a in ability" :key="text" class="flex items-center flex-shrink-0">
                    <div class="w-20 h-20 mr-5 flex-shrink-0 rounded-[5px] border-2 flex items-center justify-center bg-[rgba(21,21,21,0.51)] border-[#31302F]">
                        <component :is="a.icon" />
                    </div>
                    <p class="text-2xl max-w-[400px] leading-tight">{{ a.title }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import IconsNeuralNetworks from '@/components/Icons/NeuralNetworks.vue'
import IconsBox from '@/components/Icons/Box.vue'
import IconsFile from '@/components/Icons/File.vue'
import IconsProgram from '@/components/Icons/Program.vue'
import IconsCloudConnect from '@/components/Icons/CloudConnect.vue'

const ability = [
    {
        id: 0,
        title: 'Разрабатывать и обучать искусственные нейронные сети',
        icon: IconsNeuralNetworks
    },
    {
        id: 1,
        title: 'Обрабатывать и анализировать большие объемы данных',
        icon: IconsBox
    },
    {
        id: 2,
        title: 'Создавать и оптимизировать AI-алгоритмы',
        icon: IconsFile
    },
    {
        id: 3,
        title: 'Создавать приложения и продукты на базе AI',
        icon: IconsProgram
    },
    {
        id: 4,
        title: 'Интегрировать и настраивать AI модели в бизнес-процессы и системы',
        icon: IconsCloudConnect
    },
]
</script>

<style scoped>

</style>