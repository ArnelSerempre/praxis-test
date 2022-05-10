import useApi from "api";
import useModels from "models";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePacientes = () => {
    // Actions
    const { useActions } = useApi();
    const { dispatch, usePacientesActions } = useActions();
    const { actGetAssets, actGetPosts } = usePacientesActions();

    // Selectors
    const { useSelectors } = useModels();
    const { usePacientesSelectors } = useSelectors();
    const { assetsPacientesSelector, postPacientesSelector } = usePacientesSelectors();
    const assets = useSelector(assetsPacientesSelector);
    const posts = useSelector(postPacientesSelector);
    
    // Constants
    const image = assets.find((item: any) => item.section === "Imagen Principal");
    const background = assets.find((item: any) => item.section === "Entradas");

    // Effect
    useEffect(() => {
        dispatch(actGetAssets);
        dispatch(actGetPosts);
        // eslint-disable-next-line
    }, [])

    return {
        image,
        background,
        posts
    }
}

export default usePacientes;