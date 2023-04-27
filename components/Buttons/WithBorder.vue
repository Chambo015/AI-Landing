<template>
    <button class=" flex items-center group hover: justify-center px-14 h-[98px] w-[576px] text-3xl leading-none uppercase font-Dewi font-bold before:absolute isolate before:bg-light-btn-gradient relative before:inset-0 before:z-[-1] before:opacity-0 before:duration-500 hover:before:opacity-100 before:transition-opacity [clip-path:url(#my-clip-path)]">
        <slot />
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden width="576" height="97" fill="none" viewBox="0 0 576 97" class="absolute select-none inset-x-[1px] inset-y-[1px]">
    <path stroke="#fff" stroke-opacity=".5" d="M18.22 1 1 17.875V96h556.062L575 79.75V1H18.22Z"/>
    <svg height="0" width="0" aria-hidden>
  <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.032,0.011,0.002,0.188 V1 h0.969 L1,0.839 V0.011 H0.032"></path></clipPath>
</svg>
</svg>
    </button>
</template>

