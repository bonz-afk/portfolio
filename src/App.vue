<script setup></script>

<template>
  <section>
    <RouterView />
  </section>
  <MoveUp />
  <footer class="m-20">
    footer
  </footer>
</template>
<script setup>
  import MoveUp from "@/components/MoveUp.vue"
</script>
<style scoped></style>
