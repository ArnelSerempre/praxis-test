import React, { FC } from "react";
import useComponents from "views/components";
import "animate.css";
import Flecha from "assets/logo-flecha.png";
import WhatsApp from "assets/whatsapp-logo-11.png";

const GeneralLayout: FC = ({ children }): JSX.Element => {
  // Components
  const { Header, Footer } = useComponents();

  return (
    <div>
      <Header />
      <div className="animate__animated animate__fadeIn">{children}</div>
        <img src={Flecha} alt="" style={{ position: "fixed", bottom: "5%", left: "2%", cursor: "pointer" }} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}/>
        <img src={WhatsApp} alt="" style={{ position: "fixed", bottom: "5%", right: "2%", width: "54px", cursor: "pointer" }} onClick={() => window.open('https://web.whatsapp.com/', '_blank')} />
      <Footer />
    </div>
  );
};

export default GeneralLayout;
