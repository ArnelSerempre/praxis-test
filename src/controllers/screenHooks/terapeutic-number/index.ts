import { useEffect, useState } from "react";
import useDiabetes from "./Diabetes";
import useHeridas from "./Heridas";

const useTerapeuticNumber = () => {
    /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    // eslint-disable-next-line
  }, []);

  return {
    width,
    useHeridas,
    useDiabetes
  };
};

export default useTerapeuticNumber;
