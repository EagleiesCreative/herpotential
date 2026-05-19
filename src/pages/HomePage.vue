<template>
  <AppNav />
  <!-- HOTLINE BANNER -->
  <div class="resource-banner">
    <p>🔔 <strong>Butuh bantuan segera?</strong> Layanan dukungan perempuan tersedia 24 jam</p>
    <div class="resource-links">
      <a href="https://wa.me/628111129129" class="res-link">📞 SIMFONI PPA: 129</a>
      <a href="https://komnasperempuan.go.id/" class="res-link">Komnas Perempuan</a>
    </div>
  </div>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-text">
      <div class="hero-tag">wadah suara perempuan indonesia</div>
      <h1>ceritamu<br>penting,<br><em>suaramu</em> nyata</h1>
      <p class="hero-sub">Platform untuk berbagi cerita, menemukan informasi penting, dan saling menguatkan — karena
        setiap perempuan berhak didengar dan berdaya.</p>
      <div class="btn-group">
        <RouterLink to="/#stories" class="btn-primary">Baca Cerita Mereka</RouterLink>
        <RouterLink to="/#share" class="btn-ghost">Bagikan Ceritamu</RouterLink>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-card-stack">
        <div class="hcard hcard-1">
          <div class="hcard-label">✦ cerita terbaru</div>
          <h3>"Saya berhenti minta maaf karena terlalu ambisius"</h3>
          <p>— Rena, 27, founder startup</p>
        </div>
        <div class="hcard hcard-2">
          <div class="hcard-img">💪</div>
          <div class="hcard-label">pemberdayaan</div>
          <h3>Hak-hak perempuan yang wajib kamu tahu</h3>
          <p>Panduan lengkap dari para ahli hukum</p>
        </div>
        <div class="hcard hcard-3">
          <div class="hcard-label">✦ komunitas</div>
          <h3>+12.400 perempuan sudah berbagi</h3>
        </div>
      </div>
    </div>
  </section>

  <!-- TICKER -->
  <div class="ticker">
    <div class="ticker-inner">
      <span class="ticker-item">perempuan berdaya, bangsa maju</span>
      <span class="ticker-item">ceritamu menginspirasi ribuan</span>
      <span class="ticker-item">kamu tidak sendirian</span>
      <span class="ticker-item">keberanianmu adalah kekuatanmu</span>
      <span class="ticker-item">batas itu kamu yang tentukan</span>
      <span class="ticker-item">setara bukan pilihan, itu hak</span>
      <span class="ticker-item">perempuan berdaya, bangsa maju</span>
      <span class="ticker-item">ceritamu menginspirasi ribuan</span>
      <span class="ticker-item">kamu tidak sendirian</span>
      <span class="ticker-item">keberanianmu adalah kekuatanmu</span>
      <span class="ticker-item">batas itu kamu yang tentukan</span>
      <span class="ticker-item">setara bukan pilihan, itu hak</span>
    </div>
  </div>

  <!-- FEATURED CERITA -->
  <section class="featured" id="stories">
    <div class="section-label">pilihan editor</div>
    <div class="section-title">Cerita yang Harus Kamu Baca</div>

    <div class="featured-grid">
      <RouterLink to="/post/reyva-210510250074-1" class="article-big">
        <div class="article-big-img" style="background: linear-gradient(135deg, var(--pink-1), var(--pink-2));">
          👩‍💼
          <span class="badge badge-white">Karier & Ambisi</span>
        </div>
        <div class="article-big-body">
          <h2>Saya perempuan pertama yang jadi direktur di perusahaan ini — inilah yang benar-benar terjadi</h2>
          <p>Bukan cerita Cinderella. Perjalanan Dewi Kusuma penuh benturan nyata — dari diremehkan dalam rapat, gaji
            yang tidak setara, hingga akhirnya mengubah budaya perusahaan dari dalam.</p>
          <div class="article-meta">
            <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">RE</div>
  <div>
    <div>Reyva keisya putri s</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250074</div>
  </div>
