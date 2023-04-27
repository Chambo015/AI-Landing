<template>
    <section>
        <ul class="container mt-32 grid grid-cols-[repeat(3,minmax(0,360px))]  py-1 justify-between items-center">
            <SectionsHeroCardsItem>
                <div class="w-[calc(100%-2px)] relative h-[calc(100%-2px)] bg-black/95 backdrop-blur-md pl-9 py-10 flex flex-col">
                    <img src="~/assets/img/card-study.png" alt="study" class="absolute bottom-0 right-0">
                    <p class="font-semibold text-2xl">Обучение</p>
                    <p class="text-lg font-normal">на реальных кейсах</p>
                    <IconsLogo class="mt-auto" />
                </div>
            </SectionsHeroCardsItem>
            <SectionsHeroCardsItem>
                <div class="w-[calc(100%-2px)] h-[calc(100%-2px)] relative  bg-black/95 backdrop-blur-md pl-9 py-10 flex flex-col">
                    <img src="~/assets/img/card-time.png" alt="study" class="absolute bottom-0 right-0">
                    <p class="font-semibold text-2xl">Онлайн</p>
                    <p class="text-lg font-normal">в удобное время</p>
                    <IconsLogo class="mt-auto" />
                </div>
            </SectionsHeroCardsItem>
            <SectionsHeroCardsItem>
                <div class="w-[calc(100%-2px)] relative h-[calc(100%-2px)] bg-black/95 backdrop-blur-md pl-9 py-10 flex flex-col">
                    <img src="~/assets/img/card-help.png" alt="study" class="absolute bottom-0 right-0">
                    <p class="font-semibold text-2xl">Помощь</p>
                    <p class="text-lg font-normal">в трудоустройстве</p>
                    <IconsLogo class="mt-auto" />
                </div>
            </SectionsHeroCardsItem>
        </ul>
    </section>
</template>

