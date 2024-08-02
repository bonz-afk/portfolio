<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <vue-particles
      id="tsparticles"
      class="particles-bg"
      @particles-loaded="particlesLoaded"
      :options="particlesOptions"
    />
    <!-- Add other content here -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const particlesOptions = {
  id: 'tsparticles',
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    }
  },
  particles: {
    color: {
      value: '#948D9B'
    },
    links: {
      enable: false // Disable links between particles
    },
    move: {
      direction: 'bottom', // Move downwards to simulate rain
      enable: true,
      outModes: 'out',
      random: false,
      speed: 10, // Adjust speed for falling effect
      straight: true
    },
    number: {
      density: {
        enable: true,
        area: 800 // Adjust density
      },
      value: 100 // Number of particles
    },
    opacity: {
      value: 0.5 // Opacity of raindrops
    },
    shape: {
      type: 'circle' // Using circle as a base shape
    },
    size: {
      value: { min: 1, max: 2 } // Adjust size range for particles to simulate elongation
      // To mimic an oblong effect, you may need to adjust the min and max size values
    }
  },
  detectRetina: true
}
</script>
