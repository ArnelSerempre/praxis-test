import useCreateSelector from "../createSelector";
import { IAssets } from "models/interfaces/general";

const useGeneralSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    // Selectors
    const assetsSelector = createSelector(
        (state: any) => state.assets,
        (assets: IAssets) => assets
    );

    const menusSelector = createSelector(
        (state: any) => state.menus,
        (menus: any) => menus.menus,
    )

    return {
        assetsSelector,
        menusSelector,
    }
}

export default useGeneralSelectors;