</div>
            
            
            
            <span>Mei 2025</span>
          </div>
        </div>
      </RouterLink>

      <div class="article-small-stack">
        <RouterLink to="/post/kayla-210510250072-1" class="article-small">
          <div class="article-small-thumb thumb-lilac">⚖️</div>
          <div class="article-small-info">
            <span class="badge badge-lilac">Hak & Hukum</span>
            <h3>Apa yang bisa kamu lakukan jika mengalami kekerasan di tempat kerja</h3>
            <p>Panduan Hukum</p>
          </div>
        </RouterLink>
        <RouterLink to="/post/kayla-210510250072-2" class="article-small">
          <div class="article-small-thumb thumb-mint">🏥</div>
          <div class="article-small-info">
            <span class="badge badge-mint">Kesehatan</span>
            <h3>Kenapa dokter sering tidak percaya rasa sakit perempuan — dan cara mengatasinya</h3>
            <p>Kesehatan</p>
          </div>
        </RouterLink>
        <RouterLink to="/post/kayla-210510250072-3" class="article-small">
          <div class="article-small-thumb thumb-peach">💰</div>
          <div class="article-small-info">
            <span class="badge badge-peach">Finansial</span>
            <h3>Cara negosiasi gaji tanpa rasa bersalah — dari perempuan untuk perempuan</h3>
            <p>Karier</p>
          </div>
        </RouterLink>
        <RouterLink to="/post/kayla-210510250072-4" class="article-small">
          <div class="article-small-thumb thumb-pink">🧠</div>
          <div class="article-small-info">
            <span class="badge badge-pink">Mental Health</span>
            <h3>Berhenti jadi "perempuan yang kuat" sendirian — kenapa minta tolong itu berani</h3>
            <p>Kesehatan Mental</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- SUARA PEREMPUAN — STORY CARDS -->
  <section class="stories" id="community">
    <div class="stories-header">
      <div>
        <div class="section-label">dari komunitas</div>
        <div class="section-title">Suara Mereka</div>
        <p class="section-sub" style="margin-top: 0.4rem;">Cerita nyata dari perempuan Indonesia di seluruh penjuru
          negeri.</p>
      </div>
      <RouterLink to="/semua-cerita" class="btn-ghost">Semua cerita →</RouterLink>
    </div>

    <div class="story-grid">
      <RouterLink to="/post/kayla-210510250080-1" class="story-card">
        <div class="story-card-top top-c1">
          🎓
          
        </div>
        <div class="story-card-body">
          <span class="badge badge-pink">Pendidikan</span>
          <h3>Saya kuliah sambil kerja 2 shift — dan tidak ada yang percaya saya bisa lulus cumlaude</h3>
          <p>Kisah Sari dari Makassar yang membuktikan bahwa kemiskinan bukan penghalang mimpi.</p>
        </div>
        <div class="story-card-footer">
          <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">KA</div>
  <div>
    <div>Kayla Argyana Aziza</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250080</div>
  </div>
</div>
          
        </div>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-1" class="story-card">
        <div class="story-card-top top-c2">
          💔
          
        </div>
        <div class="story-card-body">
          <span class="badge badge-lilac">Keberanian</span>
          <h3>Saya keluar dari pernikahan yang toxic — ini bukan kegagalan, ini keberanian</h3>
          <p>Maya berbagi jalan panjang menyadari dan akhirnya memilih dirinya sendiri.</p>
        </div>
        <div class="story-card-footer">
          <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">MA</div>
  <div>
    <div>Maira Aurel Khairunissa</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250090</div>
  </div>
