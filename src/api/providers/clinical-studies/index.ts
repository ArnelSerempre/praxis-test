import axios, { AxiosResponse } from "axios";
import { trackPromise } from 'react-promise-tracker';
/** Interfaces */
import { ResponseApi } from "models/general.interfaces";
import { ClinicalStudiesResponse } from "models/interfaces/ClinicalStudies.interfaces";

const useClinicalStudiesProviders = () => {
    /**
     * This function executes the request from it obtains the clinical studies' data.
     * @return {Promise<AxiosResponse<ResponseApi<ClinicalStudiesResponse>>}
     */
    const getClinicalStudiesProviders = (): Promise<AxiosResponse<ResponseApi<ClinicalStudiesResponse>>> => {
        return trackPromise(
            axios({
                url: "/clinical-studies/get-clinical-studies",
                method: "GET"
            })
        );
    }

    return {
        getClinicalStudiesProviders
    };
}

export default useClinicalStudiesProviders;