import { useState } from "react";
import useApi from "api";
import Swal from "sweetalert2";
/** Interfaces */
import { ClinicalStudiesResponse } from "models/interfaces/ClinicalStudies.interfaces";

const useClinicalStudies = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useClinicalStudiesActions } = useActions();
    const { actGetClinicalStudies } = useClinicalStudiesActions();

    /** States */
    const [clinicalStudies, setClinicalStudies] = useState<ClinicalStudiesResponse | Array<any>>([]);

    /**
     * This function executes the action that it gets the clinical studies' data
     * and set this data in the clinicalStudies state.
     * @return {void}
     */
    const getClinicalStudies = (): void => {
        dispatch(actGetClinicalStudies({
            onSuccess: (data: ClinicalStudiesResponse) => {
                setClinicalStudies(data);
            },
            onError: (_error: any) => Swal.fire({
                title: "Ocurrio un problema...!",
                text: "Ocurrio un problema al momento de obtener los estudios clinicos.",
                icon: "error"
            }).then().catch()
        }));
    }

    return {
        clinicalStudies,
        getClinicalStudies,
    };
}

export default useClinicalStudies;