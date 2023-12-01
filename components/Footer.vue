<template>
  <div class="py-10">
    <div class="container">
      <ul
        class="flex text-[16px] justify-center text-[#6B7280] duration-300 flex-col lg:flex-row justif-center items-center gap-5 lg:gap-10 leading-6 font-['Inter']"
      >
        <li>
          <a href="#Our-story" class="hover:text-[#000]">{{ $t("story") }}</a>
        </li>
        <li>
          <a href="#Pricing" class="hover:text-[#000]">{{ $t("pricing") }}</a>
        </li>
        <li>
          <a href="#Blog" class="hover:text-[#000]">{{ $t("Blog") }}</a>
        </li>
        <li>
          <a href="#Contact-us" class="hover:text-[#000]">{{
            $t("ContactUs")
          }}</a>
        </li>
      </ul>

      <a
        href="https://alulastra.com/"
        target="_blank"
        class="text-[16px] block hover:text-black leading-6 text-[#9CA3AF] text-center mt-8"
      >
        © 2023 Alulastra, Inc. All rights reserved.
      </a>
    </div>
  </div>
</template>
