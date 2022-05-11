import React, { FC, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import {
  StyledContainerCopyright,
  StyledContainerFooter,
  StyledIframe,
  StyledSocialNetworksLogo,
  StyledSubtitleSection,
  StyledTextSection,
  StyledTitleSection,
  StyledTitlesFooter,
} from "./Footer.styles";
import useControllers from "controllers";

const Footer: FC = (): JSX.Element => {
  /** Controllers */
  const { useComponentsHooks } = useControllers();
  const { useFooter } = useComponentsHooks();
  const { width, launchListeners } = useFooter();

  /** Effects */
  useEffect(() => {
    launchListeners();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <React.Fragment>
        <StyledContainerFooter>
          <Container>
            <Grid item lg={12} className="flex justify-center">
              <StyledTitleSection>Contáctenos</StyledTitleSection>
            </Grid>
            {width >= 1024 ? (
              <Grid
                container
                className="pb-12 flex justify-center md:justify-start"
              >
                <Grid item lg={3}>
                  <Grid item lg={12} className="flex">
                    <StyledTitlesFooter className="mr-2">
                      Teléfono:
                    </StyledTitlesFooter>
                    <StyledTextSection className="text-lg">
                      601 756 60 06
                    </StyledTextSection>
                  </Grid>
                  <Grid item lg={12} className="flex ">
                    <StyledTitlesFooter className="mr-2">
                      Email:
                    </StyledTitlesFooter>
                    <StyledTextSection className="text-lg">
                      info@praxisph.com.co
                    </StyledTextSection>
                  </Grid>
                  <Grid item lg={12} className="flex justify-center mt-4">
                    <StyledTitlesFooter>Redes Sociales:</StyledTitlesFooter>
                  </Grid>
                  <Grid item lg={12} className="flex justify-center">
                    <StyledSocialNetworksLogo
                      src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/completo_linkeding.png"
                      alt="Contacto de Praxis Pharmaceutical"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/company/praxispharmaceuticalcalidaddevida",
                          "_blank"
                        )
                      }
                    />
                  </Grid>
                </Grid>
                <Grid item lg={6} className="text-center">
                  <StyledTextSection className="text-lg">
                    <b>Praxis Pharmaceutical Colombia Ltda</b>
                  </StyledTextSection>
                  <StyledTextSection>
                    <b style={{ marginLeft: "-11%", fontSize: "18px" }}>
                      Dirección:
                    </b>{" "}
                    Cr 12 A No. 83-75 OF 601
                  </StyledTextSection>
                </Grid>
                <Grid item lg={3} className="text-center">
                  <Grid item lg={12}>
                    <StyledTextSection>
                      <b style={{ marginLeft: "-67%", fontSize: "18px" }}>
                        Mapa
                      </b>
                    </StyledTextSection>
                  </Grid>
                  <Grid item lg={12}>
                    <StyledIframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5828012222146!2d-74.05592588482983!3d4.66822404323715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af52dec6a73%3A0x18e213c905f55ad9!2sCra.%2012a%20%2383-75%2C%20Localidad%20de%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1652236416680!5m2!1sen!2sco"
                      loading="lazy"
                    ></StyledIframe>
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              //**version movil */
              <Grid
                container
                className="pb-12 flex justify-center md:justify-start "
              >
                <Grid item md={6} lg={12} xs={12} sm={12}>
                  <StyledSubtitleSection
                    className="text-center"
                    style={{
                      marginLeft: width > 820 ? "30%" : "0%",
                      marginTop: width > 820 ? "-3%" : "-3%",
                    }}
                  >
                    Redes Sociales:
                  </StyledSubtitleSection>
                  <Grid item lg={12} className="flex justify-center">
                    <a
                      href="https://www.linkedin.com/company/praxispharmaceuticalcalidaddevida"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        style={{
                          marginTop: "2%",
                          marginLeft: width > 820 ? "79%" : "30%",
                          width: width <= 600 ? "40%" : "48%",
                          marginBottom: width <= 820 ? "10.5%" : "0%",
                        }}
                        src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/completo_linkeding.png"
                        alt="linkeding"
                      />
                    </a>
                  </Grid>
                </Grid>
                <Grid item md={6} lg={12} xs={12} sm={12}>
                  <StyledTextSection>
                    <b>Praxis Pharmaceutical Colombia Ltda</b>
                  </StyledTextSection>
                  {/* <br /> */}
                  <StyledTextSection>
                    <b>Dirección:</b> Cr 12 A No. 83-75 OF 601
                  </StyledTextSection>
                  <StyledTextSection>
                    <b>Teléfono:</b> 601 756 60 06
                  </StyledTextSection>
                  {/* <br />s */}
                  <StyledTextSection>
                    <b>Email:</b> info@praxisph.com.co
                  </StyledTextSection>
                </Grid>
                <Grid item  md={6} lg={12} xs={12} sm={12} className="mt-4 flex justify-center">
                    <StyledIframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5828012222146!2d-74.05592588482983!3d4.66822404323715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af52dec6a73%3A0x18e213c905f55ad9!2sCra.%2012a%20%2383-75%2C%20Localidad%20de%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1652236416680!5m2!1sen!2sco"
                      loading="lazy"
                    ></StyledIframe>
                  </Grid>
              </Grid>
            )}
          </Container>
        </StyledContainerFooter>
        <StyledContainerCopyright>
          <span>
            Copyright {new Date().getFullYear()} &copy; Praxis Pharmaceutical
          </span>
        </StyledContainerCopyright>
      </React.Fragment>
    </React.Fragment>
  );
};

export default Footer;
