import { FC, Fragment } from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import _ from "lodash";
/** Local Modules */
import useControllers from "controllers";
/** Styles */
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledBox,
  StyledChevronDownContainer,
} from "./AccordionClinicalStudies.styles";
/** Intefaces */
import { IAccordionClinicalStudiesProps } from "models/interfaces/views/components/AccordionClinicalStudies.interfaces";
import { Modal } from "@mui/material";

const AccordionClinicalStudies: FC<IAccordionClinicalStudiesProps> = ({
  name,
  articles,
  studies,
}): JSX.Element => {
  /** Controllers */
  const { useComponentsHooks } = useControllers();
  const { useAccordionClinicalStudies } = useComponentsHooks();
  const { panel, data, openModal, openAccordion, closeModal, handleOpenModal } =
    useAccordionClinicalStudies();

  /** Modal Styles */
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Fragment>
      <div style={{ marginBottom: 30 }}>
        <StyledAccordion
          expanded={panel === name}
          onChange={openAccordion(name)}
        >
          <Paper elevation={4}>
            <StyledAccordionSummary
              aria-controls="panel-accordion"
              id="accordion-header"
            >
              <StyledChevronDownContainer>
                {name}
                <PlayArrow />
              </StyledChevronDownContainer>
            </StyledAccordionSummary>
          </Paper>
          <StyledAccordionDetails>
            <Container>
              <h1>Estudios</h1>
              <ul>
                {_.map(studies, (item: any, index: number) => (
                  <li key={index} onClick={() => handleOpenModal(item)}>
                    {index + 1}. {item.name}
                  </li>
                ))}
              </ul>
              <h1 style={{ marginTop: 20 }}>Articulos</h1>
              <ul>
                {_.map(articles, (item: any, index: number) => (
                  <li key={index} onClick={() => handleOpenModal(item)}>
                    {index + 1}. {item.name}
                  </li>
                ))}
              </ul>
            </Container>
          </StyledAccordionDetails>
        </StyledAccordion>
        <Modal open={openModal} onClose={closeModal} style={style}>
          <StyledBox>
            <h1>{data?.name}</h1>
            <h4>{data!.type}</h4>
            <p>{data!.text}</p>
            <span className="text">Obtenga la version completa aqui</span>
            <button>Descargar Pdf</button>
          </StyledBox>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AccordionClinicalStudies;
