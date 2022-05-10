import React, { FC, useState } from "react";
import useFooterStyles from "./footer.style";
import { Container, Grid } from "@mui/material";

const Footer: FC = (): JSX.Element => {
  const {
    StyledContainerCopyright,
    StyledContainerFooter,
    StyledTitleSection,
    StyledSubtitleSection,
    StyledTextSection,
  } = useFooterStyles();

  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

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
                  <StyledSubtitleSection style={{ fontSize: "20px" }}>Redes Sociales:</StyledSubtitleSection>
                  <Grid item lg={12} className="flex justify-center">
                    <a href="https://www.linkedin.com/company/praxispharmaceuticalcalidaddevida" target="_blank" rel="noreferrer">
                      <img
                        style={{ marginLeft: "-20%", marginTop: "4%", width: "65% "}}
                        src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/completo_linkeding.png"
                        alt="Contacto de Praxis Pharmaceutical"
                      />
                    </a>
                  </Grid>
                </Grid>
                <Grid item lg={5} className="text-center">
                  <StyledTextSection style={{ fontSize: "19px" }}>
                    <b>Praxis Pharmaceutical Colombia Ltda</b>
                  </StyledTextSection>
                  <StyledTextSection>
                    <b style={{ marginLeft: "-7%", fontSize: "19px" }}>Dirección:</b> Cr 12 A No. 83-75 OF 601
                  </StyledTextSection>
                  <StyledTextSection>
                    <b style={{ marginLeft: "-67%", fontSize: "19px" }}>Mapa</b>
                  </StyledTextSection>
                </Grid>
                <Grid item lg={4} className="text-center">
                  <StyledTextSection style={{ fontSize: "19px" }}>
                    <b>Teléfono:</b> 601 756 60 06
                  </StyledTextSection>
                  <StyledTextSection>
                    <b style={{ marginLeft: "17%", fontSize: "19px" }}>Email:</b> info@praxisph.com.co
                  </StyledTextSection>
                </Grid>
              </Grid>
            ) : (

            //**version movil */
              <Grid
                container
                className="pb-12 flex justify-center md:justify-start "
              >
                <Grid item md={6} lg={12} xs={12} sm={12}>
                  <StyledSubtitleSection className="text-center" style={{ marginLeft: width > 820 ? "30%" : '0%', marginTop: width > 820 ?  "-3%" : '-3%'  }}>
                    Redes Sociales:
                  </StyledSubtitleSection>
                  <Grid item lg={12} className="flex justify-center">
                  <a href="https://www.linkedin.com/company/praxispharmaceuticalcalidaddevida" target="_blank" rel="noreferrer">
                  <img
                      style={{ marginTop: "2%", marginLeft: width > 820 ? "79%" : '30%', width:  width <= 600 ? "40%" : '48%', marginBottom: width <= 820 ? "10.5%" : '0%' }}
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
