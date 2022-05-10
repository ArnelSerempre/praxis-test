import useApi from "api";
import { ILoginAction, IRecoverPasswordAction, IRegisterAction } from "models/interfaces/auth";
import { Dispatch } from "redux";
import useTypes from "types";

const useAuthActions = () => {
    // Types
    const { useAuthTypes } = useTypes();
    const { LOGIN } = useAuthTypes();

    // Services
    const { useServices } = useApi();
    const { useAuthServices } = useServices();
    const { loginService, recoverService, registerService } = useAuthServices();

    // Actions
    const actLogin = (request: ILoginAction) => async (dispatch: Dispatch) => {
        const { login, onSuccess, onError } = request;

        try {
            const res : any = await loginService(login);
            const { data } = res.data;

            console.log(data);

            dispatch({
                type: LOGIN,
                payload: data
            });

            onSuccess && onSuccess(data);
        } catch (error) {
            onError && onError(error);
        }
    }
    
    const actLogout = (onSuccess: any) => async (dispatch: Dispatch) => {
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    token: undefined,
                    user: undefined
                }
            });

            onSuccess && onSuccess();
        } catch (error) {
            console.log(error)
        }
    }

    const actRegister = (request: IRegisterAction) => async (dispatch: Dispatch) => {
        const { register, onSuccess, onError } = request;

        try {
            const res : any = await registerService(register);
            const { data } = res.data;
            
            if(res.data.transaction.status === true){
                onSuccess && onSuccess(data);
            }else{
                onError && onError(res.data.message.content);
            }
            
        } catch (error) {
            onError && onError(error);
        }
    }

    const actRecover = (request: IRecoverPasswordAction) => async (dispatch: Dispatch) => {
        const { recover, onSuccess, onError } = request;

        try {
            const res : any = await recoverService(recover);
            const { data } = res.data;
            
            if(res.data.transaction.status === true){
                onSuccess && onSuccess(data);
            }else{
                onError && onError(res.data.message.content);
            }
            
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actLogin,
        actRegister,
        actRecover,
        actLogout
    };
}

export default useAuthActions;