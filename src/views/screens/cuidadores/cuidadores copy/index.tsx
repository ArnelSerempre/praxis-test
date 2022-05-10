import { Container, Grid, Tab, Box } from "@mui/material";
import useControllers from "controllers";
import React, { useState } from "react";
import useCuidadoresStyles from "../cuidadores.styles";
import _ from "lodash";
import TabPanel from "@mui/lab/TabPanel";
import { TabContext, TabList } from "@mui/lab";
import "styles/styles.scss";
import {
  StyledImageGeneral,
  StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";
import {
  StyledDescripcionFactores,
  StyledTitleFactores,
  StyledTitleReferences,
  StyledWounds1Image,
} from "views/screens/terapeutic-number/Heridas/heridas.responsive.styles";
import { Modal } from "@mui/material";
import { Button } from "@mui/material";

const TuPapel = () => {
  // Styles
  const { StyledImage, StyledSectionBlue, StyledTitulo, StyledTitulo1 } =
    useCuidadoresStyles();

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();
  const { cuidadores } = products;

  const data: any[] = [
    "Cuidador Formal",
    "Cuidador Informal",
    "Cuidador Principal",
    "Cuidador Secundario",
  ];

  // States
  const [value, setValue] = React.useState<string>("0");

  // Changes
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <React.Fragment>
      {cuidadores !== undefined && (
        <React.Fragment>
          {/* Banner */}
          <StyledImage
            src={cuidadores.principal.content}
            alt={cuidadores.principal.alt}
          />
          {/* Banner */}

          {/* sefundo banner */}
          {cuidadores.banner_principal !== undefined && (
            <React.Fragment>
              {width > 1024 ? (
                <StyledSubtitle
                  style={{
                    textAlign: "center",
                    fontFamily: "montserrat, bold",
                    fontSize: "45.8px",
                    marginLeft: "7.5%",
                    marginTop: "2.1%",
                  }}
                >
                  Tu papel
                </StyledSubtitle>
              ) : (
                <React.Fragment>
                  <StyledTitleFactores className="d-flex justify-center">
                    Tu papel
                  </StyledTitleFactores>
                  <StyledWounds1Image
                    src={cuidadores.banner_principal.content}
                    alt={cuidadores.banner_principal.alt}
                  />
                </React.Fragment>
              )}
              <Grid item md={6}>
                {width > 1024 ? (
                  <StyledSubtitle
                    style={{
                      textAlign: "center",
                      fontFamily: "Montserrat, bold",
                      fontSize: "25px",
                      marginLeft: "-57.4%",
                      marginTop: "1.5%",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: cuidadores.papel_1.content.split("--")[0],
                    }}
                  ></StyledSubtitle>
                ) : (
                  <StyledTitleFactores
                    style={{ margin: "4% 5%" }}
                    dangerouslySetInnerHTML={{
                      __html: cuidadores.papel_1.content.split("--")[0],
                    }}
                  ></StyledTitleFactores>
                )}
                {width > 1024 ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: cuidadores.papel_1.content.split("--")[1],
                    }}
                    className=""
                    style={{
                      marginTop: "-1.9%",
                      marginLeft: "6.9%",
                      fontFamily: "Montserrat, medium",
                      color: "#666666",
                      fontSize: "17px",
                      width: "48%",
                      fontWeight: "500",
                    }}
                  ></p>
                ) : (
                  <StyledDescripcionFactores
                    style={{ margin: "4% 5%" }}
                    dangerouslySetInnerHTML={{
                      __html: cuidadores.papel_1.content.split("--")[1],
                    }}
                  ></StyledDescripcionFactores>
                )}
              </Grid>
              {width > 1024 && (
                <Grid container>
                  <Grid item md={6}>
                    <img
                      src={cuidadores.banner_principal.content}
                      alt={cuidadores.banner_principal.alt}
                      style={{
                        marginTop: "-48.4%",
                        marginLeft: "100.2%",
                        // height: "439px",
                      }}
                    />
                  </Grid>
                </Grid>
              )}
            </React.Fragment>
          )}
          {/* sefundo banner */}

          {/* clasificadores cuidadores  */}
          {/* <StyledSection
            background={cuidadores.aliados_background_1.content}
            style={{ backgroundSize: "50% 100%" }}
          > */}
          <Container style={{ marginTop: "2%" }}>
            {width > 1024 ? (
              <React.Fragment>
                <StyledTitulo
                  style={{
                    fontSize: "25px",
                    fontFamily: "montserrat, bold",
                    marginTop: "3.6%",
                    paddingBottom: "0%",
                    marginLeft: "5%",
                  }}
                >
                  {cuidadores.title_clasification.content}
                </StyledTitulo>

                <StyledTitulo1
                  style={{
                    marginTop: "0.1%",
                    marginLeft: "4.9%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                >
                  {cuidadores.text_clasification.content}
                </StyledTitulo1>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StyledTitleFactores style={{ margin: "4% 0%" }}>
                  {cuidadores.title_clasification.content}
                </StyledTitleFactores>
                <StyledDescripcionFactores style={{ margin: "4% 0%" }}>
                  {cuidadores.text_clasification.content}
                </StyledDescripcionFactores>
              </React.Fragment>
            )}

            <Grid item md={12} className="pt-8">
              <div className="cuadroazul">
                <Box sx={{ typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        {_.map(data, (item: any, index: number) => (
                          <Tab
                            style={{ textTransform: "capitalize" }}
                            className="mr-1 tad-cuidadores"
                            label={item}
                            value={index.toString()}
                          />
                        ))}
                      </TabList>
                    </Box>
                    {_.map(cuidadores.tultis, (item: any, index: number) => (
                      <TabPanel value={index.toString()}>
                        <img
                          src={item.content}
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </TabPanel>
                    ))}
                  </TabContext>
                </Box>
              </div>
            </Grid>
          </Container>
          {/* </StyledSection> */}

          {/* por que se cuida */}
          <Container>
            {width > 1024 ? (
              <React.Fragment>
                <StyledTitulo
                  className=""
                  style={{
                    fontSize: "25px",
                    fontFamily: "montserrat, bold",
                    marginTop: "5.4%",
                    paddingBottom: "0%",
                    marginLeft: "5%",
                  }}
                >
                  {cuidadores.title_why.content}
                </StyledTitulo>

                <StyledTitulo1
                  style={{
                    marginTop: "-1.7%",
                    marginLeft: "5%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: "17px",
                    fontWeight: "500",
                    paddingBottom: "3%",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.text_why.content,
                  }}
                ></StyledTitulo1>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StyledTitleFactores style={{ margin: "4% 0" }}>
                  {cuidadores.title_why.content}
                </StyledTitleFactores>
                <StyledDescripcionFactores
                  style={{ margin: "4% 0" }}
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.text_why.content,
                  }}
                ></StyledDescripcionFactores>
              </React.Fragment>
            )}
            {/* por que se cuida */}
            {/* necesidades cuidador */}
            {width > 1024 ? (
              <React.Fragment>
                <StyledTitulo
                  className=""
                  style={{
                    fontSize: "25px",
                    fontFamily: "montserrat, bold",
                    marginTop: "1.4%",
                    paddingBottom: "0%",
                    marginLeft: "5%",
                  }}
                >
                  {cuidadores.aliados_titulo_3.content}
                </StyledTitulo>

                <StyledTitulo1
                  style={{
                    marginTop: "-1.7%",
                    marginLeft: "5%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: "17px",
                    fontWeight: "500",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.aliados_texto_3.content,
                  }}
                ></StyledTitulo1>

                <StyledImageGeneral
                  src={cuidadores.aliados_imagen_2.content}
                  alt={cuidadores.aliados_imagen_2.alt}
                  style={{ width: "81%", marginLeft: "11.6%", marginTop: "3%" }}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StyledTitleFactores style={{ margin: "4% 0" }}>
                  {cuidadores.aliados_titulo_3.content}
                </StyledTitleFactores>
                <StyledDescripcionFactores
                  style={{ margin: "4% 0" }}
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.aliados_texto_3.content,
                  }}
                ></StyledDescripcionFactores>
                <StyledWounds1Image
                  src={cuidadores.pacientes_cuidadores_responsive.content}
                  alt={cuidadores.pacientes_cuidadores_responsive.alt}
                  onClick={handleOpen}
                />
              </React.Fragment>
            )}
            {/* necesidades cuidador */}

            {/* SOBRECARGA */}
            {width > 1024 ? (
              <React.Fragment>
                <StyledTitulo
                  className=""
                  style={{
                    fontSize: "25px",
                    fontFamily: "montserrat, bold",
                    marginTop: "5.7%",
                    paddingBottom: "0%",
                    marginLeft: "5%",
                  }}
                >
                  {cuidadores.aliados_titulo_4.content}
                </StyledTitulo>

                <StyledTitulo1
                  style={{
                    marginTop: "-1.1%",
                    marginLeft: "5%",
                    fontFamily: "Montserrat, medium",
                    color: "#666666",
                    fontSize: "17px",
                    fontWeight: "500",
                    lineHeight: "1.2",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.aliados_texto_4.content,
                  }}
                ></StyledTitulo1>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <StyledTitleFactores style={{ margin: "4% 0" }}>
                  {cuidadores.aliados_titulo_4.content}
                </StyledTitleFactores>

                <StyledDescripcionFactores
                  style={{ margin: "4% 0" }}
                  dangerouslySetInnerHTML={{
                    __html: cuidadores.aliados_texto_4.content,
                  }}
                ></StyledDescripcionFactores>
              </React.Fragment>
            )}

            {/* SOBRECARGA */}
          </Container>

          {/* disminuir sobrecarga */}
          {width > 1024 ? (
            <React.Fragment>
              <StyledSectionBlue className="mt-12">
                <Container>
                  <StyledTitulo
                    className="mt-5"
                    style={{
                      color: "#fff",
                      fontSize: "25px",
                      fontFamily: "montserrat, bold",
                      marginTop: "5.7%",
                      paddingBottom: "0%",
                      marginLeft: "5%",
                    }}
                  >
                    {cuidadores.aliados_titulo_5.content}
                  </StyledTitulo>
                  <StyledImageGeneral
                    src={cuidadores.aliados_imagen_3.content}
                    alt={cuidadores.aliados_imagen_3.alt}
                    style={{ width: "100%" }}
                  />
                  <StyledImageGeneral
                    src={cuidadores.aliados_imagen_4.content}
                    alt={cuidadores.aliados_imagen_4.alt}
                    style={{ width: "100%" }}
                  />
                  <StyledImageGeneral
                    src={cuidadores.aliados_imagen_5.content}
                    alt={cuidadores.aliados_imagen_5.alt}
                    style={{ width: "100%" }}
                  />
                </Container>
                {/* disminuir sobrecarga */}
              </StyledSectionBlue>
            </React.Fragment>
          ) : (
            <StyledSectionBlue className="xl:mt-12 lg:mt-12">
              <Container>
                <StyledTitleReferences className="text-white mb-6">
                  {cuidadores.aliados_titulo_5.content}
                </StyledTitleReferences>
                <StyledImageGeneral
                  src={cuidadores.cuidador_responsive_disminuir.content}
                  alt={cuidadores.cuidador_responsive_disminuir.alt}
                  style={{ width: "100%" }}
                />
              </Container>
              {/* disminuir sobrecarga */}
            </StyledSectionBlue>
          )}
        </React.Fragment>
      )}
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "100%" }}>
          {/* <h2 id="child-modal-title">Gira tu pantalla</h2> */}
          <Grid item xs={12} sm={12} md={12} className="d-flex justify-center">
            <img
              src={
                "http://api-praxis.eml.com.co/wp-content/uploads/2022/04/modal1.png"
              }
              alt={cuidadores && cuidadores.pacientes_cuidadores_responsive.alt}
              style={{ width: "65%" }}
            />
          </Grid>

          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default TuPapel;
