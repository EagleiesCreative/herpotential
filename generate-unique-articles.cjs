const fs = require('fs');
const path = require('path');

const newArticles = [
  {
    file: "Kayla-210510250072-5.vue",
    authorName: "Kayla Rahma Rissyaputri",
    authorId: "210510250072",
    badge: "Karier & Ambisi",
    title: "Mengenal Glass Ceiling: Tantangan Perempuan Menembus Posisi Kepemimpinan",
    content: `
      <p>Berkarier setinggi langit adalah impian setiap perempuan profesional. Namun, pernahkah kamu merasa ada batas tak terlihat yang menghalangi langkahmu menuju puncak kepemimpinan? Batas transparan namun kokoh ini dikenal sebagai <em>glass ceiling</em>.</p>
      <p>Di Indonesia, partisipasi perempuan di tingkat manajerial terus meningkat, tetapi persentase perempuan di posisi C-level atau direksi masih jauh dari kata seimbang. Stereotip gender sering kali menempatkan perempuan pada peran pendukung, bukan pemimpin utama.</p>
      <h2>Menembus Hambatan Tak Terlihat</h2>
      <p>Penting bagi perempuan untuk aktif membangun kepercayaan diri dan mengambil inisiatif strategis di tempat kerja untuk meruntuhkan pembatas ini secara perlahan namun pasti.</p>
      <div class="highlight-box">
        <h4>1. Bangun Personal Branding</h4>
        <p>Tunjukkan kompetensi, dedikasi, dan kontribusi nyata secara konsisten kepada para pengambil keputusan di perusahaan.</p>
        <h4>2. Cari Mentor dan Sponsor</h4>
        <p>Miliki hubungan mentor dengan orang-orang di posisi kunci yang bersedia mendukung dan memberi masukan objektif.</p>
        <h4>3. Ambil Risiko Strategis</h4>
        <p>Jangan ragu memimpin proyek besar yang memiliki visibilitas tinggi untuk mendemonstrasikan kapabilitas kepemimpinanmu.</p>
      </div>
      <p>Memecahkan glass ceiling bukanlah perjuangan individu semata, melainkan kerja kolektif sistem perusahaan. Namun dengan kesiapan kompetensi dan keberanian diri, kita bisa menjadi retakan pertama yang akhirnya menghancurkan pembatas tersebut.</p>
    `
  },
  {
    file: "Kayla-210510250072-6.vue",
    authorName: "Kayla Rahma Rissyaputri",
    authorId: "210510250072",
    badge: "Finansial",
    title: "Menyusun Anggaran Bulanan dengan Metode 50/30/20 untuk Perempuan Mandiri",
    content: `
      <p>Banyak orang merasa kesulitan menabung karena tidak tahu ke mana perginya uang mereka setiap bulan. Bagi perempuan modern, memiliki kontrol penuh atas keuangan pribadi adalah bentuk kemerdekaan diri.</p>
      <p>Salah satu cara termudah dan paling efektif untuk mengelola keuangan adalah metode alokasi 50/30/20. Metode ini membantu kita membagi pendapatan ke dalam tiga kategori besar secara seimbang tanpa merasa terkekang.</p>
      <h2>Pembagian Alokasi 50/30/20</h2>
      <div class="circle-grid">
        <div class="circle-card">
          <div class="circle-icon">🏠</div>
          <h4>50% Kebutuhan Pokok</h4>
          <p>Alokasikan untuk sewa tempat tinggal, tagihan bulanan, belanja dapur, dan transportasi wajib.</p>
        </div>
        <div class="circle-card">
          <div class="circle-icon">☕</div>
          <h4>30% Keinginan</h4>
          <p>Gunakan untuk ngopi cantik, langganan streaming, liburan, belanja hobi, dan hiburan diri.</p>
        </div>
        <div class="circle-card">
          <div class="circle-icon">📈</div>
          <h4>20% Tabungan & Investasi</h4>
          <p>Simpan untuk dana darurat, investasi reksadana, emas, atau tabungan masa depan.</p>
        </div>
      </div>
      <p>Kunci utama dari metode ini adalah konsistensi. Finansial yang teratur memberikan ketenangan pikiran dan kebebasan untuk mengambil keputusan hidup tanpa bayang-bayang utang di masa depan.</p>
    `
  },
  {
    file: "Kesya-210510250069-1.vue",
    authorName: "Kesya Gokma",
    authorId: "210510250069",
    badge: "Kesehatan Mental",
    title: "Mengatasi Impostor Syndrome: Mengapa Kita Sering Merasa Kurang Kompeten?",
    content: `
      <p>Pernahkah kamu merasa bahwa kesuksesan yang kamu raih hanyalah faktor keberuntungan, dan suatu hari nanti orang-orang akan tahu bahwa kamu sebenarnya tidak sehebat itu? Jika ya, kamu sedang mengalami <em>impostor syndrome</em> atau sindrom penyemu.</p>
      <p>Sindrom ini sangat umum dialami oleh perempuan berprestasi tinggi. Kita cenderung menyalahkan diri sendiri saat terjadi kesalahan, tetapi mengabaikan kontribusi pribadi saat meraih kesuksesan. Hal ini bisa menghambat perkembangan karier kita.</p>
      <div class="pullquote">
        "Kamu tidak beruntung, kamu bekerja keras. Akui usahamu seperti kamu mengakui usaha orang lain."
      </div>
      <h2>Langkah Menghadapi Sindrom Penyemu</h2>
      <p>Untuk mengatasinya, mulailah mencatat setiap pencapaian sekecil apa pun. Belajarlah menerima pujian dengan senyuman dan ucapan terima kasih yang tulus, tanpa perlu merendahkan diri sendiri di hadapan orang lain.</p>
    `
  },
  {
    file: "Kesya-210510250069-2.vue",
    authorName: "Kesya Gokma",
    authorId: "210510250069",
    badge: "Kesehatan Mental",
    title: "Pentingnya Menetapkan Batasan Diri (Boundaries) yang Sehat di Lingkungan Sosial",
    content: `
      <p>Menjadi orang yang selalu siap membantu memang menyenangkan, tetapi jika kamu selalu berkata 'ya' demi menyenangkan orang lain (people-pleasing), kamu sedang mengorbankan kesehatan mentalmu sendiri.</p>
      <p>Batasan diri (boundaries) adalah garis imajiner yang kita buat untuk melindungi ruang fisik, emosional, dan mental kita. Tanpa batasan yang jelas, kita rentan dimanfaatkan dan mengalami kelelahan emosional yang luar biasa.</p>
      <h2>Mulai Membuat Batasan Sendiri</h2>
      <div class="highlight-box">
        <h4>1. Pahami Kapasitasmu</h4>
        <p>Kenali kapan kamu merasa terlalu lelah, tertekan, atau tidak memiliki waktu luang untuk hal ekstra.</p>
        <h4>2. Komunikasikan dengan Tegas</h4>
        <p>Katakan tidak secara sopan namun tegas tanpa perlu berbohong atau memberikan alasan yang berbelit-belit.</p>
        <h4>3. Singkirkan Rasa Bersalah</h4>
        <p>Menjaga kesehatan mental dan fisik diri sendiri adalah hak dasar setiap individu, bukan sebuah keegoisan.</p>
      </div>
      <p>Ingatlah bahwa batasan diri bukan untuk menjauhkan orang lain, melainkan untuk membangun hubungan yang lebih sehat dan seimbang atas dasar rasa saling menghargai.</p>
    `
  },
  {
    file: "Kesya-210510250069-3.vue",
    authorName: "Kesya Gokma",
    authorId: "210510250069",
    badge: "Gaya Hidup",
    title: "Mendukung Sesama Perempuan: Menghentikan Budaya Kompetisi Toxic",
    content: `
      <p>Sering kali kita melihat narasi media yang menggambarkan hubungan antarkeperempuan sebagai persaingan sengit, baik dalam penampilan, karier, maupun asmara. Padahal, kekuatan terbesar perempuan terletak pada solidaritas.</p>
      <p>Menghentikan persaingan toxic berarti menyadari bahwa kesuksesan perempuan lain tidak mengurangi peluang kesuksesan kita sendiri. Dunia ini cukup luas untuk kita semua bersinar bersama.</p>
      <div class="pullquote">
        "Ketika perempuan saling mendukung, hal-hal luar biasa akan terjadi. Mari menjadi mercusuar, bukan saingan."
      </div>
      <h2>Cara Praktis Mendukung Sesama</h2>
      <p>Mulailah dari hal kecil: berikan pujian tulus kepada rekan kerjamu, dengarkan cerita mereka tanpa menghakimi, dan dukung usaha mikro yang dijalankan oleh sesama perempuan di sekitarmu demi tumbuh bersama.</p>
    `
  },
  {
    file: "Kesya-210510250069-4.vue",
    authorName: "Kesya Gokma",
    authorId: "210510250069",
    badge: "Pendidikan",
    title: "Perempuan di Sektor STEM: Menantang Dominasi Gender di Dunia Teknologi",
    content: `
      <p>Dunia sains, teknologi, teknik, dan matematika (STEM) secara historis didominasi oleh laki-laki. Namun, gelombang baru ilmuwan dan insinyur perempuan kini sedang mengubah lanskap tersebut di seluruh dunia.</p>
      <p>Kehadiran perempuan dalam sektor STEM membawa perspektif baru yang krusial untuk inovasi. Dari kecerdasan buatan (AI) hingga pelestarian lingkungan, kontribusi pemikiran perempuan terbukti sangat berharga.</p>
      <h2>Langkah Mendorong Perempuan di Sektor STEM</h2>
      <div class="highlight-box">
        <h4>1. Pendidikan Inklusif sejak Dini</h4>
        <p>Perkenalkan anak-anak perempuan pada sains, robotik, dan matematika secara menyenangkan dan interaktif.</p>
        <h4>2. Program Mentorship</h4>
        <p>Sediakan bimbingan berkelanjutan dari profesional perempuan senior di bidang teknologi.</p>
        <h4>3. Fleksibilitas Kerja</h4>
        <p>Ciptakan lingkungan kerja yang ramah keluarga dengan kebijakan cuti melahirkan dan fleksibilitas waktu.</p>
      </div>
      <p>Menghapus stigma bahwa bidang teknis hanya untuk laki-laki adalah langkah awal menciptakan masa depan teknologi yang lebih inklusif dan adil untuk semua.</p>
    `
  },
  {
    file: "Kesya-210510250069-5.vue",
    authorName: "Kesya Gokma",
    authorId: "210510250069",
    badge: "Karier & Ambisi",
    title: "Membangun Keterampilan Komunikasi Asertif untuk Perempuan Pemimpin",
    content: `
      <p>Dalam dunia kerja, perempuan sering kali dihadapkan pada dilema komunikasi: berbicara terlalu lembut dianggap tidak tegas, sementara berbicara terlalu lugas dianggap agresif.</p>
      <p>Solusinya adalah komunikasi asertif. Ini adalah gaya komunikasi di mana kita menyampaikan pendapat, kebutuhan, dan batasan kita dengan jujur dan langsung, namun tetap menghormati lawan bicara.</p>
      <div class="pullquote">
        "Komunikasi asertif bukan tentang memenangkan argumen, melainkan tentang mengekspresikan diri secara jelas dan penuh rasa hormat."
      </div>
      <h2>Tips Melatih Komunikasi Asertif</h2>
      <p>Latihlah komunikasi asertif dengan menggunakan pernyataan "Saya" (I-statement), mempertahankan kontak mata yang tenang, dan menghindari kata-kata yang bernada meminta maaf ketika menyampaikan fakta profesional.</p>
    `
  },
  {
    file: "Kesya-210510250069-6.vue",
    authorName: "Kesya Gokma",
    authorId: "210510250069",
    badge: "Kesehatan Mental",
    title: "Detoks Media Sosial: Menjaga Citra Tubuh (Body Image) yang Sehat",
    content: `
      <p>Setiap hari kita dibombardir oleh standar kecantikan yang tidak realistis di media sosial. Filter wajah dan edit foto yang berlebihan sering kali membuat kita merasa minder dengan tubuh kita sendiri.</p>
      <p>Kesehatan mental kita sangat dipengaruhi oleh apa yang kita konsumsi secara digital. Menjaga body image yang positif adalah perjuangan penting di era digital ini agar kita tidak terus membandingkan diri dengan estetika buatan.</p>
      <h2>Langkah Detoks Digital Sederhana</h2>
      <div class="circle-grid">
        <div class="circle-card">
          <div class="circle-icon">🚫</div>
          <h4>Unfollow Akun Toxic</h4>
          <p>Berhenti mengikuti akun-akun yang membuatmu merasa kurang percaya diri atau minder.</p>
        </div>
        <div class="circle-card">
          <div class="circle-icon">📱</div>
          <h4>Batasi Screen Time</h4>
          <p>Kurangi durasi scroll media sosial harian, terutama di malam hari sebelum tidur.</p>
        </div>
        <div class="circle-card">
          <div class="circle-icon">❤️</div>
          <h4>Apresiasi Tubuhmu</h4>
          <p>Fokus pada fungsi tubuhmu (seperti bernapas, berjalan, memeluk), bukan sekadar penampilannya.</p>
        </div>
      </div>
      <p>Tubuhmu adalah rumahmu, bukan pajangan untuk menyenangkan mata orang lain. Cintai keunikan fisikmu dan fokuslah pada kesehatan serta kenyamanan dirimu sendiri.</p>
    `
  },
  {
    file: "Nadine-210510250073-6.vue",
    authorName: "Nadine Alifya Widiyarto",
    authorId: "210510250073",
    badge: "Gaya Hidup",
    title: "Rekomendasi Buku dan Podcast Feminis untuk Menambah Wawasanmu",
    content: `
      <p>Mengembangkan diri tidak melulu lewat jalur pendidikan formal. Buku dan podcast adalah sarana luar biasa untuk memperluas pemahaman kita tentang isu-isu gender dan pemberdayaan perempuan.</p>
      <p>Banyak karya literatur klasik maupun modern yang membuka mata kita tentang realitas perjuangan perempuan di berbagai belahan dunia, serta kisah-kisah inspiratif yang bisa menjadi bahan refleksi diri.</p>
      <h2>Rekomendasi Media Pemberdayaan</h2>
      <div class="highlight-box">
        <h4>1. Buku "Dear Ijeawele" - Chimamanda Ngozi Adichie</h4>
        <p>Manifesto feminis yang sangat praktis, menyentuh, dan mudah dipahami oleh semua kalangan.</p>
        <h4>2. Buku "Silenced"</h4>
        <p>Kumpulan esai ketangguhan perempuan dalam menghadapi tantangan sosial budaya di era modern.</p>
        <h4>3. Podcast Perempuan Berdaya</h4>
        <p>Diskusi interaktif seputar pengembangan karier, kemandirian finansial, dan kesehatan emosional.</p>
      </div>
      <p>Luangkan waktu 15-30 menit setiap hari untuk membaca atau mendengar konten berkualitas ini. Investasi terbaik adalah memperkaya pikiran dan wawasanmu sendiri.</p>
    `
  },
  {
    file: "Nayfa-210510250055-1.vue",
    authorName: "Nayfa Ariana Putri S",
    authorId: "210510250055",
    badge: "Pendidikan",
    title: "Pentingnya Literasi Digital bagi Perempuan di Era Informasi",
    content: `
      <p>Teknologi digital telah mengubah cara kita bekerja, belajar, dan berinteraksi. Namun, kemudahan ini juga membawa risiko seperti penyebaran hoaks, penipuan online, dan kekerasan berbasis gender online (KBGO).</p>
      <p>Literasi digital bukan hanya tentang bisa menggunakan smartphone atau media sosial, melainkan tentang kemampuan menyaring informasi, melindungi data pribadi, dan menggunakan teknologi secara bijak serta aman.</p>
      <div class="pullquote">
        "Perempuan yang melek digital adalah perempuan yang aman, berdaya, dan mampu memanfaatkan peluang masa depan."
      </div>
      <h2>Tips Meningkatkan Literasi Digital</h2>
      <p>Mari tingkatkan literasi digital kita dengan tidak mudah membagikan informasi sensitif, selalu melakukan verifikasi berita sebelum menyebarkannya, dan menggunakan internet sebagai sarana untuk belajar hal baru.</p>
    `
  },
  {
    file: "Nayfa-210510250055-2.vue",
    authorName: "Nayfa Ariana Putri S",
    authorId: "210510250055",
    badge: "UMKM",
    title: "Membangun Bisnis Sampingan (Side Hustle) dari Hobi Kreatifmu",
    content: `
      <p>Memiliki penghasilan tambahan kini semakin mudah berkat adanya platform e-commerce dan media sosial. Memulai bisnis sampingan atau <em>side hustle</em> adalah langkah bagus untuk menyalurkan minat sekaligus memperkuat finansial.</p>
      <p>Bisnis sampingan yang sukses sering kali berawal dari hobi yang ditekuni secara serius—baik itu menulis, menggambar, memasak, rajutan, maupun pembuatan konten digital kreatif.</p>
      <h2>Langkah Memulai Side Hustle</h2>
      <div class="highlight-box">
        <h4>1. Identifikasi Minat dan Keahlian</h4>
        <p>Pilih hobi yang paling kamu kuasai dan nikmati agar proses menjalaninya terasa menyenangkan.</p>
        <h4>2. Mulai dari Skala Kecil</h4>
        <p>Kelola bisnismu di waktu luang tanpa langsung tergesa-gesa keluar dari pekerjaan utamamu.</p>
        <h4>3. Maksimalkan Pemasaran Digital</h4>
        <p>Buat portofolio visual yang menarik di media sosial untuk menarik audiens potensial secara luas.</p>
      </div>
      <p>Memiliki side hustle melatih jiwa kewirausahaan kita dan memberikan kebebasan finansial ekstra yang bisa digunakan untuk investasi masa depan atau mewujudkan impian pribadimu.</p>
    `
  },
  {
    file: "Nayfa-210510250055-3.vue",
    authorName: "Nayfa Ariana Putri S",
    authorId: "210510250055",
    badge: "Keluarga & Relasi",
    title: "Menjaga Kesehatan Mental Ibu Bekerja (Working Mom) agar Tetap Waras",
    content: `
      <p>Menjalankan peran ganda sebagai pekerja profesional dan ibu rumah tangga adalah tantangan luar biasa yang membutuhkan ketahanan fisik dan mental yang luar biasa pula.</p>
      <p>Banyak ibu bekerja merasa bersalah karena merasa tidak bisa memberikan 100% perhatian pada kedua sisi kehidupan tersebut. Perasaan bersalah ini sering kali menjadi beban mental yang berujung pada kelelahan ekstrem.</p>
      <div class="pullquote">
        "Tidak ada yang namanya keseimbangan sempurna. Yang ada adalah prioritas hari demi hari dan pembagian peran yang adil."
      </div>
      <h2>Tips Mengelola Beban Mental</h2>
      <p>Kunci utamanya adalah membangun komunikasi yang baik dengan pasangan untuk pembagian tugas rumah tangga, berani meminta bantuan keluarga, serta menyisihkan waktu kecil untuk mengapresiasi diri sendiri.</p>
    `
  },
  {
    file: "Nayfa-210510250055-4.vue",
    authorName: "Nayfa Ariana Putri S",
    authorId: "210510250055",
    badge: "Karier & Ambisi",
    title: "Seni Bernegosiasi: Cara Meminta Kenaikan Gaji yang Layak bagi Perempuan",
    content: `
      <p>Statistik menunjukkan bahwa perempuan cenderung lebih jarang meminta kenaikan gaji dibanding rekan laki-laki mereka, sering kali karena rasa sungkan atau takut dianggap terlalu menuntut.</p>
      <p>Padahal, negosiasi gaji adalah bagian wajar dari profesionalisme. Meminta kompensasi yang setara dengan kontribusi dan nilai pasar yang kamu bawa adalah hak dasar setiap pekerja.</p>
      <h2>Langkah Sebelum Membuka Negosiasi</h2>
      <div class="highlight-box">
        <h4>1. Lakukan Riset Pasar</h4>
        <p>Ketahui standar kompensasi rata-rata untuk posisi, industri, dan pengalaman kerjamu saat ini.</p>
        <h4>2. Kumpulkan Bukti Kontribusi</h4>
        <p>Catat daftar keberhasilan proyek dan pencapaian terukur yang telah kamu bawa untuk perusahaan.</p>
        <h4>3. Latihlah Cara Penyampaian</h4>
        <p>Komunikasikan permohonanmu dengan percaya diri, objektif, profesional, dan berfokus pada data.</p>
      </div>
      <p>Negosiasi adalah diskusi bisnis, bukan masalah pribadi. Bersikaplah asertif dan tunjukkan bahwa kamu menghargai keahlian serta dedikasi profesional yang kamu berikan.</p>
    `
  },
  {
    file: "Nayfa-210510250055-5.vue",
    authorName: "Nayfa Ariana Putri S",
    authorId: "210510250055",
    badge: "Kesehatan Mental",
    title: "Mengapa Kita Perlu Menghentikan Kebiasaan Membandingkan Diri (Comparison Trap)",
    content: `
      <p>Di era modern ini, sangat mudah untuk membandingkan kehidupan kita yang biasa saja dengan momen-momen terbaik orang lain yang terpampang di media sosial. Ini adalah jebakan perbandingan (<em>comparison trap</em>).</p>
      <p>Membandingkan proses internal kita dengan hasil luar orang lain adalah hal yang tidak adil dan merusak kedamaian pikiran. Setiap orang memiliki garis waktu, tantangan, dan definisi suksesnya masing-masing.</p>
      <div class="pullquote">
        "Satu-satunya orang yang harus kamu bandingkan dengan dirimu adalah dirimu yang kemarin."
      </div>
      <h2>Keluar dari Jebakan Perbandingan</h2>
      <p>Fokuslah pada pertumbuhan pribadimu sendiri. Rayakan kemajuan kecil yang kamu buat, dan latih rasa syukur atas apa yang telah kamu miliki agar hatimu senantiasa merasa cukup dan bahagia.</p>
    `
  },
  {
    file: "Nayfa-210510250055-6.vue",
    authorName: "Nayfa Ariana Putri S",
    authorId: "210510250055",
    badge: "Pendidikan",
    title: "Pendidikan Seksual Komprehensif bagi Anak Perempuan: Melindungi Masa Depan Mereka",
    content: `
      <p>Topik seputar reproduksi dan seksualitas sering kali dianggap tabu dalam keluarga di Indonesia. Padahal, memberikan edukasi yang benar sejak dini adalah langkah preventif paling krusial untuk melindungi anak perempuan.</p>
      <p>Pendidikan seksual komprehensif bukan tentang mengajarkan aktivitas seksual, melainkan tentang mengenalkan batas tubuh, hak kepemilikan tubuh (bodily autonomy), serta bahaya kekerasan seksual.</p>
      <h2>Edukasi Batas Tubuh Anak Perempuan</h2>
      <div class="highlight-box">
        <h4>1. Gunakan Istilah Ilmiah</h4>
        <p>Kenalkan nama organ tubuh yang benar tanpa disamarkan agar anak memahami secara presisi.</p>
        <h4>2. Ajarkan Konsep Batas Diri</h4>
        <p>Latih anak untuk berani menolak sentuhan yang tidak nyaman dari siapa pun dan segera melapor.</p>
        <h4>3. Bangun Keterbukaan Diskusi</h4>
        <p>Ciptakan ruang aman di rumah agar anak tidak takut menceritakan apa pun yang dialaminya.</p>
      </div>
      <p>Dengan membekali anak perempuan pengetahuan yang tepat, kita memberi mereka kekuatan untuk menjaga diri sendiri, menghargai tubuh mereka, dan tumbuh menjadi pribadi yang percaya diri serta waspada.</p>
    `
  }
];

