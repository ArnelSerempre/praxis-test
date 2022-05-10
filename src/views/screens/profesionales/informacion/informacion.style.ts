import { AppBar, Button, Container, Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";

const useInformacionStyles = () => {
    const StyledImage = styled.img`
        padding-top: 8.9rem;
    `;

    const StyledAppBarPage = styled(AppBar)`
        ${tw``}
        background-color: transparent !important; 
        background: linear-gradient(to top,#004269e0 100%,transparent);
        margin-top: 8.9rem;
        
        @media (max-width: 1023px){
            margin-top: 7rem;
        }
    `;

    const StyledGrid = styled(Grid)`
        ${tw``}
        border-left: 1px solid #ffffff30;
        border-right: 1px solid #ffffff30;
        height: 5.4vw;
        background-color: ${(props: any) => {
            if (props.selected) {
                return "#ffffff30"
            } else {
                return "transparent"
            }
        }};

        @media (max-width: 1024px) {
            height: 15.3vw;
        }
    `;

    const StyledGrid2 = styled(Grid)`
        ${tw``}
        border-left: 1px solid #ffffff30;
        border-right: 1px solid #ffffff30;
        height: 5.4vw;
        background-color: ${(props: any) => {
            if (props.selected) {
                return "#ffffff30"
            } else {
                return "transparent"
            }
        }};

        @media (max-width: 1024px) {
            height: 15.3vw;
        }
    `;

    const StyledSection = styled.section`
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    `;

    const StyledTitleSection2 = styled.h1`
        ${tw``}
        color: #004289;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;

        @media (max-width: 1023px) {
            font-size:  1.5rem; 
        }
    `;

    const StyledImage2 = styled.img`
        width: 100%
    `;

    const StyledTitleSection3 = styled.h1`
        ${tw``}
        color: #004289;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
    `;

    const StyledDescriptionSection2 = styled.p`
        ${tw``}
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    `;

    const StyledSectionBlue = styled.section`
        ${tw`py-16`}
        background: #005DA2;
    `

    const StyledTitleSection4 = styled.h1`
        ${tw``}
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
    `;

    const StyledDescriptionSection3 = styled.p`
        ${tw``}
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    `;

    const StyledCarousel = styled(Slider)`
        ${tw`py-4 md:py-8`}
        border: 1px solid #B2B2B2;
        border-radius: 20px;
    `;

    const StyledSection4 = styled.section`
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 8.9rem !important;

        @media (max-width: 1023px){
            margin-top: 10.6rem;
        }
    `;

    const ContainerStyled = styled(Container)`
        margin-top: 14.4rem !important;

        @media (max-width: 1023px) {
            margin-top: 10.4rem !important;
        }
    `

    const StyledButton = styled(Button)`
        color: #fff !important;
        background-color: #004289 !important;
        width: 150px;
        font-family: "Montserrat", sans-serif !important;
    `;

    return {
        StyledImage,
        StyledAppBarPage,
        StyledGrid,
        StyledGrid2,
        StyledSection,
        StyledTitleSection2,
        StyledImage2,
        StyledTitleSection3,
        StyledDescriptionSection2,
        StyledSectionBlue,
        StyledTitleSection4,
        StyledDescriptionSection3,
        StyledCarousel,
        StyledSection4,
        ContainerStyled,
        StyledButton
    }
}

export default useInformacionStyles;
