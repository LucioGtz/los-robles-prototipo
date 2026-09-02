import React from 'react';
import HistorialPagos from './HistorialPagos';

const DashboardView = () => {
  return (
    <div className="dashboard-container">
      
      {/* HEADER DE BIENVENIDA */}
      <header className="dashboard-header">
        <div>
          <span className="subtitle">Residencial Los Robles</span>
          <h2>¡Hola, Residente! 👋</h2>
        </div>
        <div className="user-avatar">LR</div>
      </header>

      {/* CONTENEDOR PRINCIPAL RESPONSIVO */}
      <main className="dashboard-layout">
        
        {/* COLUMNA IZQUIERDA: RESUMEN Y ACCIONES */}
        <section className="main-column">
          
          {/* SECCIÓN 1: DASHBOARD FINANCIERO */}
          <div className="card-financial">
            <div className="card-financial-body">
              <span className="label">Pagos pendientes</span>
              <div className="amount-row">
                <strong className="amount">$ 1,250.00</strong>
                <button className="btn-pay">Pagar ›</button>
              </div>
              <span className="due-date">
                Próximo vencimiento: 15 de Octubre, 2023
              </span>
            </div>

            <div className="spei-banner">
              <span>Transferencia SPEI</span>
              <div>
                <code>706180320018028347</code>
                <button title="Copiar CLABE">📋</button>
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: ACCIONES RÁPIDAS */}
          <div className="actions-section">
            <h3 className="section-title">¿Qué deseas hacer?</h3>
            <div className="actions-grid">
              
              <div className="action-card">
                <div className="action-icon">🛠️</div>
                <strong>Mantenimiento</strong>
                <span>Reporta fallas en áreas comunes</span>
                <button>Crear Reporte</button>
              </div>

              <div className="action-card">
                <div className="action-icon">📄</div>
                <strong>Documentos</strong>
                <span>Reglamentos y circulares</span>
                <button>Ver Documentos</button>
              </div>

            </div>
          </div>

        </section>

        {/* COLUMNA DERECHA: HISTORIAL Y CUOTAS (US02) */}
        <section className="side-column">
          <h3 className="section-title">Gestión de Cuotas</h3>
          <div className="history-container">
            <HistorialPagos />
          </div>
        </section>

      </main>

    </div>
  );
};

export default DashboardView;