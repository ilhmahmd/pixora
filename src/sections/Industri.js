import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, Utensils, HeartPulse, Briefcase, 
  Ticket, Rocket, Megaphone, GraduationCap, 
  HardHat, Scissors, Music, ShieldCheck 
} from 'lucide-react';

const industries = [
  { icon: <ShoppingBag size={24} />, label: 'UMKM & Startup' },
  { icon: <Utensils size={24} />, label: 'Restoran & Kuliner' },
  { icon: <HeartPulse size={24} />, label: 'Klinik & Kesehatan' },
  { icon: <Briefcase size={24} />, label: 'Konsultan & Jasa' },
  { icon: <Ticket size={24} />, label: 'Event Organizer' },
  { icon: <Rocket size={24} />, label: 'Produk Baru' },
  { icon: <Megaphone size={24} />, label: 'Kampanye Digital' },
  { icon: <GraduationCap size={24} />, label: 'Webinar & Edukasi' },
  { icon: <HardHat size={24} />, label: 'Properti & Kontraktor' },
  { icon: <Scissors size={24} />, label: 'Salon & Kecantikan' },
  { icon: <Music size={24} />, label: 'Musisi & Kreator' },
  { icon: <ShieldCheck size={24} />, label: 'Asuransi & Keuangan' },
];

function Chip({ icon, label, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        y: -5, 
        borderColor: 'rgba(200,240,78,0.4)',
        backgroundColor: 'rgba(200,240,78,0.02)'
      }}
      style={{
        background: '#16171D', // Sesuai dengan palet gelap sebelumnya
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '24px 12px',
        textAlign: 'center',
        cursor: 'default',
        transition: 'border-color 0.2s, background-color 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
      }}
    >
      <div style={{ color: '#C8F04E', opacity: 0.9 }}>
        {icon}
      </div>
      <span style={{
        fontSize: 13,
        fontWeight: 600,
        color: 'rgba(255,255,255,0.7)',
        lineHeight: 1.3,
      }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Industri() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Efek gelombang saat muncul
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.section 
      id="industri" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{ 
        padding: '120px 5%', // Gap atas dan bawah yang luas
        backgroundColor: '#0B0C10',
        color: '#FFFFFF'
      }}
    >
      <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ 
          fontSize: 12, 
          fontWeight: 800, 
          letterSpacing: '2px', 
          color: '#C8F04E', 
          textTransform: 'uppercase', 
          marginBottom: 16 
        }}>
          Versatility
        </p>
        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 48px)', 
          fontWeight: 800, 
          letterSpacing: '-0.04em',
          lineHeight: 1.2
        }}>
          Solusi Tepat untuk<br />Berbagai Jenis Bisnis
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 16,
        maxWidth: 1000,
        margin: '0 auto',
      }}>
        {industries.map((item, i) => (
          <Chip key={i} {...item} variants={itemVariants} />
        ))}
      </div>
    </motion.section>
  );
}