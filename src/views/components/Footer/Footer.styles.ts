import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerFooter = styled.section`
  ${tw`text-white`}
  background-color: #003366;
  font-family: "Montserrat", sans-serif;
`;

export const StyledContainerCopyright = styled.section`
  ${tw`flex justify-center text-white py-6`}
  background-color: #022644;
  font-family: "Montserrat", sans-serif;
  font-size: 1.15rem;
  @media (max-width: 1023px) {
    font-size: 0.8rem;
  }
`;

export const StyledTitleSection = styled.h1`
  ${tw`text-white py-6 sm:py-12`}
  font-size: 2rem;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }
`;

export const StyledSubtitleSection = styled.h2`
  ${tw`text-white`}
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    font-size: 1rem;
  }
`;

export const StyledTextSection = styled.p`
  ${tw`text-base`}
  font-family: "Montserrat", sans-serif;
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
  @media (max-width: 820px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const StyledTitlesFooter = styled.h3`
  ${tw`text-lg text-white font-bold`}
`;

export const StyledSocialNetworksLogo = styled.img`
  ${tw`w-3/12 cursor-pointer`}
`;

export const StyledIframe = styled.iframe`
  ${tw`w-80 h-52`}
`