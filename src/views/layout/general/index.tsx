import React, {FC, useEffect, useState} from "react";
import useComponents from "views/components";
import "animate.css";
import Flecha from "assets/scrolldown-1.gif";
import Flecha1 from "assets/gif-mouse.gif";
import WhatsApp from "assets/whatsapp-logo-11.png";

const GeneralLayout: FC = ({ children }): JSX.Element => {
  // Components
  const { Header, Footer } = useComponents();
    const [scroll, setScroll] = useState(window.scrollY);
    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.scrollY)
        }
    },[scroll]);

  return (
    <div>
      <Header />
      <div className="animate__animated animate__fadeIn">{children}</div>
        {
            scroll ===  0 ? (
                <img src={Flecha1} alt="" style={{ position: "fixed", bottom: "5%", left: "5%", cursor: "pointer", width: "6%" }} onClick={() => window.scrollTo({top: document.getElementById("accordions")!.getBoundingClientRect().top - 140, left: 0, behavior: "smooth"})}/>
            ) : (
                <img src={Flecha} alt="" style={{ position: "fixed", bottom: "5%", left: "3%", cursor: "pointer", width: "6%", transform: "rotate(180deg)"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}/>
            )
        }

        <img src={WhatsApp} alt="" style={{ position: "fixed", bottom: "5%", right: "2%", width: "54px", cursor: "pointer" }} onClick={() => window.open('https://web.whatsapp.com/', '_blank')} />
      <Footer />
    </div>
  );
};

export default GeneralLayout;
