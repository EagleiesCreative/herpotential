require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.PORT || 3001;
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@herpotential.id';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'redaksi@herpotential.id';

app.use(cors());
app.use(express.json());
app.use(express.static('.'));  // serve the HTML files

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/submit-story
// Handles story submissions from the "Kirim Ceritaku" & "Mulai Menulis" forms
// ─────────────────────────────────────────────────────────────────────────────
app.post('/api/submit-story', async (req, res) => {
  const { name, email, category, story } = req.body;

  // Basic validation
  if (!name || !email || !category || !story) {
    return res.status(400).json({ error: 'Semua field wajib diisi.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Format email tidak valid.' });
  }
  if (story.length < 50) {
    return res.status(400).json({ error: 'Cerita terlalu singkat (min. 50 karakter).' });
  }

  try {
    // 1️⃣ Notify admin about new story submission
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `📝 Cerita baru masuk: ${category} — dari ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #e91e8c;">📝 Cerita Baru dari ${escapeHtml(name)}</h2>
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
            <tr>
              <td style="padding:8px; font-weight:bold; background:#fdf2f8; width:140px;">Nama</td>
              <td style="padding:8px; background:#fff9fc;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold; background:#fdf2f8;">Email</td>
              <td style="padding:8px; background:#fff9fc;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold; background:#fdf2f8;">Kategori</td>
              <td style="padding:8px; background:#fff9fc;">${escapeHtml(category)}</td>
            </tr>
          </table>
          <h3 style="color:#555;">Cerita:</h3>
          <div style="background:#fdf2f8; padding:16px; border-radius:8px; white-space:pre-wrap; line-height:1.7;">
            ${escapeHtml(story)}
          </div>
          <p style="color:#999; font-size:0.85rem; margin-top:24px;">
            Dikirim pada: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB
          </p>
        </div>
      `,
    });

    // 2️⃣ Send confirmation email to the submitter
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `✨ Ceritamu sudah kami terima, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; background:#0d0d1a; color:#f0e6f5; padding:32px; border-radius:12px;">
          <img src="https://herpotential.id/a.svg" alt="HerPotential" style="height:40px; margin-bottom:24px;" onerror="this.style.display='none'">
          <h2 style="color:#e91e8c; margin-top:0;">Ceritamu sudah kami terima! 💌</h2>
          <p>Hei <strong>${escapeHtml(name)}</strong>,</p>
          <p>Terima kasih sudah berbagi ceritamu bersama komunitas HerPotential. Kamu butuh keberanian untuk melakukan ini — dan kami menghargainya sepenuh hati.</p>
          <div style="background:#1a0a20; border-left:4px solid #e91e8c; padding:16px; border-radius:0 8px 8px 0; margin:24px 0;">
            <p style="margin:0; color:#c084c8;">Tim redaksi kami akan meninjau ceritamu dalam <strong>3–5 hari kerja</strong>. Jika ada pertanyaan atau butuh revisi, kami akan menghubungimu melalui email ini.</p>
          </div>
          <p>Ingat: ceritamu bisa menjadi kekuatan bagi ribuan perempuan lain. 🌸</p>
          <p style="margin-top:32px; color:#c084c8;">Dengan cinta,<br><strong>Tim HerPotential</strong></p>
          <hr style="border-color:#2d1040; margin:32px 0;">
          <p style="font-size:0.75rem; color:#6b4c7a; text-align:center;">
            Kamu menerima email ini karena baru saja mengirim cerita ke HerPotential.
          </p>
        </div>
      `,
    });

    return res.json({ success: true, message: 'Ceritamu berhasil dikirim! Cek email konfirmasi ya 💌' });
  } catch (err) {
    console.error('[/api/submit-story] Resend error:', err);
    return res.status(500).json({ error: 'Gagal mengirim cerita. Coba lagi nanti.' });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// POST /api/subscribe
// Handles newsletter subscriptions
// ─────────────────────────────────────────────────────────────────────────────
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Format email tidak valid.' });
  }

  try {
    // 1️⃣ Notify admin about new subscriber
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `💌 Subscriber baru: ${email}`,
      html: `
        <div style="font-family:sans-serif;">
          <h3>📬 Subscriber Baru</h3>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="color:#999; font-size:0.85rem;">
            Didaftar pada: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB
          </p>
        </div>
      `,
    });

    // 2️⃣ Send welcome email to the subscriber
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `🌸 Selamat datang di HerPotential Newsletter!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; background:#0d0d1a; color:#f0e6f5; padding:32px; border-radius:12px;">
          <img src="https://herpotential.id/a.svg" alt="HerPotential" style="height:40px; margin-bottom:24px;" onerror="this.style.display='none'">
          <h2 style="color:#e91e8c; margin-top:0;">Kamu resmi jadi bagian dari komunitas kami! 🎉</h2>
          <p>Hai,</p>
          <p>Terima kasih sudah langganan newsletter HerPotential. Setiap minggu, kamu akan mendapat:</p>
          <ul style="line-height:2; color:#d8b4f0;">
            <li>✨ Satu cerita perempuan yang menginspirasi</li>
            <li>📚 Artikel praktis seputar hak, karier, dan kesehatan</li>
            <li>🔔 Info penting & sumber daya yang berguna</li>
          </ul>
          <div style="background:#1a0a20; border-left:4px solid #e91e8c; padding:16px; border-radius:0 8px 8px 0; margin:24px 0;">
            <p style="margin:0; color:#c084c8;">Edisi pertama akan sampai di inboxmu minggu ini. Pantau terus ya! 💜</p>
          </div>
          <p style="margin-top:32px; color:#c084c8;">Dengan hangat,<br><strong>Tim HerPotential</strong></p>
          <hr style="border-color:#2d1040; margin:32px 0;">
          <p style="font-size:0.75rem; color:#6b4c7a; text-align:center;">
            Untuk berhenti berlangganan, balas email ini dengan subjek "Unsubscribe".
          </p>
        </div>
      `,
    });

    return res.json({ success: true, message: 'Berhasil langganan! Cek email sambutan dari kami ya 🌸' });
  } catch (err) {
    console.error('[/api/subscribe] Resend error:', err);
    return res.status(500).json({ error: 'Gagal mendaftar. Coba lagi nanti.' });
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.listen(PORT, () => {
  console.log(`✅ HerPotential backend running on http://localhost:${PORT}`);
  console.log(`   Serving static files from current directory`);
});
