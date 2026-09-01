import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RecoverPasswordForm } from './RecoverPasswordForm';

export function AuthContainer() {
  // Estado para controlar qué vista mostrar ('login' o 'recover')
  const [currentView, setCurrentView] = useState('login');

  return (
    <div className="auth-wrapper">
      <header className="auth-header">
        <h1>Residencial Los Robles</h1>
        <p>Portal de Clientes y Residentes</p>
      </header>

      <main className="auth-body">
        {currentView === 'login' ? (
          <LoginForm onSwitchToRecover={() => setCurrentView('recover')} />
        ) : (
          <RecoverPasswordForm onSwitchToLogin={() => setCurrentView('login')} />
        )}
      </main>
    </div>
  );
}