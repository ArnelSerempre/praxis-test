import useModels from 'models';
import useTypes from 'types';
import createReducer from '../createReducer';

const useCuidadoresReducers = () => {
    // Initial States
    const { useInitialStates } = useModels();
    const { useCuidadoresInitialStates } = useInitialStates();
    const { contentInitialState, contentArtesanalInitialState } = useCuidadoresInitialStates();

    // Types
    const { useCuidadoresTypes } = useTypes();
    const { GET_CONTENT, GET_CONTENT_ARTESANAL } = useCuidadoresTypes();
    
    // Reducers
    const contentCuidadores = createReducer(contentInitialState, {
        [GET_CONTENT](state: any, action: any){
            return {
                ...state,
                ...action.payload
            }
        }
    });

    const contentCuidadoresArtesanal = createReducer(contentArtesanalInitialState, {
        [GET_CONTENT_ARTESANAL](state: any, action: any){
            return {
                ...state,
                ...action.payload
            }
        }
    });

    return {
        contentCuidadores,
        contentCuidadoresArtesanal
    }
}

export default useCuidadoresReducers;