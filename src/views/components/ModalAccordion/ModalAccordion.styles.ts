import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import styled from 'styled-components';
import tw from 'twin.macro';
/** Interfaces */
import { StyledBoxProps } from 'models/interfaces/ClinicalStudies.interfaces';

export const StyledModal = styled(Modal)`
    ${tw`flex justify-center items-center`}
`;

export const StyledBox = styled(Box) <StyledBoxProps>`
    background: url('${(props: StyledBoxProps) => props.background}') no-repeat;
    background-position: top right;
    background-size: 200px 200px;
    ${tw`bg-[#fff] w-[90%] lg:w-[979px] h-[500px] flex justify-center p-[10px 30px]`}
    border-radius: 10px;
    border: 3px solid #e6e6e6;
    overflow: auto;
    background-position-y: 60px;
    background-attachment: local;

    @media (max-width: 978px) {
        background-attachment: local;
        background-size: 150px;
        ${tw`h-[500px]`}
    }

    @media (max-width: 375px) {
        ${tw`h-[500px]`}
    }
`;

export const StyledReference = styled.h3`
    ${tw`mt-[130px] lg:mt-[10%] text-[#999999] text-[16px] lg:text-[26px]`}
    font-weight: 600;
`;

export const StyledTitle = styled.h1`
    ${tw`mt-6 w-full lg:w-[calc(100% - 200px)] text-[#004289] text-[20px] lg:text-[30px] lg:text-justify m-0`}
    font-weight: 700;
`;

export const StyledDescription = styled.div`
    ${tw`text-[#999999] mt-[5%] text-[10px] lg:text-[20px]`}
    a {
        ${tw`text-[#01428a]`}
    }
`;

export const StyledGetOficial = styled.h3`
    ${tw`text-[#004289] text-center text-[15px] lg:text-[25px] mt-[5%]`}
    font-weight: 700;
`;

export const StyledButton = styled.button`
    ${tw`mt-[5%] mb-[20px] text-[#fff] bg-[#666666] cursor-pointer w-[130px] h-[36px] rounded`}
`;

export const StyledClose = styled.span`
    ${tw`text-[#004289] text-[30px] font-bold`}
`