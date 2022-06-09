import useServices from "api/services";
import { IHoverProps } from "models/interfaces/home.interfaces";
import { Dispatch } from "redux";
import useTypes from "types";
import {IAction} from "../../../models/interfaces";

const useHomeActions = () => {
    /** Services */
    const { useHomeServices } = useServices();
    const { getHomeAssetsService } = useHomeServices();

    /** Types */
    const {useHomeTypes} = useTypes();
    const {HOME_SET_HOVER} = useHomeTypes();

    /** Actions */
    const actGetHomeAssets = (request: IAction) => async(dispatch: Dispatch) => {
        const { onError, onSuccess } = request;
        try {
            const res = await getHomeAssetsService();
            const {transaction, data} = res.data;

            if(transaction.status === true){
                onSuccess && onSuccess(data);
            }else{
                onError && onError("Ocurrio un problema al momento de obtener los assets de la pagina.");
            }

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    }

    const actSetHover = (request: IHoverProps) => async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: HOME_SET_HOVER,
                payload: request
            });           
        } catch (error) {
            console.log(error);
        }
    }



    return {
        actGetHomeAssets,
        actSetHover
    }
}

export default useHomeActions;