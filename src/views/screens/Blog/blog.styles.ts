import { Button } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

const useBlogStyles = () => {
    const StyledImageBanner = styled.img`
        width: 100%;
        @media (max-width: 1023px){
            margin-top: 6.9rem;
        }
    `;

    const StyledImage = styled.img`
    `;

    const StyledBlogFirstSection = styled.section`
        ${tw`py-24 sm:py-12`}
        background-image: url('${(props: any) => props.background}');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    `;

    const StyledTextDescription = styled.p`
        ${tw `text-justify mt-6 `}

        font-family: 'Montserrat', sans-serif;
        color: #666666;
    `;

    const StyledButtonViewMore = styled(Button)`
        ${tw `my-6`}

        margin-top: 1.5rem !important;
        margin-bottom: 1.5rem !important;
        background-color: transparent !important;
        background: #004289 !important;
        text-transform: capitalize !important;
        color: #fff !important;
        font-family: 'Montserrat', sans-serif;
    `;

    const StyledContainer2 = styled.section`
        margin-top: -8%;
    `

    const StyledTitle2 = styled.h1`
    color: #004289;
    font-size: 2.5rem;
    margin-top: -8%;
    `;

    const StyledDate = styled.h1`
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    `;

    const StyledTitlePost = styled.h1`
        color: #004289;
        font-weight: 700;
        font-size: 2.7rem;
        font-family: 'Montserrat', sans-serif;
    `;

    const StyledTextData = styled.div`
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    `;

    const StyledTextarea = styled.textarea`
        border: 1px solid #004289;
        width: 100%;
        height: 10rem;
        border-radius: 20px;
    `;

    return {
        StyledImageBanner,
        StyledBlogFirstSection,
        StyledImage,
        StyledTextDescription,
        StyledButtonViewMore,
        StyledContainer2,
        StyledTitle2,
        StyledDate,
        StyledTitlePost,
        StyledTextData,
        StyledTextarea
    }
}

export default useBlogStyles;