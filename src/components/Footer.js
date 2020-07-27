import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/waveess" target="_blank" rel="noopener noreferrer">
        <img alt="Github" className="footer-img" src={require("../assets/icons/github.png")} />
    </a> 
  </div>
  </>
);

export default Footer;