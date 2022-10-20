interface Studies {
    name: string;
    background_modal: string;
    description: string;
    pdf_url: string;
}

interface Articles {
    name: string;
    background_modal: string;
    description: string;
    pdf_url: string;
}

export interface ClinicalStudiesResponse {
    name: string;
    studies: Array<Studies> | Array<any>;
    articles: Array<Articles> | Array<any>;
    background_item: string;
    id: number;
}

export interface ModalAccordionProps {
    open: boolean;
    onClose: () => void;
    item: Studies | Articles;
}

export interface StyledBoxProps {
    background: string;
}