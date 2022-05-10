import useApi from "api";
import { Dispatch } from "redux";
import useTypes from "types";

const useCuidadoresActions = () => {
    // Services
    const { useServices } = useApi();
    const { useCuidadoresServices } = useServices();
    const { getContentService, getContentArtesanalService } = useCuidadoresServices();

    // Types
    const { useCuidadoresTypes } = useTypes();
    const { GET_CONTENT, GET_CONTENT_ARTESANAL } = useCuidadoresTypes();

    // Actions
    const actGetContent = async (dispatch: Dispatch) => {
        try {
            const res = await getContentService();
            const { data } = res.data;

            dispatch({
                type: GET_CONTENT,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    const actGetContentArtesanal = async (dispatch: Dispatch) => {
        try {
            const res = await getContentArtesanalService();
            const { data } = res.data;

            dispatch({
                type: GET_CONTENT_ARTESANAL,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    return {
        actGetContent,
        actGetContentArtesanal
    }
}

export default useCuidadoresActions;
