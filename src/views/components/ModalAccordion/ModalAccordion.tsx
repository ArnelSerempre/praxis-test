import { FC } from "react";
/** Interfaces */
import { ModalAccordionProps } from "models/interfaces/ClinicalStudies.interfaces";
/** Styles */
import {
  StyledBox,
  StyledDescription,
  StyledModal,
  StyledReference,
  StyledTitle,
  StyledGetOficial,
  StyledButton,
  StyledClose
} from "./ModalAccordion.styles";
import { Container } from "@mui/material";

const ModalAccordion: FC<ModalAccordionProps> = ({
  open,
  onClose,
  item,
}): JSX.Element => {
  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-accordion"
      aria-describedby="modal-accordion"
    >
      <StyledBox background={item.background_modal}>
        <Container>
          <div className="w-full mt-2">
            <StyledClose onClick={onClose}>x</StyledClose>
          </div>
          <div className="w-full">
            <StyledReference>Estudio 01</StyledReference>
            <StyledTitle>{item.name}</StyledTitle>
            <StyledDescription>{item.description}</StyledDescription>
          </div>
          <StyledGetOficial>Obtenga la version completa</StyledGetOficial>
          <div className="w-full flex justify-center">
            <a href={item.pdf_url} download target="_blank" rel="noreferrer">
              <StyledButton>Descargar PDF</StyledButton>
            </a>
          </div>
        </Container>
      </StyledBox>
    </StyledModal>
  );
};

export default ModalAccordion;
