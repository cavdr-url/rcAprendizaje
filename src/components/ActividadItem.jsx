import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ActividadItem() {
  // Estructuración de estados
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  const NOCODB_URL = 'https://app.nocodb.com/api/v3/data/pospz2p66mgzdgo/mq9c3rn1crjpnwv/records';
  const API_TOKEN = 'nc_pat_Zu6UwAoEYLCykdQpGmIuAkQedUhWUmHYVyOHvfE9';

  // Implementación del mensajero asincrónico para obtener los datos de NocoDB
  useEffect(() => {
    fetch(NOCODB_URL, {
      method: 'GET',
      headers: {
        'xc-token': API_TOKEN,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(datos => {
        setActividades(datos.records || []);
        setCargando(false);
      })
      // Blindaje con catch para capturar errores en la petición
      .catch(error => {
        console.error(error);
        setCargando(false);
      });
  }, []);

  // Semáforo de carga para mostrar un mensaje mientras se obtienen los datos
  if (cargando) {
    return <p>Cargando actividades...</p>;
  }

  return (
    <div>
      {actividades.map((item, index) => {
        const campos = item.fields || item;

        return (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -3,
              boxShadow: '0 8px 18px rgba(15, 23, 42, 0.08)'
            }}
            transition={{ duration: 0.35 }}
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '12px'
            }}
          >
            <h3>{campos.Titulo}</h3>

            <p>{campos.Descripcion}</p>

            <small>
              Duración: {campos.Tiempo} minutos
            </small>
          </motion.div>
        );
      })}
    </div>
  );
}