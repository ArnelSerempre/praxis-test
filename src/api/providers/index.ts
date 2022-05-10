import axios from "axios";
import useHomeProviders from "./home";
import useGeneralProviders from "./general";
import useBlogProviders from "./blog";
import useContactProviders from "./contact";
import usePacientesProviders from "./pacientes";
import useCuidadoresProviders from "./cuidadores";
import useAuthProviders from "./auth";
import useTerapeuticNumberProviders from "./Terapeutic-number";

const useProviders = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;

  return {
    useGeneralProviders,
    useHomeProviders,
    useBlogProviders,
    useContactProviders,
    usePacientesProviders,
    useCuidadoresProviders,
    useAuthProviders,
    useTerapeuticNumberProviders,
  };
};

export default useProviders;
