<template>
    <button class="button flex items-center group hover: justify-center px-14 max-lg:py-8 2xl:h-[98px] 2xl:w-[576px] 2xl:text-3xl leading-none uppercase font-Dewi font-bold after:absolute isolate after:bg-light-btn-gradient relative after:inset-0 after:z-[-1] after:opacity-0 after:duration-500 hover:after:opacity-100 after:transition-opacity [clip-path:url(#my-clip-path)]">
        <slot />
    <svg height="0" width="0" aria-hidden>
  <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M0.032,0.011,0.002,0.188 V1 h0.969 L1,0.839 V0.011 H0.032"></path></clipPath>
</svg>

    </button>
</template>


<style scoped lang="scss">
$size-offset: 20px;
$size-border: 2px;
.button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 55;
    background-color: rgba(221, 221, 221, 0.87);
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

