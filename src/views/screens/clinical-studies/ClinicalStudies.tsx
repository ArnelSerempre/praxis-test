import { FC } from "react";
import { Container } from "@mui/material";
/** Styles */
import { StyledContainer } from "./ClinicalStudies.styles";
/** Local Modules */
import useViews from "views";

const ClinicalStudies: FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { AccordionClinicalStudies } = useComponents();

  const typs: any = {
    name: "",
    estudios: [
      {
        name: "Titulo: Epidermal Growth Factor is Effective in the treatmentof Diabetic Foot Ulcers",
        type: "Estudio",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam minima vero nam iusto nobis totam amet adipisci atque natus veritatis, ea saepe, laborum alias, laudantium non quos architecto! Possimus.",
        url: "http://google.com/",
      },
      {
        name: "Titulo: Epidermal Growth Factor is Effective in the treatmentof Diabetic Foot Ulcers",
        type: "Estudio",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam minima vero nam iusto nobis totam amet adipisci atque natus veritatis, ea saepe, laborum alias, laudantium non quos architecto! Possimus.",
        url: "http://google.com/",
      },
      {
        name: "Titulo: Epidermal Growth Factor is Effective in the treatmentof Diabetic Foot Ulcers",
        type: "Estudio",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam minima vero nam iusto nobis totam amet adipisci atque natus veritatis, ea saepe, laborum alias, laudantium non quos architecto! Possimus.",
        url: "http://google.com/",
      },
      {
        name: "Titulo: Epidermal Growth Factor is Effective in the treatmentof Diabetic Foot Ulcers",
        type: "Estudio",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam minima vero nam iusto nobis totam amet adipisci atque natus veritatis, ea saepe, laborum alias, laudantium non quos architecto! Possimus.",
        url: "http://google.com/",
      },
      {
        name: "Titulo: Epidermal Growth Factor is Effective in the treatmentof Diabetic Foot Ulcers",
        type: "Estudio",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam minima vero nam iusto nobis totam amet adipisci atque natus veritatis, ea saepe, laborum alias, laudantium non quos architecto! Possimus.",
        url: "http://google.com/",
      },
    ],
    articulos: [
      {
        name: "Titulo: Epidermal Growth Factor is Effective in the treatmentof Diabetic Foot Ulcers",
        type: "Estudio",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam minima vero nam iusto nobis totam amet adipisci atque natus veritatis, ea saepe, laborum alias, laudantium non quos architecto! Possimus.",
        url: "http://google.com/",
      },
      {
        name: "Titulo: Epidermal Growth Factor is Effective in the treatmentof Diabetic Foot Ulcers",
        type: "Estudio",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magnam minima vero nam iusto nobis totam amet adipisci atque natus veritatis, ea saepe, laborum alias, laudantium non quos architecto! Possimus.",
        url: "http://google.com/",
      },
    ],
  };

  return (
    <StyledContainer>
      <Container>
        <AccordionClinicalStudies name="Ulceras de pie diabetico" studies={typs.estudios} articles={typs.articulos}/>
      </Container>
    </StyledContainer>
  );
};

export default ClinicalStudies;
