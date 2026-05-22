import './App.css'; // Assuming you have some basic CSS

function App() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif', backgroundColor: '#1e1e2e', color: '#cdd6f4', minHeight: '100vh' }}>
      <h1>🟢 System Health Dashboard</h1>
      <p>Live monitoring for DevOps Infrastructure.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        {/* Frontend Status Box */}
        <div style={{ border: '1px solid #a6e3a1', padding: '20px', borderRadius: '8px', width: '250px', backgroundColor: '#313244' }}>
          <h3>React Frontend UI</h3>
          <p style={{ color: '#a6e3a1', fontWeight: 'bold' }}>Status: ONLINE</p>
          <small>Port: 3001</small>
        </div>

        {/* Backend Status Box */}
        <div style={{ border: '1px solid #a6e3a1', padding: '20px', borderRadius: '8px', width: '250px', backgroundColor: '#313244' }}>
          <h3>Node.js Backend API</h3>
          <p style={{ color: '#a6e3a1', fontWeight: 'bold' }}>Status: ONLINE</p>
          <small>Port: 3000</small>
        </div>

        {/* Database Status Box */}
        <div style={{ border: '1px solid #a6e3a1', padding: '20px', borderRadius: '8px', width: '250px', backgroundColor: '#313244' }}>
          <h3>MySQL Database</h3>
          <p style={{ color: '#a6e3a1', fontWeight: 'bold' }}>Status: ONLINE</p>
          <small>Port: 3306</small>
        </div>
      </div>
      
      <p style={{ marginTop: '50px', color: '#f38ba8' }}>
        <em>Last Deployment triggered via Jenkins CI/CD</em>
      </p>
    </div>
  );
}

export default App;