</div>
          
        </div>
      </RouterLink>

      <RouterLink to="/post/nadine-210510250073-1" class="story-card">
        <div class="story-card-top top-c3">
          🌾
          
        </div>
        <div class="story-card-body">
          <span class="badge badge-peach">UMKM</span>
          <h3>Dari dapur rumah ke 50 reseller — bagaimana saya membangun bisnis tanpa modal awal</h3>
          <p>Ina, ibu rumah tangga dari Jogja, kini omzetnya 40 juta per bulan.</p>
        </div>
        <div class="story-card-footer">
          <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">NA</div>
  <div>
    <div>Nadine Alifya Widiyarto</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250073</div>
  </div>
</div>
          
        </div>
      </RouterLink>

      <RouterLink to="/post/kayla-210510250072-1" class="story-card">
        <div class="story-card-top top-c4">
          🩺
          
        </div>
        <div class="story-card-body">
          <span class="badge badge-mint">Kesehatan</span>
          <h3>Didiagnosis PCOS di usia 24 — dan tidak ada yang mau menjelaskan apa itu</h3>
          <p>Rahma berbagi perjuangan navigasi sistem kesehatan yang sering mengabaikan perempuan.</p>
        </div>
        <div class="story-card-footer">
          <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">KA</div>
  <div>
    <div>Kayla Rahma Rissyaputri</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250072</div>
  </div>
</div>
          
        </div>
      </RouterLink>

      <RouterLink to="/post/kesya-210510250069-1" class="story-card">
        <div class="story-card-top top-c5">
          🗳️
          
        </div>
        <div class="story-card-body">
          <span class="badge badge-pink">Politik & Advokasi</span>
          <h3>Saya jadi kepala desa perempuan pertama di daerah saya — apa yang terjadi setelahnya</h3>
          <p>Bu Lies membuktikan bahwa kepemimpinan perempuan mengubah prioritas komunitas.</p>
        </div>
        <div class="story-card-footer">
          <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">KE</div>
  <div>
    <div>Kesya Gokma</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250069</div>
  </div>
</div>
          
        </div>
      </RouterLink>

      <RouterLink to="/post/nayfa-210510250055-1" class="story-card">
        <div class="story-card-top top-c6">
          🧕
          
        </div>
        <div class="story-card-body">
          <span class="badge badge-sky">Identitas</span>
          <h3>Berhijab di perusahaan multinasional — bukan hambatan, ini cerita saya</h3>
          <p>Fatimah menceritakan navigasi identitas, keyakinan, dan ambisi di ruang profesional global.</p>
        </div>
        <div class="story-card-footer">
          <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">NA</div>
  <div>
    <div>Nayfa Ariana Putri S</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250055</div>
  </div>
