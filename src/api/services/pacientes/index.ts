import useApi from "api";
import { trackPromise } from "react-promise-tracker";

const usePacientesServices = () => {
    // Providers
    const { useProviders } = useApi();
    const { usePacientesProviders } = useProviders();
    const {
        getAssets,
        getPosts
    } = usePacientesProviders();

    // Services
    const getAssetsServices = (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getAssets()));
            } catch (error) {
                reject(error);
            }
        });
    }

    const getPostsServices = (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getPosts()));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        getAssetsServices,
        getPostsServices,
    };
}

export default usePacientesServices;