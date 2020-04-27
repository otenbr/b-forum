import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="w3-container w3-padding w3-margin-bottom w3-center w3-middle w3-grey">
      <div className="w3-quarter">
        <a href="/" className="titulo w3-text-white">
          B-Fórum
        </a>
      </div>
      <div className="w3-half">
        <input className="w3-input"></input>
      </div>
      <div className="w3-quarter">
        <button id="buttonSearch" className="w3-button w3-blue-grey">
          Buscar
        </button>
      </div>
    </header>
  );
};

export default Header;
