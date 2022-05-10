import useCreateSelector from "../createSelector";

const useHomeSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    // Selectors
    const bannerHomeSelector = createSelector(
        (state: any) => state.bannerHome,
        (bannerHome: any) => bannerHome
    )

    const backgroundHomeSelector = createSelector(
        (state: any) => state.backgroundHome,
        (backgroundHome: any) => backgroundHome
    )

    const sectionsHomeSelector = createSelector(
        (state: any) => state.sectionsHome,
        (sectionsHome: any) => sectionsHome.sections
    );

    const misionHomeSelector = createSelector(
        (state: any) => state.misionHome,
        (misionHome: any) => misionHome
    )

    const valoresHomeSelector = createSelector(
        (state: any) => state.valoresHome,
        (valoresHome: any) => valoresHome.valores
    )

    const teamHomeSelector = createSelector(
        (state: any) => state.teamHome,
        (teamHome: any) => teamHome.team
    )

    return {
        bannerHomeSelector,
        backgroundHomeSelector,
        sectionsHomeSelector,
        misionHomeSelector,
        valoresHomeSelector,
        teamHomeSelector,
    };
}

export default useHomeSelectors;