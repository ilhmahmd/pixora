import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const styles = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10%',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  navScrolled: {
    height: 72,
    background: 'rgba(11,12,16,0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 22,
    letterSpacing: '-1px',
    color: 'var(--text)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  cta: {
    background: 'var(--accent)',
    color: '#0B0C10',
    fontFamily: 'var(--font-display)',
    fontWeight: 800, // Font lebih tebal
    fontSize: 14,
    padding: '14px 32px', // Padding horizontal ditambah agar "gendut"
    borderRadius: 'var(--radius-pill)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(200,240,78,0.1)',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCta = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Movement%20Studio%2C%20saya%20ingin%20konsultasi%20pembuatan%20website', '_blank');
  };

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <a href="/" style={styles.logo}>
        Movement Studio
      </a>

      <motion.button
        onClick={handleCta}
        whileHover={{ 
          y: -2, 
          scale: 1.02,
          boxShadow: '0 8px 24px rgba(200,240,78,0.3)' 
        }}
        whileTap={{ scale: 0.96 }}
        style={styles.cta}
      >
        <MessageCircle size={18} strokeWidth={2.5} />
        <span className="nav-cta-text">Konsultasi Gratis</span>
      </motion.button>

      <style>{`
        @media (max-width: 640px) {
          .nav-cta-text { display: none; }
          button { padding: 12px !important; } 
        }
      `}</style>
    </nav>
  );
}