import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterView = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); 
    
    if (!usuario || !email || !contrasena) {
        setError('Todos los campos son obligatorios.');
        return;
    }

    alert(`Registro exitoso para ${usuario}. ¡Ahora puedes iniciar sesión!`);
    
    // Redirige al login de forma limpia dentro del Router
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Crear Cuenta de Residente</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="message">{error}</div>}

        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ej: juanlopez"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@residente.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Mínimo 8 caracteres"
          />
        </div>

        <button type="submit" className="btn btn-secondary">Registrarse</button>
      </form>

      <div className="forgot-link">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
      </div>
    </div>
  );
};

export default RegisterView;