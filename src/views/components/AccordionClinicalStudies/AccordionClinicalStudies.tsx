import { FC, Fragment, useState } from "react";
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import _ from "lodash";
/** Local Modules */
import useControllers from "controllers";
import useComponents from "views/components";
/** Styles */
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledChevronDownContainer,
  StyledTilte,
} from "./AccordionClinicalStudies.styles";
/** Intefaces */
import { IAccordionClinicalStudiesProps } from "models/interfaces/views/components/AccordionClinicalStudies.interfaces";

const AccordionClinicalStudies: FC<IAccordionClinicalStudiesProps> = ({
  name,
  articles,
  studies,
  background,
  id,
  setPanel,
  panel,
}): JSX.Element => {
  /** Controllers */
  const { useComponentsHooks } = useControllers();
  const { useAccordionClinicalStudies } = useComponentsHooks();
  const { data, openModal, closeModal, handleOpenModal } =
    useAccordionClinicalStudies();

  /** Components */
  const { ModalAccordion } = useComponents();

  /** States */
  const [panelDetails, setPanelDetails] = useState("studies");

  /**
   * This function sets in the local state the accordion that is active.
   * @param {string} name - panel's name.
   * @return {VoidFunction} - setting the name of the accordion to open.
   */
  const openAccordion =
    (name: string): (() => void) =>
    (_event?: React.SyntheticEvent, newExpanded?: boolean) =>
      setPanel(newExpanded ? name : false);

  return (
    <Fragment>
      <div className="drop" style={{ marginBottom: 30 }}>
        <StyledAccordion
          expanded={panel === name}
          onChange={openAccordion(name)}
          style={{borderRadius: 15}}
        >
          <Paper elevation={4}>
            <StyledAccordionSummary
              aria-controls={`${name}-content`}
              id={id}
              background={background}
            >
              <StyledChevronDownContainer selected={panel === name}>
                {name}
                <PlayArrowRoundedIcon fontSize="large" />
              </StyledChevronDownContainer>
            </StyledAccordionSummary>
          </Paper>
          <Paper elevation={4}>
            <StyledAccordionDetails>
              <Container>
                <div className="w-full flex justify-center gap-3 lg:gap-20">
                  <StyledTilte 
                    onClick={() => setPanelDetails("studies")}
                    selected={panelDetails === "studies"}
                  >
                    Estudios
                  </StyledTilte>
                  <StyledTilte 
                    onClick={() => setPanelDetails("articles")}
                    selected={panelDetails === "articles"}
                  >
                    Artículos
                  </StyledTilte>
                </div>
                <ul>
                  {
                    panelDetails === "studies" ? (
                      <Fragment>
                        {
                          _.map(
                            studies
                          , (item: any, index: number) => (
                            <li
                              key={index}
                              onClick={() => handleOpenModal(item)}
                              className="text-[23px]"
                            >
                              {index + 1}. {item.name}
                            </li>
                          ))
                        }
                      </Fragment>
                    ) : (
                      <Fragment>
                        {
                          _.map(
                            articles
                          , (item: any, index: number) => (
                            <li
                              key={index}
                              onClick={() => handleOpenModal(item)}
                              className="text-[23px]"
                            >
                              {index + 1}. {item.name}
                            </li>
                          ))
                        }
                      </Fragment>
                    )
                  }
                </ul>
              </Container>
            </StyledAccordionDetails>
          </Paper>
        </StyledAccordion>
        <ModalAccordion
          open={openModal}
          onClose={() => closeModal()}
          item={data}
        />
      </div>
    </Fragment>
  );
};

export default AccordionClinicalStudies;
