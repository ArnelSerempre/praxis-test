import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

const useContactStyles = () => {
    const StyledSection = styled.section`
        ${tw `xl:pt-16  lg:pt-16  pt-8`}
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        
        
        @media (min-width: 1201px){
            margin-top: 8.9rem;
        }

        @media (max-width: 1023px){
            background-position: center;
            background-size: 100% 100%;
        }
    `;

    const StyledTitleSection = styled.h1`
        ${tw `py-16 sm:py-12`}

        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        color: #004289;
        font-weight: bold;

        @media (max-width: 1024px){
            font-size: 1.5rem;
            padding-top: 6rem !important;
        }

        @media (max-width: 1200px){
            padding-top: 12rem;
            text-align: center;
        }
    `;

    const StyledTextPresentation = styled.h2`
        ${tw `pb-8`}

        font-size: 1.3rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: #666666;
        text-align: center;

        @media (max-width: 414px){
            font-size: 1rem;
        }
    `;

    const StyledButtonPresentation = styled(Button)`
        ${tw `pb-16 gap-1`}
        background-color: #004289 !important;
        color: #fff !important;
        text-transform: capitalize !important;
        font-size: 0.9rem !important;
        font-weight: 500 !important;
    `;

    const StyledIconRight = styled(ChevronRightIcon)``;

    const StyledImage = styled.img`
        width: 100vw;
    `;

    const StyledContainerImage = styled(Grid)`
        display: flex;
        align-items: flex-end;
        padding-top: 3rem;
    `;

    const StyledTitle = styled.h1`
        font-family: 'Montserrat', sans-serif;
        font-size: 2.5rem;
        color: #004289;
        font-weight: bold;

        @media (max-width: 1024px){
            font-size: 1.5rem;
            padding-top: 6rem;
        }

        @media (max-width: 1200px){
            padding-top: 12rem;
            text-align: center;
        }
    `;

    return {
        StyledSection,
        StyledTitleSection,
        StyledTextPresentation,
        StyledButtonPresentation,
        StyledIconRight,
        StyledImage,
        StyledContainerImage,
        StyledTitle
    };
}

export default useContactStyles;