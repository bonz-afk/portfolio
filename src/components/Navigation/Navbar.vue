<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header class="flex justify-between items-center py-4 px-[20px]">
      <div>
        <img :src="logoSrc" class="w-[250px] h-[30px] rounded cursor-pointer hover:rounded-3xl hover:shadow-lg transition-all duration-300" />
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
        <button @click="toggleMenu" class="burger focus:outline-none">
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
          ]">
            <div class="burger-dropdown py-1">
              <p
                :class="['block px-4 py-2 text-sm cursor-pointer', { 'text-blue-500': selectedSection === 'About' }]"
                @click="selectSection('About'); toggleMenu()"
              >
                About
              </p>
              <p
                :class="['block px-4 py-2 text-sm cursor-pointer', { 'text-blue-500': selectedSection === 'Contact' }]"
                @click="selectSection('Contact'); toggleMenu()"
              >
                Contact
              </p>
              <p
                :class="['block px-4 py-2 text-sm cursor-pointer', { 'text-blue-500': selectedSection === 'Projects' }]"
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
    <section>
        <Banner/>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import Banner from '@/components/Layouts/Banner.vue'

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

// Dynamic imports for logo
const logoSrc = computed(() => {
  // return darkMode.value ? new URL('@/assets/images/dark-logo.png', import.meta.url).href : new URL('@/assets/images/light-logo.png', import.meta.url).href;
  return  new URL('@/assets/images/dark-logo.png', import.meta.url).href
});

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
