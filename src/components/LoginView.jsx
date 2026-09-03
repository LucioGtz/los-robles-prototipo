import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginView = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [rol, setRol] = useState('residente'); // 'residente' o 'admin'
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (usuario === 'test' && contrasena === '123456') {
      // Guardar el rol activo para usarlo en la app
      localStorage.setItem('userRole', rol);

      // Redirección según el rol seleccionado
      if (rol === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard'); 
      }

    } else if (usuario.trim() !== '' && contrasena.trim() !== '') {
       setError('Usuario o contraseña incorrectos. Intenta con: Usuario=test, Contraseña=123456');
    } else {
      setError('Por favor, ingresa usuario y contraseña.');
    }
  };

  return (
    <div className="container">
      <h2>Portal Los Robles</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="message">{error}</div>}

        <div className="form-group">
          <label htmlFor="rol">Ingresar como</label>
          <select
            id="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          >
            <option value="residente">Residente</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

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

        <button type="submit" className="btn btn-primary">
          Acceder como {rol === 'admin' ? 'Administrador' : 'Residente'}
        </button>
      </form>

      <div className="forgot-link">
        <span>¿Olvidaste tu contraseña?</span> <Link to="/forgot">Recuperar aquí</Link>
      </div>

      <div className="register-toggle">
        ¿No tienes cuenta? <Link to="/register">Regístrate ahora</Link>
      </div>
    </div>
  );
};

export default LoginView;