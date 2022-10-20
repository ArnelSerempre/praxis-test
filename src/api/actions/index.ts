import { useDispatch } from "react-redux";
import useHomeActions from "./Home";
import useGeneralActions from "./general";
import useBlogActions from "./blog";
import useContactActions from "./contact";
import usePacientesActions from "./pacientes";
import useCuidadoresActions from "./cuidadores";
import useAuthActions from "./auth";
import useTerapeuticNumberActions from "./terapeutic_number";
import useClinicalStudiesActions from './clinical-studies';

const useActions = () => {
  // Dispatch
  const dispatch = useDispatch();

  return {
    dispatch,
    useHomeActions,
    useGeneralActions,
    useBlogActions,
    useContactActions,
    usePacientesActions,
    useCuidadoresActions,
    useAuthActions,
    useTerapeuticNumberActions,
    useClinicalStudiesActions
  };
};

export default useActions;
