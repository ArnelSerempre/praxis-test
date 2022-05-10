import styled from "styled-components";
import { StyledSubtitle } from "../terapeutic-number.style";

export const StyledWounds1Image = styled.img.attrs({
  className: "imagen-herida-1",
})`
  width: 100%;
  height: auto;
`;

export const StyledTitleWounds = styled(StyledSubtitle).attrs({
  className: "titulo-heridas",
})`
  font-size: 17px;
  font-family: "montserrat, bold";
  margin-top: 10%;
  padding-bottom: 0%;
`;

export const StyledDescriptionWounds = styled.p.attrs({
  className: "descripcion-heridas",
})`
  font-size: 12px;
  margin-top: 0.7%;
  line-height: 1.1;
  padding-bottom: 5%;
  padding-right: 20px;
  margin-left: 9%;
  font-family: "Montserrat, medium";
  color: #666666;
  font-weight: 500;
`;

export const StyledTitleClasification = styled.h1.attrs({
  className: "titulo-clasificacion",
})`
  font-size: 24px;
  margin-top: 0.7rem;
  margin-left: 3.7%;
  font-family: "montserrat, bold";
  color: #004289;
  font-weight: 700;

  @media (max-width: 1023px) {
    font-size: 17px;
    margin-left: 0%;
    padding-left: 32%;
  }
`;

export const StyledTitleTypesWounds = styled(StyledSubtitle).attrs({
  className: "tipos-de-heridas-wounds",
})`
  padding: 0.3% 25px;
  font-size: 24px;
  font-family: "montserrat, bold";

  @media (max-width: 1023px) {
    font-size: 17px;
    padding: 0.3% 0px;
    margin: 4% 14px;
  }
`;

export const StyledDescriptionTypesWounds = styled.p.attrs({
  className: "tipos-de-heridas-descripcion",
})`
  font-size: 17px;
  margin-left: 5.2%;
  margin-top: -1.8%;
  font-family: "Montserrat, medium";
  color: #666666;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const StyledImageImportant = styled.img.attrs({
  className: "important-wounds",
})`
  width: 1128px;
  margin-left: 2.8%;
  margin-right: auto;
  margin-top: -2%;

  @media (max-width: 1023px) {
    margin-top: 3%;
    margin-left: 0%;
    width: 100%;
  }
`;

export const StyledTitleEmergency = styled(StyledSubtitle).attrs({
  className: "descripcion-emergencia",
})`
  padding: 0.3% 9px;
  fontsize: 24px;
  fontfamily: "montserrat, bold";
  margintop: -1%;

  @media (max-width: 1023px) {
    font-size: 17px;
    padding: 0.3% 0px;
  }
`;

export const StyledDescriptionEmergency = styled.p.attrs({
  className: "descripcion-emergencia",
})`
  font-size: 17px;
  margin-left: 7.2%;
  margin-top: 5.5%;
  font-family: "Montserrat, medium";
  color: #666666;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 12px;
    margin-left: 8%;
  }
`;

export const StyledTitleRemember = styled(StyledSubtitle).attrs({
  className: "descripcion-emergencia",
})`
  padding: 0.3% 9px;
  font-size: 25px;
  font-family: "Montserrat, bold";
  margin-top: 3.4%;
  margin-left: 6.8%;

  @media (max-width: 1023px) {
    font-size: 17px;
    padding: 0.3% 0px;
    text-align: center;
  }
`;

export const StyledTitleHands = styled.p.attrs({
  className: "titulo-manos",
})`
  font-size: 17px;
  margin-left: 4.5%;
  margin-top: 18px;
  line-height: 1.1;
  font-family: "Montserrat, medium";
  color: #004280;
  font-weight: 700;

  @media (max-width: 1023px) {
    font-size: 12px;
    text-align: center;
    font-weight: 500;
    margin-left: 0%;
  }
`;

export const StyledContainerCase = styled.div.attrs({
  className: "container-case-person",
})`
  background: #e3e3e3;
  margin-left: 57px;
  margin-right: 15px;
  margin-top: 2.4%;
  height: 3%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 1023px) {
    margin-left: 0;
    padding-right: 5%;
    margin-right: 0px;
  }
`;

export const StyledTitleCase = styled.div.attrs({
  className: "container-case-person",
})`
  font-size: 24px;
  font-weight: 700;
  margin-top: -4.2%;
  margin-left: -55.1%;
  color: #004280;

  @media (max-width: 1023px) {
    margin-left: 0;
    font-size: 17px;
  }
`;

export const StyledDescriptionCase = styled.div.attrs({
  className: "container-case-person",
})`
  padding: 0 126px;
  margin-top: -1.9%;
  font-family: "Montserrat, medium";
  color: #666666;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 1023px) {
    margin-left: 0;
    font-size: 12px;
    padding: 0;
    padding-left: 6%;
  }
`;

export const StyledTitleQuirurgicas = styled(StyledSubtitle).attrs({
  className: "titulo-heridas",
})`
  text-align: center;
  font-weight: bold;
  font-size: 42px;
  margin-left: 5.9%;
  margin-top: 4.9%;

  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;

export const StyledTitleFactores = styled(StyledSubtitle).attrs({
  className: "titulo-factores",
})`
    margin-bottom: 3%;
    font-family: "Montserrat, bold";
    margin-left: 9.9%;
    font-size: 28.4px;
    margin-top: 3.8%;

    @media (max-width: 1024px) {
        font-size: 17px;
        margin: 4% 31px;
    }
`;

export const StyledDescripcionFactores = styled(StyledSubtitle).attrs({
  className: "descripcion-factores",
})`
  font-size: 17px;
  padding: 0px 81px;
  margin-top: -1%;
  font-family: "Montserrat, medium";
  color: #666666;
  font-weight: 500;
  text-align: justify;

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 0;
    margin-top: 0;
    margin: 4% 31px;
  }
`;

export const StyledTitleReferences = styled.h1.attrs({
  className: "",
})`
  font-size: 25px;
  font-weight: 700;
  margin-top: -2.6%;
  margin-left: 4.1%;
  font-family: "montserrat, bold";

  @media (max-width: 1023px) {
    font-size: 17px;
  }
`;

export const StyledDescriptionReferences = styled.h1.attrs({
  className: "",
})`
  padding: 0 160px;
  margin-top: -2.2%;
  margin-left: -0.1%;
  font-family: "Montserrat, medium";

  @media (max-width: 1023px) {
    font-size: ${(props: any) =>
      props.moreText ? "4px !important" : props.noReference ? "12px !important" : "6px !important"};
    padding: 0 8%;
    line-height: 1.2 !important;
  }
`;
