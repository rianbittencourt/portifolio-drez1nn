import React from "react";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import SocialMenu from "../components/SocialMenu";

function Header() {
  return (
    <div className="header-container">
      <Logo />
      <Menu />
      <SocialMenu />
    </div>
  );
}

export default Header;
