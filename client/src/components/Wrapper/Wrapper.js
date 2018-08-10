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
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />

        {/* User Nav-Link */}
        {localStorage.getItem("user") ? (
          <li>
            <b className="fa fa-user" aria-hidden="true" />
            <span>
              <i>
                <a>{localStorage.getItem("user")}</a>
              </i>
            </span>
          </li>
        ) : (
          <a className="" href="/">Login</a>
        )}

        {/* New Entry Nav Link */}
        <li>
          {localStorage.getItem("user") ? (
            <Link to={"/new_entry"}>
              <b className="fa fa-plus-square nav-link" aria-hidden="true" />
              <span>
                <i>New Entry</i>
              </span>
            </Link>
          ) : (
            ""
          )}
        </li>

        {/* Entries Nav-Link */}
        <li>
          {localStorage.getItem("entries") ? (
            <Link to={"/entries"}>
              <b className="fa fa-users nav-link" aria-hidden="true" />
              <span>
                <i>Forum</i>
              </span>
            </Link>
          ) : (
              ""
          )}
        </li>

        {/* Sign Out Nav Link */}
        <li>
          {localStorage.getItem("user") ? (
            <Link to={"/logout"} className="nav-link" aria-hidden="true">
              <b className="fa fa-sign-out" aria-hidden="true" />
              <span>
                <i>Sign Out</i>
              </span>
            </Link>
          ) : (
            <a className="" href="/">Sign Up</a>
          )}
        </li>
      </div>
    </nav>

    <div className="content">{props.children}</div>
  </div>
);

export default Header;
