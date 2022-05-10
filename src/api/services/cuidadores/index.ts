import useApi from "api";
import { trackPromise } from "react-promise-tracker";

const useCuidadoresServices = () => {
    // Providers
    const { useProviders } = useApi();
    const { useCuidadoresProviders } = useProviders();
    const {
        getContent,
        getContentArtesanal
    } = useCuidadoresProviders();

    // Services
    const getContentService = (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getContent()));
            } catch (error) {
                reject(error);
            }
        });
    }

    const getContentArtesanalService = (): Promise<any> => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await trackPromise(getContentArtesanal()));
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        getContentService,
        getContentArtesanalService
    };
}

export default useCuidadoresServices;