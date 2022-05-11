import { useCallback, useState } from "react";

const useFooter = () => {
    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);

    /** Listeners */
    const launchListeners = useCallback(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [])

    return {
        width,
        launchListeners
    }
}

export default useFooter;