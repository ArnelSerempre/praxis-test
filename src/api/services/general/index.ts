import useApi from "api";
import {trackPromise} from "react-promise-tracker";

const useGeneralServices = () => {
    // Providers
    const { useProviders } = useApi();
    const { useGeneralProviders } = useProviders();
    const { getAssets, getMenus } = useGeneralProviders();

    // Services
    const getAssetsServices = () : Promise<any> => {
        return new Promise(async(resolve, reject) => {
           try {
               resolve(await trackPromise(getAssets()));
           } catch (error) {
               reject(error);
           }
        });
    }

    const getMenusServices = () : Promise<any> => {
        return new Promise(async(resolve, reject) => {
           try {
               resolve(await trackPromise(getMenus()));
           } catch (error) {
               reject(error);
           }
        });
    }

    return {
        getAssetsServices,
        getMenusServices,
    }
}

export default useGeneralServices;