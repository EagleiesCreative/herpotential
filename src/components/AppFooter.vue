<template>
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <RouterLink class="logo" to="/">
          <img src="/a.svg" alt="" style="height:2em;width:auto;vertical-align:middle;" /> HerPotential
        </RouterLink>
        <p style="margin-top:1rem;">Platform cerita dan pemberdayaan perempuan Indonesia. Kami percaya setiap perempuan berhak didengar, mengakses informasi yang mereka butuhkan, dan hidup dengan penuh keberanian.</p>
        <div class="social-links">
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="TikTok">tt</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Konten</h4>
        <ul>
          <li><RouterLink to="/#stories">Cerita Perempuan</RouterLink></li>
          <li><RouterLink to="/#info">Info Penting</RouterLink></li>
          <li><RouterLink to="/#hacks">Life Hacks</RouterLink></li>
          <li><RouterLink to="/#empowerment">Artikel Pemberdayaan</RouterLink></li>
          <li><RouterLink to="/#community">Komunitas</RouterLink></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Bantuan</h4>
        <ul>
          <li><a href="https://wa.me/628111129129" target="_blank" rel="noopener">SIMFONI PPA (129)</a></li>
          <li><a href="https://komnasperempuan.go.id/" target="_blank" rel="noopener">Komnas Perempuan</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 HerPotential. Dibuat dengan ♡ untuk perempuan Indonesia</span>
      <span>Bandung, Indonesia</span>
    </div>
  </footer>
</template>
