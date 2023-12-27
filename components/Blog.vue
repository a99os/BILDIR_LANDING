<template>
  <div
    class="bg-[url('~/assets/images/Background.png')] bg-cover bg-center py-[100px]"
  >
  <div class="container py-[100px]">
      <h1
        class="text-center text-[24px] lg:text-[52px] text-[#2B2B2B] font-bold leading-[130%]"
      >
        {{ $t("ourBlog") }}
      </h1>
      <ul class="lg:grid-cols-3 grid gap-4">
        <li v-for="blog in blogs" :key="blog.id"
        class="p-6">
          <img class="w-full" :src="blog.image" />
          <NuxtLink to="/blog" class="flex w-full justify-between mt-8">
            <h1
              class="text-[24px] leading-[32px] w-[80%] items-center text-[#2D2D2D] font-semibold"
            >
            {{ blog.title  }}
            </h1>
            <img class="h-[30px]" src="~/assets/images/arrow-up-right.png" />
          </NuxtLink>
          <p class="mt-3">
          {{ blog.description.slice(0,60) + '...'  }}
          </p>

          <div class="flex mt-10 gap-4">
            <img
              class="w-10 h-10 rounded-full"
              :src="blog.author_profile_image"
            />
            <div>
              <h2>{{blog.author}}</h2>
              <h3>{{ blog.date_formatted }}</h3>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>
<script  setup>

import axios from "~/api/axios-drf";
let blogs = ref([]);
let language = process.client ? localStorage.getItem("lang") : null;
async function getBlog() {
  const res = await axios.get(`/blogs/${language}`);
  console.log(res.data);
  blogs.value = res.data.blogs;
}

onMounted(() => {
  getBlog();
});


</script>
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
