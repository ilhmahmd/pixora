import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  Code2, 
  ShieldCheck, 
  Globe, 
  LifeBuoy 
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <MessageSquare size={18} />,
    title: 'Penawaran & Konsultasi',
    desc: 'Tim kami merancang solusi terbaik berupa konsep website berdasarkan kebutuhan bisnis Anda, disertai penawaran harga yang transparan dan jelas sejak awal.',
  },
  {
    num: '02',
    icon: <FileText size={18} />,
    title: 'Persiapan Konten',
    desc: 'Anda akan diarahkan dan dibimbing oleh tim kami untuk mengisi dokumen kebutuhan konten website: logo, foto, dan informasi bisnis yang ingin ditampilkan.',
  },
  {
    num: '03',
    icon: <Code2 size={18} />,
    title: 'Pengembangan Website',
    desc: 'Tim developer kami mengimplementasikan website sesuai konsep dan konten yang telah dikirimkan — dikerjakan dengan teliti untuk memastikan semua fitur berjalan optimal.',
  },
  {
    num: '04',
    icon: <ShieldCheck size={18} />,
    title: 'Optimasi & Pengujian',
    desc: 'Website diuji secara menyeluruh. Anda akan menerima preview dan diberikan kesempatan untuk mengajukan revisi jika ada bagian yang belum sesuai.',
  },
  {
    num: '05',
    icon: <Globe size={18} />,
    title: 'Publish & Go Live!',
    desc: 'Website diterbitkan dengan domain dan hosting yang telah disepakati. Akses login diserahkan kepada Anda — website resmi sudah menjadi milik Anda.',
  },
  {
    num: '06',
    icon: <LifeBuoy size={18} />,
    title: 'Pendampingan Pasca-Launch',
    desc: 'Website Anda siap digunakan! Tim kami tetap standby untuk membantu perawatan, penambahan konten, atau perbaikan yang dibutuhkan di masa mendatang.',
  },
];

export default function Proses() {
  return (
    <section id="proses" style={{
      padding: '96px 5% 160px',
      background: 'var(--bg2)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '2px', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'var(--font-display)' }}>
          Cara Kerja Kami
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-1.5px', marginBottom: 16 }}>
          Dari Ide ke Website<br />dalam 6 Langkah
        </h2>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 520, margin: '0 auto' }}>
          Proses terstruktur dengan komunikasi yang jelas — Anda tahu progress di setiap tahap.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        maxWidth: 720,
        margin: '0 auto',
      }}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 20,
              paddingBottom: i < steps.length - 1 ? 48 : 0,
              position: 'relative',
            }}
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <motion.div 
                initial={{ scaleY: 0, opacity: 0.2 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                // Animasi terpicu saat elemen berada di sekitar area tengah layar
                viewport={{ once: false, amount: 0.2, margin: "-20% 0px -40% 0px" }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  left: 21,
                  top: 50,
                  bottom: 0,
                  width: 2,
                  background: 'var(--accent)',
                  originY: 0,
                  zIndex: 0,
                }} 
              />
            )}

            {/* Icon Box */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ backgroundColor: 'rgba(200,240,78,0.05)', color: 'var(--accent)', borderColor: 'rgba(200,240,78,0.2)' }}
                whileInView={{ 
                  backgroundColor: 'var(--accent)',
                  color: '#000000',
                  borderColor: 'var(--accent)',
                  scale: 1.1
                }}
                // margin negatif memastikan item menyala saat mendekati tengah layar
                viewport={{ once: false, amount: 0.5, margin: "-20% 0px -40% 0px" }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 44,
                  height: 44,
                  border: '1px solid',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </motion.div>
            </div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5, margin: "-20% 0px -40% 0px" }}
              transition={{ duration: 0.4 }}
              style={{ paddingTop: 2 }}
            >
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 8,
                color: 'var(--text)',
              }}>
                <span style={{ color: 'var(--accent)', marginRight: 8, fontSize: 16 }}>{step.num}.</span>
                {step.title}
              </h4>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75 }}>
                {step.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}