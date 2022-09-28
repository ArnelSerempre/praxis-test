import React, { useState } from "react";

const useAccordionClinicalStudies = () => {
    /** States */
    const [panel, setPanel] = useState<string | boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [data, setData] = useState<any>({});

    /** Handlers */
    /**
     * This function sets in the local state the accordion that is active.
     * @param {string} name - panel's name.
     * @return {VoidFunction} - setting the name of the accordion to open.
     */
    const openAccordion = (name: string): () => void => (_event?: React.SyntheticEvent, newExpanded?: boolean) => setPanel(newExpanded ? name : false);

    /**
     * @return {void} - setting false in openModal variable and clearing data variable.
     */
    const closeModal = (): void => {
        setData(null);
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
        panel,
        data,
        openModal,
        openAccordion,
        closeModal,
        handleOpenModal
    };
}

export default useAccordionClinicalStudies;