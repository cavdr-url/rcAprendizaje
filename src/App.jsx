import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

export default function App() {
  // Datos del Plan de Clase
  const datosClase = {
    tituloTema: 'Introducción a React y Arquitectura de Componentes',
    nombreDocente: 'Mgtr. Kevin Estuardo Brolo Torre',
    horario: 'Sábado - 07:00 a 09:20',
    competencia:
      'Aplica los principios de la programación declarativa y la arquitectura basada en componentes para construir interfaces de usuario web dinámicas, modulares y eficientes.',
    indicadorLogro:
      'Crea, compone y renderiza componentes funcionales independientes en React utilizando props para la transferencia de datos y useState para el manejo del estado local.'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      {/* Encabezado */}
      <HeaderClase
        tituloTema={datosClase.tituloTema}
        nombreDocente={datosClase.nombreDocente}
        horario={datosClase.horario}
      />

      {/* Competencia e indicador */}
      <ObjetivosCard
        competencia={datosClase.competencia}
        indicadorLogro={datosClase.indicadorLogro}
      />

      {/* Actividades obtenidas desde NocoDB */}
      <div style={{ marginTop: '30px' }}>
        <h2
          style={{
            color: '#0f172a',
            fontSize: '1.4rem',
            marginBottom: '16px'
          }}
        >
          Cronograma de Actividades
        </h2>

        <ActividadItem />
      </div>
    </div>
  );
}