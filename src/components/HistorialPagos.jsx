import React, { useState } from 'react';

const HistorialPagos = () => {
  const [activeTab, setActiveTab] = useState('cuotas');
  const [showAmount, setShowAmount] = useState(true);
  const [showPaid, setShowPaid] = useState(false);

  // Color primario del proyecto
  const PRIMARY_BLUE = '#003b7a';

  const pagosMock = [
    { id: '8622', fecha: '02 septiembre 2026', metodo: 'SPEI', monto: '$ 1,250.00', estado: 'Procesado' },
    { id: '8370', fecha: '01 agosto 2026', metodo: 'SPEI', monto: '$ 1,250.00', estado: 'Procesado' },
    { id: '8234', fecha: '03 julio 2026', metodo: 'SPEI', monto: '$ 1,250.00', estado: 'Procesado' }
  ];

  return (
    <div className="historial-pagos-container">
      {/* Banner de soporte */}
      <div className="support-banner" style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '10px 15px',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '0.9rem',
        backgroundColor: '#f8f9fa'
      }}>
        <span style={{ background: PRIMARY_BLUE, color: '#fff', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>?</span>
        <span style={{ color: PRIMARY_BLUE }}>¿No encuentras un pago? <a href="#reportar" style={{ color: PRIMARY_BLUE, fontWeight: 'bold', textDecoration: 'underline' }}>Reportar aquí</a></span>
      </div>

      {/* Selector de Pestañas */}
      <div className="tabs-container" style={{ display: 'flex', background: '#ecf0f1', padding: '4px', borderRadius: '8px', marginBottom: '15px' }}>
        <button 
          onClick={() => setActiveTab('cuotas')}
          style={{ 
            flex: 1, 
            padding: '8px', 
            border: 'none', 
            borderRadius: '6px', 
            background: activeTab === 'cuotas' ? PRIMARY_BLUE : 'transparent', 
            cursor: 'pointer', 
            fontWeight: activeTab === 'cuotas' ? 'bold' : 'normal',
            color: activeTab === 'cuotas' ? '#ffffff' : '#7f8c8d'
          }}>
          Mis Cuotas
        </button>
        <button 
          onClick={() => setActiveTab('pagos')}
          style={{ 
            flex: 1, 
            padding: '8px', 
            border: 'none', 
            borderRadius: '6px', 
            background: activeTab === 'pagos' ? PRIMARY_BLUE : 'transparent', 
            cursor: 'pointer', 
            fontWeight: activeTab === 'pagos' ? 'bold' : 'normal', 
            color: activeTab === 'pagos' ? '#ffffff' : '#7f8c8d'
          }}>
          Mis Pagos
        </button>
      </div>

      {/* VISTA 1: MIS CUOTAS */}
      {activeTab === 'cuotas' && (
        <div className="cuotas-view" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* Card Total Pendiente */}
          <div style={{ background: '#f8f9fa', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
            <span style={{ color: '#7f8c8d', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>Pagos pendientes</span>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <strong style={{ fontSize: '1.8rem', color: PRIMARY_BLUE }}>
                {showAmount ? '$ 1,250.00' : '••••••••'}
              </strong>
              
              {/* Botón con Icono SVG abstracto de ojo */}
              <button 
                onClick={() => setShowAmount(!showAmount)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', color: PRIMARY_BLUE }}
                title={showAmount ? 'Ocultar saldo' : 'Mostrar saldo'}>
                {showAmount ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Opción Estado de cuenta */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fa', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.9rem', color: PRIMARY_BLUE, fontWeight: '500' }}>Estado de cuenta</span>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: PRIMARY_BLUE }} title="Descargar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>

          {/* Toggle Mostrar cuotas pagadas */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 5px' }}>
            <label htmlFor="togglePaid" style={{ fontSize: '0.85rem', color: '#7f8c8d', cursor: 'pointer' }}>
              Mostrar cuotas pagadas
            </label>
            <input 
              type="checkbox" 
              id="togglePaid"
              checked={showPaid} 
              onChange={(e) => setShowPaid(e.target.checked)} 
              style={{ cursor: 'pointer', accentColor: PRIMARY_BLUE }}
            />
          </div>

          {/* Detalle de la cuota adeudada del mes */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '15px', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: PRIMARY_BLUE }}>Cuota Mantenimiento Octubre</strong>
                <span style={{ color: '#c0392b', fontSize: '0.82rem', fontWeight: 'bold' }}>Vence: 15 de Octubre, 2023</span>
              </div>
              <strong style={{ fontSize: '1.1rem', color: PRIMARY_BLUE }}>$ 1,250.00</strong>
            </div>
            <button style={{ width: '100%', marginTop: '12px', padding: '10px', backgroundColor: PRIMARY_BLUE, color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
              PAGAR CUOTA
            </button>
          </div>

          {/* Opción de Pago Anticipado */}
          <div style={{ marginTop: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8f9fa', cursor: 'pointer' }}>
            <span style={{ fontSize: '0.9rem', color: PRIMARY_BLUE, fontWeight: '500' }}>💳 Pago anticipado</span>
            <span style={{ color: '#7f8c8d', fontSize: '0.8rem' }}>▼</span>
          </div>

        </div>
      )}

      {/* VISTA 2: MIS PAGOS */}
      {activeTab === 'pagos' && (
        <div className="pagos-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {pagosMock.map((pago) => (
            <div key={pago.id} style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '15px', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: PRIMARY_BLUE }}>{pago.fecha}</strong>
                  <span style={{ color: '#7f8c8d', fontSize: '0.85rem' }}>Recibo {pago.id}</span>
                  <div style={{ marginTop: '6px' }}>
                    <span style={{ background: '#f8f9fa', fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', fontWeight: '600', color: PRIMARY_BLUE, border: '1px solid #e2e8f0' }}>
                      {pago.metodo} • <span style={{ color: PRIMARY_BLUE }}>Los Robles</span>
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: '#7f8c8d', display: 'block' }}>Total</span>
                  <strong style={{ fontSize: '1.1rem', color: PRIMARY_BLUE }}>{pago.monto}</strong>
                </div>
              </div>
              <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid #f8f9fa', fontSize: '0.75rem', color: PRIMARY_BLUE, backgroundColor: '#f8f9fa', margin: '10px -15px -15px -15px', padding: '8px 15px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', fontWeight: '500' }}>
                ✓ Pago procesado exitosamente
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistorialPagos;