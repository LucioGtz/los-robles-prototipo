import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ForgotPasswordView from './components/ForgotPasswordView';
import DashboardView from './components/DashboardView';


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<RegisterView />} /> 
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} /> 
        <Route path="/forgot" element={<ForgotPasswordView />} />
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
    </Router>
  );
}

export default App;
