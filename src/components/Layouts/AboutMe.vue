<template>
  <section id="about" class="my-[50px] px-[20px] md:px-[20px] lg:px-[20px] mx-auto w-full max-w-[80rem]">
    <div class="flex flex-col p-[20px] md:flex-row items-start class-border">
      <!-- About Me Section -->
      <div
        :class="[
          'flex-1 md:pr-8 md:px-[20px] md:border-r-4 mb-4 md:mb-0',
          {
            'border-white': effect.bgEffects,
            'border-black': !effect.bgEffects,
          }
        ]"
      >
        <h2 class="text-2xl font-semibold mb-2 moving-text">Hello! I'm Gil</h2>
        <p>
          I am a passionate web developer with a strong focus on creating engaging, user-friendly
          web applications. With 5 years of experience in the industry—3 years in full stack
          development
        </p>
        <p>
          and 2 years in front end development—I specialize in using modern technologies like Vue.js
          and AngularJS to build dynamic and responsive user interfaces.
        </p>
      </div>
      <div class="flex-1 pl-0 md:pl-8">
        <h2 class="text-2xl font-semibold mb-2 moving-text">Tech Used for Making This Webpage</h2>
        <ul class="list-disc pl-5">
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>TSParticles for background</li>
          <li>Vue.js</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useEffectChanger } from '@/stores/EffectChanger'

const effect = useEffectChanger()
</script>
