<template>
  <div class="">
    <Header class="fixed z-[30]"></Header>
    <Home class="relative z-[29]"/>
    <About />
    <How></How>
    <Benifits />
    <Prising />
    <Blog />
    <FAQ />
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
