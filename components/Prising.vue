<template>
  <div class="py-10">
    <div class="container">
      <h1
        data-aos="fade-left"
        data-aos-duration="500"
        class="text-center text-[24px] lg:text-[52px] text-[#454545] font-bold leading-[130%]"
      >
        {{ $t("prasing") }}
      </h1>

      <ul class="grid lg:grid-cols-3 gap-5 mt-10">
        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="0"
          class="card py-10"
        >
          <div class="flex px-10 items-center gap-5">
            <img src="~/assets/images/Group39553.png" />
            <div>
              <h2>{{ $t("prasing1Title") }}</h2>
              <h3>{{$t("pricing1Name")}}</h3>
            </div>
          </div>

          <h4 class="px-10 mt-[18px]">
            {{ $t("pricing1Description") }}
          </h4>

          <div class="flex px-10 gap-[10px] items-center mt-[18px]">
            <p>${{ $t("pricing1Price")}}</p>
            <pp>/monthly</pp>
          </div>

          <h5 class="px-10 mt-[17px]">{{$t("pricing1Header")}}</h5>

          <ul class="mt-6 px-10 mx-auto">
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{ $t("pricing1Item1") }}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing1Item2")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing1Item3")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing1Item4")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing1Item5")}}</h6>
            </li>
          </ul>

          <button
            class="w-[80%] block mt-10 py-[26px] rounded-[96px] bg-[#40A4BD] mx-auto"
          >
            <p>{{ $t("getStart") }}</p>
          </button>
        </li>
        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="400"
          class="card1 py-10"
        >
          <div class="flex px-10 items-center gap-5">
            <img src="~/assets/images/Group39554.png" />
            <div>
              <h2 class="h2h2">{{ $t("prasing2Title") }}</h2>
              <h3 class="h3h3">{{ $t("pricing2Name")}}</h3>
            </div>
          </div>

          <h4 class="px-10 h4h4 mt-[18px]">
            {{ $t("pricing2Description")}}
          </h4>

          <div class="flex px-10 gap-[10px] items-center mt-[18px]">
            <p class="h5h5">{{ $t("pricing2Price")}}</p>
            <pp class="h6h6">/monthly</pp>
          </div>

          <h5 class="h7h7 px-10 mt-[17px]">{{ $t("pricing2Header") }}</h5>

          <ul class="mt-6 px-10 mx-auto">
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="h8h8">{{$t("pricing2Item1")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="h8h8">{{$t("pricing2Item2")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="h8h8">{{$t("pricing2Item3")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="h8h8">{{$t("pricing2Item4")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="h8h8">{{$t("pricing2Item5")}}</h6>
            </li>
          </ul>

          <button
            class="w-[80%] block mt-10 py-[26px] rounded-[96px] btn bg-[#fff] text-[#40A4BD] mx-auto"
          >
            <p class="btn">{{ $t("getStart") }}</p>
          </button>
        </li>
        <li
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="800"
          class="card py-10"
        >
          <div class="flex px-10 items-center gap-5">
            <img src="~/assets/images/Group39555.png" />
            <div>
              <h2>{{ $t("prasing3Title") }}</h2>
              <h3>{{$t("pricing3Name")}}</h3>
            </div>
          </div>

          <h4 class="px-10 mt-[18px]">
            {{$t("pricing3Description")}}
          </h4>

          <div class="flex px-10 gap-[10px] items-center mt-[18px]">
            <p>{{$t("pricing3Price")}}</p>
            <pp>/monthly</pp>
          </div>

          <h5 class="px-10 mt-[17px]">{{$t("pricing3Header")}}</h5>

          <ul class="mt-6 px-10 mx-auto">
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing3Item1")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing3Item2")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing3Item3")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing3Item4")}}</h6>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <div
                class="rounded-full bg-[#40A4BD] w-[26px] flex justify-center items-center h-[26px]"
              >
                <i class="bx bx-check text-white mx-auto text-xl"></i>
              </div>
              <h6 class="">{{$t("pricing3Item5")}}</h6>
            </li>
          </ul>

          <button
            class="w-[80%] block mt-10 py-[26px] rounded-[96px] bg-[#40A4BD] mx-auto"
          >
            <p>{{ $t("getStart") }}</p>
          </button>
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

<style scoped>
.h8h8 {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
}
.h7h7 {
  color: #fff;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}
.h6h6 {
  color: var(--neutral-400, #d9dbe9);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
}
.h5h5 {
  color: var(--neutral-100, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px; /* 122.222% */
}
.h4h4 {
  color: var(--neutral-400, #d9dbe9);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
}
button p {
  color: var(--neutral-100, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* Text Single/200/Bold */
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}

h6 {
  color: var(--neutral-800, #170f49);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
}
h5 {
  color: var(--neutral-800, #170f49);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}
pp {
  color: var(--neutral-600, #6f6c90);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
}
p {
  color: var(--neutral-800, #170f49);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: 66px; /* 122.222% */
}
h4 {
  color: var(--neutral-600, #6f6c90);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
}
h2 {
  color: var(--neutral-600, #6f6c90);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
}
.h3h3 {
  color: var(--neutral-100, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; /* 145.833% */
}
h3 {
  color: var(--neutral-800, #170f49);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; /* 145.833% */
}
.h2h2 {
  color: var(--neutral-300, #eff0f6);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
}
.card {
  border-radius: 24px;
  border: 1px solid var(--neutral-300, #eff0f6);
  background: var(--neutral-100, #fff);

  /* General/Shadow 02 */
  box-shadow: 0px 2px 12px 0px rgba(20, 20, 43, 0.08);
}

.card1 {
  border-radius: 24px;
  border: 1px solid var(--neutral-300, #eff0f6);
  background: var(--primary_1, #40a4bd);

  /* General/Shadow 02 */
  box-shadow: 0px 2px 12px 0px rgba(20, 20, 43, 0.08);
}
.btn {
  color: var(--primary_1, #40a4bd);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* Text Single/200/Bold */
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
}
</style>
