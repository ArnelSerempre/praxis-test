import useServices from "api/services";
import { Dispatch } from "redux";
import {IAction} from "../../../models/interfaces";

const useHomeActions = () => {
    /** Services */
    const { useHomeServices } = useServices();
    const { getHomeAssetsService } = useHomeServices();

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

    return {
        actGetHomeAssets
    }
}

export default useHomeActions;