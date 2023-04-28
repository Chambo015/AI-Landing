<template>
    <main>
        <header class="container text-center mt-[50px]">
            <img src="~/assets/img/logo.png" alt="bu_logo" class="mx-auto" />
        </header>
        <section>
            <div  class="container mt-8">
                <h1 class="text-center">
                    <span>AI - Интегратор</span> <br />
                    Профессия Будущего
                </h1>
                <p class="max-w-[570px] mx-auto text-2xl mt-10 text-center">
                    С нуля до уровня Junior+ вместе с Blockchain University при поддержке Astana Hub
                </p>
            </div>
        </section>
        <section class="relative h-[600px]">
           <div class="h-full flex flex-col">
              <div class="flex justify-center gap-[380px] pt-24 ">
                  <div class="w-[221px]">
                      <div class="max-w-[220px] flex items-center gap-3 mb-5">
                          <span class="font-Dewi text-7xl">6</span><span class="text-2xl">месяцев обучения</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="220" height="30" fill="none" viewBox="0 0 220 30">
                          <path stroke="#fff" stroke-opacity=".2" d="M219.5 29 200 .5H1" />
                          <path fill="#43443E" d="M4 4 0 0h64l-4 4H4Z" />
                      </svg>
                  </div>
                  <div class="flex flex-col w-[221px]">
                      <div class="max-w-[220px] flex items-center gap-3 mb-5 ml-auto">
                          <span class="text-2xl text-right">вебинара <br/> в неделю</span><span class="font-Dewi text-7xl">3</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="221" height="30" fill="none" viewBox="0 0 221 30">
                        <path stroke="#fff" stroke-opacity=".2" d="M1 29 20.5.5h199"/>
                        <path fill="#43443E" d="m216.5 4 4-4h-64l4 4h56Z"/>
                      </svg>
                  </div>
              </div>
              <div class="pt-5 mt-auto"><ButtonsHero class="mx-auto block" /></div>
           </div>
            <img
                src="~/assets/img/bg-hero.png"
                aria-hidden="true"
                alt="brain"
                class="absolute max-h-[135%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[57%] z-[-1] select-none" />
            
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
</template>
