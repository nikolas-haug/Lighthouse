import React from "react";
import { Link } from "react-router-dom";

import "./wrapper.css";

const Header = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
      <a className="navbar-brand" href="/">
        LightHouse
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <li className="nav-item active">
          <a className="nav-link" href="/">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li>
          <b className="fa fa-user" aria-hidden="true" />
          <span>
            <i>Journal</i>
          </span>
        </li>
        <a>{localStorage.getItem("user")}</a>
        <li>
          <b className="fa fa-users" aria-hidden="true" />
          <span>
            <i>Forum</i>
          </span>
        </li>
        <Link to={"/new_entry"} className="nav-link" aria-hidden="true">
          Add Entry
        </Link>
        <Link to={"/entries"} className="nav-link" aria-hidden="true">
          Entries
        </Link>
        <Link to={"/logout"} className="nav-link" aria-hidden="true">
          <li>
            <b className="fa fa-sign-out" aria-hidden="true" />
            <span>
              <i>Sign Out</i>
            </span>
          </li>
        </Link>
      </div>
    </nav>

    <div className="content">{props.children}</div>
  </div>
);

export default Header;
