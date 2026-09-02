import React from 'react';

const DashboardView = () => {
  return (
    <div className="container">
      <h2>Portal de Residentes - Resumen General</h2>
       
       {/* SECCIÓN 1: DASHBOARD FINANCIERO */}
       <div className="financial-summary-section">
        <div className="summary-header">
          <h3>Estado de Cuenta Actual</h3>
          <p>Resumen de obligaciones financieras del residente.</p>

          <div className="summary-grid">
             <div className="summary-item">
               <label>Saldo Total Pendiente</label>
               <span className="amount">$1,250.00</span>
             </div>
              <div className="summary-item">
                <label>Próximo Vencimiento</label>
                <span className="amount">15 de Octubre, 2023</span>
              </div>
          </div>
        </div>
        
        {/* SECCIÓN 2: ACCIONES RÁPIDAS */}
      <div className="dashboard-section">
        <h3>Gestión de Residencia</h3>
        <div className="dashboard-grid">
          
          <div className="module">
            <h3>Mantenimiento</h3>
            <p>Reporta fallas en áreas comunes o solicita servicios de reparación.</p>
            <button className="btn btn-primary dashboard-btn">Crear Reporte</button>
          </div>

          <div className="module">
            <h3>Documentos</h3>
            <p>Accede a tu contrato de arrendamiento, reglamentos y circulares.</p>
            <button className="btn btn-primary dashboard-btn">Ver Documentos</button>
          </div>
        </div>
      </div>
       {/* SECCIÓN 3: HISTORIAL DE PAGOS (Lugar para la tabla) */}
      <div className="dashboard-section">
        <h3>Historial de Pagos</h3>
        <div className="history-container">
          {/* Aquí es donde tus compas pondrán la tabla de datos */}
          <p style={{textAlign: 'center', color: '#888', padding: '20px'}}>
            La tabla de historial de pagos se cargará aquí automáticamente.
          </p>
        </div>
      </div>
       </div>
    </div>

  );
};

export default DashboardView;
