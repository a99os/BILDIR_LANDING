<template>
  <div class="pt-[150px] lg:py-[100px]">
    <div class="container">
      
      <h1><!--{{data.title}}-->Lorem ipsum dolor</h1>
      <h2 class="mt-5">
        <!--{{ data.description.split("\n")[0] }}-->
        Ut et, velit, euismod commodo, laoreet ullamcorper dignissim donec in.
        Pretium eget faucibus sagittis ultricies. Enim dictum tortor ut faucibus
        amet ac dui auctor ipsum. Massa sed mi lorem ut vel. Turpis sed nulla
        nam adipiscing praesent. Tortor posuere gravida in rhoncus, quis
        adipiscing aliquet leo orci. Duis ipsum, consequat ac commodo viverra.
      </h2>

      <div
        class="bg-[url('~/assets/images/Image.png')] w-full h-[480px] rounded-lg bg-center bg-cover mt-6"
      > <!--img :src data.image--></div>
      
      <p class="mt-6">
        <!--v-for="item in data.description.split("\n").splice(0, 1)"-->
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        convallis elit eget aliquam laoreet vel, sagittis mattis enim. Iaculis
        quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur
        molestie cras. Malesuada quam cursus blandit amet. Odio nisi, commodo
        feugiat purus. In rhoncus, elementum donec neque. Feugiat ultrices duis
        mattis imperdiet hac facilisis turpis amet. Gravida egestas nec id
        euismod elit. Sit laoreet nunc, nec iaculis nisl. Convallis donec amet,
        id ullamcorper sapien justo, congue mauris. Ut et, velit, euismod
        commodo, laoreet ullamcorper dignissim donec in. Pretium eget faucibus
        sagittis ultricies.
        <!--{{ item }}-->
      </p>

    </div>
  </div>
</template>
<script setup>
import axios from "~/api/axios-drf";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
let data = ref(null);
let language = process.client ? localStorage.getItem("lang") : null;
// let id= $route.params.id;

async function getBlogDetail() {
  const res = await axios.get("/api/v1/blog/" + language + "/" + id + "/");
  console.log(res.data);
  data.value = res.data;
}

onMounted(async () => {
  
  getBlogDetail();
});
</script>
<style>
p {
  color: #000;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%; /* 31px */
}
h1 {
  color: #000;
  font-family: Lato;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
h2 {
  color: #000;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%; /* 31px */
}
</style>
