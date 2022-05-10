import axios, { AxiosResponse } from "axios";

const useBlogProviders = () => {
    const getPosts = () : Promise<AxiosResponse> => axios.get("/blogs/get-posts");

    const getBlogAssets = () : Promise<AxiosResponse> => axios.get("/blogs/get-assets");

    const getRecentPost = () : Promise<AxiosResponse> => axios.get("/blogs/get-recent-posts");


    const getPost = (id: number) : Promise<any> => {
        return axios.get(`/blog/get-blog?id=${id}`);
    };  

    return {
        getRecentPost,
        getPosts,
        getBlogAssets,
        getPost,
    };
};

export default useBlogProviders;