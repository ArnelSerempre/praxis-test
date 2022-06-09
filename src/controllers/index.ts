import useScreenHooks from "./screenHooks";
import useComponentsHooks from "./componentsHooks";
import useGeneralHooks from "./generalHooks";

const useControllers = () => {
    return {
        useScreenHooks,
        useComponentsHooks,
        useGeneralHooks
    }
}

export default useControllers;