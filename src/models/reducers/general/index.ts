import createReducer from "../createReducer";
import useInitialStates from "models/initialStates";
import useTypes from "types";

const useGeneralReducers = () => {
    // Initial States
    const { useGeneralInitialStates } = useInitialStates();
    const {
        assetsInitialState,
        menusInitialState,
    } = useGeneralInitialStates();

    // Types
    const { useGeneralTypes } = useTypes();
    const {
        GET_ASSETS,
        GET_MENUS
    } = useGeneralTypes();

    const assets = createReducer(
        assetsInitialState,
        {
            [GET_ASSETS](state: any, action: any){
                return {
                    ...state,
                    ...action.payload
                }
            }
        }
    );

    const menus = createReducer(
        menusInitialState,
        {
            [GET_MENUS](state: any, action: any){
                return {
                    ...state,
                    menus: action.payload
                }
            }
        }
    )

    return {
        assets,
        menus,
    };
}

export default useGeneralReducers;