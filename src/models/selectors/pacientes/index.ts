import useCreateSelector from "../createSelector";

const usePacientesSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    // Selectors
    const assetsPacientesSelector = createSelector(
        (state: any) => state.assetsPacientes,
        (assetsPacientes: any) => assetsPacientes.assets
    );

    const postPacientesSelector = createSelector(
        (state: any) => state.getPostsPacientes,
        (getPostsPacientes: any) => getPostsPacientes.posts
    );

    return {
        assetsPacientesSelector,
        postPacientesSelector
    };
}

export default usePacientesSelectors;