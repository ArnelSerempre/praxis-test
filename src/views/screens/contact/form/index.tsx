import { Alert, Card, Container, Grid, Snackbar, TextField } from "@mui/material";
import useControllers from "controllers";
import React, { FC } from "react";
import useContactStyles from "../contact.style";

const FormContact: FC = (): JSX.Element => {
    const { StyledSection, StyledButtonPresentation, StyledTitleSection, StyledTitle } = useContactStyles();

    const { useScreenHooks } = useControllers();
    const { useContact } = useScreenHooks();
    const {
        width,
        register,
        handleSentContact,
        handleSubmit,
        open,
        variant,
        text,
        handleClose,
    } = useContact();

    return (
        <React.Fragment>
            {
                width >= 1200 ? (
                    <StyledSection background="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/recurso_co_12.png" style={{  display: 'flex', alignItems: 'center' }}>
                        <Container>
                            <Grid item lg={12} className="flex justify-center">
                                <Card sx={{ width: '50%', background: '#ffffffc4', padding: "2rem", marginBottom: '4rem' }}>
                                    <Grid item lg={12} className="flex justify-center">
                                        <StyledTitleSection>Contáctenos</StyledTitleSection>
                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6">
                                        <TextField
                                            label="Nombre Completo"
                                            type="text"
                                            id="name"
                                            fullWidth
                                            {...register('name')}
                                        />
                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6">
                                        <TextField
                                            label="Correo Electrónico"
                                            type="email"
                                            id="email"
                                            fullWidth
                                            {...register('email')}
                                        />
                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6">
                                        <TextField
                                            label="Deja tu Mensaje"
                                            type="email"
                                            multiline
                                            rows={6}
                                            id="email"
                                            fullWidth
                                            {...register('message')}
                                        />
                                    </Grid>
                                    <Grid item lg={12} className="md:pt-6 flex justify-center">
                                        <StyledButtonPresentation onClick={handleSubmit(handleSentContact)}>Enviar</StyledButtonPresentation>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Container>
                    </StyledSection>
                ) : (
                    <StyledSection className="pt-36" background="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/contactomovil.png">
                        <Grid item md={12} className="flex justify-center">
                            <Card sx={{ width: '90%', background: '#ffffffc4', padding: "2rem", marginBottom: '4rem' }}>
                                <Grid item lg={12} className="flex justify-center">
                                    <StyledTitle className="xl:py-8 lg:py-8 py-1">Contáctenos</StyledTitle>
                                </Grid>
                                <Grid item lg={12} className="xl:pt-6 lg:pt-6 pt-2">
                                    <TextField
                                        label="Nombre Completo"
                                        type="text"
                                        id="name"
                                        fullWidth
                                        {...register('name')}
                                    />
                                </Grid>
                                <Grid item lg={12} className="xl:pt-6 lg:pt-6 pt-2">
                                    <TextField
                                        label="Correo Electronico"
                                        type="email"
                                        id="email"
                                        fullWidth
                                        {...register('email')}
                                    />
                                </Grid>
                                <Grid item lg={12} className="xl:pt-6 lg:pt-6 pt-2">
                                    <TextField
                                        label="Correo Electronico"
                                        type="email"
                                        multiline
                                        rows={6}
                                        id="email"
                                        fullWidth
                                        {...register('message')}
                                    />
                                </Grid>
                                <Grid item lg={12} className="xl:pt-6 lg:pt-6 pt-2 flex justify-center">
                                    <StyledButtonPresentation onClick={handleSubmit(handleSentContact)}>Enviar</StyledButtonPresentation>
                                </Grid>
                            </Card>
                        </Grid>
                    </StyledSection>
                )
            }
            <Snackbar
                open={open}
                autoHideDuration={20000}
                onClose={handleClose}
            >
                <Alert
                    severity={variant === "error" ? "error" : "success"}
                >
                    {text}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}

export default FormContact;