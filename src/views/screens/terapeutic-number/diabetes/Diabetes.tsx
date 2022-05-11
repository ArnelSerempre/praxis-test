import useControllers from "controllers";
import { FC, Fragment, useState } from "react";
import useComponents from "views/components";
import _ from "lodash";
import { IAccordion } from "views/components/Accordion/Accordion.interfaces";
import { StyledContainerDiabetes } from "./Diabetes.styles";
import useTerapeuticNumberStyles from "../terapeutic-number.style";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import {
  StyledDescripcionFactores,
  StyledTitleFactores,
} from "../Heridas/heridas.responsive.styles";

const Diabetes: FC = () => {
  /** Components */
  const { Accordion } = useComponents();

  /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [expanded, setExpanded] = useState<string | false>(false);

  /** Listeners */
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useDiabetes, useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();
  const { diabetesContent } = useDiabetes(width, woundsAssets);

  /** Styles */
  const {
    StyledImage,
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
  } = useTerapeuticNumberStyles();

  return (
    <Fragment>
      <StyledContainerDiabetes>
        {/* Principal Banner */}
        {woundsAssets.diabetes_banner_1 !== undefined && (
          <StyledImage
            src={
              woundsAssets.diabetes_banner_1 !== undefined &&
              woundsAssets.diabetes_banner_1.content
            }
            alt={
              woundsAssets.diabetes_banner_1 !== undefined &&
              woundsAssets.diabetes_banner_1.alt
            }
          />
        )}

        {/* Description */}
        <StyledTerapeuticNumberSection
          style={{ backgroundSize: "109% 92%" }}
          background={
            woundsAssets.diabetes_banner_1 !== undefined &&
            woundsAssets.diabetes_background_1.content
          }
        >
          <Container>
            <Grid item lg={12} className="text-center">
              {width > 1024 ? (
                <StyledTitulo
                  style={{
                    marginTop: "0.6%",
                    marginLeft: "4.3%",
                    fontFamily: "Montserrat, bold",
                    fontSize: "39px",
                  }}
                >
                  Diabetes
                </StyledTitulo>
              ) : (
                <StyledTitleFactores className="text-center">
                  Diabetes
                </StyledTitleFactores>
              )}
            </Grid>
            <Grid item lg={12} className="xl:text-center lg:text-center">
              {width > 1024 ? (
                <StyledTitulo1
                  style={{
                    lineHeight: "1.3",
                    fontSize: "17px",
                    padding: "0 118px",
                    marginTop: "2.6%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      woundsAssets.diabetes_banner_1 !== undefined &&
                      woundsAssets.diabetes_text_1.content,
                  }}
                ></StyledTitulo1>
              ) : (
                <StyledDescripcionFactores
                  className="xl:pb-12 lg:pb-12 pb-8"
                  dangerouslySetInnerHTML={{
                    __html:
                      woundsAssets.diabetes_banner_1 !== undefined &&
                      woundsAssets.diabetes_text_1.content,
                  }}
                ></StyledDescripcionFactores>
              )}
            </Grid>
          </Container>
        </StyledTerapeuticNumberSection>

        {/* Accordions */}
        {_.map(diabetesContent, (item: IAccordion, index: number) => (
          <Accordion 
            title={item.title}
            id={item.id}
            name={item.name}
            expanded={expanded}
            setExpanded={setExpanded}
            key={index} 
          >
            {item.children}
          </Accordion>
        ))}
      </StyledContainerDiabetes>
    </Fragment>
  );
};

export default Diabetes;
