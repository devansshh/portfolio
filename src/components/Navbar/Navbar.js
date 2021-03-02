import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="NavItem">
        <Link to="/" className="NavLink">
          Home
        </Link>
      </div>
      <div className="NavItem">
        <Link to="/project" className="NavLink">
          Projects
        </Link>
      </div>
      <div className="NavItem">
        <Link to="/about" className="NavLink">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
