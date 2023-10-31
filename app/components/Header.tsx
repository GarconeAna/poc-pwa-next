"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logoMobile from "../../public/assets/logo-mobile.png";
import iconWallet from "../../public/assets/icon-wallet.png";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <>
      <div className="header">
        <a href="/" rel="noopener noreferrer">
          <Image src={logoMobile} alt="logo" width={35} height={35} />
        </a>

        {currentPath !== "/minhaconta" 
        ? <Image src={iconWallet} alt="logo" width={20} height={20} />
        : <div className="button-transparent-small">0x..f84</div>
        } 
      </div>
    </>
  );
};

export default Header;