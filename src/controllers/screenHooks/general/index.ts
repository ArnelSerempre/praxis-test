import useApi from "api";
import useModels from "models";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {IAction} from "models/interfaces";

const useGeneral = () => {
    // Actions
    const { useActions } = useApi();
    const { dispatch, useGeneralActions } = useActions();
    const { actGetAssets, actGetMenus } = useGeneralActions();

    // Selectors
    const { useSelectors } = useModels();
    const { useGeneralSelectors } = useSelectors();
    const { assetsSelector, menusSelector } = useGeneralSelectors();
    const assets = useSelector(assetsSelector);
    const menus = useSelector(menusSelector);

    // Effects
    useEffect(() => {
        const request : IAction = {
            onSuccess: () => {},
            onError: (error: any) => console.log(error)
        }
        dispatch(actGetAssets(request));

        const requestMenus : IAction = {
            onSuccess: () => {},
            onError: (error: any) => console.log(error)
        }
        dispatch(actGetMenus(requestMenus));
        // eslint-disable-next-line
    }, []);

    return {
        assets,
        menus,
    };
}

export default useGeneral;