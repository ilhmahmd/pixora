import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.35], [0.85, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.35], [32, 0]);
  const yVideo = useTransform(scrollYProgress, [0, 0.35], [0, -20]); // Sedikit mengangkat video saat membesar

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div style={{ background: '#0B0C10', color: '#FFFFFF', position: 'relative' }}>
      
      {/* 
          GRADIENT FIX: 
          Menggunakan zIndex -1 dan mematikan pointerEvents agar tidak mengganggu klik.
          Dibuat sangat besar agar tidak terlihat ujungnya.
      */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150%',
        height: '1000px',
        background: 'radial-gradient(circle at center, rgba(200,240,78,0.12) 0%, rgba(200,240,78,0.02) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <motion.section 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '120px 5% 40px',
          position: 'relative',
          zIndex: 1, // Di atas gradien
        }}
      >
        <motion.div 
          variants={itemVariants}
          style={{
            background: 'rgba(200,240,78,0.08)',
            border: '1px solid rgba(200,240,78,0.2)',
            borderRadius: '100px',
            padding: '8px 20px',
            fontSize: '12px',
            color: '#C8F04E',
            marginBottom: '32px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          ● Jasa Pembuatan Website Profesional
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 800,
            maxWidth: '1000px',
            lineHeight: 0.95,
            letterSpacing: '-3px',
            marginBottom: '24px',
          }}
        >
          Website <span style={{ color: '#C8F04E' }}>Keren</span> Bukan Lagi Hak Perusahaan Besar
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#9499AD',
            maxWidth: '650px',
            marginBottom: '48px',
            fontWeight: 300,
            lineHeight: 1.6
          }}
        >
          Kami bantu bisnis Anda tampil profesional di dunia digital dengan proses yang cepat dan hasil yang memukau.
        </motion.p>

        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px' }}>
          <a href="#paket" style={{
            background: '#C8F04E',
            color: '#0B0C10',
            padding: '16px 36px',
            borderRadius: '100px',
            fontWeight: 700,
            fontSize: '15px',
            textDecoration: 'none'
          }}>
            Lihat Paket Harga
          </a>
          <a href="#proses" style={{
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#FFF',
            padding: '16px 36px',
            borderRadius: '100px',
            fontWeight: 600,
            fontSize: '15px',
            textDecoration: 'none',
            background: 'rgba(255,255,255,0.03)'
          }}>
            Proses Kerja
          </a>
        </motion.div>
      </motion.section>

      {/* VIDEO SECTION */}
      <div 
        ref={containerRef} 
        style={{ 
          width: '100%', 
          paddingBottom: '100px', // Memberi ruang agar video bisa selesai beranimasi
          background: 'transparent' 
        }}
      >
        <motion.div
          style={{
            scale,
            borderRadius,
            y: yVideo,
            width: '95%', // Tidak full width di awal agar terlihat efek membesarnya
            maxWidth: '1400px',
            margin: '0 auto',
            aspectRatio: '16/9',
            overflow: 'hidden',
            transformOrigin: 'top center',
            boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/Scene.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
}