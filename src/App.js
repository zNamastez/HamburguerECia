import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
// ...import outros módulos

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: 230, flex: 1 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard /* props aqui */ />} />
            {/* Outras rotas */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;