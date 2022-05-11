import { FC, SyntheticEvent } from "react";
import { IAccordionProps } from "./Accordion.interfaces";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Typography } from "@mui/material";
import {
  StyledAccordionComponent,
  StyledAccordionSummari,
} from "./Accordion.styles";

const Accordion: FC<IAccordionProps> = ({
  children,
  name,
  id,
  title,
  expanded,
  setExpanded,
}) => {
  /** Handlers */
  const handlerChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledAccordionComponent
      expanded={expanded === name}
      onChange={handlerChange(name)}
    >
      <StyledAccordionSummari
        expandIcon={<ExpandMoreIcon color={expanded === name ? "primary" : "info"}/>}
        aria-controls={`${name}-content`}
        id={id}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, bold",
            fontSize: 16,
            fontWeight: "700",
          }}
        >
          {title}
        </Typography>
      </StyledAccordionSummari>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordionComponent>
  );
};

export default Accordion;
