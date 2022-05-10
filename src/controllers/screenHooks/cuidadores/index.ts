import useApi from "api";
import useModels from "models";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useCuidadores = () => {
    // Actions
    const { useActions } = useApi();
    const { dispatch, useCuidadoresActions } = useActions();
    const { actGetContent, actGetContentArtesanal } = useCuidadoresActions();

    // Selectors
    const { useSelectors } = useModels();
    const { useCuidadoresSelectors } = useSelectors();
    const { contentSelector, contentArtesanalSelector } = useCuidadoresSelectors();
    const content = useSelector(contentSelector);
    const contentArtesanal = useSelector(contentArtesanalSelector);
    const {
        principal_image,
        your_papel,
        clasification,
        why,
        necesity,
        overChange
    } = content;
    

    // Effect
    useEffect(() => {
        dispatch(actGetContent);
        dispatch(actGetContentArtesanal);
        // eslint-disable-next-line
    }, [])

    return {
        principal_image,
        your_papel,
        clasification,
        why,
        necesity,
        overChange,
        contentArtesanal
    }
}

export default useCuidadores;