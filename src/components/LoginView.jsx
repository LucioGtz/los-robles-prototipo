import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginView = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (usuario === 'test' && contrasena === '123456') {
      // En un entorno real, aquí se llamaría a la API de login
      alert('¡Login exitoso! Redirigando al portal...');
      navigate('/dashboard'); 

    } else if (usuario.trim() !== '' && contrasena.trim() !== '') {
       setError('Usuario o contraseña incorrectos. Intenta con: Usuario=test, Contraseña=123456');
    } else {
      setError('Por favor, ingresa usuario y contraseña.');
    }
  };

  return (
    <div className="container">
      <h2>Portal de Residentes</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="message">{error}</div>}

        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Tu usuario (test)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Tu clave (123456)"
          />
        </div>

        <button type="submit" className="btn btn-primary">Acceder al Portal</button>
      </form>

      <div className="forgot-link">
        <span>¿Olvidaste tu contraseña?</span> <a href="/forgot">Recuperar aquí</a>
      </div>

      <div className="register-toggle">
        ¿No tienes cuenta? <a href="/register">Regístrate ahora</a>
      </div>
    </div>
  );
};

export default LoginView;
