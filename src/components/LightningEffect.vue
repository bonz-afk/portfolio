<template>
  <div class="app-container">
    <!-- Lightning effect overlay -->
    <div
      v-if="showLightning && isDarkMode"
      class="lightning-overlay"
      :style="{ backgroundImage: `url(${currentImage})`, left: currentLeft }"
    ></div>
    <!-- Slot for child components -->
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, watch, computed, onUnmounted } from 'vue'
import { useEffectChanger } from '@/stores/EffectChanger'

// Import images
import lightning1 from '@/assets/images/lightning.png'
import lightning2 from '@/assets/images/lightning2.png'
import lightning3 from '@/assets/images/lightning3.png'

// Define the reactive properties
const showLightning = ref(false)
const currentImage = ref('')
const currentLeft = ref('0') // Left position for the lightning image

// Define the array of images
const images = [lightning1, lightning2, lightning3]

// Function to toggle the lightning effect visibility
const toggleLightning = () => {
  showLightning.value = !showLightning.value
  // Select a random image from the array
  const randomIndex = Math.floor(Math.random() * images.length)
  currentImage.value = images[randomIndex]
  // Select a random horizontal position (left, center, right)
  const positions = ['0', '50%', '100%']
  currentLeft.value = positions[Math.floor(Math.random() * positions.length)]
}

// Use the Pinia store
const effectChangerStore = useEffectChanger()

// Computed property to determine if dark mode is enabled
const isDarkMode = computed(() => effectChangerStore.bgEffects)

// Watch for changes in dark mode to start/stop the interval
let intervalId = null

if (isDarkMode.value) {
    // Start the interval if dark mode is enabled
    intervalId = setInterval(toggleLightning, 1000)
  }

watch(isDarkMode, (darkMode) => {
  if (darkMode) {
    // Start the interval if dark mode is enabled
    intervalId = setInterval(toggleLightning, 1000)
  } else {
    // Stop the lightning effect if light mode
    showLightning.value = false
    // Clear the interval when switching to light mode
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }
})

// Clean up interval on component unmount
onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh; /* Ensure it covers the full viewport height */
}

.lightning-overlay {
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-size: contain; /* Adjust background size as needed */
  background-repeat: no-repeat;
  opacity: 0.7; /* Adjust opacity for effect */
  pointer-events: none; /* Ensure it doesn't block interactions */
  z-index: 1; /* Ensure it's on top of the content */
  transition: opacity 0.5s, left 0.5s; /* Smooth transition for appearance/disappearance and position change */
}
</style>