</div>
          
        </div>
      </RouterLink>
    </div>
  </section>

  <!-- INFO PENTING -->
  <section class="info-section" id="info">
    <div class="section-label">sumber daya</div>
    <div class="section-title">Informasi yang Kamu Butuhkan</div>
    <p class="section-sub" style="margin-top: 0.4rem;">Panduan praktis dari para ahli — hukum, kesehatan, finansial, dan
      keselamatan.</p>

    <div class="info-grid">
      <RouterLink to="/post/kayla-210510250080-1" class="info-card info-card-pink">
        <div class="info-icon">⚖️</div>
        <h3>Hak Hukum Perempuan Indonesia</h3>
        <p>Panduan lengkap UU TPKS, hak perburuhan, hak perkawinan, dan cara mengakses bantuan hukum gratis. Ditulis
          bersama LBH APIK dan Komnas Perempuan.</p>
        <div class="info-tags">
          <span class="info-tag">UU TPKS</span>
          <span class="info-tag">Bantuan Hukum</span>
          <span class="info-tag">Kekerasan Rumah Tangga</span>
          <span class="info-tag">Hak Kerja</span>
        </div>
      </RouterLink>

      <RouterLink to="/post/kayla-210510250080-2" class="info-card info-card-lilac">
        <div class="info-icon">🏥</div>
        <h3>Kesehatan Reproduksi & Tubuhmu</h3>
        <p>Semua yang perlu kamu tahu tentang siklus menstruasi, PCOS, endometriosis, kontrasepsi, dan cara berbicara
          dengan doktermu secara efektif.</p>
        <div class="info-tags">
          <span class="info-tag">PCOS</span>
          <span class="info-tag">Endometriosis</span>
          <span class="info-tag">Kontrasepsi</span>
          <span class="info-tag">Kesehatan Mental</span>
        </div>
      </RouterLink>

      <RouterLink to="/post/kayla-210510250080-3" class="info-card info-card-peach">
        <div class="info-icon">💸</div>
        <h3>Kebebasan Finansial untuk Perempuan</h3>
        <p>Dari membuka rekening atas nama sendiri, investasi pertama, negosiasi gaji, hingga membangun dana darurat —
          semua panduan praktis ada di sini.</p>
        <div class="info-tags">
          <span class="info-tag">Investasi</span>
          <span class="info-tag">Negosiasi Gaji</span>
          <span class="info-tag">UMKM</span>
          <span class="info-tag">Dana Darurat</span>
        </div>
      </RouterLink>

      <RouterLink to="/post/kayla-210510250080-4" class="info-card info-card-mint">
        <div class="info-icon">🛡️</div>
        <h3>Keamanan & Perlindungan Diri</h3>
        <p>Panduan keamanan digital, cara melindungi diri dari kekerasan berbasis gender online, hingga self-defense
          dasar dan nomor darurat yang perlu kamu simpan.</p>
        <div class="info-tags">
          <span class="info-tag">Keamanan Digital</span>
          <span class="info-tag">KBGO</span>
          <span class="info-tag">Self-Defense</span>
          <span class="info-tag">Nomor Darurat</span>
        </div>
      </RouterLink>
    </div>
  </section>

  <!-- LIFE HACKS -->
  <section class="hacks" id="hacks">
    <div class="section-label">tips & trik</div>
    <div class="section-title">Hacks untuk Perempuan</div>
    <p class="section-sub" style="margin-top: 0.4rem;">Dari pengalaman nyata — solusi praktis untuk kehidupan
      sehari-hari.</p>

    <div class="hacks-grid">
      <RouterLink to="/post/kayla-210510250080-5" class="hack-card">
        <div class="hack-num">01</div>
        <h3>Cara menolak dengan tegas tanpa merasa bersalah</h3>
        <p>Script siap pakai untuk menolak permintaan yang tidak wajar — di kantor, keluarga, maupun hubungan
          percintaan.</p>
        <span class="badge badge-pink">Boundaries</span>
      </RouterLink>

      <RouterLink to="/post/kayla-210510250080-6" class="hack-card">
        <div class="hack-num">02</div>
        <h3>Negosiasi gaji: template kalimat yang terbukti berhasil</h3>
        <p>Data riset menunjukkan perempuan yang negosiasi gaji 85% berhasil naik minimal 10% — ini caranya.</p>
        <span class="badge badge-peach">Karier</span>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-1" class="hack-card">
        <div class="hack-num">03</div>
        <h3>Cara dokumentasi kekerasan untuk laporan hukum</h3>
        <p>Step-by-step cara menyimpan bukti, screenshot, dan catatan yang valid secara hukum bila kamu mengalami
          kekerasan.</p>
        <span class="badge badge-lilac">Perlindungan</span>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-2" class="hack-card">
        <div class="hack-num">04</div>
        <h3>Mulai investasi dengan Rp 10.000 per hari</h3>
        <p>Panduan reksa dana, saham, dan tabungan emas untuk pemula — khusus buat kamu yang merasa "nanti dulu kalau
          sudah ada lebih."</p>
        <span class="badge badge-mint">Finansial</span>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-3" class="hack-card">
        <div class="hack-num">05</div>
        <h3>Red flags hubungan yang sering diabaikan perempuan</h3>
        <p>Bukan tentang drama, tapi tentang mengenali pola kontrol halus sebelum jadi lebih parah — dari perspektif
          psikolog.</p>
        <span class="badge badge-pink">Relasi</span>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-4" class="hack-card">
        <div class="hack-num">06</div>
        <h3>Self-advocacy di fasilitas kesehatan: cara ngomongnya</h3>
        <p>Kalimat yang efektif saat dokter meremehkan gejalamu, plus hak-hak pasien yang bisa kamu gunakan.</p>
        <span class="badge badge-sky">Kesehatan</span>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-5" class="hack-card">
        <div class="hack-num">07</div>
        <h3>Bangun personal branding tanpa kehilangan dirimu</h3>
        <p>Tips LinkedIn, portofolio, dan networking untuk perempuan yang tidak mau "fake it till you make it."</p>
        <span class="badge badge-peach">Karier</span>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-6" class="hack-card">
        <div class="hack-num">08</div>
        <h3>Cara bicara soal menstruasi di tempat kerja</h3>
        <p>Hak cuti haid ada di UU Ketenagakerjaan — tapi banyak yang tidak tahu cara mengaksesnya tanpa judgement.</p>
        <span class="badge badge-mint">Hak Kerja</span>
      </RouterLink>

      <RouterLink to="/post/nadine-210510250073-1" class="hack-card">
        <div class="hack-num">09</div>
        <h3>Membangun support system yang benar-benar support</h3>
        <p>Cara memilih orang-orang di sekitarmu, menetapkan ekspektasi, dan tahu kapan perlu bantuan profesional.</p>
        <span class="badge badge-lilac">Mental Health</span>
      </RouterLink>
    </div>
  </section>

  <!-- EMPOWERMENT ARTICLES -->
  <section class="empowerment" id="empowerment">
    <div class="section-label">artikel pemberdayaan</div>
    <div class="section-title">Bacaan yang Menguatkan</div>
    <p class="section-sub" style="margin-top: 0.4rem;">Analisis mendalam dari jurnalis, aktivis, dan akademisi perempuan
      Indonesia.</p>

    <div class="emp-grid">
      <RouterLink to="/post/reyva-210510250074-2" class="emp-card">
        <div class="emp-card-img" style="background: linear-gradient(135deg, var(--pink-1), var(--pink-2));">
          ✊
          <span class="badge badge-white">Politik</span>
        </div>
        <div class="emp-card-body">
          <h3>Keterwakilan perempuan di parlemen Indonesia: angka, hambatan, dan jalan ke depan</h3>
          <p>Dengan hanya 21% kursi legislatif yang dipegang perempuan, apa yang perlu berubah di sistem politik kita —
            dan siapa yang harus mendorongnya?</p>
          <div class="article-meta">
            <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">RE</div>
  <div>
    <div>Reyva keisya putri s</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250074</div>
  </div>
