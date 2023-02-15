import React from "react";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import SocialMenu from "../components/SocialMenu";
import MobileMenu from "../components/MobileMenu";

import { useMediaQuery } from "react-responsive";

function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 787px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 786px)" });

  return (
    <div className="header-container">
      <div className="header-box">
        <Logo />
        {isDesktopOrLaptop && (
          <>
            <Menu />
            <SocialMenu />
          </>
        )}
        {isTabletOrMobile && <MobileMenu></MobileMenu>}
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
