import { FC, SyntheticEvent, useState } from "react";
import { IAccordionProps } from "./Accordion.interfaces";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion as AccordionComponent,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const Accordion: FC<IAccordionProps> = ({ children, name, id, title }) => {
  /** States */
  const [expanded, setExpanded] = useState<string | false>(false);

  /** Handlers */
  const handlerChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <AccordionComponent
      expanded={expanded === name}
      onChange={handlerChange(name)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}-content`}
        id={id}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, bold",
            color: "#014380",
            fontSize: 16,
            fontWeight: "700"
          }}
        >
          {expanded === name ? "" : title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionComponent>
  );
};

export default Accordion;
