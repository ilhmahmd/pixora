import React from 'react';

export default function CtaFinal() {
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent('Halo Pixora Studio, saya ingin konsultasi pembuatan website untuk bisnis saya.')}`;

  return (
    <section style={{
      background: 'var(--bg1)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '96px 5%',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(200,240,78,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <p style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '2px',
        color: 'var(--accent)',
        textTransform: 'uppercase',
        marginBottom: 16,
        fontFamily: 'var(--font-display)',
        position: 'relative',
      }}>
        Mulai Sekarang
      </p>

      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 64px)',
        fontWeight: 700,
        letterSpacing: '-2px',
        marginBottom: 20,
        position: 'relative',
      }}>
        Bisnis Anda Layak<br />
        Tampil{' '}
        <span style={{ color: 'var(--accent)' }}>Terbaik</span>
        {' '}Online
      </h2>

      <p style={{
        fontSize: 17,
        color: 'var(--muted)',
        maxWidth: 500,
        margin: '0 auto 40px',
        position: 'relative',
      }}>
        Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan bisnis Anda dan kami siapkan solusi terbaiknya.
      </p>

      <div style={{
        display: 'flex',
        gap: 14,
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
      }}>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'var(--accent)',
            color: '#0B0C10',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 15,
            padding: '14px 36px',
            borderRadius: 'var(--radius-pill)',
            display: 'inline-block',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(200,240,78,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          💬 Chat via WhatsApp
        </a>
        <a
          href="#paket"
          style={{
            background: 'transparent',
            color: 'var(--text)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 15,
            padding: '14px 36px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border)',
            display: 'inline-block',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          Lihat Semua Paket
        </a>
      </div>
    </section>
  );
}
