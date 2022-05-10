import React, { FC } from "react";
import useComponents from "views/components";
import "animate.css";

const GeneralLayout: FC = ({ children }): JSX.Element => {
    // Components
    const { Header, Footer } = useComponents();

    return (
        <div>
            <Header />
            <div className="animate__animated animate__fadeIn">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default GeneralLayout;