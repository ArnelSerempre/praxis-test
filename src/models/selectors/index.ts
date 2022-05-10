import useAuthSelectors from "./auth";
import useBlogSelectors from "./blog";
import useCuidadoresSelectors from "./cuidadores";
import useGeneralSelectors from "./general";
import useHomeSelectors from "./Home";
import usePacientesSelectors from "./pacientes";

const useSelectors = () => {
    return {
        useGeneralSelectors,
        useHomeSelectors,
        useBlogSelectors,
        usePacientesSelectors,
        useCuidadoresSelectors,
        useAuthSelectors
    };
}

export default useSelectors;