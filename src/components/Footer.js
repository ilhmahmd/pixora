import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '28px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
      }}>
        Pixora<span style={{ color: 'var(--accent)' }}>.</span>Studio
      </div>
      <p style={{ fontSize: 13, color: 'var(--muted)' }}>
        © {new Date().getFullYear()} Movement Studio. Semua hak dilindungi.
      </p>
      <p style={{ fontSize: 13, color: 'var(--muted)' }}>
        Bandung, Indonesia
      </p>
    </footer>
  );
}
