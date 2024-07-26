<template>
  <div>
    <header class="flex justify-between items-center py-4 px-[100px]">
      <div>
        <img src="@/assets/images/gmf.png" class="w-[150px] h-[40px] rounded cursor-pointer" />
      </div>
      <div class="hidden md:flex gap-5">
        <p
          :class="['font-bold cursor-pointer', { 'text-blue-500': selectedSection === 'About' }]"
          @click="selectSection('About')"
        >
          About
        </p>
        <p
          :class="['font-bold cursor-pointer', { 'text-blue-500': selectedSection === 'Contact' }]"
          @click="selectSection('Contact')"
        >
          Contact
        </p>
        <p
          :class="['font-bold cursor-pointer', { 'text-blue-500': selectedSection === 'Projects' }]"
          @click="selectSection('Projects')"
        >
          Projects
        </p>
        <component :is="currentIcon" @click="toggleDarkMode" class="w-[20px] cursor-pointer" />
      </div>
      <div class="md:hidden relative">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <transition name="slide">
          <div v-if="menuOpen" :class="[
            'absolute right-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            darkMode.value ? 'bg-[#2d3748]' : 'bg-[#f7fafc]'
          ]">
            <div class="py-1">
              <p
                :class="['block px-4 py-2 text-sm cursor-pointer', { 'text-blue-500': selectedSection === 'About' }, darkMode.value ? 'text-gray-100' : 'text-gray-700']"
                @click="selectSection('About'); toggleMenu()"
              >
                About
              </p>
              <p
                :class="['block px-4 py-2 text-sm cursor-pointer', { 'text-blue-500': selectedSection === 'Contact' }, darkMode.value ? 'text-gray-100' : 'text-gray-700']"
                @click="selectSection('Contact'); toggleMenu()"
              >
                Contact
              </p>
              <p
                :class="['block px-4 py-2 text-sm cursor-pointer', { 'text-blue-500': selectedSection === 'Projects' }, darkMode.value ? 'text-gray-100' : 'text-gray-700']"
                @click="selectSection('Projects'); toggleMenu()"
              >
                Projects
              </p>
              <component :is="currentIcon" @click="toggleDarkMode" class="w-[20px] cursor-pointer" />
            </div>
          </div>
        </transition>
      </div>
    </header>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import MoveUp from '@/components/MoveUp.vue'

// Initialize darkMode state
const darkMode = ref(false)
const selectedSection = ref('About')
const menuOpen = ref(false)

// Toggle the darkMode state and update the data-theme attribute
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light')
  localStorage.setItem('darkMode', darkMode.value.toString())
  console.log('Dark mode toggled:', darkMode.value)
}

const selectSection = (section) => {
  selectedSection.value = section
  const element = document.getElementById(section.toLowerCase())
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    darkMode.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

const currentIcon = computed(() => (darkMode.value ? MoonIcon : SunIcon))
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
