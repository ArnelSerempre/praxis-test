import useApi from "api";
import { Dispatch } from "redux";
import useTypes from "types";

const usePacientesActions = () => {
    // Services
    const { useServices } = useApi();
    const { usePacientesServices } = useServices();
    const { getAssetsServices, getPostsServices } = usePacientesServices();

    // Types
    const { usePacientesTypes } = useTypes();
    const { GET_ASSETS, GET_POSTS } = usePacientesTypes();

    // Actions
    const actGetAssets = async (dispatch: Dispatch) => {
        try {
            const res = await getAssetsServices();
            const { data } = res.data;

            dispatch({
                type: GET_ASSETS,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    const actGetPosts = async (dispatch: Dispatch) => {
        try {
            const res = await getPostsServices();
            const { data } = res.data;

            dispatch({
                type: GET_POSTS,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    return {
        actGetAssets,
        actGetPosts
    }
}

export default usePacientesActions;
