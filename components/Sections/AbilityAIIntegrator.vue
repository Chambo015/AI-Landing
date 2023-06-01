<template>
    <section>
        <div class="container 2xl:mt-32">
            <h2>
                На что способен  <span class="block leading-snug">ai - интегратор? </span>
            </h2>
            <ul class="flex 2xl:gap-20 gap-10 2xl:mt-16 mt-8 flex-wrap">
                <li v-for="a in ability" :key="a.id" class="flex items-center 2xl:flex-shrink-0">
                    <div class="2xl:w-20 w-12 2xl:h-20 h-12 mr-5 p-2 flex-shrink-0 rounded-[5px] border-2 flex items-center justify-center bg-[rgba(21,21,21,0.51)] border-[#31302F]">
                        <component :is="a.icon" />
                    </div>
                    <p class="2xl:text-2xl text-sm 2xl:max-w-[400px] leading-tight">{{ a.title }}</p>
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