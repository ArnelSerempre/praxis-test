import useTypes from "types";
import { IDispatch } from "models/interfaces/general";
import { IAction } from "models/interfaces";
import {Dispatch} from "@reduxjs/toolkit";
import useApi from "api";

const useGeneralActions = () => {
    // Types
    const { useGeneralTypes } = useTypes();
    const { GET_ASSETS, GET_MENUS } = useGeneralTypes();

    // Services
    const { useServices } = useApi();
    const { useGeneralServices } = useServices();
    const {
        getAssetsServices,
        getMenusServices
    } = useGeneralServices();

    // Actions
    const actGetAssets = (request: IAction)  => async (dispatch: Dispatch<IDispatch>) => {
        const { onSuccess, onError } = request;
        try {
            const res = await getAssetsServices();
            // @ts-ignore
            const { data } = res.data;

            dispatch({
                type: GET_ASSETS,
                payload: data
            });

            onSuccess && onSuccess();
        }catch (error: any) {
            onError && onError(error);
        }
    }

    const actGetMenus = (request: IAction) => async (dispatch: Dispatch<IDispatch>) => {
        const { onSuccess, onError } = request;
        try {
            const res = await getMenusServices();
            const { data } = res.data;

            dispatch({
                type: GET_MENUS,
                payload: data
            });

            onSuccess && onSuccess();
        }catch (error) {
            onError && onError(error);
        }
    }

    return {
        actGetAssets,
        actGetMenus,
    };
};

export default useGeneralActions;