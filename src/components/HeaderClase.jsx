import { motion } from 'framer-motion';

export default function HeaderClase({ tituloTema, nombreDocente, horario }) {
  // Estilos en línea para mantenerlo limpio y autocontenido
  const headerStyle = {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    marginBottom: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  // Detalle visual: Barra por degradado
  const customDetailStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)'
  };

  return (
    <motion.header
      style={headerStyle}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        style={{ margin: '0 0 12px 0', fontSize: '1.8rem', color: '#3b82f6' }}
      >
        {tituloTema}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{ display: 'flex', gap: '20px', fontSize: '0.95rem' }}
      >
        <p style={{ margin: 0 }}><strong>Docente:</strong> {nombreDocente}</p>
        <p style={{ margin: 0 }}><strong>Horario:</strong> {horario}</p>
      </motion.div>
      {/* Detalle visual propio */}
      <motion.div
        style={customDetailStyle}
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
      />
    </motion.header>
  );
}
