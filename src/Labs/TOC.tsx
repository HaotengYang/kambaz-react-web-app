import React from "react";
import { Link } from "react-router-dom";

const TOC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Kambaz">Kambaz Application</Link></li>
        <li><a id="wd-github" href="https://github.com/haotengyang/kambaz-react-web-app" target="_blank">GitHub Repository</a></li>
      </ul>
    </nav>
  );
};

export default TOC;
