import React, {Fragment} from "react";
import {Grid} from "@mui/material";
import {Container} from "@mui/material";
import {ITerapeuticNumber} from "models/interfaces/home";
import {IAccordionProps} from "views/components/Accordion/Accordion.interfaces";
import {
    StyledDescripcionFactores,
    StyledDescriptionReferences,
    StyledTitleFactores,
    StyledTitleReferences,
    StyledWounds1Image,
} from "views/screens/terapeutic-number/Heridas/heridas.responsive.styles";
import useTerapeuticNumberStyles, {
    StyledImageGeneral,
    StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";

const useDiabetes = (width: number, woundsAssets: any) => {
    const {
        StyledTerapeuticNumberSection,
        StyledTitulo,
        StyledTitulo1,
    } = useTerapeuticNumberStyles();

    const diabetesContent: IAccordionProps[] = [
        {
            name: "Diabetes",
            id: "Diabetes",
            title: "Diabetes",
            children: (
                <>
                    {
                        woundsAssets.diabetes_cuadro && (
                            <StyledTerapeuticNumberSection
                                style={{backgroundSize: "109% 92%"}}
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
                        )
                    }
                </>
            )
        },
        {
            title: "Mitos y verdades sobre la diabetes",
            id: "panel1",
            name: "panel1",
            children: (
                <Container maxWidth="xl">
                    {width > 1024 ? (
                        <StyledSubtitle
                            style={{
                                textAlign: "center",
                                marginTop: "2%",
                                fontSize: "30px",
                                marginLeft: "11.6%",
                                fontFamily: "Montserrat, bold",
                            }}
                        >
                            {woundsAssets.diabetes_titulo_1 !== undefined &&
                                woundsAssets.diabetes_titulo_1.content}
                        </StyledSubtitle>
                    ) : (
                        <StyledTitleFactores className="text-center">
                            {woundsAssets.diabetes_titulo_1 !== undefined &&
                                woundsAssets.diabetes_titulo_1.content}
                        </StyledTitleFactores>
                    )}
                    <Grid container>
                        {width > 1024 ? (
                            woundsAssets.diabetes_cuadro !== undefined &&
                            woundsAssets.diabetes_cuadro.map(
                                (item: ITerapeuticNumber, index: number) => (
                                    <React.Fragment>
                                        {index === 0 ? (
                                            <Grid item md={6} className="d-flex justify-end">
                                                <StyledImageGeneral
                                                    src={item.content}
                                                    alt={item.alt}
                                                    style={{width: "81.8%", marginTop: "-3.6%"}}
                                                />
                                            </Grid>
                                        ) : (
                                            <Grid item md={6}>
                                                <StyledImageGeneral
                                                    src={item.content}
                                                    alt={item.alt}
                                                    style={{
                                                        width: "82.8%",
                                                        marginTop: "-3.6%",
                                                        marginLeft: "5%",
                                                    }}
                                                />
                                            </Grid>
                                        )}
                                    </React.Fragment>
                                )
                            )
                        ) : (
                            <StyledWounds1Image
                                src={
                                    woundsAssets.diabetes_titulo_3 !== undefined &&
                                    woundsAssets.mitos_diabetes_responsive.content
                                }
                                alt={
                                    woundsAssets.diabetes_titulo_3 !== undefined &&
                                    woundsAssets.mitos_diabetes_responsive.alt
                                }
                            />
                        )}
                    </Grid>
                </Container>
            ),
        },
        {
            title: "Complicaciones en los pacientes con diabetes",
            id: "panel2",
            name: "panel2",
            children: (
                <StyledTerapeuticNumberSection
                    style={{
                        backgroundPosition: "top right",
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                    background={
                        woundsAssets.ulceras_background !== undefined &&
                        woundsAssets.ulceras_background.content
                    }
                >
                    <Container>
                        {width > 1024 ? (
                            <React.Fragment>
                                <StyledSubtitle
                                    style={{
                                        textAlign: "",
                                        marginTop: "2%",
                                        fontSize: "25px",
                                        marginLeft: "5%",
                                        fontFamily: "Montserrat, bold",
                                    }}
                                >
                                    {woundsAssets.diabetes_titulo_2 !== undefined &&
                                        woundsAssets.diabetes_titulo_2.content}
                                </StyledSubtitle>
                                <p
                                    style={{
                                        fontSize: "17px",
                                        marginTop: "-2.7%",
                                        padding: "0 55px",
                                        fontFamily: "Montserrat, medium",
                                        color: "#666666",
                                        fontWeight: "500",
                                        textAlign: "justify"
                                    }}
                                >
                                    {woundsAssets.diabetes_text_2 !== undefined &&
                                        woundsAssets.diabetes_text_2.content}
                                </p>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <StyledTitleFactores style={{margin: "4% 0"}}>
                                    {woundsAssets.diabetes_titulo_2 !== undefined &&
                                        woundsAssets.diabetes_titulo_2.content}
                                </StyledTitleFactores>
                                <StyledDescripcionFactores style={{margin: "4% 0"}}>
                                    {woundsAssets.diabetes_text_2 !== undefined &&
                                        woundsAssets.diabetes_text_2.content}
                                </StyledDescripcionFactores>
                            </React.Fragment>
                        )}
                        <Grid item md={12} className="d-flex justify-center">
                            {width > 1024 ? (
                                <StyledImageGeneral
                                    src={
                                        woundsAssets.diabetes_imagen_1 !== undefined &&
                                        woundsAssets.diabetes_imagen_1.content
                                    }
                                    style={{
                                        width: "63.1%",
                                        marginLeft: "1.5%",
                                        marginTop: "0.7%",
                                    }}
                                    alt={
                                        woundsAssets.diabetes_imagen_1 !== undefined &&
                                        woundsAssets.diabetes_imagen_1.alt
                                    }
                                />
                            ) : (
                                <StyledWounds1Image
                                    src={
                                        woundsAssets.diabetes_imagen_1 !== undefined &&
                                        woundsAssets.diabetes_imagen_1.content
                                    }
                                    alt={
                                        woundsAssets.diabetes_imagen_1 !== undefined &&
                                        woundsAssets.diabetes_imagen_1.alt
                                    }
                                />
                            )}
                        </Grid>
                        <Grid container>
                            {woundsAssets.diabetes_cuadrose !== undefined &&
                                woundsAssets.diabetes_cuadrose.map(
                                    (item: ITerapeuticNumber, index: number) => (
                                        <Grid item md={6} className="d-flex justify-center">
                                            {width > 1024 ? (
                                                <StyledImageGeneral
                                                    src={item.content}
                                                    alt={item.alt}
                                                    style={{
                                                        width: "96%",
                                                        marginTop: "2%",
                                                        marginLeft: "8%",
                                                    }}
                                                />
                                            ) : (
                                                <StyledWounds1Image src={item.content} alt={item.alt}/>
                                            )}
                                        </Grid>
                                    )
                                )}
                        </Grid>
                    </Container>
                </StyledTerapeuticNumberSection>
            ),
        },
        {
            title: "El paciente con diabetes y su familia.",
            id: "panel3",
            name: "panel3",
            children: (
                <Fragment>
                    <React.Fragment>
                        <Grid container>
                            <Grid item md={6}>
                                {width > 1024 ? (
                                    <React.Fragment>
                                        <StyledSubtitle
                                            style={{
                                                fontFamily: "Montserrat, bold",
                                                fontSize: "25px",
                                                marginLeft: "14.3%",
                                                marginTop: "4.8%",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.paciente_diabetes_familiar !==
                                                    undefined &&
                                                    woundsAssets.paciente_diabetes_familiar.content.split(
                                                        "--"
                                                    )[0],
                                            }}
                                        ></StyledSubtitle>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.paciente_diabetes_familiar !==
                                                    undefined &&
                                                    woundsAssets.paciente_diabetes_familiar.content.split(
                                                        "--"
                                                    )[1],
                                            }}
                                            className=""
                                            style={{
                                                fontFamily: "Montserrat, medium",
                                                color: "#666666",
                                                fontSize: "17px",
                                                fontWeight: "600",
                                                width: "83%",
                                                marginLeft: "14%",
                                                marginTop: "5.9%",
                                                lineHeight: "1.1",
                                                textAlign: "justify"
                                            }}
                                        ></p>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <StyledWounds1Image
                                            src={
                                                woundsAssets.paciente_diabetes_familiar !== undefined &&
                                                woundsAssets.diabetes_image_2.content
                                            }
                                            alt={
                                                woundsAssets.paciente_diabetes_familiar !== undefined &&
                                                woundsAssets.diabetes_image_2.alt
                                            }
                                        />
                                        <StyledTitleFactores
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.paciente_diabetes_familiar !==
                                                    undefined &&
                                                    woundsAssets.paciente_diabetes_familiar.content.split(
                                                        "--"
                                                    )[0],
                                            }}
                                            style={{margin: "4% 5%"}}
                                        ></StyledTitleFactores>
                                        <StyledDescripcionFactores
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.paciente_diabetes_familiar !==
                                                    undefined &&
                                                    woundsAssets.paciente_diabetes_familiar.content.split(
                                                        "--"
                                                    )[1],
                                            }}
                                            style={{margin: "4% 5%"}}
                                        ></StyledDescripcionFactores>
                                    </React.Fragment>
                                )}
                            </Grid>
                            <Grid item md={6}>
                                {width > 1024 && (
                                    <img
                                        src={
                                            woundsAssets.paciente_diabetes_familiar !== undefined &&
                                            woundsAssets.diabetes_image_2.content
                                        }
                                        alt={
                                            woundsAssets.paciente_diabetes_familiar !== undefined &&
                                            woundsAssets.diabetes_image_2.alt
                                        }
                                        style={{
                                            marginLeft: "0%",
                                            height: "100%",
                                        }}
                                    />
                                )}
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </Fragment>
            ),
        },
        {
            title: "La familia y/o el cuidador",
            id: "panel4",
            name: "panel4",
            children: (
                <Container>
                    {width > 1024 ? (
                        <StyledSubtitle
                            style={{
                                marginTop: "5.3%",
                                fontSize: "25px",
                                marginLeft: "5.3%",
                                fontFamily: "Montserrat, bold",
                            }}
                        >
                            {woundsAssets.diabetes_titulo_3 !== undefined &&
                                woundsAssets.diabetes_titulo_3.content}
                        </StyledSubtitle>
                    ) : (
                        <StyledTitleFactores style={{margin: "4% 0%"}}>
                            {woundsAssets.diabetes_titulo_3 !== undefined &&
                                woundsAssets.diabetes_titulo_3.content}
                        </StyledTitleFactores>
                    )}
                    <Grid item md={12} className="d-flex justify-center">
                        {width > 1024 ? (
                            <StyledImageGeneral
                                style={{marginTop: "-0.5%", marginLeft: "1.6%"}}
                                src={
                                    woundsAssets.diabetes_titulo_3 !== undefined &&
                                    woundsAssets.diabetes_imagen_4.content
                                }
                                alt={
                                    woundsAssets.diabetes_titulo_3 !== undefined &&
                                    woundsAssets.diabetes_imagen_4.alt
                                }
                            />
                        ) : (
                            <StyledWounds1Image
                                src={
                                    woundsAssets.diabetes_titulo_3 !== undefined &&
                                    woundsAssets.diagnosticos_fundamentales_responsive.content
                                }
                                alt={
                                    woundsAssets.diabetes_titulo_3 !== undefined &&
                                    woundsAssets.diagnosticos_fundamentales_responsive.alt
                                }
                            />
                        )}
                    </Grid>
                </Container>
            ),
        },
        {
            title: "Hábitos de vida saludables",
            id: "panel5",
            name: "panel5",
            children: (
                <StyledTerapeuticNumberSection
                    style={{height: width > 1024 ? "803px" : "100%"}}
                    background={
                        woundsAssets.diabetes_background_2 &&
                        woundsAssets.diabetes_background_2.content
                    }
                >
                    <Container>
                        <Grid item lg={12} className="">
                            {width > 1024 ? (
                                <StyledTitulo
                                    style={{
                                        fontSize: "25px",
                                        marginLeft: "5.2%",
                                        marginTop: "-2.7%",
                                        fontFamily: "Montserrat, bold",
                                    }}
                                >
                                    {woundsAssets.diabetes_background_2 &&
                                        woundsAssets.diabetes_titulo_4.content}
                                </StyledTitulo>
                            ) : (
                                <React.Fragment>
                                    <StyledTitleFactores style={{margin: "4% 0%"}}>
                                        {woundsAssets.diabetes_background_2 &&
                                            woundsAssets.diabetes_titulo_4.content}
                                    </StyledTitleFactores>
                                </React.Fragment>
                            )}
                        </Grid>
                        <Grid item lg={12} className="xl:text-center lg:text-center">
                            {width > 1024 ? (
                                <StyledTitulo1
                                    style={{
                                        marginTop: "2%",
                                        marginLeft: "5.2%",
                                        fontFamily: "Montserrat, medium",
                                        color: "#666666",
                                        fontWeight: "500",
                                    }}
                                >
                                    {woundsAssets.diabetes_background_2 &&
                                        woundsAssets.diabetes_text_3.content}
                                </StyledTitulo1>
                            ) : (
                                <StyledDescripcionFactores style={{margin: "4% 0%"}}>
                                    {woundsAssets.diabetes_background_2 &&
                                        woundsAssets.diabetes_text_3.content}
                                </StyledDescripcionFactores>
                            )}
                        </Grid>
                        <Grid item md={12} className="d-flex justify-center">
                            {width > 1024 ? (
                                <StyledImageGeneral
                                    style={{
                                        padding: "0 56px",
                                        marginTop: "1.6%",
                                        width: "63%",
                                        marginLeft: "6%",
                                    }}
                                    src={
                                        woundsAssets.diabetes_background_2 &&
                                        woundsAssets.diabetes_imagen_5.content
                                    }
                                    alt={
                                        woundsAssets.diabetes_background_2 &&
                                        woundsAssets.diabetes_imagen_5.alt
                                    }
                                />
                            ) : (
                                <StyledWounds1Image
                                    src={
                                        woundsAssets.diabetes_background_2 &&
                                        woundsAssets.diabetes_imagen_5.content
                                    }
                                    alt={
                                        woundsAssets.diabetes_background_2 &&
                                        woundsAssets.diabetes_imagen_5.alt
                                    }
                                />
                            )}
                        </Grid>
                    </Container>
                </StyledTerapeuticNumberSection>
            ),
        },
        {
            title: "Una alimentación adecuada disminuye los riesgos de complicación",
            id: "panel6",
            name: "panel6",
            children: (
                <Fragment>
                    <StyledTerapeuticNumberSection
                        style={{
                            backgroundPosition: "top right",
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                        background={
                            woundsAssets.diabetes_titulo_6 &&
                            woundsAssets.ulceras_background.content
                        }
                    >
                        <Container>
                            <Grid item lg={12} className="">
                                {width > 1024 ? (
                                    <StyledTitulo
                                        style={{
                                            marginTop: "4.3%",
                                            fontSize: "25px",
                                            fontFamily: "Montserrat, bold",
                                            marginLeft: "5%",
                                        }}
                                    >
                                        {woundsAssets.diabetes_titulo_6 &&
                                            woundsAssets.diabetes_titulo_5.content}
                                    </StyledTitulo>
                                ) : (
                                    <StyledTitleFactores style={{margin: "4% 0%"}}>
                                        {woundsAssets.diabetes_titulo_6 &&
                                            woundsAssets.diabetes_titulo_5.content}
                                    </StyledTitleFactores>
                                )}
                            </Grid>
                            <Grid item lg={12} className="xl:text-center lg:text-center">
                                {width > 1024 ? (
                                    <StyledTitulo1
                                        style={{
                                            marginTop: "2.4%",
                                            lineHeight: "1",
                                            marginLeft: "56px",
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            fontWeight: "500",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                woundsAssets.diabetes_titulo_6 &&
                                                woundsAssets.diabetes_text_4.content,
                                        }}
                                    ></StyledTitulo1>
                                ) : (
                                    <StyledDescripcionFactores
                                        style={{margin: "4% 0%"}}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                woundsAssets.diabetes_titulo_6 &&
                                                woundsAssets.diabetes_text_4.content,
                                        }}
                                    ></StyledDescripcionFactores>
                                )}
                            </Grid>
                        </Container>
                        <Container>
                            <Grid item md={12} className="d-flex justify-center">
                                {width > 1024 ? (
                                    <StyledImageGeneral
                                        style={{
                                            width: "1045px",
                                            marginLeft: "4%",
                                            marginTop: "4.5%",
                                        }}
                                        src={
                                            woundsAssets.diabetes_titulo_6 &&
                                            woundsAssets.diabetes_imagen_6.content
                                        }
                                        alt={
                                            woundsAssets.diabetes_titulo_6 &&
                                            woundsAssets.diabetes_imagen_6.alt
                                        }
                                    />
                                ) : (
                                    <StyledWounds1Image
                                        src={
                                            woundsAssets.diabetes_titulo_6 &&
                                            woundsAssets.alimentacion_adecuada_responsive.content
                                        }
                                        alt={
                                            woundsAssets.diabetes_titulo_6 &&
                                            woundsAssets.alimentacion_adecuada_responsive.alt
                                        }
                                    />
                                )}
                            </Grid>
                        </Container>
                    </StyledTerapeuticNumberSection>
                    <Container>
                        {width > 1024 ? (
                            <StyledTitulo1
                                style={{
                                    marginLeft: "56px",
                                    marginTop: "39.3px",
                                    fontFamily: "Montserrat, medium",
                                    color: "#666666",
                                    fontWeight: "500",
                                }}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        woundsAssets.diabetes_titulo_6 &&
                                        woundsAssets.diabetes_text_5.content,
                                }}
                            ></StyledTitulo1>
                        ) : (
                            <StyledDescripcionFactores
                                dangerouslySetInnerHTML={{
                                    __html:
                                        woundsAssets.diabetes_titulo_6 &&
                                        woundsAssets.diabetes_text_5.content,
                                }}
                                style={{margin: "4% 0%"}}
                            ></StyledDescripcionFactores>
                        )}
                        {/* ALIMENTACION ADECUADA */}

                        {/* PLATOS */}
                        <Grid item md={12} className="d-flex justify-center">
                            {width > 1024 ? (
                                <StyledImageGeneral
                                    style={{
                                        width: "798px",
                                        marginTop: "7.2px",
                                        marginLeft: "0.4%",
                                    }}
                                    src={
                                        woundsAssets.diabetes_titulo_6 &&
                                        woundsAssets.diabetes_imagen_7.content
                                    }
                                    alt={
                                        woundsAssets.diabetes_titulo_6 &&
                                        woundsAssets.diabetes_imagen_7.alt
                                    }
                                />
                            ) : (
                                <StyledWounds1Image
                                    src={
                                        woundsAssets.diabetes_titulo_6 &&
                                        woundsAssets.diabetes_imagen_7.content
                                    }
                                    alt={
                                        woundsAssets.diabetes_titulo_6 &&
                                        woundsAssets.diabetes_imagen_7.alt
                                    }
                                />
                            )}
                        </Grid>
                        {/* PLATOS */}

                        {/* ejercisio  */}
                        {woundsAssets.diabetes_imagen_9 !== undefined && (
                            <React.Fragment>
                                {width > 1024 ? (
                                    <Grid item md={6}>
                                        <StyledSubtitle
                                            style={{
                                                textAlign: "center",
                                                fontFamily: "Montserrat, bold",
                                                fontSize: "25px",
                                                marginLeft: "-44.8%",
                                                marginTop: "5.4%",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.diabetes_titulo_6 &&
                                                    woundsAssets.ejercisio_texto_1.content.split("--")[0],
                                            }}
                                        ></StyledSubtitle>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.diabetes_titulo_6 &&
                                                    woundsAssets.ejercisio_texto_1.content.split("--")[1],
                                            }}
                                            className=""
                                            style={{
                                                marginTop: "-1.3%",
                                                marginLeft: "5.2%",
                                                fontFamily: "Montserrat, medium",
                                                color: "#666666",
                                                fontSize: "17px",
                                                fontWeight: "500",
                                                width: "46.4%",
                                                lineHeight: "1.2",
                                            }}
                                        ></p>
                                    </Grid>
                                ) : (
                                    <Grid item xs={12} sm={12} md={12}>
                                        <StyledWounds1Image
                                            src={
                                                woundsAssets.diabetes_titulo_6 &&
                                                woundsAssets.diabetes_imagen_9.content
                                            }
                                            alt={
                                                woundsAssets.diabetes_titulo_6 &&
                                                woundsAssets.diabetes_imagen_9.alt
                                            }
                                            className="mt-8"
                                        />
                                        <StyledTitleFactores
                                            style={{margin: "4% 0%"}}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.diabetes_titulo_6 &&
                                                    woundsAssets.ejercisio_texto_1.content.split("--")[0],
                                            }}
                                        ></StyledTitleFactores>
                                        <StyledDescripcionFactores
                                            style={{margin: "4% 0%"}}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.diabetes_titulo_6 &&
                                                    woundsAssets.ejercisio_texto_1.content.split("--")[1],
                                            }}
                                        ></StyledDescripcionFactores>
                                    </Grid>
                                )}
                                {width > 1024 && (
                                    <Grid container>
                                        <Grid item md={12}>
                                            <img
                                                src={
                                                    woundsAssets.diabetes_titulo_6 &&
                                                    woundsAssets.diabetes_imagen_9.content
                                                }
                                                alt={
                                                    woundsAssets.diabetes_titulo_6 &&
                                                    woundsAssets.diabetes_imagen_9.alt
                                                }
                                                style={{
                                                    marginLeft: "51.9%",
                                                    marginTop: "-29.1%",
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                )}
                            </React.Fragment>
                        )}
                    </Container>
                </Fragment>
            ),
        },
        {
            title: "Algunas recomendaciones a tener en cuenta:",
            id: "panel7",
            name: "panel7",
            children: (
                <Fragment>
                    {/* RECOMENDACIONES */}
                    {width > 1024 ? (
                        <StyledTitulo
                            style={{
                                fontSize: "25px",
                                marginTop: "3.2%",
                                fontFamily: "Montserrat, bold",
                                marginLeft: "5%",
                            }}
                        >
                            {woundsAssets.diabetes_titulo_6 &&
                                woundsAssets.diabetes_titulo_6.content}
                        </StyledTitulo>
                    ) : (
                        <StyledTitleFactores style={{margin: "4% 0%"}}>
                            {woundsAssets.diabetes_titulo_6 &&
                                woundsAssets.diabetes_titulo_6.content}
                        </StyledTitleFactores>
                    )}
                    <StyledTerapeuticNumberSection
                        background={
                            woundsAssets.Recomendaciones_responsive &&
                            woundsAssets.ulceras_background.content
                        }
                    >
                        <Container maxWidth="xl">
                            <Grid item md={12} className="d-flex justify-center">
                                {width > 1024 ? (
                                    <StyledImageGeneral
                                        style={{
                                            marginTop: "3%",
                                            width: "1008.4px",
                                            marginLeft: "42.9px",
                                        }}
                                        src={
                                            woundsAssets.Recomendaciones_responsive &&
                                            woundsAssets.diabetes_imagen_10.content
                                        }
                                        alt={
                                            woundsAssets.Recomendaciones_responsive &&
                                            woundsAssets.diabetes_imagen_10.alt
                                        }
                                    />
                                ) : (
                                    <StyledWounds1Image
                                        src={
                                            woundsAssets.Recomendaciones_responsive &&
                                            woundsAssets.Recomendaciones_responsive.content
                                        }
                                        alt={
                                            woundsAssets.Recomendaciones_responsive &&
                                            woundsAssets.Recomendaciones_responsive.alt
                                        }
                                    />
                                )}
                            </Grid>
                        </Container>
                    </StyledTerapeuticNumberSection>
                </Fragment>
            ),
        },
        {
            title: "Referencias",
            id: "panel8",
            name: "panel8",
            children: (
                <Fragment>
                    {woundsAssets.diabetes_imagen_11 !== undefined && (
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
                                    __html: woundsAssets.diabetes_imagen_11.content,
                                }}
                                className="text-white text-xs"
                            ></StyledDescriptionReferences>
                        </div>
                    )}
                </Fragment>
            ),
        },
    ];

    return {
        diabetesContent,
    };
};

export default useDiabetes;
