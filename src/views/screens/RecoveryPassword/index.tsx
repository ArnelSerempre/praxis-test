import { Container, Grid, TextField } from "@mui/material";
import React, { FC, useState } from "react";
import useRecoveryStyles from "./recovery.styles";

const RecoveryPassword: FC = (): JSX.Element => {
  const { StyledImage, StyledTitle, StyledSection, StyledButton } =
    useRecoveryStyles();

  // States
  const [width, setWidth] = useState<number>(window.innerWidth);

  // Listeners
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <React.Fragment>
      {width >= 1200 ? (
        <StyledSection
          background="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/imagen_inicio_sesion.png"
          style={{ height: "50.7rem" }}
        >
          <Container>
            <Grid container>
              <Grid
                item
                lg={6}
                md={12}
                className="flex justify-center items-center"
              >
                <Grid item lg={12} className="flex justify-center">
                  <StyledImage src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/flex_logo_fondo.png" />
                </Grid>
              </Grid>
              <Grid item lg={6} className="flex justify-center w-full">
                <Grid item md={12}>
                  <Grid md={12} className="pb-12 sm:pb-12">
                    <StyledTitle>Recuperar contraseña</StyledTitle>
                  </Grid>
                  <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                    <TextField
                      placeholder="Correo Electronico"
                      className="w-full md:w-9/12"
                      label="Correo Electronico"
                      type="email"
                    />
                  </Grid>
                  <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                    <TextField
                      placeholder="Contraseña"
                      className="w-full md:w-9/12"
                      type="password"
                      label="Contraseña"
                    />
                  </Grid>
                  <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                    <TextField
                      placeholder="Confirmar Contraseña"
                      className="w-full md:w-9/12"
                      type="password"
                      label="Confirmar Contraseña"
                    />
                  </Grid>
                  <Grid
                    lg={12}
                    className="gap-4 py-6 sm:pb-6 flex justify-center"
                  >
                    <StyledButton>Guardar</StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </StyledSection>
      ) : (
        <React.Fragment>
          <StyledSection background="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/fondo_iciio_responsive.png">
            <Container>
              <Grid item md={12} xs={12} className="pt-12">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  className="d-flex justify-center mb-12"
                >
                  <img
                    src={
                      "http://api-praxis.eml.com.co/wp-content/uploads/2022/04/praxis_responsive.png"
                    }
                    alt=""
                    width="200"
                  />
                </Grid>
                <Grid md={12} className="pb-12 sm:pb-12">
                  <StyledTitle
                    className="text-center"
                    style={{ fontSize: "24px" }}
                  >
                    Recuperar contraseña
                  </StyledTitle>
                </Grid>
                <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                  <TextField
                    placeholder="Correo Electronico"
                    className="w-full md:w-9/12"
                    label="Correo Electronico"
                    type="email"
                  />
                </Grid>
                <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                  <TextField
                    placeholder="Contraseña"
                    className="w-full md:w-9/12"
                    type="password"
                    label="Contraseña"
                  />
                </Grid>
                <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                  <TextField
                    placeholder="Confirmar Contraseña"
                    className="w-full md:w-9/12"
                    type="password"
                    label="Confirmar Contraseña"
                  />
                </Grid>
                <Grid
                  lg={12}
                  className="gap-4 py-6 sm:pb-6 flex justify-center"
                >
                  <StyledButton>Guardar</StyledButton>
                </Grid>
              </Grid>
              <Grid item md={12} xs={12} className="flex justify-center py-12">
                <StyledImage src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/logosingresos.png" />
              </Grid>
            </Container>
          </StyledSection>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RecoveryPassword;
