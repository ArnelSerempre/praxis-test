import useCreateSelector from "../createSelector";

const useAuthSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    // Selectors
    const loginSelector = createSelector(
        (state: any) => state.login,
        (login: any) => login
    );

    return {
        loginSelector,
    };
}

export default useAuthSelectors;