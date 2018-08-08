import React from "react";
import { Link } from "react-router-dom";

import "./wrapper.css";

const Header = props => (
  <div>
    <nav className="navbar navbar-dark bg-dark header">
      <div className="logo">
        <a href="/">
          {" "}
          <h1>LightHouse</h1>
        </a>
      </div>

    <div className="header-btns">
      <a>{localStorage.getItem("user")}</a>
      <li><b className="fa fa-users" aria-hidden="true"></b><span><i>Forum</i></span></li>
      <li><b className="fa fa-user" aria-hidden="true"></b><span><i>Journal</i></span></li>
      <Link to={"/logout"} className="nav-link" aria-hidden="true">
      <li><b className="fa fa-sign-out" aria-hidden="true"></b><span><i>Sign Out</i></span></li>
      </Link>
      <Link to={"/new_entry"} className="nav-link" aria-hidden="true">
        Add Entry
      </Link>
      <Link to={"/entries"} className="nav-link" aria-hidden="true">
        Entries
      </Link>
      </div>
    </nav>

    <div className="content">{props.children}</div>
  </div>
);

export default Header;
