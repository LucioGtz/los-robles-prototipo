import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboardView = () => {
  const navigate = useNavigate();

  // Datos simulados de vecinos morosos
  const [morosos] = useState([
    { id: 1, casa: 'Casa 102', vecino: 'Carlos Mendoza', meses: 2, adeudo: 2500 },
    { id: 2, casa: 'Casa 110', vecino: 'Ana María Gómez', meses: 1, adeudo: 1250 },
    { id: 3, casa: 'Casa 205', vecino: 'Roberto Silva', meses: 3, adeudo: 3750 },
    { id: 4, casa: 'Casa 301', vecino: 'Lucía Fernández', meses: 1, adeudo: 1250 },
  ]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      
      {/* HEADER PRINCIPAL */}
      <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span className="subtitle">Residencial Los Robles</span>
          <h2>Panel Administrador 🛡️</h2>
        </div>
        <button 
          onClick={handleLogout}
          style={{ padding: '8px 16px', background: '#d32f2f', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Cerrar Sesión
        </button>
      </header>

      {/* METRICAS Y KPIS (SCRUM-48) */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', margin: '20px 0' }}>
        <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderLeft: '4px solid #2e7d32' }}>
          <span style={{ fontSize: '0.85rem', color: '#666' }}>Total Cobrado (Mes)</span>
          <h3 style={{ fontSize: '1.6rem', color: '#2e7d32', margin: '5px 0' }}>$ 45,000.00</h3>
          <small style={{ color: '#888' }}>85% de la meta recaudada</small>
        </div>

        <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderLeft: '4px solid #c62828' }}>
          <span style={{ fontSize: '0.85rem', color: '#666' }}>Morosidad Total</span>
          <h3 style={{ fontSize: '1.6rem', color: '#c62828', margin: '5px 0' }}>$ 8,750.00</h3>
          <small style={{ color: '#c62828' }}>15% de cartera vencida</small>
        </div>

        <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderLeft: '4px solid #003b7a' }}>
          <span style={{ fontSize: '0.85rem', color: '#666' }}>Casas al Día</span>
          <h3 style={{ fontSize: '1.6rem', color: '#003b7a', margin: '5px 0' }}>34 / 40</h3>
          <small style={{ color: '#888' }}>85% de cumplimiento</small>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL (GRÁFICA Y MOROSOS) */}
      <main className="dashboard-layout">
        
        {/* COLUMNA IZQUIERDA: GRÁFICA SIMULADA (SCRUM-49) */}
        <section className="main-column">
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 className="section-title">Ingresos vs. Morosidad (Últimos 4 Meses)</h3>
            
            {/* Visualización simulada CSS de la gráfica */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '180px', marginTop: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '30px', height: '120px', background: '#003b7a', margin: '0 auto', borderRadius: '4px 4px 0 0' }}></div>
                <small>Jun</small>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '30px', height: '140px', background: '#003b7a', margin: '0 auto', borderRadius: '4px 4px 0 0' }}></div>
                <small>Jul</small>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '30px', height: '110px', background: '#003b7a', margin: '0 auto', borderRadius: '4px 4px 0 0' }}></div>
                <small>Ago</small>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '30px', height: '150px', background: '#2e7d32', margin: '0 auto', borderRadius: '4px 4px 0 0' }}></div>
                <small>Sep</small>
              </div>
            </div>
          </div>
        </section>

        {/* COLUMNA DERECHA: TABLA DE MOROSOS (SCRUM-50) */}
        <section className="side-column">
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 className="section-title">Vecinos Morosos</h3>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                  <th style={{ padding: '8px' }}>Propiedad</th>
                  <th style={{ padding: '8px' }}>Adeudo</th>
                  <th style={{ padding: '8px' }}>Acción</th>
                </tr>
              </thead>
              <tbody>
                {morosos.map((m) => (
                  <tr key={m.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '8px' }}>
                      <strong>{m.casa}</strong>
                      <br />
                      <small style={{ color: '#666' }}>{m.vecino}</small>
                    </td>
                    <td style={{ padding: '8px', color: '#c62828', fontWeight: 'bold' }}>
                      ${m.adeudo.toFixed(2)}
                    </td>
                    <td style={{ padding: '8px' }}>
                      <button style={{ background: '#003b7a', color: '#fff', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer', fontSize: '0.75rem' }}>
                        Notificar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </section>

      </main>

    </div>
  );
};

export default AdminDashboardView;