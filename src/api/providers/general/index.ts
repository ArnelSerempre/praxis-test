import axios from "axios";

const useGeneralProviders = () => {
    const getAssets = () : Promise<any> => {
        return axios.get('/complements/get-logo');
    }

    const getMenus = () : Promise<any>  => {
        return axios.get('/complements/get-menus');
    }

    return {
        getAssets,
        getMenus,
    };
};

export default useGeneralProviders;