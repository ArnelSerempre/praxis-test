import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledSectionDescription = styled.section.attrs({
    className: "section-descripcion"
})`
    ${tw `py-8`}
    background-image: url('${(props: any) => props.background}');
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

export const StyledDescriptionText = styled.p.attrs({
    className: "text-descripcion"
})`
    font-family: "Montserrat, medium";
    font-size: 12px;
    font-weight: 500;
    color: #666666;
    margin: 4% 0px;

    @media (min-width: 769px) {
        font-size: 20px;
        margin: 4% 31px;
    }
`;

export const StyledDescriptionWhiteText = styled.p.attrs({
    className: "text-white-descripcion"
})`
    font-family: "Montserrat, medium";
    font-size: 12px;
    font-weight: 500;
    color: #666666;
    margin: 4% 0px;

    @media (min-width: 769px) {
        font-size: 16px;
        margin: 4% 31px;
    }
`;

export const StyledTitleText = styled.h1.attrs({
    className: "title-descripcion"
})`
    font-family: "Montserrat, bold";
    font-size: 17px;
    font-weight: 500;
    color: #004280;
    margin: 4% 0px;

    @media (min-width: 769px) {
        font-size: 24px;
        margin: 4% 31px;
    }
`;

export const StyledTitleTextWhite = styled.h1.attrs({
    className: "title-descripcion"
})`
    font-family: "Montserrat, bold";
    font-size: 17px;
    font-weight: 500;
    color: #004280;
    margin: 4% 0px;

    @media (min-width: 769px) {
        font-size: 24px;
        margin: 4% 31px;
    }
`;

export const StyledImageResponsive = styled.img.attrs({
    className: "image-products"
})`
    @media (max-width: 1024px){
        max-width: 80%;
    }

    @media (max-width: 768px){
        max-width: 100%;
    }
`;