</div>
            
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/post/kayla-210510250080-2" class="emp-card">
        <div class="emp-card-img" style="background: linear-gradient(135deg, var(--accent-lilac), #d4b8f0);">
          📚
          <span class="badge badge-lilac">Pendidikan</span>
        </div>
        <div class="emp-card-body">
          <h3>Pernikahan dini masih merampas masa depan jutaan perempuan muda Indonesia</h3>
          <p>Laporan investigatif dari 5 provinsi: bagaimana kemiskinan, norma sosial, dan celah hukum membuat anak
            perempuan tetap rentan.</p>
          <div class="article-meta">
            <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">KA</div>
  <div>
    <div>Kayla Argyana Aziza</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250080</div>
  </div>
</div>
            
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/post/maira-210510250090-2" class="emp-card">
        <div class="emp-card-img" style="background: linear-gradient(135deg, var(--accent-mint), #a8e0d0);">
          🌿
          <span class="badge badge-mint">Ekonomi</span>
        </div>
        <div class="emp-card-body">
          <h3>Ekonomi perawatan: pekerjaan perempuan yang tidak kelihatan — dan bagaimana menghargainya</h3>
          <p>Triliunan nilai ekonomi dari kerja domestic tidak pernah masuk PDB. Saatnya kita bicara tentang
            ketidakadilan yang sudah terlalu lama dinormalkan.</p>
          <div class="article-meta">
            <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">MA</div>
  <div>
    <div>Maira Aurel Khairunissa</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250090</div>
  </div>
