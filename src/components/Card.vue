<template>
    <div class="card-bg w-full p-6 rounded-lg shadow-lg flex">
      <div class="flex-1">
        <section class="mb-2">
          <slot name="header"></slot>
        </section>
        <main>
          <slot name="body"></slot>
        </main>
      </div>
      <div v-if="$slots.image" class="ml-4 flex-shrink-0 hidden lg:block">
        <slot name="image"></slot>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  </style>
  