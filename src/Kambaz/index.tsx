import React from "react";
import { Link } from "react-router-dom";

const Kambaz = () => {
  return (
    <div>
      <h1>Kambaz Application</h1>
      <nav>
        <ul>
          <li><Link to="/Labs">Lab Exercises</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Kambaz;
