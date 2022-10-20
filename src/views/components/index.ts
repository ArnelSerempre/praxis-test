import { lazy } from "react";

const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer/index'));
const Accordion = lazy(() => import('./Accordion'));
const ScrollButtons = lazy(() => import("./ScrollButtons"));
const AccordionClinicalStudies = lazy(() => import("./AccordionClinicalStudies"));
const ModalAccordion = lazy(() => import("./ModalAccordion"));

const useComponents = () => {
    return {
        Header,
        Footer,
        Accordion,
        ScrollButtons,
        AccordionClinicalStudies,
        ModalAccordion
    };
};

export default useComponents;