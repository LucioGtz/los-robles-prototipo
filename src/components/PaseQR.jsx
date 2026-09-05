import React, { useState } from 'react';

const PaseQR = () => {
  const [visita, setVisita] = useState({
    nombre: '',
    fecha: '',
    vehiculo: '',
    placas: ''
  });

  const [qrGenerado, setQrGenerado] = useState(false);

  const handleChange = (e) => {
    setVisita({
      ...visita,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerarQR = (e) => {
    e.preventDefault();
    if (visita.nombre && visita.fecha) {
      setQrGenerado(true);
    } else {
      alert('Por favor completa al menos el nombre y la fecha de la visita.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Generar Pase QR para Visitante</h2>
        <p style={styles.subtitle}>Coto Residencial Los Robles</p>

        <form onSubmit={handleGenerarQR} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nombre del Visitante:</label>
            <input
              type="text"
              name="nombre"
              value={visita.nombre}
              onChange={handleChange}
              placeholder="Ej. Carlos Mendoza"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Fecha de Acceso:</label>
            <input
              type="date"
              name="fecha"
              value={visita.fecha}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Modelo del Vehículo (Opcional):</label>
            <input
              type="text"
              name="vehiculo"
              value={visita.vehiculo}
              onChange={handleChange}
              placeholder="Ej. Honda Civic Gris"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Placas (Opcional):</label>
            <input
              type="text"
              name="placas"
              value={visita.placas}
              onChange={handleChange}
              placeholder="Ej. JXX-1234"
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Generar Código QR
          </button>
        </form>

        {qrGenerado && (
          <div style={styles.qrSection}>
            <hr style={styles.divider} />
            <h3 style={styles.qrTitle}>¡Pase de Abordaje Listo!</h3>
            <p style={styles.qrText}>Muestra este código en la pluma de seguridad:</p>
            
            {/* Generador de QR estático de prueba */}
            <div style={styles.qrBox}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=LosRobles-Visita:${encodeURIComponent(visita.nombre)}-Fecha:${visita.fecha}`}
                alt="Código QR de Acceso"
                style={styles.qrImage}
              />
            </div>

            <div style={styles.ticketDetails}>
              <p><strong>Visitante:</strong> {visita.nombre}</p>
              <p><strong>Fecha:</strong> {visita.fecha}</p>
              {visita.placas && <p><strong>Placas:</strong> {visita.placas}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Estilos inline de rápido montaje para no mover archivos CSS globales
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#f4f6f8',
    minHeight: '80vh'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    maxWidth: '450px',
    width: '100%',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    margin: '0 0 5px 0',
    color: '#1a202c',
    textAlign: 'center',
    fontSize: '22px'
  },
  subtitle: {
    margin: '0 0 25px 0',
    color: '#718096',
    textAlign: 'center',
    fontSize: '14px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#4a5568'
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #cbd5e0',
    fontSize: '14px',
    outline: 'none'
  },
  button: {
    marginTop: '10px',
    padding: '12px',
    backgroundColor: '#8b0000', // Rojo vino institucional como en la captura
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '15px'
  },
  divider: {
    margin: '25px 0 20px 0',
    border: '0',
    borderTop: '1px solid #e2e8f0'
  },
  qrSection: {
    textAlign: 'center'
  },
  qrTitle: {
    color: '#2b6cb0',
    margin: '0 0 5px 0'
  },
  qrText: {
    fontSize: '13px',
    color: '#4a5568',
    marginBottom: '15px'
  },
  qrBox: {
    display: 'inline-block',
    padding: '10px',
    backgroundColor: '#fff',
    border: '2px dashed #cbd5e0',
    borderRadius: '8px'
  },
  qrImage: {
    display: 'block'
  },
  ticketDetails: {
    marginTop: '15px',
    textAlign: 'left',
    backgroundColor: '#ebf8ff',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '13px',
    color: '#2d3748'
  }
};

export default PaseQR;