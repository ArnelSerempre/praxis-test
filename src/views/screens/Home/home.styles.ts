import styled from "styled-components";
import tw from "twin.macro";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { IStyledLink } from "models/interfaces/home.interfaces";

export const StyledSectionsHome = styled.section`
  ${tw`py-16 pb-4 pl-16 sm:pt-4 md:pt-12`}
  background-image: url('${(props: any) => props.background}');
  background-size: 100% 100%;
`;

export const StyledTitleSection = styled.h1`
  ${tw`text-[45px] sm:text-[20px] md:text-[2rem] text-[#004289]`}
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

export const StyledAccordion = styled.div`
  ${tw`overflow-hidden my-[20px] mx-[auto]`}
  box-shadow: 1px 1px 4px rgba(0,0,0,0.08);
  border: 7px solid rgba(255,255,255,0.6);

  figure {
    ${tw`absolute top-0 left-[50px] w-full`}
    box-shadow: 0 0 0 1px rgba(255,255,255,0.6);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  & > figure {
    ${tw`relative`}
    left: 0 !important;
  }

  img {
    ${tw`block w-full`}
  }

  input {
    ${tw`absolute top-0 left-0 w-[50%] h-full cursor-pointer`}
    border: 0;
		padding: 0;
		-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
		filter: alpha(opacity=0);
		opacity: 0;
		z-index: 100;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
  }

  input:checked {
    ${tw`w-[5px] left-[auto] right-0`}
  }

  input:checked ~ figure {
    ${tw`left-[50%]`}
    -webkit-transition: all 0.7s ease-in-out;
		-moz-transition: all 0.7s ease-in-out;
		-o-transition: all 0.7s ease-in-out;
		-ms-transition: all 0.7s ease-in-out;
		transition: all 0.7s ease-in-out;
  }
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

export const StyledContainer = styled(Container).attrs({
  className: "general-container",
})`
  max-width: 1536px;
  @media (max-width: 1500px) {
    max-width: 1200px;
  }
`;

export const StyledImage = styled.img<{ width: number; }>`
  ${({ width }: any) => width ? tw`mt-[11%]` : (width >= 500 && width <= 767) ? tw`mt-[22%]` : tw`mt-[29%]`}
  ${tw`w-full`}
`;