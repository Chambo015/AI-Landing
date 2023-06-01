<template>
    <section>
        <ul class="container 2xl:mt-32 grid 2xl:grid-cols-[repeat(3,minmax(0,360px))] max-md:gap-y-4 grid-cols-[repeat(1,minmax(0,360px))] py-1 justify-between items-center">
            <SectionsHeroCardsItem>
                <div class="w-[calc(100%-2px)] relative h-[calc(100%-2px)] bg-black/95 backdrop-blur-md 2xl:pl-9 2xl:py-10 pl-5 py-5 flex flex-col">
                    <img src="~/assets/img/card-study.webp" alt="study" class="absolute bottom-0 right-0 h-[90%]">
                    <p class="font-semibold text-xl 2xl:text-2xl">Обучение</p>
                    <p class="2xl:text-lg text-sm font-normal">на реальных кейсах</p>
                    <IconsLogo class="mt-auto" />
                </div>
            </SectionsHeroCardsItem>
            <SectionsHeroCardsItem>
                <div class="w-[calc(100%-2px)] h-[calc(100%-2px)] relative  bg-black/95 backdrop-blur-md 2xl:pl-9 2xl:py-10 pl-5 py-5 flex flex-col">
                    <img src="~/assets/img/card-time.webp" alt="study" class="absolute bottom-0 right-0  h-[90%]">
                    <p class="font-semibold text-xl 2xl:text-2xl">Онлайн</p>
                    <p class="2xl:text-lg text-sm font-normal">в удобное время</p>
                    <IconsLogo class="mt-auto" />
                </div>
            </SectionsHeroCardsItem>
            <SectionsHeroCardsItem>
                <div class="w-[calc(100%-2px)] relative h-[calc(100%-2px)] bg-black/95 backdrop-blur-md 2xl:pl-9 2xl:py-10 pl-5 py-5 flex flex-col">
                    <img src="~/assets/img/card-help.webp" alt="study" class="absolute bottom-0 right-0  h-[90%]">
                    <p class="font-semibold text-xl 2xl:text-2xl">Помощь</p>
                    <p class="2xl:text-lg text-sm font-normal">в трудоустройстве</p>
                    <IconsLogo class="mt-auto" />
                </div>
            </SectionsHeroCardsItem>
        </ul>
    </section>
</template>

