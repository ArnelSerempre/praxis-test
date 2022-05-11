import styled from "@emotion/styled";
import { AccordionSummary } from "@mui/material";
import { Accordion } from "@mui/material";
import tw from "twin.macro";

export const StyledAccordionComponent = styled(Accordion)`
    color: #014380;
    &:hover{
        background: #014380;
        color: #fff;
        fill: #fff;
        
    }

    .MuiCollapse-vertical {
        ${tw`bg-white`}
    }

    
`

export const StyledAccordionSummari = styled(AccordionSummary)`
    ${tw`justify-center`}

    .MuiAccordionSummary-content {
        ${tw`md:justify-center`}
    }
`