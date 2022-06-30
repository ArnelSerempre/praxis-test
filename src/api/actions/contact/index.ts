import useApi from "api";
import { ISendContactAction } from "models/interfaces/contact";
import { Dispatch } from "redux";

const useContactActions = () => {
    // Services
    const { useServices } = useApi();
    const { useContactServices } = useServices();
    const { sendContactService } = useContactServices();

    const actSendContact = (request: ISendContactAction) => async(dispatch: Dispatch) => {
        const { onSuccess, data, onError } = request;

        try {
            const res = await sendContactService(data);

            onSuccess && onSuccess(res)
        } catch (error) {
            onError && onError();
        }
    }

    return {
        actSendContact,
    }
}

export default useContactActions;