<template>
  <div class="py-5">
    <div class="container">
      <h1
        class="lg:text-[40px] text-[24px] lg:px-[180px] lg:leading-[130%] font-bold text-center"
      >
        {{ $t("aboutTitle") }}
      </h1>
      <div class="mt-10 grid lg:grid-cols-2 items-center">
        <img src="~/assets/images/about.svg" />

        <div>
          <div>
            <h1
              class="lg:text-[32px] text-[#454545] text-[20px] mt-5 lg:mt-[48px] font-semibold"
            >
              <span class="text-[#40A4BD]"> {{ $t("aboutHelpTitle1") }} </span>
              {{ $t("aboutHelpTitle2") }}
            </h1>
            <ul class="flex flex-col gap-5 lg:gap-3 mt-1">
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutHelpItem1") }}
                </p>
              </li>
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutHelpItem2") }}
                </p>
              </li>
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutHelpItem3") }}
                </p>
              </li>
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutHelpItem4") }}
                </p>
              </li>
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutHelpItem5") }}
                </p>
              </li>
            </ul>
          </div>
          <div class="lg:mt-6 mt-10">
            <h1
              class="lg:text-[24px] text-[#000] lg:text-start text-[20px] leading-[178%] font-semibold"
            >
              {{ $t("aboutOfferTitle") }}
            </h1>
            <ul class="flex flex-col gap-5 lg:gap-3 mt-1">
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutOfferItem1") }}
                </p>
              </li>
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutOfferItem2") }}
                </p>
              </li>
              <li class="flex gap-[5px] items-center">
                <i class="bx bx-check text-3xl text-[#40A4BD]"></i>
                <p class="text-[18px] lg:text-[20px]">
                  {{ $t("aboutOfferItem3") }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
