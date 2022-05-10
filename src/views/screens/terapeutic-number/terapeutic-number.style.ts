import styled from "styled-components";
import tw from "twin.macro";
import { AppBar, Grid } from "@mui/material";
import { Container } from "@mui/material";

const useTerapeuticNumberStyles = () => {
  const StyledTerapeuticNumberSection = styled.section`
    ${tw`py-12 xl:pt-20`}
    background-image: url('${(props: any) => props.background}');
    background-repeat: no-repeat;
    background-size: 107% 142%;
    padding-bottom: 8.7%;

    @media (max-width: 1023px){
      padding-top: 1rem;
      padding-bottom: 5%;
    }
  `;
  const StyledTitulo = styled.h1`
    color: #004289;
    font-weight: 700;
    font-size: 37.7px;
    margin-top: 1rem;
    margin-left: 5.6%;
    font-family: montserrat, bold;

    @media (max-width: 1023px){
      font-size: 18px;
      margin-top: 0rem;
    }
}

  `;
  const StyledTitulo1 = styled.p`
    color: #666666;
    font-size: 17px;
    text-align: left;
    font-family: "Montserrat, medium";
    line-height: 1.3;
    margin-top: 4.2%;
    font-weight: 500;
    margin-left: 2.4%;

    @media (max-width: 1023px){
      margin-left: 8.4%;
    }

    @media (max-width: 500px) {
      font-size: 12px;
    }
  `;

  const StyledTerapeuticNumberSection1 = styled.section`
    ${tw``}
    background-image: url('${(props: any) => props.background}');
    //background-repeat: no-repeat;
    background-size: 100%;
    @media (max-width: 1200px) {
      padding-top: 0rem !important;
      padding-bottom: 6rem !important;
    }

    @media (max-width: 1023px) {
      padding-top: 0rem !important;
      padding-bottom: 0rem !important;
    }
  `;

  const StyledTitleSection2 = styled.h1`
    ${tw``}
    color: #004289;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
  `;

  const StyledDescriptionSection2 = styled.p`
    ${tw``}
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-align: justify;
  `;

  const StyledAppBarPage = styled(AppBar)`
    ${tw``}
    background-color: transparent !important;
    background: linear-gradient(to top, #004269e0 100%, transparent);
    margin-top: 8.9rem;

    @media (max-width: 1023px) {
      margin-top: 6.5rem;
    }
  `;

  const StyledGrid = styled(Grid)`
    ${tw``}
    border-left: 1px solid #ffffff30;
    border-right: 1px solid #ffffff30;
    height: 4.4vw;
    background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30";
      } else {
        return "transparent";
      }
    }};

    @media (max-width: 1024px) {
      height: 80px;
      font-size: 15px !important;
    }

    @media (max-width: 500px){
      height: 50px;
    }
  `;

  const StyledGrid2 = styled(Grid)`
    ${tw``}
    border-left: 1px solid #ffffff30;
    border-right: 1px solid #ffffff30;
    height: 4.4vw;
    background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30";
      } else {
        return "transparent";
      }
    }};

    @media (max-width: 1024px) {
      height: 80px;
      font-size: 15px !important;
    }

    @media (max-width: 500px){
      height: 50px;
    }
  `;

  const StyledGrid3 = styled(Grid)`
    ${tw``}
    border-left: 1px solid #ffffff30;
    border-right: 1px solid #ffffff30;
    height: 4.4vw;
    background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30";
      } else {
        return "transparent";
      }
    }};

    @media (max-width: 1024px) {
      height: 80px;
      font-size: 15px !important;
    }

    @media (max-width: 500px){
      height: 50px;
    }
  `;

  const StyledGrid4 = styled(Grid)`
    ${tw``}
    border-left: 1px solid #ffffff30;
    border-right: 1px solid #ffffff30;
    height: 4.4vw;
    background-color: ${(props: any) => {
      if (props.selected) {
        return "#ffffff30";
      } else {
        return "transparent";
      }
    }};

    @media (max-width: 1024px) {
      height: 80px;
      text-align: center;
      font-size: 15px !important;
    }

    @media (max-width: 500px){
      height: 50px;
    }
  `;

  const StyledContainerBibliografia = styled.section`
    ${tw`py-16`}
    background-color: #005DA2;
  `;

  const StyledTitleBibliografia = styled.h1`
    ${tw`text-white text-center`}
    font-size: 4rem;
    font-weight: bolder;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  `;

  const StyledTextBibliografia = styled.h1`
    ${tw`text-white`}
    text-align: justify;
    font-family: "Montserrat", sans-serif;
    font-size: 1.25rem;
  `;

  const StyledImage = styled.img`
    width: 100%;
  `;
  const StyledImage1 = styled.img`
    width: 100%;
  `;

  return {
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
    StyledTerapeuticNumberSection1,
    StyledTitleSection2,
    StyledDescriptionSection2,
    StyledAppBarPage,
    StyledGrid,
    StyledGrid2,
    StyledGrid3,
    StyledGrid4,
    StyledContainerBibliografia,
    StyledTitleBibliografia,
    StyledTextBibliografia,
    StyledImage,
    StyledImage1,
  };
};

export default useTerapeuticNumberStyles;

export const StyledSubtitle = styled.h3.attrs({
  className: "subtitle-terapeutic-number",
})`
  font-size: 30px;
  margin: 4% 33px;
  color: #014380;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const StyledImageGeneral = styled.img.attrs({
  className: "general-image",
})`
  width: 80%;
  margin-top: 2%;

  @media (max-width: 1200px) {
    margin-top: 1%;
    width: 100%;
  }
`;

export const StyledTabContainer = styled(Grid).attrs({})`
  background-color: transparent;
  margin-bottom: 3%;
  border-radius: 10;
  width: 80%;

  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 1%;
  }
`;

export const StyledContainer = styled(Container).attrs({
  className: "general-container",
})`
  max-width: 1536px;
  @media (max-width: 1500px) {
    max-width: 1200px;
  }
`;
