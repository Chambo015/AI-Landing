<template>
    <section class="py-32">
        <div class="container">
            <h2 class="leading-tight">Программа обучения — <span class="block">6 месяцев</span></h2>
            <p class="mt-7 text-2xl">15 часов теории и 110 часов практики</p>
            <ul class="mt-16 space-y-8">
                <li v-for="a of data" :key="a.id" @click="clickHandleModule(a.id)">
                    <SectionsEducationItem v-bind="a" :open="selectedModuleId === a.id" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import bgBtnModule1 from '@/assets/img/module1.png';
import bgBtnModule2 from '@/assets/img/module2.png';
import bgBtnModule3 from '@/assets/img/module3.png';
import bgBtnModule4 from '@/assets/img/module4.png';
import bgBtnModule5 from '@/assets/img/module5.png';
import bgBtnModule6 from '@/assets/img/module6.png';
import bgBtnModule7 from '@/assets/img/module7.png';
const data = [
    {
        id: 1,
        bgBtn: bgBtnModule1,
        title: 'Модуль 1: Введение в ML/AI',
    },
    {id: 2, bgBtn: bgBtnModule2, title: 'Модуль 2: Алгоритмы машинного обучения'},
    {id: 3, bgBtn: bgBtnModule3, title: 'Модуль 3: ENeural Networks and Deep Learning'},
    {
        id: 4,
        bgBtn: bgBtnModule4,
        title: 'Модуль 4: Обработка естественного языка (NLP)',
    },
    {
        id: 5,
        bgBtn: bgBtnModule5,
        title: 'Модуль 5: Компьютерное зрение (Computer Vision)',
    },
    {
        id: 6,
        bgBtn: bgBtnModule6,
        title: 'Модуль 6: Технологии корпоративной разработки',
    },
    {
        id: 7,
        bgBtn: bgBtnModule7,
        title: 'Модуль 7: Kubernetes и обслуживание TensorFlow',
    },
];
const selectedModuleId = ref<number | boolean>(false);
const clickHandleModule = (id: number) => {
    if(id === selectedModuleId.value) {
        selectedModuleId.value = false; 
        return
    }
    selectedModuleId.value = id
}
</script>

<style scoped></style>
