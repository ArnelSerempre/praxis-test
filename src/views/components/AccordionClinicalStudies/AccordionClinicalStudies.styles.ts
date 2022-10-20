import styled from "styled-components";
import { Accordion, AccordionSummary } from "@mui/material";
import tw from "twin.macro";
import { AccordionDetails } from "@mui/material";
import { Box } from "@mui/material";

export const StyledAccordion = styled(Accordion)`
    margin-top: 180px !important;
    margin-bottom: 30px !important;
    height: 120px;
    display: inline;

    .MuiCollapse-entered {

    }
`;

export const StyledAccordionSummary = styled(AccordionSummary)<{background: string;}>`
    ${tw`h-[120px]`}
    color: #004289 !important;
    background: url(${({background}: any) => background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 43px;
    border-radius: 15px !important;

    @media (max-width: 978px) {
        background-position-x: 0px;
        background-size: 100px;
        background-position: left center;
    }

    .MuiAccordionSummary-content {
        justify-content: center !important;
        font-weight: 600;
        font-size: 25px;
        position: relative;
    }

    .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
        display: contents;
    }
`;

export const StyledChevronDownContainer = styled.div`
    ${tw`relative right-0 w-full text-center text-[20px] lg:text-[34px]`}
    vertical-align: middle;
    font-weight: 700;

    svg {
        ${tw`absolute top-[20%] right-[5%]`}
        float: right;
        fill: #999999;
        ${({selected}: {selected: boolean}) => selected ? "transform: rotate(-90deg);" : "transform: rotate(90deg);"}
    }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
    ${tw`h-[300px] overflow-auto bg-[#e6e6e6] mt-[5px]`}

    .MuiCollapse-vertical {
        ${tw`h-[500px]`}
    }

    h1 {
        ${tw`text-[#808080]`}
    }

    ul {
        list-style: none;

        li {
            ${tw`text-[#999999] mt-[15px] text-[14px] lg:text-[19px] py-[10px]`}
            border-bottom: 1px solid #999999;
        }
    }
`;

export const StyledBox = styled(Box)`
    ${tw`bg-white w-[50%] p-[20px] block h-[50%] rounded relative`}
    border: none;
    background: linear-gradient(90deg,rgba(255,255,255,1) -9%,rgba(2,0,36,0) 91%),url("https://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2019/05/bata-blanca-doctor-enfermedad-contagio.jpg");
    background-size: 40% 36%;
    background-repeat: no-repeat;
    background-color: white;
    background-position: top right;

    h1 {
        ${tw`text-[#004289] font-bold mt-[20px]`}
    }

    h4 {
        ${tw`text-[#004289] text-[20px] mt-[70px] text-center capitalize`}
        font-weight: 600;
    }

    p {
        ${tw`text-[#999999] mt-[20px] text-[14px]`}
    }

    button {
        ${tw`absolute bottom-[20px] text-center right-[40%] bg-[#666] w-[120px] h-[30px] rounded text-white`}
    }

    .text {
        ${tw`text-[#004289] absolute bottom-[15%] left-[28%]`}
    }

    &:focus {
        outline: none !important;
    }

    &:focus-within {
        outline: none !important;
    }
`;

export const StyledTilte = styled.h1<{selected: boolean;}>`
    ${({selected}: {selected: boolean}) => selected ? tw` text-[#004289] text-[23px] font-bold px-[20px]`  : tw`text-[#999999] text-[23px]`}
    ${({selected}: {selected: boolean}) => selected ? "color: #004289 !important; border-bottom: 2px solid;" : ""}
`;