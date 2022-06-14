import styled from "styled-components";
import tw from "twin.macro";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { IStyledLink } from "models/interfaces/home.interfaces";

export const StyledSectionsHome = styled.section`
  ${tw`py-8 lg:py-16 xl:py-16 xl:pb-4 lg:pb-4 xl:pl-16 lg:pl-16 sm:pt-4 md:pt-12`}
  background-image: url('${(props: any) => props.background}');
  background-size: 100% 100%;
`;

export const StyledTitleSection = styled.h1`
  ${tw`text-[20px] md:text-[2rem] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] text-[#004289]`}
  font-weight: bolder;
  font-family: 'Montserrat, bold', sans-serif;
`;

export const StyledGrid = styled(Grid)`
  ${tw`py-[3.5] xl:py-[3.5rem] lg:py-[3.5rem] sm:py-[2.5rem] px-[0%] sm:px-[10%]`};
`;

export const StyledLink = styled.a<IStyledLink>`
  ${({ hover }: any) => hover ? tw`z-[1]` : tw`z-[0]`}
`;

export const StyledLink2 = styled.a<IStyledLink>`
  ${({ hover }: any) => hover ? tw`z-[1]` : tw`z-[0]`}
  ${tw`2xl:-ml-12 -ml-4 sm:-ml-12`}
`;


export const StyledImgSections = styled.img`
  ${tw`w-[257px]`}
`;

export const StyledContainer = styled(Container)`
  ${tw`max-w-[1200px] 2xl:max-w-[1536px] pb-8`}
`;

export const StyledImage = styled.img<{ width: number; }>`
  ${({ width }: any) => width >= 1024 ? tw`mt-[11%]` : (width >= 500 && width <= 767) ? tw`mt-[22%]` : tw`mt-[29%]`}
  ${tw`w-full`}
`;

const useHomeStyles = () => {
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

