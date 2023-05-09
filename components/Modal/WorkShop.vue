<template>
    <div class="fixed w-full h-full inset-x-0 inset-y-0 z-50 bg-black/40 backdrop-blur-sm">
        <div
            class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[650px] 2xl:w-[750px] max-md:w-[90%]  rounded-md border border-white/25 bg-[rgba(20,21,20,.9)] 2xl:p-8  p-5 shadow-2xl backdrop-blur-sm">
            <div>
                <p class="text-center text-3xl font-bold uppercase 2xl:text-5xl">
                    <span class="text-[rgba(125,198,137,1)]">Бесплатный</span> Воркшоп
                </p>
                <ul class="mt-5 font-TTOctosquares text-lg [&_span]:font-semibold [&_span]:text-[rgba(125,198,137,1)]">
                    <li><span>Тема: </span>AI Интегратор</li>
                    <li><span>Выступает: </span>основатели BU + старший сеньор разработчик Мухамеджан</li>
                    <li><span>Когда: </span> в это воскресенье в 16:00, в zoom конференции</li>
                </ul>
                <div  v-if="!isOpenForm" class="flex justify-center">
                    <button
                       
                        @click="isOpenForm = true"
                        class="mt-5 rounded bg-[rgba(103,176,115,1)] px-8 py-2 text-center text-xl hover:bg-[#5a8f63]">
                        Записаться
                    </button>
                    
                </div>
                <form @submit="submitHandle" v-else class="mt-5">
                        <input
                            v-model="form.name"
                            required
                            minlength="3"
                            type="text"
                            placeholder="Имя"
                            class="mb-5 w-full rounded bg-[#2b2b2b3b] py-3 px-4 text-base 2xl:text-xl" />
                        <p class="text-sm text-white/50">*Укажите WhatsApp номер, чтобы получить ссылку на Воркшоп</p>
                        <input
                            pattern="[+]\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}"
                            v-model="form.phone"
                            required
                            v-maska="maskBinded"
                            data-maska="+7-(###)-###-##-##"
                            title="+7-(7XX)-XXX-XX-XX"
                            type="phone"
                            placeholder="Номер телефона"
                            class="mb-5 w-full rounded bg-[#2b2b2b3b] py-3 px-4 text-base 2xl:mb-7 2xl:text-xl" />
                        <button class="rounded-sm hover:bg-[#7cd88b] bg-[rgba(103,176,115,1)] px-6 py-2 2xl:text-xl">Записаться</button>
                    </form>
            </div>
    
    
            <button
                @click="closeModal"
                class="absolute right-0 top-0 h-7 w-7 translate-x-1/2 -translate-y-1/2 rounded-md border border-white/25 bg-[#1c1d1c]">
                x
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { vMaska } from 'maska';
import { getDatabase, ref as refFirebase, set, push } from 'firebase/database';

const props = defineProps({
    closeModal: {
        type: Function,
        required: true
    }
})

const isOpenForm = ref(false);

const maskBinded = reactive({
    masked: '',
    unmasked: '',
    completed: false
});
const form = reactive({
    name: '',
    phone: '',
    privacy: false,
});

async function writeUserData(name: string, phone: string) {
    try {
        const db = getDatabase();
        const postListRef = refFirebase(db, 'feedbackAI');
        const newPostRef = push(postListRef);
        await set(newPostRef, {
            username: name,
            privacy: true,
            requestType: 'ВОРКШОП',
            phone: phone,
            created: new Date().toLocaleString(),
        });
        return true
    } catch (error) {
        return new Error('Error Firebase')
    }
}

const submitHandle = async (e: HTMLFormElement) => {
    e.preventDefault();

    await writeUserData(form.name, form.phone);
    form.name = '';
    form.phone = '';

    props.closeModal()
};
</script>

<style scoped></style>
