import useCreateSelector from "../createSelector";

const useBlogSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    // Selectors
    const postSelector = createSelector(
        (state: any) => state.post,
        (post: any) => post
    );

    return {
        postSelector,
    };
}

export default useBlogSelectors;