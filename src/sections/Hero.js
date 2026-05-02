import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '3-5 Hari', label: 'Estimasi Pengerjaan' },
  { value: '4.9 ★',  label: 'Rating Klien' },
  { value: 'Gratis',  label: 'Domain & Hosting 1 Tahun' },
];

export default function Hero() {
  // Variasi animasi untuk container (parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda antar elemen muncul
      },
    },
  };

  // Variasi animasi untuk item (child)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk efek smooth
      },
    },
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 5% 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '-160px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 800,
        background: 'radial-gradient(circle, rgba(200,240,78,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge Reveal */}
      <motion.div 
        variants={itemVariants}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(200,240,78,0.1)',
          border: '1px solid rgba(200,240,78,0.25)',
          borderRadius: 'var(--radius-pill)',
          padding: '6px 18px',
          fontSize: 13,
          color: 'var(--accent)',
          fontWeight: 500,
          marginBottom: 32,
        }}
      >
        <span style={{ fontSize: 8 }}>●</span>
        Jasa Pembuatan Website Profesional
      </motion.div>

      {/* Headline Reveal */}
      <motion.h1 
        variants={itemVariants}
        style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 700,
          letterSpacing: '-2px',
          color: 'var(--text)',
          maxWidth: 820,
          marginBottom: 20,
        }}
      >
        Website{' '}
        <span style={{ color: 'var(--accent)' }}>Keren</span>
        {' '}Bukan Lagi Hak Perusahaan Besar
      </motion.h1>

      {/* Subheadline Reveal */}
      <motion.p 
        variants={itemVariants}
        style={{
          fontSize: 18,
          color: 'var(--muted)',
          maxWidth: 560,
          margin: '0 auto 40px',
          fontWeight: 300,
        }}
      >
        Dari UMKM hingga startup, kami bantu bisnis Anda tampil profesional
        di dunia digital — cepat, terjangkau, dan berhasil.
      </motion.p>

      {/* CTA Buttons Reveal */}
      <motion.div 
        variants={itemVariants}
        style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <a
          href="#paket"
          style={{
            background: 'var(--accent)',
            color: '#0B0C10',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 15,
            padding: '14px 32px',
            borderRadius: 'var(--radius-pill)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block',
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
          Lihat Paket Harga
        </a>
        <a
          href="#proses"
          style={{
            background: 'transparent',
            color: 'var(--text)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 15,
            padding: '14px 32px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border)',
            display: 'inline-block',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          Bagaimana Prosesnya?
        </a>
      </motion.div>

      {/* Stats Reveal */}
      <motion.div 
        variants={itemVariants}
        style={{
          display: 'flex',
          gap: 'clamp(24px, 5vw, 56px)',
          justifyContent: 'center',
          marginTop: 64,
          paddingTop: 48,
          borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <strong style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 700,
              color: 'var(--accent)',
            }}>
              {s.value}
            </strong>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}