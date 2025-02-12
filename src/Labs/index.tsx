import React from "react";
import { Link } from "react-router-dom";

const Labs = () => {
  return (
    <div>
      <h1>Haoteng Yang</h1>
      <h2>Lab Exercises</h2>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      </ul>
      <h2>Other Links</h2>
      <ul>
        <li><Link to="/Kambaz">Kambaz Application</Link></li>
        <li><a href="https://github.com/haotengyang/kambaz-react-web-app" target="_blank">GitHub Repository</a></li>
      </ul>
    </div>
  );
};

export default Labs;
