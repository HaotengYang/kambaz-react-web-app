import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Labs from './Labs'; // 引用 Labs 页面
import Lab1 from './Labs/Lab1'; // 引用 Lab1 页面
import Kambaz from './Kambaz'; // 引用 Kambaz 页面

function App() {
  return (
    <Router>
      <div className="App">
        {/* 导航菜单 */}
        <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
          <a href="/" style={{ marginRight: '10px' }}>Home</a>
          <a href="/labs" style={{ marginRight: '10px' }}>Labs</a>
          <a href="/kambaz" style={{ marginRight: '10px' }}>Kambaz</a>
        </nav>

        {/* 路由配置 */}
        <Routes>
          <Route path="/" element={<h1>Welcome to Kambaz React Web App</h1>} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/lab1" element={<Lab1 />} />
          <Route path="/kambaz" element={<Kambaz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
