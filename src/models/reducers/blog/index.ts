import useModels from "models";
import useTypes from "types";
import createReducer from "../createReducer";

const useBlogReducers = () => {
    // Initial State
    const { useInitialStates } = useModels();
    const { useBlogInitialStates } = useInitialStates();
    const { getPostInitialState } = useBlogInitialStates();

    // Types
    const { useBlogTypes } = useTypes();
    const { BLOG_GET_POST } = useBlogTypes();

    // Reducers
    const post = createReducer(getPostInitialState, {
        [BLOG_GET_POST](state: any, action: any){
            return {
                ...state,
                ...action.payload
            }
        }
    })

    return {
        post,
    };
}

export default useBlogReducers;