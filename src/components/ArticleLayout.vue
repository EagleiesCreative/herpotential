<template>
  <!-- Minimal nav for article pages -->
  <nav>
    <RouterLink class="logo" to="/">
      <img src="/a.svg" alt="HerPotential" /> HerPotential
    </RouterLink>
    <RouterLink class="back-link" to="/">← Kembali ke Beranda</RouterLink>
  </nav>

  <slot />

  <!-- Simple article footer -->
  <footer class="simple">
    <RouterLink class="logo" to="/" style="color: var(--pink-2);">
      <img src="/a.svg" alt="" style="height:1.6em;filter:brightness(2)" /> HerPotential
    </RouterLink>
    <p>© 2025 HerPotential. Platform cerita & pemberdayaan perempuan Indonesia.</p>
    <RouterLink to="/">← Kembali ke Beranda</RouterLink>
  </footer>
</template>
