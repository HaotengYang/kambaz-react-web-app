import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

const KambazNavigation = () => {
  return (
    <nav id="wd-kambaz-navigation" className="position-fixed bg-black text-white">
      <ul>
        <li><Link to="/Kambaz/Dashboard"><AiOutlineDashboard /> Dashboard</Link></li>
        <li><Link to="/Kambaz/Courses"><IoCalendarOutline /> Courses</Link></li>
      </ul>
    </nav>
  );
};

export default KambazNavigation;
