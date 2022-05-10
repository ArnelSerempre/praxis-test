import { Button, Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

const usePacientesStyles = () => {
    const StyledImage = styled.img``;

    const StyledImage1 = styled.img`
        @media (max-width: 1023px){
            padding-top: 7rem;
        }
    `;

    const StyledSection = styled(Grid)`
        background: #f7f7f7;
        @media (min-width: 1200px){
            background-image: url(${(props: any) => props.background});
            background-size: 100% 100%;
        }
    `;

    const StyledTitle = styled.h1`
        color: #004289;
        font-size: 2rem;
        font-weight: 700;
        padding-top: 3rem;
        padding-bottom: 3rem;
    `;

    const StyledTitle2 = styled.h1`
        color: #004289;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center
    `;

    const StyledButtonViewMore = styled(Button)`
        ${tw`my-6`}

        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
        background-color: transparent !important;
        background: #004289 !important;
        text-transform: capitalize !important;
        color: #fff !important;
        font-family: 'Montserrat', sans-serif;
    `;

    return {
        StyledImage,
        StyledSection,
        StyledTitle,
        StyledTitle2,
        StyledButtonViewMore,
        StyledImage1
    }
}

export default usePacientesStyles;
