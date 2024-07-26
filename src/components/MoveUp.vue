<template>
  <button
    v-show="showScrollTop"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-opacity duration-300"
    aria-label="Scroll to top"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7-7-7 7"></path>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Define a ref for showing the scroll-to-top button
const showScrollTop = ref(false)

// Function to scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  const shouldShow = window.scrollY > 10
  showScrollTop.value = shouldShow
  console.log('Scroll Position:', window.scrollY, 'Show Scroll Top:', showScrollTop.value)
}

// Add scroll event listener on component mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() 
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
button {
  z-index: 1000;
  opacity: 1;
}
</style>
