import axios, { AxiosResponse } from "axios";

const useHomeProviders = () => {
    const getHomeAssets = () : Promise<AxiosResponse> => axios.get("/home/get-home-assets");

    return {
        getHomeAssets
    };
}

export default useHomeProviders;