import { AppBar, Grid } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

const useProductsStyles = () => {
    const StyledAppBarPage = styled(AppBar)`
      ${tw``}
      background-color: transparent !important; 
      background: linear-gradient(to top,#004269e0 100%,transparent);
      margin-top: 8.9rem;
      
      @media (max-width: 1023px){
        margin-top: 6.3rem;
      }
    `;

    const StyledGrid = styled(Grid)`
        ${tw``}
        border-left: 1px solid #ffffff30;
        border-right: 1px solid #ffffff30;
        height: 4.4vw;
        background-color: ${(props: any) => {
            if (props.selected) {
                return "#ffffff30"
            } else {
                return "transparent"
            }
        }};

        @media (max-width: 1024px) {
            height: 60px;
        }

        @media (max-width: 500px) {
            height: 40px;
        }
    `;

    const StyledGrid2 = styled(Grid)`
        ${tw``}
        border-left: 1px solid #ffffff30;
        border-right: 1px solid #ffffff30;
        height: 4.4vw;
        background-color: ${(props: any) => {
            if (props.selected) {
                return "#ffffff30"
            } else {
                return "transparent"
            }
        }};

        @media (max-width: 1024px) {
            height: 60px;
        }

        @media (max-width: 500px) {
            height: 40px;
        }
    `;

    const StyledGrid3 = styled(Grid)`
        ${tw``}
        border-left: 1px solid #ffffff30;
        border-right: 1px solid #ffffff30;
        height: 4.4vw;
        background-color: ${(props: any) => {
            if (props.selected) {
                return "#ffffff30"
            } else {
                return "transparent"
            }
        }};

        @media (max-width: 1024px) {
            height: 60px;
        }

        @media (max-width: 500px) {
            height: 40px;
        }
    `;

    const StyledImage = styled.img`
    
    `;

    const StyledTerapeuticNumberSection = styled.section`
        ${tw`py-24 sm:py-36`}
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    `;

    const StyledTitulo1 = styled.p`
        font-style: italic;
        color: #000;
        font-size: 20px;
        font-family: 'Montserrat';
        padding-top: 4rem;
        @media (max-width: 500px) {
        font-size: 1rem;
        }
    `;

    const StyledTerapeuticNumberSection1 = styled.section`
        ${tw`py-12 sm:py-36`}
        background-image: url('${(props: any) => props.background}');
        background-size: 100%;
    `;

    const StyledTitleSection2 = styled.h1`
        ${tw``}
        color: #004289;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
    `;

    const StyledDescriptionSection2 = styled.p`
        ${tw``}
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        text-align: justify;
    `;

    const StyledListItemSection2 = styled.li`
        ${tw``}

        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    `;

    const StyledContainerBibliografia = styled.section`
        ${tw`py-16`}
        background-color: #005DA2;
    `;

    const StyledTextBibliografia = styled.h1`
        ${tw`text-white`}
        text-align: justify;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.15rem;
    `;

    const StyledTitleBibliografia = styled.h1`
        ${tw`text-white text-center`}
        font-size: 4rem;
        font-weight: bolder;

        @media (max-width: 600px) {
        font-size: 2rem;
        }
    `

    const StyledSubTitleBibliografia = styled.h1`
        ${tw`text-white`}
        text-align: justify;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
    `;

    const StyledTitulo = styled.h1`
        color: #004289;
        font-weight: 700;
        font-size: 31px;
    `;

    return {
        StyledAppBarPage,
        StyledGrid,
        StyledGrid2,
        StyledGrid3,
        StyledImage,
        StyledTerapeuticNumberSection,
        StyledTitulo1,
        StyledTerapeuticNumberSection1,
        StyledTitleSection2,
        StyledDescriptionSection2,
        StyledListItemSection2,
        StyledContainerBibliografia,
        StyledTextBibliografia,
        StyledTitleBibliografia,
        StyledSubTitleBibliografia,
        StyledTitulo
    };
}

export default useProductsStyles;