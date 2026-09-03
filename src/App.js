import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ForgotPasswordView from './components/ForgotPasswordView';
import DashboardView from './components/DashboardView';
import AdminDashboardView from './components/AdminDashboardView'; // <--- Nueva vista para la US03

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<RegisterView />} /> 
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} /> 
        <Route path="/forgot" element={<ForgotPasswordView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/admin-dashboard" element={<AdminDashboardView />} /> {/* <--- Ruta US03 */}
      </Routes>
    </Router>
  );
}

export default App;