import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Labs from './Labs/index';
import Lab2 from './Labs/Lab2/index';
import Kambaz from './Kambaz/index';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Labs" element={<Labs />} />
                <Route path="/Lab2" element={<Lab2 />} />
                <Route path="/Kambaz" element={<Kambaz />} />
            </Routes>
        </Router>
    );
};

export default App;
