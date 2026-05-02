import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function CtaFinal() {
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent('Halo Movement Studio, saya ingin konsultasi pembuatan website untuk bisnis saya.')}`;

  return (
    <section style={{
      background: 'var(--bg1)',
      padding: '120px 5% 160px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '1000px',
          background: 'var(--bg2)', // Menggunakan warna background sekunder Anda
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '80px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dekorasi Glow di dalam Card */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(200,240,78,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 8, 
            background: 'rgba(200,240,78,0.1)', 
            padding: '8px 16px', 
            borderRadius: 'var(--radius-pill)',
            marginBottom: 24
          }}>
            <Sparkles size={14} color="var(--accent)" />
            <span style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '1px',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-display)',
            }}>
              Mulai Sekarang
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: 24,
            color: 'var(--text)',
          }}>
            Bisnis Anda Layak Tampil<br />
            <span style={{ color: 'var(--accent)' }}>Terbaik</span> Secara Online
          </h2>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'var(--muted)',
            maxWidth: '540px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}>
            Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan bisnis Anda dan kami siapkan solusi terbaiknya.
          </p>

          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <motion.a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(200,240,78,0.2)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'var(--accent)',
                color: '#0B0C10',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 15,
                padding: '16px 32px', // Ukuran disesuaikan agar sama dengan Hero
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <MessageCircle size={18} />
              Chat via WhatsApp
            </motion.a>

            <motion.a
              href="#paket"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'transparent',
                color: 'var(--text)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 15,
                padding: '16px 32px', // Ukuran disesuaikan agar sama dengan Hero
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Lihat Paket
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}