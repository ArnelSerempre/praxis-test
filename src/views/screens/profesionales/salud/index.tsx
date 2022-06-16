import React, {useState} from "react";
import {Grid} from "@mui/material";
import useSaludStyles from "./salud.style";
import useControllers from "controllers";
import {
    StyledDescripcionFactores,
    StyledTitleFactores,
} from "views/screens/terapeutic-number/Heridas/heridas.responsive.styles";
import {StyledImageResponsive} from "views/screens/products/Epiprot/epiprot.responsive.styles";
import {Modal} from "@mui/material";
import {Box} from "@mui/system";
import {Button} from "@mui/material";
import {Container} from "@mui/material";
import Accordion from "../../../components/Accordion";

const Salud = () => {
    // Styles
    const {StyledSection4, StyledTitleSection2, ContainerStyled} =
        useSaludStyles();

    const [width, setWidth] = useState<number>(window.innerWidth);

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    const {useScreenHooks} = useControllers();
    const {useProducts} = useScreenHooks();
    const {products} = useProducts();
    const {cuidadores} = products;

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

    const [expanded, setExpanded] = useState<string | false>();

    const saludArray: any[] = [

        {
            name: "Factor de crecimiento epidérmico",
            id: "Factor de crecimiento epidérmico",
            title: "Factor de crecimiento epidérmico",
            content: (
                <Grid item md={12} className="xl:pb-12 pb-6">
                    {width > 1024 && cuidadores ? (
                        <Container>
                    <StyledDescripcionFactores
                        dangerouslySetInnerHTML={{
                            __html: cuidadores.text_factores.content,
                        }}
                        className="text-lg md:text-lg mt-4"

                    ></StyledDescripcionFactores>
                        </Container>
                    ) : (
                        <StyledDescripcionFactores
                            dangerouslySetInnerHTML={{
                                __html: cuidadores && cuidadores.text_factores.content,
                            }}
                            style={{margin: "4%"}}
                        ></StyledDescripcionFactores>
                    )}
                </Grid>
            )
        },
        {
            name: "Tabla de eventos",
            id: "Tabla de eventos",
            title: "Tabla de eventos",
            content: (
                <>
                    {width > 1024 && cuidadores ? (
                        <React.Fragment>
                            <Grid item lg={12} className="d-flex justify-center pb-8">
                                <img
                                    className="d-flex justify-center"
                                    src={cuidadores.ancestral_slider_.content}
                                    alt={cuidadores.ancestral_slider_.alt}
                                    style={{width: "80%"}}
                                />
                            </Grid>
                            <Grid item lg={12} className="d-flex justify-center">
                                <img
                                    src={cuidadores.ancestral_slider_99.content}
                                    alt={cuidadores.ancestral_slider_99.alt}
                                    style={{width: "80%", marginBottom: "3%"}}
                                />
                            </Grid>


                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <StyledImageResponsive
                                src={cuidadores && cuidadores.tabla_metologia.content}
                                alt={cuidadores && cuidadores.tabla_metologia.alt}
                            ></StyledImageResponsive>

                            <StyledImageResponsive
                                src={cuidadores && cuidadores.evento_logico1.content}
                                alt={cuidadores && cuidadores.evento_logico1.alt}
                                className="pb-6"
                                onClick={handleOpen}
                            ></StyledImageResponsive>
                        </React.Fragment>
                    )}
                </>
            )
        },

    ];
    return (
        <React.Fragment>
            <React.Fragment>
                <StyledSection4 background={cuidadores && cuidadores.fondso_salud.content}>
                    <ContainerStyled>
                        <Grid item md={12} className="flex justify-center xl:py-12 py-4">
                            {width > 1024 ? (
                                <StyledTitleSection2>
                                    {cuidadores && cuidadores.Titulo_1.content}
                                </StyledTitleSection2>
                            ) : (
                                <StyledTitleFactores className="text-center">
                                    {cuidadores && cuidadores.Titulo_1.content}
                                </StyledTitleFactores>
                            )}
                        </Grid>
                        <Grid item lg={12} className="xl:pb-16 d-flex justify-center">
                            <img
                                src={cuidadores && cuidadores.banner_video.content}
                                alt={cuidadores && cuidadores.banner_video.alt}
                                style={{width: "80%"}}
                            />
                        </Grid>
                        <div className="my-4">
                            {
                                cuidadores && saludArray.map((item: any, index: number) => (
                                    <Accordion
                                        name={item.name}
                                        id={item.id}
                                        title={item.title}
                                        expanded={expanded}
                                        setExpanded={setExpanded}
                                    >
                                        {item.content}
                                    </Accordion>
                                ))
                            }
                        </div>
                    </ContainerStyled>
                </StyledSection4>
            </React.Fragment>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...style, width: "100%"}}>
                    {/* <h2 id="child-modal-title">Gira tu pantalla</h2> */}
                    <Grid item xs={12} sm={12} md={12} className="d-flex justify-center">
                        <img
                            src={
                                "http://api-praxis.eml.com.co/wp-content/uploads/2022/04/eventologico1.png"
                            }
                            alt={cuidadores && cuidadores.pacientes_cuidadores_responsive.alt}
                            style={{width: "100%"}}
                        />
                    </Grid>

                    <Button onClick={handleClose}>Cerrar</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default Salud;
