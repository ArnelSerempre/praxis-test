import {
  Alert,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { FC, useState } from "react";
import useLoginStyles from "./login.styles";
import { Link } from "react-router-dom";
import useControllers from "controllers";
import { StyledTitleFactores } from "../terapeutic-number/Heridas/heridas.responsive.styles";
// import { StyledContainer } from "../Home/home.styles";

const Login: FC<{
  background: string;
  show: boolean;
  logo?: string;
  height?: string;
}> = (background): JSX.Element => {
  const {
    StyledImage,
    StyledTitle,
    StyledSection,
    StyledButton,
    StyledDescription,
  } = useLoginStyles();

  // States
  const [width, setWidth] = useState<number>(window.innerWidth);

  // Listeners
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useAuth } = useScreenHooks();
  const {
    open,
    handleSubmit,
    handleLogin,
    register,
    variant,
    text,
    handleClose,
  } = useAuth();

  console.log(background.logo);

  return (
    <React.Fragment>
      {/* <StyledContainer maxWidth="lg"> */}
      {width >= 1200 ? (
        <StyledSection
          isEpiprot={background.background && true}
          background={
            background.background !== undefined
              ? background.background
              : "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/imagen_inicio_sesion.png"
          }
          style={{
            height: background.height ? background.height : "47.6rem",
            paddingTop: background.height ? "4%" : "",
          }}
        >
          <Container>
            <Grid container>
              <Grid
                item
                lg={6}
                md={12}
                className="flex justify-center pb-12 sm:pb-1"
              >
                {!background.show && (
                  <StyledImage
                    src={
                      background.logo !== undefined
                        ? background.logo
                        : "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/flex_logo_fondo.png"
                    }
                  />
                )}

                {background.logo && (
                  <StyledImage
                    src={
                      background.logo !== undefined
                        ? background.logo
                        : "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/pharmaceutical_praxis_1.png"
                    }
                    style={{ marginLeft: "41%" }}
                  />
                )}
              </Grid>
              <Grid item lg={6} className="flex justify-center w-full">
                <Grid item md={12}>
                  <Grid md={12} className="pb-12 sm:pb-12">
                    <StyledTitle>Ingreso</StyledTitle>
                  </Grid>
                  <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                    <TextField
                      {...register("email")}
                      placeholder="Correo Electrónico"
                      className="w-full md:w-9/12"
                      label="Correo Electrónico"
                    />
                  </Grid>
                  <Grid md={12} className="pb-1 sm:pb-1 flex justify-center">
                    <TextField
                      {...register("password")}
                      placeholder="Contraseña"
                      className="w-full md:w-9/12"
                      type="password"
                      label="Contraseña"
                    />
                  </Grid>
                  <Grid lg={12} className="pb-6 sm:pb-6 flex justify-center">
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Recordar mis datos"
                      style={{
                        color: "#666666",
                        fontFamily: "'Montserrat', sans-serif !important",
                      }}
                    />
                  </Grid>
                  <Grid
                    lg={12}
                    className="gap-4 pb-6 sm:pb-6 flex justify-center"
                  >
                    <StyledButton onClick={handleSubmit(handleLogin)}>
                      Iniciar
                    </StyledButton>
                    <Link to="/register">
                      <StyledButton>Registrarse</StyledButton>
                    </Link>
                  </Grid>
                  <Grid lg={12} className="gap-4 flex justify-center">
                    <Link to="/recovery-password">
                      <StyledDescription>
                        Recuperar Contraseña
                      </StyledDescription>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </StyledSection>
      ) : (
        <React.Fragment>
          <StyledSection
            background="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/fondo_iciio_responsive.png"
            style={{
              marginTop:
                background.height !== undefined
                  ? "0rem"
                  : window.location.pathname === "/profesionales/salud"
                  ? "6.5rem"
                  : "6.3rem",
            }}
          >
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
                <Grid md={12} className="pb-8 sm:pb-12">
                  <StyledTitleFactores
                    className="text-center"
                    style={{ fontSize: "24px" }}
                  >
                    Ingreso
                  </StyledTitleFactores>
                </Grid>
                <Grid lg={12} className="pb-4 sm:pb-4  flex justify-center">
                  <TextField
                    {...register("email")}
                    placeholder="Correo Electrónico"
                    className="w-full md:w-9/12"
                    label="Correo Electrónico"
                  />
                </Grid>
                <Grid md={12} className="pb-1 sm:pb-1 flex justify-center">
                  <TextField
                    {...register("password")}
                    placeholder="Contraseña"
                    className="w-full md:w-9/12"
                    type="password"
                    label="Contraseña"
                  />
                </Grid>
                <Grid lg={12} className="pb-6 sm:pb-6 flex justify-center">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Recordar mis datos"
                    style={{
                      color: "#666666",
                      fontFamily: "'Montserrat', sans-serif !important",
                    }}
                  />
                </Grid>
                <Grid
                  lg={12}
                  className="gap-4 pb-6 sm:pb-6 flex justify-center"
                >
                  <StyledButton onClick={handleSubmit(handleLogin)}>
                    Iniciar
                  </StyledButton>
                  <Link to="/register">
                    <StyledButton>Registrarse</StyledButton>
                  </Link>
                </Grid>
                <Grid lg={12} className="gap-4 flex justify-center">
                  <Link to="/recovery-password">
                    <StyledDescription>Recuperar Contraseña</StyledDescription>
                  </Link>
                </Grid>
              </Grid>
              <Grid item md={12} xs={12} className="flex justify-center py-12">
                <StyledImage src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/logosingresos.png" />
              </Grid>
            </Container>
          </StyledSection>
        </React.Fragment>
      )}
      {/* </StyledContainer> */}
      <Snackbar open={open} autoHideDuration={20000} onClose={handleClose}>
        <Alert severity={variant === "error" ? "error" : "success"}>
          {text}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Login;
