import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEffectChanger = defineStore('EffectChanger', () => {
  const bgEffects = ref(localStorage.getItem("darkMode") === "true")



  return { bgEffects }
})
