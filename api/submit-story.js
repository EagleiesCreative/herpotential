const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@herpotential.id';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'redaksi@herpotential.id';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
  // Handle CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, category, story } = req.body || {};

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

    return res.status(200).json({ success: true, message: 'Ceritamu berhasil dikirim! Cek email konfirmasi ya 💌' });
  } catch (err) {
    console.error('[/api/submit-story] Resend error:', err);
    return res.status(500).json({ error: 'Gagal mengirim cerita. Coba lagi nanti.' });
  }
};
