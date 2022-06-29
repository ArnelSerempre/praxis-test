import useApi from "api";
import useModels from "models";
import { useState } from "react";
import { useSelector } from "react-redux";
import useContentHome from "./useContentHome";

const useHome = () => {
  /** Api */
  const { useActions } = useApi();
  const { dispatch, useHomeActions } = useActions();
  const { actSetHover } = useHomeActions();

  /** Selectors */
  const {useSelectors} = useModels();
  const {useHomeSelectors} = useSelectors();
  const {hoverSelector} = useHomeSelectors();
  const hover = useSelector(hoverSelector);  

  /** States */
  const [sections] = useState<any>([]);

  /** Handlers */
  const handlerHover = (type: string, id: number) => {
    if(type === "over") {
      dispatch(actSetHover({hover: true, id: id}));
    }else{
      dispatch(actSetHover({hover: false, id: 0}));
    }
  };

  return {
    sections,
    handlerHover,
    useContentHome,
    hover
  };
};

export default useHome;
