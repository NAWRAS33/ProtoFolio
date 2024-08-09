import React from "react";
import "../styles/Footer.css";

import linkedinLogo from "../SocialMedia/icons8-linkedin-48.png";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">

        <img src={linkedinLogo} alt="image" />
      </div>
      <p>&copy; 2024 nawrisa.com</p>
    </div>
  );
}

export default Footer;
