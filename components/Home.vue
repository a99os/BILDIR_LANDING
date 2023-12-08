<template>
  <div
    class="relative overflow-hidden z-10 bg-right pt-[150px] lg:pt-[100px] h-screen"
  >
    <img class="absolute w-full hidden lg:block" src="~/assets/images/Group39547.png" />
    <div id="introduction" class="absolute -top-[100px]"></div>
    <div class="container relative z-20 overflow-hidden">
      <h1
        class="lg:text-[48px] text-[24px] lg:text-start lg:mt-[48px] lg:w-[100%] leading-[134%] font-bold"
      >
        <span class="text-[#40A4BD]">Whistleblowing</span>
        {{ $t("homeTitle2") }}
      </h1>

      <ul class="flex flex-col gap-5 lg:gap-5 mt-10 lg:w-[55%]">
        <li class="flex gap-[5px] items-center">
          <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
          <p class="text-[16px] lg:text-[24px]">
            {{ $t("home1") }}
          </p>
        </li>
        <li class="flex gap-[5px] items-center">
          <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
          <p class="text-[16px] lg:text-[24px]">
            {{ $t("home2") }}
          </p>
        </li>
        <li class="flex gap-[5px] items-center">
          <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
          <p class="text-[16px] lg:text-[24px]">
            {{ $t("home3") }}
          </p>
        </li>
        <li class="flex gap-[5px] items-start">
          <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
          <p class="text-[16px] lg:text-[24px]">
            {{ $t("home4") }}
          </p>
        </li>
      </ul>

      <img src="~/assets/images/Group39548.png" class="lg:hidden" />
    </div>
    <img
      src="~/assets/images/Group395471.svg"
      class="absolute scale-[10] lg:scale-[3.1] lg:bottom-[40px] bottom-10 moving-image"
    />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style>
.moving-image {
  animation: moveRight 20s linear infinite; /* Adjust duration as needed */
}
@keyframes moveRight {
  0% {
    left: 0;
  }
  100% {
    left: calc(100% - 100px); /* Adjust the width of the image */
  }
}
</style>
