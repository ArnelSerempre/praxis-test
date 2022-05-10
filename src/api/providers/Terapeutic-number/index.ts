import { AxiosResponse } from "axios";
import axios from "axios";

const useTerapeuticNumberProviders = () => {
  const getAssets = (): Promise<AxiosResponse> =>
    axios.get("/terapeutic-number/get-assets");

  return { getAssets };
};

export default useTerapeuticNumberProviders;
