import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [systemStatus, setSystemStatus] = useState({ backend: 'LOADING...', database: 'LOADING...' });

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/health');
        const data = await response.json();
        setSystemStatus(data);
      } catch (error) {
        setSystemStatus({ backend: 'OFFLINE', database: 'OFFLINE' });
      }
    };

    // Check immediately, then every 5 seconds
    checkHealth();
    const interval = setInterval(checkHealth, 5000);
    return () => clearInterval(interval);
  }, []);

  // Helper to color-code the status
  const getColor = (status: string) => status === 'ONLINE' ? '#a6e3a1' : '#f38ba8';

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial', backgroundColor: '#1e1e2e', color: '#cdd6f4', minHeight: '100vh' }}>
      <h1>🟢 System Health Dashboard</h1>
      <p>Live monitoring for DevOps Infrastructure.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        {/* Frontend Status */}
        <div style={{ border: '1px solid #a6e3a1', padding: '20px', borderRadius: '8px', width: '250px', backgroundColor: '#313244' }}>
          <h3>React Frontend UI</h3>
          <p style={{ color: '#a6e3a1', fontWeight: 'bold' }}>Status: ONLINE</p>
        </div>

        {/* Backend Status */}
        <div style={{ border: `1px solid ${getColor(systemStatus.backend)}`, padding: '20px', borderRadius: '8px', width: '250px', backgroundColor: '#313244' }}>
          <h3>Node.js Backend API</h3>
          <p style={{ color: getColor(systemStatus.backend), fontWeight: 'bold' }}>Status: {systemStatus.backend}</p>
        </div>

        {/* Database Status */}
        <div style={{ border: `1px solid ${getColor(systemStatus.database)}`, padding: '20px', borderRadius: '8px', width: '250px', backgroundColor: '#313244' }}>
          <h3>MySQL Database</h3>
          <p style={{ color: getColor(systemStatus.database), fontWeight: 'bold' }}>Status: {systemStatus.database}</p>
        </div>
      </div>
    </div>
  );
}

export default App;