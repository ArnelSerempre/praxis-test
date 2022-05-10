import { lazy } from "react";

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const Accordion = lazy(() => import('./Accordion'));

const useComponents = () => {
    return {
        Header,
        Footer,
        Accordion
    };
};

export default useComponents;