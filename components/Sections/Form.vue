<template>
    <section class="mt-32 pt-32 pb-9 bg-cover bg-top relative" :style="{backgroundImage: `url(${sectionBgImg})`}" id="form">
        <div class="absolute inset-0 select-none pointer-events-none" aria-hidden :style="{backgroundImage: `url(${noiseImg})`}"></div>
        <div class="container flex justify-center">
            <div class="text-[#AAA9A9] bg-white py-14 px-10">
                <h2 class="text-center text-black">Записаться на курс</h2>
                <div class="price_block relative py-4 2xl:px-10 mt-10 flex 2xl:flex-row flex-col justify-around gap-5 items-center">
                    <div>
                        <ul class="list-disc text-sm">
                            <li>Курс в подарок</li>
                            <li>Длительность рассрочки - 24 месяца</li>
                            <li>Помощь с трудоустройством</li>
                            <li>Инсайдерские информации</li>
                        </ul>
                    </div>
                    <div>
                        <p>Осталось: 7 мест</p>
                        <p class="line-through font-bold 2xl:hidden mt-5 text-[#AAA9A9]">98 560 ₸/мес </p>
                        <p class="2xl:text-4xl text-3xl font-bold text-[#82D890]">25 000 ₸/мес <span class="line-through 2xl:inline-block hidden text-[#AAA9A9]">98 560 ₸/мес </span></p>
                    </div>
                </div>
                <form class="flex 2xl:flex-row flex-col gap-4 justify-center mt-8" @submit="submitHandle">
                    <div
                        class="form_item focus-within:before:!bg-black text-[#474747] 2xl:w-[300px] px-6 h-[80px] relative flex items-center">
                        <IconsUser class="w-5 h-5" />
                        <input
                            v-model="form.name"
                            type="text"
                            class="text-[#474747] pl-4 xl:text-base text-sm uppercase outline-none"
                            placeholder="ваше имя"
                            required
                            minlength="3" />
                    </div>
                    <div
                        class="form_item focus-within:before:!bg-black text-[#474747] 2xl:w-[300px] px-6 h-[80px] relative flex items-center">
                        <IconsPhone class="w-5 h-5" />
                        <input
                            v-model="form.phone"
                            required
                            v-maska="maskBinded"
                            data-maska="+7-(###)-###-##-##"
                            pattern="[+]\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}"
                            type="phone"
                            class="text-[#474747] xl:text-base text-sm pl-4 uppercase outline-none"
                            placeholder="Ваш номер телефона" />
                    </div>
                    <ButtonsHero
                        class="text-white outline-none !text-xl h-[80px] !py-3 flex justify-center items-center 2xl:w-[300px] px-3 gap-2 space-x-2" />
                </form>
                <div class="flex 2xl:flex-row flex-col-reverse">
                    <div class="w-[350px] flex items-center mt-9">
                        <img src="~/assets/img/muha.png" alt="author" class="w-14 h-14 inline-block mr-5 rounded-full" />
                        <span class="leading-tight">Мухамеджан, автор курса перезвонит, ответит на вопросы</span>
                    </div>
                    <label ref="checkboxEl"  class="w-[300px] ml-auto inline-flex items-start mt-4 ">
                        <input  type="checkbox" class="checkbox focus:outline" v-model="form.privacy" />
                        <span class="text-xs leading-tight cursor-pointer select-none">
                            Нажимая на кнопку вы соглашаетесь с условиями обработки данных и политикой
                            конфиденциальности
                        </span>
                    </label>
                </div>
            </div>
        </div>
        <footer class="container text-center 2xl:mt-28 mt-16">
            <img src="~/assets/img/logo.png" alt="bu_logo" class="mx-auto 2xl:w-[116px] w-[80px]" />
        </footer>
    </section>
</template>

<script setup lang="ts">
import sectionBgImg from '~/assets/img/blurry.svg';
import noiseImg from '~/assets/img/noise.svg';
import { vMaska } from 'maska';
import { getDatabase, ref as refFirebase, set, push } from 'firebase/database';


const checkboxEl = ref<null | HTMLInputElement>(null)

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
            requestType: 'Курс',
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

    if(!form.privacy) {
       checkboxEl.value?.focus()
    } else {
        await writeUserData(form.name, form.phone);
        form.name = '';
        form.phone = '';
    }
};
</script>

<style scoped lang="scss">
$size-offset: 20px;
$size-border: 2px;
.form_item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(221, 221, 221, 0.6);
    clip-path: polygon(
        calc(100% - $size-offset - $size-border/2) calc(100% - $size-border),
        calc(100% - $size-border) calc(100% - $size-offset - $size-border/2),
        calc(100% - $size-border) $size-border,
        calc($size-offset + $size-border/2) $size-border,
        $size-border calc($size-offset + $size-border/2),
        $size-border calc(100% - $size-border),
        0% 100%,
        0% $size-offset,
        $size-offset 0%,
        100% 0%,
        100% calc(100% - $size-offset),
        calc(100% - $size-offset) 100%,
        0% 100%,
        $size-border calc(100% - $size-border)
    );
}

.checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid #9b9ca7;
    vertical-align: middle;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.25s;
    background-size: 0;
    background-position: center;
    flex: 0 0 15px;

    &:checked {
        background: no-repeat center/80% 100%
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%238C8C8C' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E"),
            no-repeat center/100% #e3e3e3;
        border: none;
    }
}

.price_block::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(221, 221, 221, 0.6);
    clip-path: polygon(
        calc(100% - $size-offset - $size-border/2) calc(100% - $size-border),
        calc(100% - $size-border) calc(100% - $size-offset - $size-border/2),
        calc(100% - $size-border) $size-border,
        calc($size-offset + $size-border/2) $size-border,
        $size-border calc($size-offset + $size-border/2),
        $size-border calc(100% - $size-border),
        0% 100%,
        0% $size-offset,
        $size-offset 0%,
        100% 0%,
        100% calc(100% - $size-offset),
        calc(100% - $size-offset) 100%,
        0% 100%,
        $size-border calc(100% - $size-border)
    );
}
</style>
