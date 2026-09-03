import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPasswordView = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Por favor, ingresa un correo electrónico.');
      return;
    }

    alert(`Se ha enviado el enlace de restablecimiento de contraseña al email: ${email}. Revisa tu bandeja de spam.`);
    setMessage(null);
    
    // Redirige al login sin recargar la página
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>¿Olvidaste tu Contraseña?</h2>
      <p style={{ textIndent: '20px', marginBottom: '25px' }}>
        Ingresa el correo electrónico asociado a tu cuenta para recibir un enlace de restablecimiento.
      </p>

      <form onSubmit={handleSubmit} id="forgot-password-form">
        {message && <div className="message">{message}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
          />
        </div>

        <button type="submit" className="btn btn-primary">Enviar Enlace de Restablecimiento</button>
      </form>

      <div className="register-toggle" style={{ marginTop: '30px' }}>
        ¿Regresas al <Link to="/login">Inicio de Sesión</Link>?
      </div>
    </div>
  );
};

export default ForgotPasswordView;