import useCreateSelector from "../createSelector";

const useCuidadoresSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    // Selectors
    const contentSelector = createSelector(
        (state: any) => state.contentCuidadores,
        (contentCuidadores: any) => contentCuidadores
    );

    const contentArtesanalSelector = createSelector(
        (state: any) => state.contentCuidadoresArtesanal,
        (contentCuidadoresArtesanal: any) => contentCuidadoresArtesanal
    );

    return {
        contentSelector,
        contentArtesanalSelector
    };
}

export default useCuidadoresSelectors;