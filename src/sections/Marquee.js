import React from 'react';

const items = [
  'Landing Page', 'Company Profile', 'SEO Friendly', 'Mobile Responsive',
  'Google Analytics', 'WhatsApp Integration', 'Facebook Pixel', 'Desain Eksklusif',
  'Domain Gratis', 'Hosting 1 Tahun', 'Harga Transparan', 'Tim Profesional',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '18px 0',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 0;
          animation: marquee 28s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.5px',
            padding: '0 24px',
          }}>
            {item}
            <span style={{
              color: 'var(--accent)',
              marginLeft: 24,
              fontSize: 10,
            }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
