import useHomeTypes from "./Home";
import useGeneralTypes from "./general";
import useBlogTypes from "./blog";
import usePacientesTypes from "./pacientes";
import useCuidadoresTypes from "./cuidadores";
import useAuthTypes from "./auth";

const useTypes = () => {
    return {
        useHomeTypes,
        useGeneralTypes,
        useBlogTypes,
        usePacientesTypes,
        useCuidadoresTypes,
        useAuthTypes
    }
}

export default useTypes;