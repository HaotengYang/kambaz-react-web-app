import React from 'react';
import { Link } from 'react-router-dom';

const Labs = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Labs Table of Contents</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ margin: '10px 0' }}>
                    <Link to="/labs/lab1">Lab 1</Link>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link to="/labs/lab2">Lab 2</Link>
                </li>
                <li style={{ margin: '10px 0' }}>
                    <Link to="/kambaz">Kambaz Application</Link>
                </li>
            </ul>
        </div>
    );
};

export default Labs;
