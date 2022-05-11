export interface IAccordionProps {
    children: any;
    name: string;
    id: string;
    title: string;
    expanded?: string | false;
    setExpanded?: any;
}

export interface IAccordion {
    children: any;
    name: string;
    id: string;
    title: string;
}