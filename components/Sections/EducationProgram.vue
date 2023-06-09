<template>
    <section class="2xl:py-32" id="education">
        <div class="container">
            <h2 class="leading-tight">Программа обучения — <span class="block">6 месяцев</span></h2>
            <p class="mt-7 2xl:text-2xl">15 часов теории и 110 часов практики</p>
            <ul class="2xl:mt-16 mt-8">
                <TransitionGroup name="tabs">
                    <li v-for="a of data" :key="a.id" @click="clickHandleModule(a.id)">
                        <EducationItem v-bind="a" :open="selectedModuleId === a.id" />
                    </li>
                </TransitionGroup>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import bgBtnModule1 from '@/assets/img/module1.webp';
import bgBtnModule2 from '@/assets/img/module2.webp';
import bgBtnModule3 from '@/assets/img/module3.webp';
import bgBtnModule4 from '@/assets/img/module4.webp';
import bgBtnModule5 from '@/assets/img/module5.webp';
import bgBtnModule6 from '@/assets/img/module6.webp';
import bgBtnModule7 from '@/assets/img/module7.webp';

import bgDetailModule1 from '@/assets/img/module1-full.webp';
import bgDetailModule2 from '@/assets/img/module2-full.webp';
import bgDetailModule3 from '@/assets/img/module3-full.webp';
import bgDetailModule4 from '@/assets/img/module4-full.webp';
import bgDetailModule5 from '@/assets/img/module5-full.webp';
import bgDetailModule6 from '@/assets/img/module6-full.webp';
import bgDetailModule7 from '@/assets/img/module7-full.webp';

const data = [
    {
        id: 1,
        bgBtn: bgBtnModule1,
        bgDetails: bgDetailModule1,
        title: 'Модуль 1: Введение в ML/AI',
        details: [
            'Введение и история ML/AI',
            'Типы машинного обучения',
            'Supervised Learning vs Unsupervised Learning',
            'Reinforcement Learning',
            'Методология CRISP-DM',
            'Процесс выбора модели',
            'Введение в среду Python для машинного обучения (знакомство с основными библиотеками NumPy, Pandas и т.д.)'
        ]
    },
    {
        id: 2, 
        bgBtn: bgBtnModule2,
        bgDetails: bgDetailModule2,
        title: 'Модуль 2: Алгоритмы машинного обучения',
        details: [
            'Модели Регрессии (Regression)',
            'Модели Классификации (Classification)',
            'Модели кластеризации',
            'Деревья решений и ансамблевое обучение',
            'Развертывание моделей машинного обучения'
        ]
    },
    {
        id: 3, 
        bgBtn: bgBtnModule3,
        bgDetails: bgDetailModule3,
        title: 'Модуль 3: Neural Networks and Deep Learning',
        details: [
            'Введение в нейронные сети',
            'Введение в фреймворки (PyTorch/TensorFlow)',
            'Convolutional Neural Networks (CNN)',
            'Recurrent Neural Networks (RNN)',
            'Transfer learning',
            'Regularization and dropout',
            'Hyperparameter tuning',
            'Методы увеличения данных',
            'Обучение крупных моделей'
        ],
        project: {
            title: 'Среднесрочный проект',
            desc: 'студенты применят все, что узнали до этого, на практике'
        }
    },
    {
        id: 4,
        bgBtn: bgBtnModule4,
        bgDetails: bgDetailModule4,
        title: 'Модуль 4: Обработка естественного языка (NLP)',
        details: [
            'Токенизация и предварительная обработка текста',
            'Семантические эмбеддинги слов (Word2Vec и GloVe)',
            'Языковое моделирование. Обучение собственных эмбеддингов',
            'Recurrent Neural Networks (RNN)',
            'Generative Recurrent Networks',
            'Трансформеры',
            'Распознавание именованных сущностей (NER)',
            'Большие языковые модели (LLM)'
        ],
    },
    {
        id: 5,
        bgBtn: bgBtnModule5,
        bgDetails: bgDetailModule5,
        title: 'Модуль 5: Компьютерное зрение (Computer Vision)',
        details: [
          'Введение в Computer Vision (OpenCV)',
          'Обработка изображений',
          'Обнаружение и распознавание объектов (фото и видео)',
          'Распознавание лица',
          'Сегментация изображения',
          'Generative Adversarial Networks (GANs) - передача художественного стиля'
        ],
    },
    {
        id: 6,
        bgBtn: bgBtnModule6,
        bgDetails: bgDetailModule6,
        title: 'Модуль 6: Технологии корпоративной разработки',
        details: [
          'Источники данных и виды баз данных (PostgreSQL, Clickhouse, Elasticsearch, Milvus)',
          'Облачные вычисления (AWS, Google Cloud, Nvidia Cloud Computing)',
          'Развертывание модели (Serverless, AWS Labda, TensorFlow Lite)',
          'Docker',
          'Развертывание модели в виде REST API'
        ],
    },
    {
        id: 7,
        bgBtn: bgBtnModule7,
        bgDetails: bgDetailModule7,
        title: 'Модуль 7: Kubernetes и обслуживание TensorFlow',
        details: [
          'Введение',
          'Обслуживание TensorFlow',
          'Создание службы предварительной обработки',
          'Запуск всего локально с помощью Docker-compose',
          'Введение в Kubernetes',
          'Развертывание простого сервиса в Kubernetes',
          'Развертывание моделей TensorFlow в Kubernetes',
          'Развертывание в EKS'
        ],
        project: {
            title: 'Финальный проект',
        }
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

<style scoped lang="scss">
.tabs-move {
  transition: transform 0.3s ease, opacity 0.5s ease 0.3s;
 
}

.tabs-leave-active {
  position: absolute;
}
</style>
