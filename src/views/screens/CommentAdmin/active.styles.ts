import styled from "styled-components";
import tw from "twin.macro";

const useActiveStyles = () => {
    const StyledContainer = styled.section`
        ${tw `py-12 md:py-12`}
        margin-top: 8.9rem;
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;

        @media (max-width: 1023px){
            margin-top: 6.9rem;
        }
    `;

    return {
        StyledContainer
    }
}

export default useActiveStyles;