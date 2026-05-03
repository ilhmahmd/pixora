import React, { useState } from 'react';
import { motion } from 'framer-motion';

const paketData = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: '650.000',
    priceNote: 'Bayar sekali, website siap pakai',
    featured: false,
    badge: null,
    features: [
      '1 halaman desain eksklusif & profesional',
      '1x revisi desain sebelum launching',
      'Gratis hosting & domain my.id 1 tahun',
      'Mobile-friendly & optimasi SEO dasar',
      'Formulir kontak atau CTA sesuai kebutuhan',
      'Integrasi Google Analytics & Facebook Pixel',
    ],
    cocokUntuk: 'Promosi produk, pre-order, campaign iklan digital, event, webinar, UMKM baru go-online',
    addons: [],
  },
  {
    id: 'company',
    name: 'Company Profile',
    price: '1.300.000',
    priceNote: 'Mulai dari harga ini',
    featured: true,
    badge: 'Paling Diminati',
    features: [
      '5 halaman (Home, Tentang, Layanan, Portofolio, Kontak)',
      '2x revisi desain sebelum launching',
      'Gratis hosting & domain my.id 1 tahun',
      'SEO basic setup & desain mobile-friendly',
      'Integrasi Google My Business & WhatsApp Chat',
      'Google Analytics & Facebook Pixel',
    ],
    cocokUntuk: 'Perusahaan konsultan, restoran, klinik, event organizer, startup & bisnis baru',
    addons: [
      { label: 'Halaman Tambahan', price: 'Rp 250.000 / hal' },
      { label: 'Fitur Blog / SEO',  price: 'Rp 500.000' },
      { label: 'Live Chat Integration', price: 'Rp 200.000' },
    ],
  },
];

// --- Sub-Component: PaketCard ---

function PaketCard({ paket, variants }) {
  const [hovered, setHovered] = useState(false);
  const { featured, badge, name, price, priceNote, features, cocokUntuk, addons } = paket;

  const waMessage = `Halo Movement Studio, saya tertarik dengan paket ${name}. Bisa minta info lebih lanjut?`;
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`;

  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      style={{
        background: featured
          ? 'linear-gradient(140deg, #16171F 0%, #1C2214 100%)'
          : '#1A1B23', // Fallback warna card gelap
        border: `1px solid ${hovered || featured ? 'rgba(200,240,78,0.4)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '24px',
        padding: '36px 32px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s',
      }}
    >
      {/* Popular Badge */}
      {badge && (
        <div style={{
          position: 'absolute',
          top: -13,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#C8F04E',
          color: '#0B0C10',
          fontSize: 11,
          fontWeight: 800,
          padding: '4px 18px',
          borderRadius: '100px',
          whiteSpace: 'nowrap',
          letterSpacing: '0.5px',
          zIndex: 2
        }}>
          {badge}
        </div>
      )}

      {/* Package Name */}
      <p style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.4)',
        marginBottom: 8,
      }}>
        {name}
      </p>

      {/* Price */}
      <p style={{
        fontSize: 'clamp(32px, 3.5vw, 42px)',
        fontWeight: 800,
        letterSpacing: '-1.5px',
        color: '#FFFFFF',
        marginBottom: 4,
        lineHeight: 1.1,
      }}>
        <sup style={{ fontSize: 16, fontWeight: 600, verticalAlign: 'top', marginTop: 8, display: 'inline-block' }}>Rp</sup>
        {price}
      </p>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>{priceNote}</p>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 20 }} />

      {/* Features */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, flex: 1, padding: 0 }}>
        {features.map((f, i) => (
          <li key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ color: '#C8F04E', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Cocok Untuk */}
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: addons.length ? 16 : 28, lineHeight: 1.6, fontStyle: 'italic' }}>
        Cocok untuk: {cocokUntuk}
      </p>

      {/* Add-ons */}
      {addons.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <p style={{ fontSize: 11, color: '#C8F04E', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Add-On Tersedia:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {addons.map((a, i) => (
              <span key={i} style={{
                background: 'rgba(200,240,78,0.06)',
                border: '1px solid rgba(200,240,78,0.15)',
                borderRadius: '8px',
                fontSize: 10,
                color: '#C8F04E',
                padding: '4px 10px',
                fontWeight: 600,
              }}>
                {a.label}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* CTA Button */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        whileTap={{ scale: 0.98 }}
        style={{
          display: 'block',
          textAlign: 'center',
          width: '100%',
          background: featured ? '#C8F04E' : 'transparent',
          border: `1.5px solid ${featured ? '#C8F04E' : 'rgba(255,255,255,0.15)'}`,
          color: featured ? '#0B0C10' : '#FFFFFF',
          fontWeight: 700,
          fontSize: 14,
          padding: '14px',
          borderRadius: '12px',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          if(!featured) {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }
        }}
        onMouseLeave={e => {
          if(!featured) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
          }
        }}
      >
        Pesan Paket Ini →
      </motion.a>
    </motion.div>
  );
}

// --- Main Component: Paket ---

export default function Paket() {
  // Variasi untuk Parent (Container)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Efek muncul satu per satu
        delayChildren: 0.1
      }
    }
  };

  // Variasi untuk Element (Header & Card)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Smooth ease-out
      }
    }
  };

  return (
    <motion.section 
      id="paket" 
      style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0B0C10', // Warna background utama
        color: '#FFFFFF'
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Reveal */}
      <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ 
          fontSize: 12, 
          fontWeight: 800, 
          letterSpacing: '2px', 
          color: '#C8F04E', 
          textTransform: 'uppercase', 
          marginBottom: 16 
        }}>
          PRICING
        </p>
        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 48px)', 
          fontWeight: 800, 
          letterSpacing: '-1.5px', 
          marginBottom: 20,
          lineHeight: 1.2
        }}>
          Pilih Paket yang<br />Cocok untuk Bisnis Anda
        </h2>
        <motion.p style={{ 
          fontSize: 'clamp(16px, 1.2vw, 18px)', 
          color: 'rgba(255,255,255,0.5)', 
          maxWidth: 540, 
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Harga transparan tanpa biaya tersembunyi. Semua paket sudah termasuk 
          <strong> Gratis Hosting & Domain </strong> untuk tahun pertama.
        </motion.p>
      </motion.div>

      {/* Grid Cards Reveal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 32,
        maxWidth: 960,
        margin: '0 auto',
      }}>
        {paketData.map(p => (
          <PaketCard 
            key={p.id} 
            paket={p} 
            variants={itemVariants} 
          />
        ))}
      </div>
    </motion.section>
  );
}