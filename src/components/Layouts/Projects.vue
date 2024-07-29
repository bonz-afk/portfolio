<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main
    id="projects"
    class="px-[20px] lg:gap-[5px] block lg:flex lg:justify-between lg:items-start w-full lg:block"
  >
    <section>
      <Card class="w-full max-w-[100rem] min-h-full lg:w-[30rem] lg:min-h-[40rem] lg:mb-5">
        <template #header>
          <h2 class="text-2xl font-semibold mb-2 moving-text">Projects</h2>
        </template>
        <template #body>
          <p class="mb-4 moving-text">
            I am a passionate web developer with a strong focus on creating engaging, user-friendly
          </p>
        </template>
      </Card>
    </section>
    <section class="flex-1 hidden lg:block">
      <Card class="w-full lg:min-h-[40rem]">
        <template #header>
          <h2 class="text-2xl font-semibold mb-2 moving-text">Projects</h2>
        </template>
        <template #body>
          <p class="mb-4 moving-text">
            I am a passionate web developer with a strong focus on creating engaging, user-friendly
          </p>
        </template>
      </Card>
    </section>
  </main>
</template>

<script setup>
import Card from '@/components/Card.vue'
</script>
