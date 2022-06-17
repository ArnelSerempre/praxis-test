import { useState } from "react";
import { StyledImage } from "./ScrollButtons.styles";
import Flecha from "assets/scrolldown-1.gif";
import Flecha1 from "assets/gif-mouse.gif";

const ScrollButtons = () => {
    /** States */
    const [scroll, setScroll] = useState<number>(window.scrollY);
    const [width, setWidth] = useState<number>(window.innerWidth);

    /** Listener */
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    window.addEventListener("wheel", () => setScroll(window.scrollY))
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /** Handlers */
    const handleScroll = () => {
        /** Variables */
        const documentInView = document.getElementById("accordions");

        if(documentInView !== null){
            if (scroll === 0) {
                window.scrollTo({
                    top: documentInView!.getBoundingClientRect().top - 140,
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                window.scrollTo({
                    top: 0 - 140,
                    left: 0,
                    behavior: "smooth"
                })
            }
        }
    }

    console.log(scroll)

    return width >= 1024 ? (
        <>
            {
                scroll > 0 ? (
                    <StyledImage
                        alt="ScrollButtons"
                        scroll={scroll}
                        onClick={handleScroll}
                        src={Flecha}
                        className="arrow"
                    />
                ) : (
                    <StyledImage
                        alt="ScrollButtons"
                        scroll={scroll}
                        onClick={handleScroll}
                        src={Flecha1}
                        className="arrow"
                    />
                )
            }
        </>
    ) : (
        <></>
    );

}

export default ScrollButtons;