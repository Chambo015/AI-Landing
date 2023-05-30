<template>
    <main>
        <header class="container text-center 2xl:mt-[50px] mt-8">
            <img src="~/assets/img/logo.png" alt="bu_logo" class="mx-auto lg:w-[128px] w-[80px]" />
        </header>
        <section>
            <div  class="container mt-8">
                <h1 class="text-center">
                    <span>AI - Интегратор</span><br />
                    <span class="2xl:whitespace-nowrap text-white">Профессия Будущего</span>
                </h1>
                <p class="2xl:max-w-[570px] mx-auto 2xl:text-2xl text-sm mt-10 text-center">
                    С нуля до уровня Junior+ вместе с Blockchain University при поддержке Astana Hub
                </p>
            </div>
        </section>
        <section class="relative h-[600px]">
           <div class="h-full flex flex-col">
              <div class="flex justify-center 2xl:gap-[380px] pt-24 gap-[50px]">
                  <div class="2xl:w-[221px] ">
                      <div class="2xl:max-w-[220px] max-w-[150px]  flex items-center gap-3  2xl:mb-5">
                          <span class="font-Dewi text-5xl 2xl:text-7xl">6</span><span class="2xl:text-2xl text-sm">месяцев обучения</span>
                      </div>
                      <svg class="2xl:w-full w-[150px]" xmlns="http://www.w3.org/2000/svg" width="220" height="30" fill="none" viewBox="0 0 220 30">
                          <path stroke="#fff" stroke-opacity=".2" d="M219.5 29 200 .5H1" />
                          <path fill="#43443E" d="M4 4 0 0h64l-4 4H4Z" />
                      </svg>
                  </div>
                  <div class="flex flex-col 2xl:w-[221px]">
                      <div class="2xl:max-w-[220px] max-w-[150px] flex items-center gap-3  2xl:mb-5 ml-auto ">
                          <span class="2xl:text-2xl text-sm text-right">вебинара <br/> в неделю</span><span class="font-Dewi text-5xl 2xl:text-7xl">3</span>
                      </div>
                      <svg class="2xl:w-full w-[150px]" xmlns="http://www.w3.org/2000/svg" width="221" height="30" fill="none" viewBox="0 0 221 30">
                        <path stroke="#fff" stroke-opacity=".2" d="M1 29 20.5.5h199"/>
                        <path fill="#43443E" d="m216.5 4 4-4h-64l4 4h56Z"/>
                      </svg>
                  </div>
              </div>
              <div class="2xl:pt-5 2xl:mt-auto mt-[65%]"><a href="#form"><ButtonsHero class="mx-auto block" /></a></div>
           </div>
            <nuxt-img
                format="webp"
                preload 
                src="/bg-hero.png"
                aria-hidden="true"
                alt="brain"
                class="absolute 2xl:max-h-[135%] max-lg:h-[100%] max-lg:object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-[57%] z-[-1] select-none" />
            
        </section>
        <SectionsHeroCards />
        <SectionsSalaries />
        <SectionsAboutAIIntegrator />
        <SectionsAbilityAIIntegrator />
        <SectionsLeadTeacher />
        <SectionsEducationProgram />
        <SectionsCertificate />
        <SectionsForm />
    </main>
    <ModalWorkShop v-if="visibleModalWorkShop" :close-modal="closeModalWorkshop" />
</template>

<script setup lang="ts">
onMounted(() => {
    setTimeout(() => {
        visibleModalWorkShop.value = true;
    }, 3000);
});

const visibleModalWorkShop = ref(false);
const closeModalWorkshop = () => (visibleModalWorkShop.value = false)
const openModalWorkshop = () => (visibleModalWorkShop.value = true)
</script>