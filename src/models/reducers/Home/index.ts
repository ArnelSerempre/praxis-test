import createReducer from "../createReducer";
import useModels from "models";
import useTypes from "types";

const useHomeReducers = () => {
    // InitialStates
    const { useInitialStates } = useModels();
    const { useHomeInitialStates } = useInitialStates();
    const {
        getBannerInitialState,
        getSectionsInitialState,
        getMisionInitialState,
        getValoresInitialState,
        getTeamInitialState,
    } = useHomeInitialStates();

    // Types
    const { useHomeTypes } = useTypes();
    const {
        HOME_GET_BANNER,
        HOME_GET_BACKGROUND,
        HOME_GET_SECTIONS,
        HOME_GET_MISION,
        HOME_GET_VALORES,
        HOME_GET_TEAM,
    } = useHomeTypes();

    // Reducers
    const bannerHome = createReducer(
        getBannerInitialState,
        {
            [HOME_GET_BANNER](state: any, action: any){
                return {
                    ...state,
                    ...action.payload
                }
            }
        }
    )

    const backgroundHome = createReducer(
        getBannerInitialState,
        {
            [HOME_GET_BACKGROUND](state: any, action: any){
                return {
                    ...state,
                    ...action.payload
                }
            }
        }
    )

    const sectionsHome = createReducer(
        getSectionsInitialState,
        {
            [HOME_GET_SECTIONS](state: any, action: any){
                return {
                    ...state,
                    sections: action.payload
                }
            }
        }
    )

    const misionHome = createReducer(
        getMisionInitialState,
        {
            [HOME_GET_MISION](state: any, action: any){
                return {
                    ...state,
                    ...action.payload
                }
            }
        }
    )

    const valoresHome = createReducer(
        getValoresInitialState,
        {
            [HOME_GET_VALORES](state: any, action: any){
                return {
                    ...state,
                    valores: action.payload
                }
            }
        }
    )

    const teamHome = createReducer(
        getTeamInitialState,
        {
            [HOME_GET_TEAM](state: any, action: any){
                return {
                    ...state,
                    team: action.payload
                }
            }
        }
    )

    return {
        bannerHome,
        backgroundHome,
        sectionsHome,
        misionHome,
        valoresHome,
        teamHome
    };
};

export default useHomeReducers;