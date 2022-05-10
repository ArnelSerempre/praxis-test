import useProviders from "api/providers";
import { AxiosResponse } from "axios";
import { trackPromise } from "react-promise-tracker";

const useHomeServices = () => {
    /** Providers */
    const { useHomeProviders } = useProviders();
    const { getHomeAssets } = useHomeProviders();

    /** Services */
    const getHomeAssetsService = (): Promise<AxiosResponse> => {
        return new Promise<AxiosResponse>(async (resolve, reject) => {
            try {
                resolve(await (trackPromise(getHomeAssets())))
            } catch (error) {
                reject(error);
            }
        });
    }

    return {
        getHomeAssetsService
    };
}

export default useHomeServices;