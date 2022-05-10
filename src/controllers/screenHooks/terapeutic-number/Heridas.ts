import useApi from "api";
import { useEffect, useState } from "react";
import { IAction } from "../../../models/interfaces/index";

const useHeridas = () => {
  /** Actions */
  const { useActions } = useApi();
  const { dispatch, useTerapeuticNumberActions } = useActions();
  const { actGetAssets } = useTerapeuticNumberActions();

  /** States */
  const [woundsAssets, setWoundsAssest] = useState<any>({});

  useEffect(() => {
    const request: IAction = {
      onError: (error: any) => console.log(error),
      onSuccess: (data: any) => {
        setWoundsAssest(data);
      }
    };

    dispatch(actGetAssets(request));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const tabs = ["Necrótico", "Fibrina", "Esfacelo", "Granular", "Epitelial"];

  return {
    woundsAssets,
    tabs
  };
};

export default useHeridas;
