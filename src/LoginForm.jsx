import React, { useState } from 'react';

export function LoginForm({ onSwitchToRecover }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validar correo
    if (!email) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Ingresa un correo válido (@ y .)';
    }

    // Validar contraseña
    if (!password) {
      newErrors.password = 'La contraseña es obligatoria';
    }

    setErrors(newErrors);

    // Si no hay errores
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="auth-card">
      <h2>Iniciar Sesión</h2>

      {submitted && (
        <div className="success-message">
          ¡Acceso validado correctamente! Entrando...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="text" 
            id="email" 
            placeholder="usuario@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button type="submit" className="btn-primary">
          Ingresar
        </button>
      </form>

      <button 
        type="button" 
        className="btn-link" 
        onClick={onSwitchToRecover}
      >
        ¿Olvidaste tu contraseña?
      </button>
    </div>
  );
}