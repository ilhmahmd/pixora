import React from 'react';

const testimonials = [
  {
    initials: 'AR',
    name: 'Andi Rachmat',
    role: 'Owner, Warung Makan Bu Andi',
    quote: 'Prosesnya cepat dan timnya sangat responsif. Website kami jadi terlihat jauh lebih profesional. Klien baru pun mulai datang dari pencarian Google!',
    stars: 5,
  },
  {
    initials: 'SK',
    name: 'Sari Kusuma',
    role: 'Founder, Brand Skincare Lokal',
    quote: 'Saya bukan orang teknis, tapi tim Pixora membimbing saya dari awal sampai akhir. Landing page untuk produk launching saya berhasil dapat ratusan pre-order!',
    stars: 5,
  },
  {
    initials: 'DH',
    name: 'Dimas Herdianto',
    role: 'CEO, Startup Teknologi Bandung',
    quote: 'Harga sangat masuk akal untuk kualitas yang diberikan. Company profile kami sekarang bisa digunakan untuk presentasi ke investor. Sangat rekomendasikan!',
    stars: 5,
  },
  {
    initials: 'NF',
    name: 'Nadia Fitriani',
    role: 'Pemilik Klinik Kecantikan',
    quote: 'Dalam waktu 4 hari website sudah jadi dan langsung bisa dipakai. WhatsApp integration-nya sangat membantu pasien baru untuk menghubungi kami.',
    stars: 5,
  },
  {
    initials: 'RB',
    name: 'Rizky Budiman',
    role: 'Event Organizer, Bandung',
    quote: 'Portofolio event kami jadi kelihatan jauh lebih meyakinkan setelah punya company profile yang proper. Closing rate proposal naik signifikan!',
    stars: 5,
  },
  {
    initials: 'LW',
    name: 'Linda Wijaya',
    role: 'Konsultan HR Independen',
    quote: 'Tim-nya profesional dan mau menjelaskan dengan sabar. Untuk saya yang tidak terlalu melek teknologi, prosesnya sangat mudah diikuti dari awal.',
    stars: 5,
  },
];

export default function Testimoni() {
  return (
    <section id="testimoni" style={{ padding: '96px 5%' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'var(--font-display)' }}>
          Testimoni
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 16 }}>
          Apa Kata Klien Kami
        </h2>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 480, margin: '0 auto' }}>
          Kepuasan klien adalah standar kerja yang tidak bisa kami kompromikan.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 20,
        maxWidth: 1000,
        margin: '0 auto',
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Stars */}
            <div style={{ color: 'var(--accent)', fontSize: 14, marginBottom: 14, letterSpacing: 2 }}>
              {'★'.repeat(t.stars)}
            </div>

            {/* Quote */}
            <p style={{
              fontSize: 14,
              color: 'var(--subtle)',
              lineHeight: 1.75,
              marginBottom: 20,
              fontStyle: 'italic',
              flex: 1,
            }}>
              "{t.quote}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'rgba(200,240,78,0.12)',
                border: '1px solid rgba(200,240,78,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 13,
                color: 'var(--accent)',
                flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
