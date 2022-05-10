import styled from "styled-components";
import tw from "twin.macro";
import {Grid} from "@mui/material";
import { Container } from "@mui/material";

const useHomeStyles = () => {
    const StyledSectionsHome = styled.section`
      ${tw `py-16`}
      background-image: url('${(props: any) => props.background}');
      background-size: 100% 100%;
      @media (max-width: 768px){
        padding-bottom: 0rem;
        padding-top: 2rem;
      }
    `;

    const StyledTitleSection = styled.h1`
      ${tw  `text-xl`}
      color: #004289;
      font-size: 3.4rem;
      font-weight: bolder;
      font-family: 'Montserrat', sans-serif;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    `;

    const StyledImgSections1 = styled.img`
      width: 100%;
      @media (min-width: 1600px){
        width: 100%
      }
    `;
    const StyledImgSections2 = styled.img`
      width: 100%;
      @media (min-width: 1600px){
        width: 100%
      }
    `;
    const StyledImgSections3 = styled.img`
      width: 100%;
      @media (min-width: 1600px){
        width: 100%
      }
    `;
    const StyledImgSections4 = styled.img`
      width: 100%;
      @media (min-width: 1600px){
        width: 100%
      }
    `;

    const StyledSectionPraxis = styled.section`
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position: bottom center;
      background-position-y: 42rem;
      background-size: 80%;
      background-position-x: 18rem;
    `;

    const StyledTitlePraxis = styled.h1`
      font-size: 3rem;
      color: #004289;
      font-weight: bold;
      @media (max-width: 768px){
        font-size: 2rem;
      }
    `;

    const StyledLeftContainer = styled(Grid)`
      border-right: 1px solid #004289;
    `;

    const StyledRightContainer = styled(Grid)`
    `;

    const StyledSubtitlePraxis = styled.h2`
      color: #004289;
      font-size: 1.5rem;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
    `;

    const StyledContainerTeam = styled.section`
      background-color: #f7f7f7;
    `;

    const StyledContainerValores = styled(Grid)`
      border-top: 1px solid #004289;
    `;

    const StyledTextValores = styled.span`
      font-size: 1rem;
      font-family: 'Montserrat', sans-serif;
    `

    return {
        StyledSectionsHome,
        StyledTitleSection,
        StyledImgSections2,
        StyledImgSections3,
        StyledImgSections4,
        StyledImgSections1,
        StyledSectionPraxis,
        StyledTitlePraxis,
        StyledLeftContainer,
        StyledSubtitlePraxis,
        StyledRightContainer,
        StyledContainerTeam,
        StyledContainerValores,
        StyledTextValores,
    };
}

export default useHomeStyles;

export const StyledContainer = styled(Container).attrs({
  className: "general-container",
})`
  max-width: 1536px;
  @media (max-width: 1500px) {
    max-width: 1200px;
  }
`;

export const StyledImage = styled.img`
width: 100%;
`;