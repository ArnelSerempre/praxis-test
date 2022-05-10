import useApi from "api";
import { IAction } from "models/interfaces";
import { IGetBlogAction } from "models/interfaces/blog";
import { Dispatch } from "redux";

const useBlogActions = () => {
    // Services
    const { useServices } = useApi();
    const { useBlogServices } = useServices();
    const {
        getPostService,
        getBlogAssetsServices,
        getRecentPostsServices,
        getPostsServices
    } = useBlogServices();

    // Actions
    const actGetPost = (request: IGetBlogAction) => async (dispatch: Dispatch) => {
        const { id, onSuccess, onError } = request;

        try {
            const res = await getPostService(id);
            const { data } = res.data;

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetBlogAssets = (request: IAction) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getBlogAssetsServices();
            const { transaction, data } = res.data;

            if(transaction.status === true){
                onSuccess && onSuccess(data);
            } else {
                onError && onError();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetRecentPosts = (request: IAction) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getRecentPostsServices();
            const { transaction, data } = res.data;

            if(transaction.status === true){
                onSuccess && onSuccess(data);
            } else {
                onError && onError();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetPosts = (request: IAction) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getPostsServices();
            const { transaction, data } = res.data;

            if(transaction.status === true){
                onSuccess && onSuccess(data);
            } else {
                onError && onError();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actGetPost,
        actGetBlogAssets,
        actGetRecentPosts,
        actGetPosts
    };
}

export default useBlogActions;