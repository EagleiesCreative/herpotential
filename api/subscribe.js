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

  const { email } = req.body || {};

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
          <h2 style="color:#e91e8c; margin-top:0;">Kamu resmi jadi bagian dari komunitas kami! 🎉</h2>
          <p>Hai,</p>
          <p>Terima kasih sudah langganan newsletter HerPotential. Setiap minggu, kamu akan mendapat:</p>
          <ul style="line-height:2; color:#d8b4f0;">
            <li>✨ Satu cerita perempuan yang menginspirasi</li>
            <li>📚 Artikel praktis seputar hak, karier, dan kesehatan</li>
            <li>🔔 Info penting &amp; sumber daya yang berguna</li>
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

    return res.status(200).json({ success: true, message: 'Berhasil langganan! Cek email sambutan dari kami ya 🌸' });
  } catch (err) {
    console.error('[/api/subscribe] Resend error:', err);
    return res.status(500).json({ error: 'Gagal mendaftar. Coba lagi nanti.' });
  }
};
