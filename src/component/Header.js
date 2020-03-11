import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/medidata_logo.png";


class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-dark">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="nav-link" to="/">
            <img className="navbar-brand" src={logo} alt="Medidata logo" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li>
              <Link className="active" to="/">
                Products Report
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/SummaryReport">
              Summary Report
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/server_connection">
                Server Connection
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="nav-link" to="/help" target="_blank" >Help</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href={this}><i className="fa fa-user-circle-o" aria-hidden="true"></i> Sign Up</a></li>
            <li><a href={this}><i className="fa fa-sign-out" aria-hidden="true"></i> Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
