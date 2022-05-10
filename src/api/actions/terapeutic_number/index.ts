import useServices from "api/services";
import { Dispatch } from "redux";
import { IAction } from "../../../models/interfaces";

const useTerapeuticNumberActions = () => {
  const { useTerapeuticNumberServices } = useServices();
  const { getAssetsServices } = useTerapeuticNumberServices();

  const actGetAssets = (request: IAction) => async (dispatch: Dispatch) => {
    const { onError, onSuccess } = request;

    try {
      const res = await getAssetsServices();
      const { transaction, data } = res.data;

      if (transaction.status === true) {
        onSuccess && onSuccess(data);
      }
    } catch (error) {
      onError && onError(error);
    }
  };

  return { actGetAssets };
};

export default useTerapeuticNumberActions;
