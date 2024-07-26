<script setup></script>

<template>
  <section>
    <RouterView />
  </section>
  <section>
    <main class="p-4 flex flex-col items-center space-y-4">
      <div class="max-w-lg w-full p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">Introduction</h2>
        <p class="mb-4">
          This is a simple dark mode example with clear color differentiation and enhanced design
          elements.
        </p>
      </div>
      <div class="max-w-lg w-full p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">Features</h2>
        <ul class="list-disc list-inside">
          <li>Smooth color transition</li>
          <li>Persistent dark mode setting</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </main>
    <MoveUp />
  </section>

</template>
<script setup>
  import MoveUp from "@/components/MoveUp.vue"
</script>
<style scoped></style>
