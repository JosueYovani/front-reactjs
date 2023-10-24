import React from "react";
/** Imports elements **/
import logoKodemia from "../assets/images/logos/kodemia-logo.svg";

function Header() {
  return (
    <div className="header__container">
      <img src={logoKodemia} alt="logo kodemia" className="brand-logo" />
    </div>
  );
}

export default Header;
