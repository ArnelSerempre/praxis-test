import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import _ from "lodash";
import useTerapeuticNumberStyles from "../terapeutic-number.style";
import useControllers from "controllers";
import {
  StyledDescripcionFactores,
  StyledDescriptionReferences,
  StyledTitleFactores,
  StyledTitleReferences,
} from "../Heridas/heridas.responsive.styles";

const Hemorroides = () => {
  const {
    StyledTerapeuticNumberSection,
    StyledTitulo,
    StyledTitulo1,
    StyledTerapeuticNumberSection1,
    StyledTitleSection2,
    StyledDescriptionSection2,
    StyledImage,
    StyledImage1,
  } = useTerapeuticNumberStyles();

  const { useScreenHooks } = useControllers();
  const { useTerapeuticNumber } = useScreenHooks();
  const { useHeridas } = useTerapeuticNumber();
  const { woundsAssets } = useHeridas();

  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <React.Fragment>
      {woundsAssets.hemorroidal_banner_1 && (
        <React.Fragment>
          <StyledImage
            src={woundsAssets.hemorroidal_banner_1.content}
            alt={woundsAssets.hemorroidal_banner_1.alt}
          />

          {/* banner section */}
          <StyledTerapeuticNumberSection
            style={{ backgroundSize: "109% 101%" }}
            background={woundsAssets.hemorroidal_background_1.content}
          >
            <Container>
              <Grid item lg={12} className="text-center">
                {width > 1024 ? (
                  <StyledTitulo
                    style={{
                      marginTop: "0%",
                      marginLeft: "4%",
                      fontSize: "40px",
                      fontFamily: "Montserrat, bold",
                    }}
                  >
                    Enfermedad hemorroidal
                  </StyledTitulo>
                ) : (
                  <StyledTitleFactores className="text-center">
                    Enfermedad hemorroidal
                  </StyledTitleFactores>
                )}
              </Grid>
              <Grid item lg={12} className="xl:text-center lg:text-center">
                {width > 1024 ? (
                  <StyledTitulo1
                    style={{
                      lineHeight: "1",
                      fontSize: "17px",
                      padding: "2px 145px",
                      fontFamily: "Montserrat, medium",
                      color: "#666666",
                    }}
                  >
                    {woundsAssets.hemorroidal_text_1.content}
                  </StyledTitulo1>
                ) : (
                  <StyledDescripcionFactores>
                    {woundsAssets.hemorroidal_text_1.content}
                  </StyledDescripcionFactores>
                )}
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection>
          {/* banner section */}
          <StyledTerapeuticNumberSection1
            background={
              woundsAssets.hemorroidal_background_p &&
              woundsAssets.hemorroidal_background_p.content
            }
          >
            <Container>
              <Grid item lg={12}>
                <Grid container>
                  {_.map(
                    woundsAssets.hemorroidal_content,
                    (item: any, index: any) => {
                      if (width >= 1024) {
                        if (index % 2 === 0) {
                          return (
                            <React.Fragment>
                              <Grid item md={6} className="mt-12">
                                <Grid item lg={12}>
                                  <StyledTitleSection2
                                    style={{
                                      marginTop: "0%",
                                      marginLeft: "0%",
                                      fontSize: "25px",
                                      fontFamily: "Montserrat, bold",
                                      marginBottom: "3%",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {item.title}
                                  </StyledTitleSection2>
                                </Grid>
                                <Grid item lg={12}>
                                  <StyledDescriptionSection2
                                    style={{
                                      marginTop: "0%",
                                      marginLeft: "0%",
                                      fontSize: "17px",
                                      fontFamily: "Montserrat, medium",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {item.description}
                                  </StyledDescriptionSection2>
                                </Grid>
                              </Grid>
                              <Grid
                                item
                                md={6}
                                className="flex justify-end mt-12"
                              >
                                <StyledImage1
                                  src={item.image}
                                  alt="image-terapeutic-number"
                                  className="ml-6"
                                  style={{ width: "100%" }}
                                />
                              </Grid>
                            </React.Fragment>
                          );
                        } else {
                          return (
                            <React.Fragment>
                              <Grid
                                item
                                lg={6}
                                key={index}
                                className="flex justify-center items-center mt-12"
                              >
                                <StyledImage1
                                  src={item.image}
                                  alt="image-terapeutic-number"
                                  className="mr-6"
                                />
                              </Grid>
                              <Grid item lg={6} className="mt-12">
                                <Grid item lg={12} className="mt-2">
                                  <StyledTitleSection2
                                    style={{
                                      marginTop: "0%",
                                      marginLeft: "0%",
                                      fontSize: "25px",
                                      fontFamily: "Montserrat, bold",
                                      marginBottom: "3%",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {item.title}
                                  </StyledTitleSection2>
                                </Grid>
                                <Grid item lg={12} className="mt-4">
                                  <StyledDescriptionSection2
                                    style={{
                                      marginTop: "0%",
                                      marginLeft: "0%",
                                      fontSize: "17px",
                                      fontFamily: "Montserrat, medium",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {item.description}
                                  </StyledDescriptionSection2>
                                </Grid>
                              </Grid>
                            </React.Fragment>
                          );
                        }
                      } else {
                        return (
                          <React.Fragment>
                            <Grid item lg={12} className="xl:mt-12 lg:mt-12 mt-6">
                              <Grid item lg={12}>
                                <Grid
                                  item
                                  lg={12}
                                  sm={12}
                                  xs={12}
                                  className="flex justify-center xl:mt-12 lg:mt-12"
                                >
                                  <StyledImage1
                                    src={item.image}
                                    alt="image-terapeutic-number"
                                  />
                                </Grid>
                                <StyledTitleFactores>
                                  {item.title}
                                </StyledTitleFactores>
                              </Grid>
                              <Grid item lg={12}>
                                <StyledDescripcionFactores>
                                  {item.description}
                                </StyledDescripcionFactores>
                              </Grid>
                            </Grid>
                          </React.Fragment>
                        );
                      }
                    }
                  )}
                </Grid>
              </Grid>
            </Container>
          </StyledTerapeuticNumberSection1>

          {/* REFERENCIAS */}
          {woundsAssets.hemorroidal_background_referencias !== undefined && (
            <div
              style={{
                background: "#005D93",
                marginLeft: "0.1%",
                marginRight: "0px",
                marginTop: "3%",
                height: "4.8%",
              }}
              className="xl:py-16 lg:py-16 py-8"
            >
              <Container maxWidth="lg">
                <StyledTitleReferences className="xl:pb-12 lg:pb-12 pb-6 text-center text-white">
                  Referencias:
                </StyledTitleReferences>
              </Container>
              <StyledDescriptionReferences
                dangerouslySetInnerHTML={{
                  __html:
                    woundsAssets.hemorroidal_background_referencias.content,
                }}
                className="text-white text-xs"
              ></StyledDescriptionReferences>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Hemorroides;
