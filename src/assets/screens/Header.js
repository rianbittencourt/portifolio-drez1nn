import React from "react";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import SocialMenu from "../components/SocialMenu";

function Header() {
  return (
    <div className="header-container">
    <div className="header-box">
      <Logo />
      <Menu />
      <SocialMenu />
      
    </div>
    <div className="banner-box">
        <div className="banner-left">
        <h1>DREZ1NN</h1> <div class="circle-h1"></div>
        <h2>Produtor Musical</h2>
        <div className="button-box"> 
        <button id="btn-buybeat">COMPRE SEU BEAT</button>
         <button id="btn-buymusic">PRODUZA SUA MÚSICA</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
