import { Button } from "@mui/material";
import Select from "react-select";
import styled from "styled-components";
import tw from "twin.macro";

const useRecoveryStyles = () => {
    const StyledSection = styled.section`
        ${tw``}
        margin-top: 8.9rem;
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;

        @media (min-width: 1024px){
            display: flex;
            align-items: center;
        }

        @media (max-width: 1023px){
            margin-top: 6.9rem;
            height: auto;

        }
    `;

    const StyledImage = styled.img`
    
    `;

    const StyledTitle = styled.h1`
        color: #004289;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    `;

    const StyledButton = styled(Button)`
        color: #fff !important;
        background-color: #004289 !important;
        width: 150px;
        font-family: "Montserrat", sans-serif !important;
    `;

    const StyledDescription = styled.p`
        color: #666666;
        font-family: 'Montserrat', sans-serif;
    `;

    const StyledSelect = styled(Select)`
        background-color: transparent !important;
        width: 75%;
        height: 52px;

        @media (max-width: 1200px) {
            width: 100%;
        }
    `;
    
    return {
        StyledImage,
        StyledTitle,
        StyledSection,
        StyledButton,
        StyledDescription,
        StyledSelect
    };
}

export default useRecoveryStyles;