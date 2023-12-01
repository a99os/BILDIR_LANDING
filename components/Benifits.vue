<template>
  <div class="py-6">
    <div class="container">
      <h1
        data-aos="fade-right"
        data-aos-duration="500"
        class="text-center text-[24px] lg:text-[52px] text-[#2B2B2B] font-bold leading-[130%]"
      >
        {{ $t("benifitsTitle") }}
      </h1>

      <ul class="grid lg:grid-cols-3 gap-10 lg:gap-0 justify between mt-10">
        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="0"
          class="flex flex-col-reverse lg:flex-col gap-9"
        >
          <img src="~/assets/images/Benifits1.svg" class="mx-auto" />
          <p
            class="text-[16px] lg:text-[20px] font-semibold text-center lg:mt-9"
          >
            {{ $t("benifitsItem1") }}
          </p>
        </li>
        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="200"
          class="flex flex-col-reverse lg:flex-col gap-9"
        >
          <img src="~/assets/images/Benifits2.svg" class="mx-auto" />
          <p
            class="text-[16px] lg:text-[20px] font-semibold text-center lg:mt-9"
          >
            {{ $t("benifitsItem2") }}
          </p>
        </li>
        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="400"
          class="flex flex-col-reverse lg:flex-col gap-9"
        >
          <img src="~/assets/images/Benifits3.svg" class="mx-auto" />
          <p
            class="text-[16px] lg:text-[20px] font-semibold text-center lg:mt-9"
          >
            {{ $t("benifitsItem3") }}
          </p>
        </li>
      </ul>
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
