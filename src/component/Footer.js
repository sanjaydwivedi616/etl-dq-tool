import React, { Component } from "react";
import logo from "../images/medidata_logo.png";

class Footer extends Component {
  render() {
    return (
      <div className="row footer-copyright">
        <div className="col-md-9">
          <img src={logo} alt="Medidata footer logo"></img>
          <p> © 2020</p>
        </div>
        <div className="col-md-3 footer-social">
          <ul>
            <li>
              <a href="https://twitter.com/Medidata" target="_blank" rel="noopener noreferrer"  className="external">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/medidata-solutions" target="_blank" rel="noopener noreferrer"  className="external">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/MedidataSolutions/" target="_blank" rel="noopener noreferrer" className="external">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/MedidataSolutions" target="_blank"  rel="noopener noreferrer" className="external">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
