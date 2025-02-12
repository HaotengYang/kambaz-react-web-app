import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Labs from "./Labs/index";
import Lab1 from "./Labs/Lab1/index";
import Lab2 from "./Labs/Lab2/index";
import Kambaz from "./Kambaz/index";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* 导航菜单 */}
        <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
          <a href="/" style={{ marginRight: "10px" }}>Home</a>
          <a href="/labs" style={{ marginRight: "10px" }}>Labs</a>
          <a href="/kambaz" style={{ marginRight: "10px" }}>Kambaz</a>
        </nav>

        {/* 路由配置 */}
        <Routes>
          <Route path="/" element={<h1>Welcome to Kambaz React Web App</h1>} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/kambaz" element={<Kambaz />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
