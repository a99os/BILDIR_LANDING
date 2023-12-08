<template>
  <div
    class="relative bg-[url('~/assets/images/how.png')] w-full bg-cover py-[50px]"
  >
    <div id="How-it-works" class="absolute -top-[100px]"></div>

    <div class="container">
      <img src="~/assets/images/Group39537.png" class="lg:hidden mx-auto" />

      <h1
        data-aos="fade-right"
        data-aos-duration="500"
        class="text-center text-[#454545] text-[26px] lg:text-[40px] font-semibold"
      >
        {{ $t("howTitle") }}
      </h1>
      <p
        data-aos="fade-top"
        data-aos-duration="500"
        class="text-[#323232] text-[16px] lg:text-[24px] leading-[174%] text-center mt-5 lg:w-[84%] mx-auto"
      >
        {{ $t("howSubTitle") }}
      </p>

      <div
        data-aos="fade-right"
        data-aos-duration="500"
        class="bg-[url('~/assets/images/Group39537.png')] bg-cover h-[443px] w-full py-10 pl-10 mt-5 hidden lg:block"
      >
        <p
          data-aos="fade-left"
          data-aos-duration="500"
          class="text-[#323232] text-[24px] leading-[150%] w-[55%] mx-auto text-medium text-center mt-5"
        >
          {{ $t("howContent") }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

