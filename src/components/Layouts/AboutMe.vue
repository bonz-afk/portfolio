<template>
  <main id="about" class="m-[20px] flex flex-col">
    <section>
      <Card>
        <template #header>
          <h2 class="text-2xl font-semibold mb-2 moving-text">Hello! I'm Gil</h2>
        </template>
        <template #body>
          <p class="mb-4 moving-text">
            I am a passionate web developer with a strong focus on creating engaging, user-friendly
            web applications. With 5 years of experience in the industry—3 years in full stack
            development and 2 years in front end development—I specialize in using modern
            technologies like Vue.js and AngularJS to build dynamic and responsive user interfaces.
          </p>
        </template>
      </Card>
    </section>
  </main>
</template>

<script setup>
import Card from '@/components/Card.vue'
</script>
