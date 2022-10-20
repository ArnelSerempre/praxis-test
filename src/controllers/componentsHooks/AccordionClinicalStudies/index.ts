import { useState } from "react";

const useAccordionClinicalStudies = () => {
    /** States */
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [data, setData] = useState<any>({});

    /** Handlers */
    /**
     * @return {void} - setting false in openModal variable and clearing data variable.
     */
    const closeModal = (): void => {
        setOpenModal(false);
    }

    /**
     * 
     */
    const handleOpenModal = (item: any) => {
        setData(item);
        setOpenModal(true);
    }

    return {
        data,
        openModal,
        closeModal,
        handleOpenModal
    };
}

export default useAccordionClinicalStudies;