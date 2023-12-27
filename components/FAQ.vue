<template>
  <div class="relative ">
    <div id="Report-Submission" class="absolute -top-[0px]"></div>
    <div id="FAQ" class="absolute -top-[10%]"></div>

    <div class="container">
      <h1 class="font-['DM Sans'] text-[#454545] text-center text-[36px] font-semibold">
        {{ $t("faqTitle") }}
      </h1>
      <h1
        class="font-['DM Sans'] mt-4 text-[#667085] text-center text-[24px] font-semibold"
      >
        {{ $t("faqSubTitle") }}
      </h1>

      <div
        id="accordion-collapse"
        class="lg:mt-[54px] mt-10 lg:w-[896px] lg:mx-auto"
        data-accordion="collapse"
      >
      <div
          v-for="faq in faqs"
          :key="faq.id"
          class="bg-white acc mx-auto w-full"
        >
          <h2 :id="`accordion-collapse-heading-${faq.id}`">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium"
              :data-accordion-target="`#accordion-collapse-body-${faq.id}`"
              :aria-controls="`accordion-collapse-body-${faq.id}`"
            >
              <span class="text-start piramid">{{ faq.question }}</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-10"
            class="hidden w-full"
            aria-labelledby="accordion-collapse-heading-10"
          >
            <div
              class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
            >
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>    

      </div>
    </div>
  </div>
</template>
<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import axios from "~/api/axios-drf";

let faqs = ref([]);
let language = process.client ? localStorage.getItem("lang") : null;

async function getFAQ() {
  const res = await axios.get(`/faq/${language}`);
  console.log("faqs from api!");
  console.log(res.data);
  faqs.value = res.data.faq;
}

onMounted(() => {
  initFlowbite();
  getFAQ();
});
</script>
<style scoped>
.acc {
  border-radius: 14px;
  background: #fff;
  /* Buttons/ Color - Default */
  box-shadow: 0px 6px 16px 0px rgba(74, 58, 255, 0.19);
}
</style>
