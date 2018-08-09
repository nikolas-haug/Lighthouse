import React from "react";
import { Link } from "react-router-dom";

const Views = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/profile"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        Profile
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/services"
        className={
          window.location.pathname === "/services" ? "nav-link active" : "nav-link"
        }
      >
        Service Finder
      </Link>
    </li>

  </ul>
);

export default Views;
