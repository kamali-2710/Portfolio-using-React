import React from "react";
import "./Socialicons.css";

const Socialicons = () => {
  return (
    <div>
      <div className="socials">
        <a
          href="https://github.com/kamali-2710/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kamali-m-a525b1320"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        {/* WhatsApp */}
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default Socialicons;
