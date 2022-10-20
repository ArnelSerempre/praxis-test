import useBlog from "./blog";
import useContact from "./contact";
import useCuidadores from "./cuidadores";
import useGeneral from "./general";
import useHome from "./Home";
import usePacientes from "./pacientes";
import useProducts from "./products";
import useTerapeuticNumber from "./terapeutic-number";
import useAuth from "./auth";
import useClinicalStudies from './clinical-studies/index';

const useScreenHooks = () => {
    return {
        useGeneral,
        useHome,
        useTerapeuticNumber,
        useContact,
        useProducts,
        useBlog,
        usePacientes,
        useCuidadores,
        useAuth,
        useClinicalStudies
    }
}

export default useScreenHooks;