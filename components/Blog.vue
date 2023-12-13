<template>
  <div
    class="bg-[url('~/assets/images/Background.png')] bg-cover bg-center py-[100px]"
  >
    <div class="container py-[100px]">
      <h1
        class="text-center text-[24px] lg:text-[52px] text-[#454545] font-bold leading-[130%]"
      >
        Our blog
      </h1>
      <ul class="lg:grid-cols-3 grid gap-4 mt-10">
        <li class="p-6">
          <img class="w-full" src="~/assets/images/Image.png" />
          <NuxtLink to="/blog" class="flex w-full justify-between mt-8">
            <h1
              class="text-[24px] leading-[32px] w-[80%] items-center text-[#2D2D2D] font-semibold"
            >
              Lorem Impsum dolor sit amet
            </h1>
            <img class="h-[30px]" src="~/assets/images/arrow-up-right.png" />
          </NuxtLink>
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat.
          </p>

          <div class="flex mt-10 gap-4">
            <img
              class="w-10 h-10 rounded-full"
              src="~/assets/images/Avatar.png"
            />
            <div>
              <h2>Yulduz Normuradova</h2>
              <h3>20 Jan 2022</h3>
            </div>
          </div>
        </li>
        <li class="p-6">
          <img class="w-full" src="~/assets/images/Image-1.png" />
          <NuxtLink to="/blog" class="flex w-full justify-between mt-8">
            <h1
              class="text-[24px] leading-[32px] w-[80%] items-center text-[#2D2D2D] font-semibold"
            >
              Lorem Impsum dolor sit amet
            </h1>
            <img class="h-[30px]" src="~/assets/images/arrow-up-right.png" />
          </NuxtLink>
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat.
          </p>

          <div class="flex mt-10 gap-4">
            <img
              class="w-10 h-10 rounded-full"
              src="~/assets/images/Avatar-1.png"
            />
            <div>
              <h2>Yulduz Normuradova</h2>
              <h3>20 Jan 2022</h3>
            </div>
          </div>
        </li>
        <li class="p-6">
          <img class="w-full" src="~/assets/images/Image-2.png" />
          <NuxtLink to="/blog" class="flex w-full justify-between mt-8">
            <h1
              class="text-[24px] leading-[32px] w-[80%] items-center text-[#2D2D2D] font-semibold"
            >
              Lorem Impsum dolor sit amet
            </h1>
            <img class="h-[30px]" src="~/assets/images/arrow-up-right.png" />
          </NuxtLink>
          <p class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat.
          </p>

          <div class="flex mt-10 gap-4">
            <img
              class="w-10 h-10 rounded-full"
              src="~/assets/images/Avatar-2.png"
            />
            <div>
              <h2>Yulduz Normuradova</h2>
              <h3>20 Jan 2022</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
h3 {
  color: #6f6f6f;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
h2 {
  color: #2d2d2d;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}
li {
  background: var(--White, #fff);

  /* Shadow/lg */
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
}
p {
  color: #505050;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
</style>
