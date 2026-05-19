<template>
  <nav>
    <RouterLink class="logo" to="/">
      <img src="/a.svg" alt="HerPotential" /> HerPotential
    </RouterLink>

    <ul class="nav-links" :class="{ open: navOpen }" id="nav-links">
      <li><RouterLink to="/#stories"     @click="close">Cerita</RouterLink></li>
      <li><RouterLink to="/#community"   @click="close">Komunitas</RouterLink></li>
      <li><RouterLink to="/#info"        @click="close">Info</RouterLink></li>
      <li><RouterLink to="/#empowerment" @click="close">Pemberdayaan</RouterLink></li>
    </ul>

    <RouterLink to="/#share" class="nav-pill" @click="close">Kirim Cerita ♀</RouterLink>

    <button class="hamburger" id="nav-hamburger" :class="{ open: navOpen }" @click="navOpen = !navOpen" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const navOpen = ref(false)
function close() { navOpen.value = false }
</script>
