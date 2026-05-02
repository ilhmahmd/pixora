import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Penawaran & Konsultasi',
    desc: 'Tim kami merancang solusi terbaik berupa konsep website berdasarkan kebutuhan bisnis Anda, disertai penawaran harga yang transparan dan jelas sejak awal.',
  },
  {
    num: '02',
    title: 'Persiapan Konten',
    desc: 'Anda akan diarahkan dan dibimbing oleh tim kami untuk mengisi dokumen kebutuhan konten website: logo, foto, dan informasi bisnis yang ingin ditampilkan.',
  },
  {
    num: '03',
    title: 'Pengembangan Website',
    desc: 'Tim developer kami mengimplementasikan website sesuai konsep dan konten yang telah dikirimkan — dikerjakan dengan teliti untuk memastikan semua fitur berjalan optimal.',
  },
  {
    num: '04',
    title: 'Optimasi & Pengujian',
    desc: 'Website diuji secara menyeluruh. Anda akan menerima preview dan diberikan kesempatan untuk mengajukan revisi jika ada bagian yang belum sesuai.',
  },
  {
    num: '05',
    title: 'Publish & Go Live!',
    desc: 'Website diterbitkan dengan domain dan hosting yang telah disepakati. Akses login diserahkan kepada Anda — website resmi sudah menjadi milik Anda.',
  },
  {
    num: '06',
    title: 'Pendampingan Pasca-Launch',
    desc: 'Website Anda siap digunakan! Tim kami tetap standby untuk membantu perawatan, penambahan konten, atau perbaikan yang dibutuhkan di masa mendatang.',
  },
];

export default function Proses() {
  return (
    <section id="proses" style={{
      padding: '96px 5%',
      background: 'var(--bg2)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'var(--font-display)' }}>
          Cara Kerja Kami
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 16 }}>
          Dari Ide ke Website<br />dalam 6 Langkah
        </h2>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 520, margin: '0 auto' }}>
          Proses terstruktur dengan komunikasi yang jelas — Anda tahu progress di setiap tahap.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        maxWidth: 720,
        margin: '0 auto',
      }}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 20,
              paddingBottom: i < steps.length - 1 ? 40 : 0,
              position: 'relative',
            }}
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute',
                left: 28,
                top: 50,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(to bottom, rgba(200,240,78,0.35), transparent)',
              }} />
            )}

            {/* Number */}
            <div style={{
              width: 44,
              height: 44,
              background: 'rgba(200,240,78,0.1)',
              border: '1px solid rgba(200,240,78,0.3)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 16,
              color: 'var(--accent)',
              flexShrink: 0,
              position: 'relative',
              zIndex: 1,
            }}>
              {step.num}
            </div>

            {/* Content */}
            <div style={{ paddingTop: 4 }}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 6,
                color: 'var(--text)',
              }}>
                {step.title}
              </h4>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
