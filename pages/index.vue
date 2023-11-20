<template>
  <div class="">
    <Header></Header>
    <Home />
    <About />
    <How></How>
    <Benifits />
    <Prising />
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "BILDIR",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
