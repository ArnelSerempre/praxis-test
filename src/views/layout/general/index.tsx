import React, { FC, useEffect, useState } from "react";
import useComponents from "views/components";
import "animate.css";
import Flecha from "assets/scrolldown-1.gif";
import Flecha1 from "assets/gif-mouse.gif";
import WhatsApp from "assets/whatsapp-logo-11.png";

const GeneralLayout: FC = ({ children }): JSX.Element => {
  // Components
  const { Header, Footer, ScrollButtons } = useComponents();

  /** States */
  const [isPathname, setIsPathname] = useState(true);

  const { pathname } = window.location;
  const documentInComponent = document.getElementById("accordions")

  useEffect(() => {
    if (
      pathname.includes("/detail") ||
      pathname.includes("/login") ||
      pathname.includes("/register") ||
      pathname.includes("/contact") ||
      pathname.includes("/contact/form")
    ) {
      setIsPathname(false);
    }else{
      setIsPathname(true);
    }
  }, [pathname, documentInComponent])

  return (
    <div>
      <Header />
      <div className="animate__animated animate__fadeIn">{children}</div>
      {
        isPathname && (
          <ScrollButtons />
        )
      }
      <img src={WhatsApp} alt="" style={{ position: "fixed", bottom: "5%", right: "2%", width: "54px", cursor: "pointer" }} onClick={() => window.open('https://web.whatsapp.com/', '_blank')} />
      <Footer />
    </div>
  );
};

export default GeneralLayout;
