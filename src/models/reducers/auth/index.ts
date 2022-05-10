import useModels from "models";
import useTypes from "types";
import createReducer from "../createReducer";

const useAuthReducers = () => {
    // Initial State
    const { useInitialStates } = useModels();
    const { useAuthInitialStates } = useInitialStates();
    const { loginInitialState } = useAuthInitialStates();

    // Types
    const { useAuthTypes } = useTypes();
    const { LOGIN } = useAuthTypes();

    // Reducers
    const login = createReducer(loginInitialState, {
        [LOGIN](state: any, action: any){
            console.log(action.payload)
            return {
                ...state,
                ...action.payload
            }
        }
    })

    return {
        login,
    };
}

export default useAuthReducers;