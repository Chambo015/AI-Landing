<template>
    <section class="py-4 md:py-8 2xl:py-16">
        <div class="container flex justify-center">
            <div class="text-[#AAA9A9] py-14 px-0">
                <h2 class="text-center uppercase mb-16">
                    <span>Бесплатный</span> Воркшоп
                </h2>

                <ul class="mt-5 font-TTOctosquares text-lg  md:xl 2xl:text-3xl [&_span]:font-semibold [&_span]:text-[rgba(125,198,137,1)]">
                    <li><span>Тема: </span>AI Интегратор</li>
                    <li><span>Выступает: </span>основатели BU + старший сеньор разработчик Мухамеджан</li>
                </ul>

                <p class="text-base md:text-lg 2xl:text-2xl mt-8">На этом интенсивном воркшопе вы получите
                    возможность
                    погрузиться в мир ИИ и
                    разработки интеллектуальных
                    систем. Вас ждут выступления опытных специалистов, мастер-классы и практические занятия, где
                    вы
                    сможете
                    узнать о последних тенденциях и передовых методах в области ИИ.</p>

                <div class="flex flex-col w-full sm:w-2/3 md:w-full gap-2 mx-auto md:flex-row justify-between items-center mt-8">
                    <p class="lg:text-3xl text-center text-xl">В это воскресенье в 16:00 </p>

                    <button class="text-white bg-btn-gradient space-x-7 lg:text-xl xl:text-3xl text-lg font-Dewi uppercase lg:py-4 py-2 lg:px-4 xl:px-10 max-lg:w-[90%] before:absolute isolate before:bg-light-btn-gradient relative before:inset-0 before:z-[-1] before:opacity-0 focus:before:opacity-100 hover:before:opacity-100 before:transition-opacity active:scale-95 transition-transform">
                        <a href="https://api.whatsapp.com/send?phone=77081056283" target="_blank">хочу на воркшоп</a>
                    </button>

                    <p class="lg:text-3xl text-center text-xl md:text-right "> в zoom конференции</p>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "WorkShopInfo"
}
</script>

<style scoped>
button {
    clip-path: polygon(100% 0, 100% calc(100% - 20px),calc(100% - 20px)  100%, 0 100%, 0 20px, 20px 0);
}
</style>