import React from 'react';
import './index.css';

const Lab2 = () => {
    return (
        <div className="lab2-container">
            <h1>Welcome to Lab 2</h1>
            <p>This is the Lab 2 exercise page.</p>
            <button className="btn btn-primary">Click Me</button>
            <br />
            <a href="/Labs" className="btn btn-secondary" style={{ marginTop: '20px' }}>
                Back to Labs
            </a>
        </div>
    );
};

export default Lab2;
