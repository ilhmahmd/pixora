import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Gem, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  Users2 
} from 'lucide-react';

const reasons = [
  {
    icon: <Zap size={28} />,
    title: 'Pengerjaan Cepat',
    desc: 'Estimasi 3–5 hari kerja. Tanpa drama, tanpa penundaan yang tidak perlu. Deadline Anda adalah prioritas kami.',
  },
  {
    icon: <Gem size={28} />,
    title: 'Desain Eksklusif',
    desc: 'Bukan template biasa. Setiap website dirancang khusus sesuai karakter dan kebutuhan brand Anda.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Siap Tracking & Analitik',
    desc: 'Google Analytics & Facebook Pixel sudah terpasang dari hari pertama. Pantau performa iklan secara real-time.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Harga Transparan',
    desc: 'Penawaran harga diberikan di awal sebelum pengerjaan dimulai. Tidak ada biaya tersembunyi sama sekali.',
  },
  {
    icon: <Smartphone size={28} />,
    title: '100% Mobile-Friendly',
    desc: 'Tampil sempurna di semua perangkat — HP, tablet, maupun desktop. Pengalaman pengguna yang konsisten.',
  },
  {
    icon: <Users2 size={28} />,
    title: 'Pendampingan Penuh',
    desc: 'Tim kami siap membantu mulai dari konsep hingga website live, dan terus mendampingi di masa mendatang.',
  },
];

function WhyCard({ icon, title, desc, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, borderColor: 'rgba(200,240,78,0.4)' }}
      style={{
        background: '#16171D',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px 28px',
        transition: 'border-color 0.3s',
      }}
    >
      <div style={{ color: '#C8F04E', marginBottom: 20 }}>{icon}</div>
      <h4 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 12,
        color: '#FFFFFF',
        letterSpacing: '-0.02em'
      }}>
        {title}
      </h4>
      <p style={{ 
        fontSize: 14, 
        color: 'rgba(255,255,255,0.5)', 
        lineHeight: 1.6,
        fontWeight: 400 
      }}>
        {desc}
      </p>
    </motion.div>
  );
}

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.section 
      id="kenapa" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      style={{ 
        padding: '120px 5% 160px',
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
          Core Values
        </p>
        <h2 style={{ 
          fontSize: 'clamp(32px, 5vw, 52px)', 
          fontWeight: 800, 
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          marginBottom: 20
        }}>
          Bukan Sekadar<br />Bikin Website
        </h2>
        <p style={{ 
          fontSize: 18, 
          color: 'rgba(255,255,255,0.5)', 
          maxWidth: 540, 
          margin: '0 auto' 
        }}>
          Kami membangun aset digital yang bekerja keras untuk pertumbuhan bisnis Anda.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24,
        maxWidth: 1000,
        margin: '0 auto',
      }}>
        {reasons.map((r, i) => (
          <WhyCard key={i} {...r} variants={itemVariants} />
        ))}
      </div>
    </motion.section>
  );
}