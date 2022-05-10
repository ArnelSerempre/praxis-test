import styled from "styled-components";
import tw from "twin.macro";

const useFooterStyles = () => {
  const StyledContainerFooter = styled.section`
      ${tw`text-white`}
      background-color: #003366;
      font-family: 'Montserrat', sans-serif;
    `;

  const StyledContainerCopyright = styled.section`
      ${tw`flex justify-center text-white py-6`}
      background-color: #022644;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.15rem;
      @media (max-width: 1023px){
        font-size: 0.8rem;
      }
    `;

  const StyledTitleSection = styled.h1`
      ${tw`text-white py-6 sm:py-12`}
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Montserrat', sans-serif;
      
      @media (max-width: 1023px){
        font-size: 1.5rem
      }
    `

  const StyledSubtitleSection = styled.h2`
      ${tw`text-white`}
      font-family: 'Montserrat', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      @media (max-width: 1023px){
        display: flex;
        justify-content: center;
        font-size: 1rem;
      }
    `;

  const StyledTextSection = styled.p`
      font-family: "Montserrat", sans-serif;
      font-size: 1.25rem;
      @media (max-width: 1023px){
        font-size: 1rem;
      }
      @media (max-width: 820px){
        font-size: 1rem;
        text-align: center;
        
      }

    `;

  return {
    StyledContainerFooter,
    StyledContainerCopyright,
    StyledTitleSection,
    StyledSubtitleSection,
    StyledTextSection,
  };
}

export default useFooterStyles;