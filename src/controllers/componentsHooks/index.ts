import useAccordionClinicalStudies from "./AccordionClinicalStudies";
import useFooter from "./Footer";
import useHeader from "./Header";

const useComponentsHooks = () => {
    return {
        useHeader,
        useFooter,
        useAccordionClinicalStudies
    };
};

export default useComponentsHooks;