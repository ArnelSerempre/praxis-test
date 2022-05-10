import useProviders from "api/providers";
import { trackPromise } from "react-promise-tracker";

const useTerapeuticNumberServices = () => {
  const { useTerapeuticNumberProviders } = useProviders();
  const { getAssets } = useTerapeuticNumberProviders();

  const getAssetsServices = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getAssets()));
      } catch (error) {
        reject(error);
      }
    });
  };
  return { getAssetsServices };
};

export default useTerapeuticNumberServices;
