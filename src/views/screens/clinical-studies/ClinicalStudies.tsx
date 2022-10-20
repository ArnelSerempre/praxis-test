import { FC, useEffect, useState } from "react";
import { Container } from "@mui/material";
/** Styles */
import { StyledContainer } from "./ClinicalStudies.styles";
/** Local Modules */
import useViews from "views";
import useControllers from "controllers";
import _ from 'lodash';
import { ClinicalStudiesResponse } from 'models/interfaces/ClinicalStudies.interfaces';

const ClinicalStudies: FC = (): JSX.Element => {
  /** Views */
  const { useComponents } = useViews();
  const { AccordionClinicalStudies } = useComponents();

  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useClinicalStudies} = useScreenHooks();
  const {clinicalStudies, getClinicalStudies} = useClinicalStudies();

  const [panel, setPanel] = useState<string | boolean>(false);

  /** useEffects */
  useEffect(() => {
    getClinicalStudies();
    // eslint-disable-next-line
  }, []);

  return (
    <StyledContainer>
      <Container>
        {
          clinicalStudies && _.map(clinicalStudies, (item: ClinicalStudiesResponse, index: number) => (
            <AccordionClinicalStudies
              key={index}
              name={item.name}
              articles={item.articles}
              studies={item.studies}
              background={item.background_item}
              id={item.id}
              setPanel={setPanel}
              panel={panel}
            />
          ))
        }
      </Container>
    </StyledContainer>
  );
};

export default ClinicalStudies;
