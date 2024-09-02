import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  const handleApplyCertification = () => {
    setCurrentPage('apply');
  };

  const handleCheckProgress = () => {
    // Handle logic for checking progress (e.g., navigate to another page)
    alert('Check Progress clicked!');
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : currentPage === 'dashboard' ? (
        <Dashboard
          onApplyCertification={handleApplyCertification}
          onCheckProgress={handleCheckProgress}
        />
      ) : (
        <RegistrationForm onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
