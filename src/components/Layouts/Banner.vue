<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel-wrapper relative">
    <!-- Video Background -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="@/assets/videos/test.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Carousel Component -->
    <Carousel
      :autoplay="3000"
      :loop="true"
      :wrap-around="true"
      :pause-autoplay-on-hover="true"
      class="relative cursor-pointer"
    >
      <Slide v-for="banner in banners" :key="banner.id">
        <div
          class="relative w-[50rem] h-[20rem] z-10 flex flex-col align-center p-4 bg-black bg-opacity-50 text-white max-h-[20rem]"
        >
          <h2 class="text-2xl font-semibold mb-2 text-left">
            {{ banner.title || 'Default Title' }}
          </h2>
          <p class="mb-4 text-left">
            {{ banner.content }}
          </p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const banners = [
  {
    id: 1,
    title: "Hello! I'm Gil",
    content:
      'This is my Portfolio'
  },
  {
    id: 2,
    title: '',
    content: 'This Webpage is created in Vue.js and Tailwind CSS'
  }
]
</script>