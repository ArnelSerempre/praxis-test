import useAuthInitialStates from "./auth";
import useBlogInitialStates from "./blog";
import useCuidadoresInitialStates from "./cuidadores";
import useGeneralInitialStates from "./general";
import useHomeInitialStates from "./Home";
import usePacientesInitialStates from "./pacientes";

const useInitialStates = () => {
    return {
        useGeneralInitialStates,
        useHomeInitialStates,
        useBlogInitialStates,
        usePacientesInitialStates,
        useCuidadoresInitialStates,
        useAuthInitialStates
    }
};

export default useInitialStates;