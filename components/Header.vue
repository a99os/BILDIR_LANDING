<template>
  <div class="bg-[#fff] backdrop-blur-[5px] w-screen fixed z-[10] h-[97px]">
    <!-- Dropdown menus -->
    <div
      id="dropdownHover1"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <button
          @click="selectLangEl('ru')"
          class="px-4 py-2 flex items-center gap-2 justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <i
            :class="locale == 'ru' ? 'block' : 'hidden opacity-0'"
            class="bx bx-check"
          ></i>
          Russian</button
        ><button
          @click="selectLangEl('en')"
          class="px-4 py-2 flex items-center gap-2 justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <i
            :class="locale == 'en' ? 'block' : 'hidden opacity-0'"
            class="bx bx-check"
          ></i>
          English</button
        ><button
          @click="selectLangEl('uz')"
          class="px-4 py-2 flex items-center gap-2 justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <i
            :class="locale == 'uz' ? 'block' : 'hidden opacity-0'"
            class="bx bx-check"
          ></i>
          Uzbek
        </button>
      </ul>
    </div>
    <div
      id="dropdown3"
      class="hidden bg-white z-[8] h-screen w-screen relative bg px-3 py-10"
    >
      <div class="flex flex-col h-[70%] justify-between">
        <div class="flex flex-col gap-[20px]">
          <a
            @click="hideModal"
            href="#introduction"
            class="text-[20px] font-semibold leading-8 text-[#353535]"
          >
            Introduction
          </a>
          <div class="h-[2px] w-full bg-black"></div>
          <a
            href="#How-it-works"
            @click="hideModal"
            class="text-[20px] font-semibold leading-8 text-[#353535]"
          >
            How it works
          </a>
          <div class="h-[2px] w-full bg-black"></div>
          <a
            @click="hideModal"
            href="#Report-Submission"
            class="text-[20px] font-semibold leading-8 text-[#353535]"
          >
            Report Submission
          </a>
          <div class="h-[2px] w-full bg-black"></div>
          <NuxtLink
            @click="hideModal"
            to="#blog"
            class="text-[20px] font-semibold leading-8 text-[#353535]"
          >
            Blog
          </NuxtLink>
          <div class="h-[2px] w-full bg-black"></div>
          <a
            @click="hideModal"
            href="#Adminstration"
            class="text-[20px] font-semibold leading-8 text-[#40A4BD]"
          >
            Adminstration
          </a>
          <div class="h-[2px] w-full bg-black"></div>
        </div>

        <div class="flex">
          <div
            class="text-[#000] text-4xl duration-300 w-full justify-between grid grid-cols-3 items-center py-[9px] rounded-b-[2px]"
          >
            <button
              id="en"
              @click="selectLangEl('en')"
              :class="locale == 'en' ? 'bg-[#00A9D3] text-[#fff]' : ''"
              class="px-3 py-2 flex items-center"
            >
              <p class="text-lg">🇬🇧 English</p>
            </button>
            <button
              id="uz"
              @click="selectLangEl('uz')"
              :class="locale == 'uz' ? 'bg-[#00A9D3] text-[#fff]' : ''"
              class="px-3 py-2 flex items-center"
            >
              <p class="text-lg">🇺🇿 Uzbek</p>
            </button>
            <button
              id="ru"
              @click="selectLangEl('ru')"
              :class="locale == 'ru' ? 'bg-[#00A9D3] text-[#fff]' : ''"
              class="px-3 py-2 flex items-center"
            >
              <p class="text-lg">🇷🇺 Russian</p>
            </button>
          </div>
        </div>
        <a
          @click="hideModal"
          href="#contact-us"
          class="px-[36px] py-[8px] text-white bg-[#40A4BD] hover:bg-[#50bbd6] text-[20px] text-center rounded-[8px]"
        >
          <!-- {{ $t("contactUs") }} -->
          Contact Us
        </a>
      </div>
    </div>
    <div class="container">
      <div class="flex justify-between lg:gap-[50px] h-[97px] items-center">
        <a href="/" class="lg:scale-150">
          <img src="~/assets/images/logo.svg" />
        </a>
        <div class="hidden gap-[30px] lg:flex items-center">
          <a
            href="/#introduction"
            class="text-[18px] duration-300 hover:border-[#40A4BD] border-b-2 border-[#fff] text-[#353535] font-medium"
          >
            Introduction </a
          ><a
            href="/#How-it-works"
            class="text-[18px] duration-300 hover:border-[#40A4BD] border-b-2 border-[#fff] text-[#353535] font-medium"
          >
            How it works </a
          ><a
            href="/#Report-Submission"
            class="text-[18px] duration-300 hover:border-[#40A4BD] border-b-2 border-[#fff] text-[#353535] font-medium"
          >
            Report Submission </a
          ><NuxtLink
            to="/blog"
            class="text-[18px] duration-300 hover:border-[#40A4BD] border-b-2 border-[#fff] text-[#353535] font-medium"
          >
            Blog </NuxtLink
          ><a
            href="/#Adminstration"
            class="text-[18px] duration-300 hover:border-[#40A4BD] border-b-2 border-[#fff] text-[#40A4BD] font-medium"
          >
            Adminstration
          </a>
          <button
            id="dropdownHoverButton1"
            data-dropdown-toggle="dropdownHover1"
            data-dropdown-trigger="hover"
            class="text-[#353535] text-xl font-[gothamBold] duration-300 flex items-center py-[9px] rounded-b-[2px]"
            type="button"
          >
            <h2 class="px-3 flex items-center">
              {{
                locale == "en"
                  ? "🇬🇧 English"
                  : locale == "uz"
                  ? "🇺🇿 Uzbek"
                  : "🇷🇺 Russian"
              }}
              <svg
                class="w-2.5 h-2.5 ml-2.5"
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
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </h2>
          </button>
        </div>

        <a
          href="#contact-us"
          class="px-[36px] lg:block hidden py-[8px] text-white bg-[#40A4BD] hover:bg-[#50bbd6] rounded-[8px]"
        >
          <!-- {{ $t("contactUs") }} -->
          Contact Us
        </a>

        <div class="lg:hidden">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown3"
            class="bx bx-menu block lg:hidden z-10 relative text-[#40A4BD] text-5xl"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { initFlowbite } from "flowbite";
import { useI18n } from "vue-i18n";

let route = useRoute();
let locale = ref(useI18n({ useScope: "global" }).locale);
function selectLang(e) {
  let data = e.target.id;
  e.target.id = locale.value;
  locale.value = data;
  localStorage.setItem("lang", data);
}

function hideModal() {
  const $targetEl = document.getElementById("dropdown3");
  const modal = new Modal($targetEl);

  modal.hide();
}
function selectLangEl(e) {
  locale.value = e;
  localStorage.setItem("lang", e);
}
onMounted(() => {
  locale.value = localStorage.getItem("lang") || "en";
  initFlowbite();
});
</script>
<style></style>
