import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5%',
    transition: 'background 0.3s, border-bottom 0.3s',
  },
  navScrolled: {
    background: 'rgba(11,12,16,0.88)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 20,
    letterSpacing: '-0.5px',
    color: 'var(--text)',
  },
  logoAccent: { color: 'var(--accent)' },
  cta: {
    background: 'var(--accent)',
    color: '#0B0C10',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 13,
    padding: '9px 22px',
    borderRadius: 'var(--radius-pill)',
    border: 'none',
    letterSpacing: '0.2px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCta = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Movement%20Studio%2C%20saya%20ingin%20konsultasi%20pembuatan%20website', '_blank');
  };

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
      <div style={styles.logo}>
        Movement Studio
      </div>
      <button
        style={styles.cta}
        onClick={handleCta}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(200,240,78,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Konsultasi Gratis →
      </button>
    </nav>
  );
}
