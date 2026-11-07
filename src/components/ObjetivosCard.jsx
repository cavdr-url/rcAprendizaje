import { motion } from 'framer-motion';

export default function ObjetivosCard({ competencia, indicadorLogro }) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    color: '#334155',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '12px',
    textAlign: 'justify'
  };

  return (
    <motion.div
      style={cardStyle}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ boxShadow: '0 8px 22px rgba(15, 23, 42, 0.1)' }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.35 }}
        style={{ color: '#0f172a', fontSize: '1.4rem', marginTop: 0, marginBottom: '16px' }}
      >
        Metas de la Sesión
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.35 }}
        style={{ marginBottom: '12px' }}
      >
        <h4 style={{ color: '#64748b', margin: '0 0 4px 0', textTransform: 'uppercase', fontSize: '0.75rem' }}>
          Competencia
        </h4>
        <p style={paragraphStyle}>
          {competencia}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.35 }}
      >
        <h4 style={{ color: '#64748b', margin: '0 0 4px 0', textTransform: 'uppercase', fontSize: '0.75rem' }}>
          Indicador de Logro
        </h4>
        <p style={paragraphStyle}>
          {indicadorLogro}
        </p>
      </motion.div>
    </motion.div>
  );
}
