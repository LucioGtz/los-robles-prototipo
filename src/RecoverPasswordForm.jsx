import React from 'react';

export function RecoverPasswordForm({ onSwitchToLogin }) {
  return (
    <div className="auth-card">
      <h2>Recuperar Contraseña</h2>
      <p className="description">
        Ingresa tu correo electrónico registrado para recibir las instrucciones de restablecimiento.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="recover-email">Correo Electrónico</label>
          <input 
            type="email" 
            id="recover-email" 
            placeholder="usuario@ejemplo.com" 
          />
        </div>

        <button type="submit" className="btn-primary">
          Enviar instrucciones
        </button>
      </form>

      <button 
        type="button" 
        className="btn-link" 
        onClick={onSwitchToLogin}
      >
        Volver a Iniciar Sesión
      </button>
    </div>
  );
}