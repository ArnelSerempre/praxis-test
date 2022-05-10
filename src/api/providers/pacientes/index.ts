import axios from "axios";

const usePacientesProviders = () => {
    const getAssets = () : Promise<any> => {
        return axios.get('/alianz/get-assets-pacients');
    }

    const getPosts = () : Promise<any> => {
        return axios.get('/alianz/get-history-live');
    }

    return {
        getAssets,
        getPosts,
    }
}

export default usePacientesProviders;