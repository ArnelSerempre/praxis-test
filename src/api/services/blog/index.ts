import useApi from "api";
import { trackPromise } from "react-promise-tracker";

const useBlogServices = () => {
  // Providers
  const { useProviders } = useApi();
  const { useBlogProviders } = useProviders();
  const { getPost, getBlogAssets, getRecentPost, getPosts } =
    useBlogProviders();

  /** Services */
  const getBlogAssetsServices = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getBlogAssets()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getRecentPostsServices = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getRecentPost()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getPostsServices = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getPosts()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getPostService = (id: number): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getPost(id)));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getBlogAssetsServices,
    getPostService,
    getRecentPostsServices,
    getPostsServices
  };
};

export default useBlogServices;
