import {useEffect, useState} from "react";

const useGeneral = () => {
    // States
    const [width, setWidth] = useState(window.innerWidth);

    // Effects
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [])

    return {
        width
    };
}

export default useGeneral;