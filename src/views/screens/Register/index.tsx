import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React, { FC, useState } from "react";
import useLoginStyles from "./register.styles";
import useControllers from "controllers";
import { Controller } from "react-hook-form";
import { StyledTitleFactores } from "../terapeutic-number/Heridas/heridas.responsive.styles";
import { Modal } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

// import { StyledContainer } from "../Home/home.styles";

const Register: FC = (): JSX.Element => {
  const {
    StyledImage,
    StyledTitle,
    StyledSection,
    StyledButton,
    StyledSelect,
  } = useLoginStyles();

  // States
  const [width, setWidth] = useState<number>(window.innerWidth);

  // Listeners
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  // Controllers
  const { useScreenHooks } = useControllers();
  const { useAuth } = useScreenHooks();
  const { handleRegister, registerRegister, handleSubmitRegister, profession } =
    useAuth();
  const [open, setOpen] = React.useState(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width >= 1024 ? "70%" : "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    height: width >= 1024 ? "80%" : "60%",
    fontFamily: "Montserrat,sans-serif",
    color: "#004289",
  };

  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      {/* <StyledContainer maxWidth="lg"> */}
      {width >= 1200 ? (
        <StyledSection
          background="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/portal_colo.png"
          style={{ height: "60.7rem", marginBottom: "-4%" }}
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
                  {/* <StyledImage src="http://api-praxis.test/wp-content/uploads/2022/03/registro-1.png" /> */}
                </Grid>
              </Grid>
              <Grid item lg={6} className="flex justify-center w-full">
                <Grid item md={12}>
                  <Grid md={12} className="pb-12 sm:pb-12">
                    <StyledTitle>Registro</StyledTitle>
                  </Grid>
                  <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                    <Controller
                      control={registerRegister}
                      name="username"
                      render={({ field }) => (
                        <TextField
                          placeholder="Usuario"
                          className="w-full md:w-9/12"
                          label="Usuario"
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                    <Controller
                      control={registerRegister}
                      name="name"
                      render={({ field }) => (
                        <TextField
                          placeholder="Nombres"
                          className="w-full   md:w-9/12"
                          label="Nombres"
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                    <Controller
                      control={registerRegister}
                      name="last_name"
                      render={({ field }) => (
                        <TextField
                          placeholder="Apellidos"
                          className="w-full md:w-9/12"
                          label="Apellidos"
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                    <Controller
                      control={registerRegister}
                      name="phone"
                      render={({ field }) => (
                        <TextField
                          placeholder="Telefono"
                          className="w-full md:w-9/12"
                          label="Telefono"
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                    <Controller
                      control={registerRegister}
                      name="email"
                      render={({ field }) => (
                        <TextField
                          placeholder="Correo Electronico"
                          className="w-full md:w-9/12"
                          label="Correo Electronico"
                          type="email"
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                    <Controller
                      control={registerRegister}
                      name="password"
                      render={({ field }) => (
                        <TextField
                          placeholder="Contraseña"
                          className="w-full md:w-9/12"
                          type="password"
                          label="Contraseña"
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                  <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                    <Controller
                      control={registerRegister}
                      name="profesion"
                      render={({ field }) => (
                        <StyledSelect
                          placeholder="Profesion"
                          options={profession}
                          style={{ background: "transparent" }}
                          {...field}
                        />
                      )}
                    />
                  </Grid>

                  {/* Modal */}
                  <Grid>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <div className="flex justify-between mb-2">
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Tratamiento de datos
                          </Typography>
                          <Typography
                            onClick={handleClose}
                            style={{ float: "right", cursor: "pointer" }}
                          >
                            X
                          </Typography>
                        </div>
                        <Typography id="modal-modal-description"></Typography>
                        <iframe
                          width="100%"
                          height={width >= 1024 ? "90%" : "80%"}
                          title="pdf1"
                          src={
                            "https://praxispharmaceutical.com.co/Politica-tratamiento-de-datos-Consolidado.pdf"
                          }
                        ></iframe>
                      </Box>
                    </Modal>
                  </Grid>
                  {/* Modal */}

                  <Grid lg={12} className="flex justify-center">
                    <FormControlLabel
                      onClick={() => setOpen(true)}
                      control={<Checkbox checked={open === false}/>}
                      label="Acepta Política de manejo de datos. Política de privacidad. Términos y condiciones"
                      style={{
                        color: "#666666",
                        fontFamily: "'Montserrat', sans-serif !important",
                      }}
                    />
                  </Grid>
                  <Grid
                    lg={12}
                    className="gap-4 py-6 sm:pb-6 flex justify-center"
                  >
                    <StyledButton
                      onClick={handleSubmitRegister(handleRegister)}
                    >
                      Registrarse
                    </StyledButton>
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
            style={{ marginTop: "5.9rem" }}
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
                <Grid md={12} className="pb-12 sm:pb-12">
                  <StyledTitleFactores
                    className="text-center"
                    style={{ fontSize: "24px" }}
                  >
                    Registro
                  </StyledTitleFactores>
                </Grid>
                <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                  <Controller
                    control={registerRegister}
                    name="username"
                    render={({ field }) => (
                      <TextField
                        placeholder="Usuario"
                        className="w-full md:w-9/12"
                        label="Usuario"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                  <Controller
                    control={registerRegister}
                    name="name"
                    render={({ field }) => (
                      <TextField
                        placeholder="Nombres"
                        className="w-full md:w-9/12"
                        label="Nombres"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid lg={12} className="pb-4 sm:pb-4 flex justify-center">
                  <Controller
                    control={registerRegister}
                    name="last_name"
                    render={({ field }) => (
                      <TextField
                        placeholder="Apellidos"
                        className="w-full md:w-9/12"
                        label="Apellidos"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                  <Controller
                    control={registerRegister}
                    name="phone"
                    render={({ field }) => (
                      <TextField
                        placeholder="Telefono"
                        className="w-full md:w-9/12"
                        label="Telefono"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                  <Controller
                    control={registerRegister}
                    name="email"
                    render={({ field }) => (
                      <TextField
                        placeholder="Correo Electronico"
                        className="w-full md:w-9/12"
                        label="Correo Electronico"
                        type="email"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                  <Controller
                    control={registerRegister}
                    name="password"
                    render={({ field }) => (
                      <TextField
                        placeholder="Contraseña"
                        className="w-full md:w-9/12"
                        type="password"
                        label="Contraseña"
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid md={12} className="pb-4 sm:pb-4 flex justify-center">
                  <Controller
                    control={registerRegister}
                    name="profesion"
                    render={({ field }) => (
                      <StyledSelect
                        placeholder="Profesion"
                        options={profession}
                        className="md:w-9/12"
                        style={{ background: "transparent" }}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                {/* Modal */}
                <Grid>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                    <div className="flex justify-between mb-2">
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Tratamiento de datos
                          </Typography>
                          <Typography
                            onClick={handleClose}
                            style={{ float: "right", cursor: "pointer" }}
                          >
                            X
                          </Typography>
                        </div>
                      <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                      ></Typography>
                      <iframe
                        width="100%"
                        height="90%"
                        title="pdf2"
                        src={
                          "https://praxispharmaceutical.com.co/Politica-tratamiento-de-datos-Consolidado.pdf"
                        }
                      ></iframe>
                    </Box>
                  </Modal>
                </Grid>
                {/* Modal */}
                <Grid lg={12} className="flex justify-center">
                  <FormControlLabel
                    onClick={() => setOpen(true)}
                    control={<Checkbox />}
                    label="Acepta Política de manejo de datos. Política de privacidad. Términos y condiciones"
                    style={{
                      color: "#666666",
                      fontFamily: "'Montserrat', sans-serif !important",
                    }}
                  />
                </Grid>
                <Grid
                  lg={12}
                  className="gap-4 py-6 sm:pb-6 flex justify-center"
                >
                  <StyledButton onClick={handleSubmitRegister(handleRegister)}>
                    Registrarse
                  </StyledButton>
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
    </React.Fragment>
  );
};

export default Register;
