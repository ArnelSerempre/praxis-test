import useHomeServices from "./Home";
import useGeneralServices from "./general";
import useBlogServices from "./blog";
import useContactServices from "./contact";
import usePacientesServices from "./pacientes";
import useCuidadoresServices from "./cuidadores";
import useAuthServices from "./auth";
import useTerapeuticNumberServices from "./Terapeutic-Number";

const useServices = () => {
  return {
    useHomeServices,
    useGeneralServices,
    useBlogServices,
    useContactServices,
    usePacientesServices,
    useCuidadoresServices,
    useAuthServices,
    useTerapeuticNumberServices,
  };
};

export default useServices;
