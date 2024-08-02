<template>
  <LightningEffect>
    <img src="@/assets/images/sun.png" v-if="!effectChangerStore.bgEffects" style="position: absolute; right: 0;top: -220px;" />

    <section>
      <RouterView />
    </section>
    <footer class="m-20 z-10">
      footer
    </footer>
    <Particles v-if="effectChangerStore.bgEffects" />
  </LightningEffect>
  <MoveUp />
</template>

<script setup>
import {onMounted, ref, watch} from "vue"
import LightningEffect from "@/components/LightningEffect.vue";
import MoveUp from "@/components/MoveUp.vue";
import Particles from "@/components/Particles.vue";
import { useEffectChanger } from '@/stores/EffectChanger'

const effectChangerStore = useEffectChanger()
onMounted(() => {
  console.log(effectChangerStore.bgEffects)
})

</script>

<style scoped>
/* Ensure section and footer have appropriate z-index values */
section, footer {
  position: relative;
  z-index: 1; /* Higher than the particles background */
}
</style>