</div>
            
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/post/nadine-210510250073-2" class="emp-card">
        <div class="emp-card-img" style="background: linear-gradient(135deg, var(--accent-peach), #ffc9a8);">
          💻
          <span class="badge badge-peach">Teknologi</span>
        </div>
        <div class="emp-card-body">
          <h3>Perempuan di tech Indonesia: masuk lebih mudah, bertahan yang susah</h3>
          <p>Wawancara dengan 30 perempuan di industri teknologi tentang microaggression, glass ceiling digital, dan
            komunitas yang benar-benar membantu.</p>
          <div class="article-meta">
            <div class="author" style="display:flex;align-items:center;gap:10px;">
  <div class="avatar" style="background: var(--pink-4); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-size:12px;">NA</div>
  <div>
    <div>Nadine Alifya Widiyarto</div>
    <div style="font-size:0.8em; opacity:0.8;">210510250073</div>
  </div>
</div>
            
          </div>
        </div>
      </RouterLink>
    </div>
  </section>

  <!-- SHARE YOUR STORY -->
  <section class="share-story" id="share">
    <div>
      <div class="section-label">wadah ceritamu</div>
      <div class="section-title" style="color: white;">Ceritamu layak<br>untuk didengar</div>
      <p>Tidak perlu jadi penulis. Tidak perlu punya cerita yang "cukup dramatis." Setiap pengalaman perempuan adalah
        valid dan berharga — karena satu cerita bisa menjadi kekuatan bagi ribuan perempuan lain.</p>
      <RouterLink to="/#share" class="btn-primary" >Mulai
        Menulis</RouterLink>
    </div>

    <form id="story-form" class="story-form" @submit.prevent="submitStory">
      <div class="form-group">
        <label class="form-label">Nama (boleh pakai nama samaran)</label>
        <input id="story-name" v-model="storyForm.name" type="text" class="form-input" placeholder="Nama atau inisial kamu" required>
      </div>
      <div class="form-group">
        <label class="form-label">Email kamu</label>
        <input id="story-email" v-model="storyForm.email" type="email" class="form-input" placeholder="email@kamu.com (untuk konfirmasi)"
          required>
      </div>
      <div class="form-group">
        <label class="form-label">Kategori cerita</label>
        <select id="story-category" v-model="storyForm.category" class="form-select form-input" required>
          <option value="" disabled selected>Pilih kategori...</option>
          <option>Karier &amp; Ambisi</option>
          <option>Keberanian &amp; Resiliensi</option>
          <option>Kesehatan &amp; Tubuh</option>
          <option>Finansial &amp; Kemandirian</option>
          <option>Relasi &amp; Keluarga</option>
          <option>Pendidikan</option>
          <option>Identitas &amp; Kepercayaan Diri</option>
          <option>Lainnya</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Ceritamu</label>
        <textarea id="story-text" v-model="storyForm.story" class="form-textarea"
          placeholder="Tulis di sini... tidak ada aturan, tidak ada format yang harus diikuti ✨" required
          minlength="50"></textarea>
      </div>
      <div id="story-msg" v-show="storyMsg.text" :class="storyMsg.error ? 'error-msg' : 'success-msg'">{{ storyMsg.text }}</div>
      <button type="submit" class="form-submit" id="story-btn">Kirim Ceritaku ♀</button>
    </form>
  </section>

  <!-- TOPIK -->
  <section class="topics" id="topics">
    <div class="section-label">jelajahi topik</div>
    <div class="section-title">Kamu Mau Baca Apa?</div>

    <div class="topic-pills">
      <RouterLink to="/post/kayla-210510250080-2" class="topic-pill"><span class="emoji">💪</span> Pemberdayaan </RouterLink>
      <RouterLink to="/post/kayla-210510250080-3" class="topic-pill"><span class="emoji">⚖️</span> Hak & Hukum </RouterLink>
      <RouterLink to="/post/kayla-210510250080-4" class="topic-pill"><span class="emoji">💸</span> Finansial </RouterLink>

      <RouterLink to="/post/kayla-210510250080-5" class="topic-pill"><span class="emoji">🏥</span> Kesehatan </RouterLink>
      <RouterLink to="/post/kayla-210510250080-6" class="topic-pill"><span class="emoji">🧠</span> Mental Health </RouterLink>
      <RouterLink to="/post/kayla-210510250080-1" class="topic-pill"><span class="emoji">👩‍💼</span> Karier </RouterLink>
      <RouterLink to="/post/kesya-210510250069-1" class="topic-pill"><span class="emoji">🎓</span> Pendidikan </RouterLink>
      <RouterLink to="/post/kesya-210510250069-2" class="topic-pill"><span class="emoji">🤝</span> Komunitas </RouterLink>
      <RouterLink to="/post/kesya-210510250069-3" class="topic-pill"><span class="emoji">🌿</span> UMKM & Wirausaha </RouterLink>
      <RouterLink to="/post/kesya-210510250069-4" class="topic-pill"><span class="emoji">💌</span> Relasi </RouterLink>
      <RouterLink to="/post/kesya-210510250069-5" class="topic-pill"><span class="emoji">🛡️</span> Keamanan </RouterLink>
      <RouterLink to="/post/kesya-210510250069-6" class="topic-pill"><span class="emoji">🌺</span> Budaya & Identitas </RouterLink>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="newsletter">
    <div class="section-label">tetap terhubung</div>
    <h2>Surat dari kami,<br><em style="font-style:italic;">untuk perempuan</em></h2>
    <p>Setiap minggu — satu cerita yang menginspirasi, satu artikel yang menguatkan, dan info penting yang perlu kamu
      tahu. Tidak ada spam, hanya hal-hal yang benar-benar berguna.</p>
    <form id="subscribe-form" class="email-form" @submit.prevent="subscribeNewsletter">
      <input id="subscribe-email" v-model="subscribeEmail" type="email" placeholder="email@kamu.com" required>
      <button type="submit" id="subscribe-btn">Langganan ♀</button>
    </form>
    <div id="subscribe-msg"
      style="display:none; margin-top:1rem; padding:12px 20px; border-radius:8px; font-size:0.9rem; text-align:center;">
    </div>
  </section>

  <!-- FOOTER -->
  <AppFooter />
