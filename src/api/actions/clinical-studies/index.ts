import useProviders from "api/providers";
/** Interfaces */
import { ActionReturns } from "models/general.interfaces";
import { IAction } from "models/interfaces";

const useClinicalStudiesActions = () => {
    /** Providers */
    const {useClinicalStudiesProviders} = useProviders();
    const {getClinicalStudiesProviders} = useClinicalStudiesProviders();

    /**
     * This action executes the providers and get the clinical studies' data from
     * it sent this data from clinical studies' controller.
     * @return {(dispatch?: Dispatch): AnyAction}
     */
    const actGetClinicalStudies = (request: IAction): ActionReturns => {
        const {onError, onSuccess} = request;
        return async () => {
            try {
                const res = await getClinicalStudiesProviders();
                const {data} = res.data;

                onSuccess && onSuccess(data);
            } catch (e) {
                onError && onError(e);
            }
        }
    }

    return {
        actGetClinicalStudies
    };
}

export default useClinicalStudiesActions;