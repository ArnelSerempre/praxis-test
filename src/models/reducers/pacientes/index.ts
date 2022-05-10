import useModels from 'models';
import useTypes from 'types';
import createReducer from '../createReducer';

const usePacientesReducers = () => {
    // Initial States
    const { useInitialStates } = useModels();
    const { usePacientesInitialStates } = useInitialStates();
    const { assetsInitialState, postsInitialState } = usePacientesInitialStates();

    // Types
    const { usePacientesTypes } = useTypes();
    const { GET_ASSETS, GET_POSTS } = usePacientesTypes();
    
    // Reducers
    const assetsPacientes = createReducer(assetsInitialState, {
        [GET_ASSETS](state: any, action: any){
            return {
                ...state,
                assets: action.payload
            }
        }
    });

    // Reducers
    const getPostsPacientes = createReducer(postsInitialState, {
        [GET_POSTS](state: any, action: any){
            return {
                ...state,
                posts: action.payload
            }
        }
    });

    return {
        assetsPacientes,
        getPostsPacientes,
    }
}

export default usePacientesReducers;