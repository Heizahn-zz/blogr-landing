import React from "react";
import "./Footer.css";
import logo from "../../img/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="bonito">
        <div className="cajaLogo">
          <img className="Logo" src={logo} alt="" />
        </div>
        <div className="links">
          <h4>Product</h4>
          <a href="#">Overview</a>
          <a href="#">Pricing</a>
          <a href="#">Marketplace</a>
          <a href="#">Feactures</a>
          <a href="#">Integration</a>
        </div>
        <br />
        <div className="links">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
        <br />
        <div className="links">
          <h4>Connect</h4>
          <a href="#">Contact</a>
          <a href="#">Newsletter</a>
          <a href="#">Linkedin</a>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export { Footer };
