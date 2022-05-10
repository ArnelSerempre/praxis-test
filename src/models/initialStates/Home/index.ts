const useHomeInitialStates = () => {
    const getBannerInitialState = {};
    const getMisionInitialState = {};
    const getSectionsInitialState = {
        sections: []
    };

    const getValoresInitialState = {
        valores: []
    };

    const getTeamInitialState = {
        team: []
    };

    return {
        getBannerInitialState,
        getSectionsInitialState,
        getMisionInitialState,
        getValoresInitialState,
        getTeamInitialState,
    }
}

export default useHomeInitialStates;