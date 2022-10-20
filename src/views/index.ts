import useScreens from './screens';
import useLayouts from './layout';
import useComponents from './components';
const useViews = () => {
    return {
        useScreens,
        useLayouts,
        useComponents
    }
}

export default useViews;