const postDir = path.join(__dirname, 'src', 'pages', 'post');

newArticles.forEach(art => {
  const filePath = path.join(postDir, art.file);
  const fileContent = `<template>
  <ArticleLayout>
    <header class="article-hero">
      <div class="hero-badge" style="display:inline-block; margin-bottom:1rem; padding:0.3rem 0.8rem; background:white; color:var(--pink-5); border-radius:20px; font-size:0.8em; font-weight:bold; letter-spacing:1px; text-transform:uppercase;">${art.badge}</div>
      <h1 style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem); line-height:1.2; margin-bottom:1rem; color: var(--text-dark);">${art.title}</h1>
      <div class="author-block" style="margin-top: 1rem;">
        <div class="author-name" style="line-height:1.2">${art.authorName}<br><span style="font-size:0.85em; opacity:0.75; font-weight:normal;">${art.authorId}</span></div>
        <div class="author-id" style="opacity: 0.7; font-size: 0.9em;">${art.authorId}</div>
      </div>
      <div class="author-meta" style="margin-top:1.5rem; color:var(--text-dark); font-size:0.9em; text-align:center;">Bandung,May 2026</div>
    </header>
    <article class="article-wrap">
${art.content}
    </article>
  </ArticleLayout>
</template>
<script setup>
import ArticleLayout from '../../components/ArticleLayout.vue'
</script>
<style scoped>
.article-hero { background: var(--offwhite); padding: 4rem; text-align: center; }
</style>
`;

  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Successfully generated unique article: ${art.file}`);
});

console.log('All 15 unique articles have been generated and saved!');
