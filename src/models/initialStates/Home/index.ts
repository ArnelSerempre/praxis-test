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
        setHoverInitialState: {hover: false, id: 0}
    }
}

export default useHomeInitialStates;