</template>

<script setup>
import { ref } from 'vue'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'

const storyForm = ref({ name: '', email: '', category: '', story: '' })
const subscribeEmail = ref('')
const storyMsg = ref({ text: '', error: false })
const subscribeMsg = ref({ text: '', error: false })

const submitStory = async () => {
  try {
    const res = await fetch('/api/submit-story', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(storyForm.value)
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Terjadi kesalahan')
    storyMsg.value = { text: '💌 ' + data.message, error: false }
    storyForm.value = { name: '', email: '', category: '', story: '' }
  } catch (err) {
    storyMsg.value = { text: '⚠️ ' + err.message, error: true }
  }
}

const subscribeNewsletter = async () => {
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: subscribeEmail.value })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Terjadi kesalahan')
    subscribeMsg.value = { text: '🌸 ' + data.message, error: false }
    subscribeEmail.value = ''
  } catch (err) {
    subscribeMsg.value = { text: '⚠️ ' + err.message, error: true }
  }
}
</script>

<style scoped>
.success-msg {
  margin-bottom: 1rem;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  background: rgba(16,185,129,0.15);
  border: 1px solid #10b981;
  color: #047857;
}
.error-msg {
  margin-bottom: 1rem;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  background: rgba(239,68,68,0.15);
  border: 1px solid #ef4444;
  color: #b91c1c;
}
</style>
