import styled from "styled-components";
import tw from "twin.macro";

export const StyledImage = styled.img<{scroll: number;}>`
    ${
        ({scroll}: any) => scroll === 0 ?
            tw`fixed bottom-[5%] left-[5%] cursor-pointer w-[6%]` : 
            tw`fixed bottom-[5%] left-[3%] cursor-pointer w-[6%]`
    }

    ${({scroll}:any) => scroll > 0 && "transform: rotate(180deg);"}
`;