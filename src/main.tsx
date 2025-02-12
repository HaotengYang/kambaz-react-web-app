import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Labs from "./Labs";
import Kambaz from "./Kambaz";
import Dashboard from "./Kambaz/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Labs" element={<Labs />} />
        <Route path="/Kambaz" element={<Kambaz />} />
        <Route path="/Kambaz/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
