import React, {useState} from "react";
import {Box, Container, Grid, Tab} from "@mui/material";
import _ from "lodash";
import useTerapeuticNumberStyles, {
    StyledImageGeneral,
    StyledSubtitle,
    StyledTabContainer,
} from "../terapeutic-number.style";
import useControllers from "controllers";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {ITerapeuticNumber} from "../../../../models/interfaces/home/index";
import {
    StyledContainerCase,
    StyledDescripcionFactores,
    StyledDescriptionCase,
    StyledDescriptionEmergency,
    StyledDescriptionReferences,
    StyledDescriptionTypesWounds,
    StyledDescriptionWounds,
    StyledImageImportant,
    StyledTitleCase,
    StyledTitleClasification,
    StyledTitleEmergency,
    StyledTitleFactores,
    StyledTitleHands,
    StyledTitleQuirurgicas,
    StyledTitleReferences,
    StyledTitleRemember,
    StyledTitleTypesWounds,
    StyledTitleWounds,
    StyledWounds1Image,
} from "./heridas.responsive.styles";
import Accordion from "../../../components/Accordion";

const Heridas = () => {
    const {
        StyledTerapeuticNumberSection,
        StyledTitulo,
        StyledTitulo1,
        StyledTerapeuticNumberSection1,
        StyledImage,
    } = useTerapeuticNumberStyles();

    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useTerapeuticNumber} = useScreenHooks();
    const {useHeridas} = useTerapeuticNumber();
    const {tabs, woundsAssets} = useHeridas();

    /** States */
    const [value, setValue] = React.useState<string>("0");

    /** Handlers */
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [expanded, setExpanded] = useState<string | false>(false);

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    const mapContent = [
        {
            name: "Heridas",
            title: "Heridas",
            id: "Heridas",
            content: (
                <StyledTerapeuticNumberSection
                    background={
                        woundsAssets.background_description !== undefined &&
                        woundsAssets.background_description.content
                    }
                >
                    <Container maxWidth="md">
                        <Grid item lg={12} className="text-center">
                            <StyledTitulo alt="¿Qué son las heridas?">Heridas</StyledTitulo>
                        </Grid>
                        <Grid item lg={12} className="text-center">
                            <StyledTitulo1>
                                {woundsAssets.description !== undefined &&
                                    woundsAssets.description.content}
                            </StyledTitulo1>
                        </Grid>
                    </Container>
                </StyledTerapeuticNumberSection>
            )
        },
        {
            name: "Heridas infectadas",
            title: "Heridas infectadas",
            id: "Heridas infectadas",
            content: (
                <StyledTerapeuticNumberSection1
                    background={
                        woundsAssets.background_p && woundsAssets.background_p.content
                    }
                >
                    {width > 1024 ? (
                        <Grid container>
                            {woundsAssets.wounds1 !== undefined && (
                                <React.Fragment>
                                    <Grid md={6} className="d-flex align-items-center">
                                        <Grid md={12}>
                                            <Grid item md={12}>
                                                <StyledSubtitle
                                                    style={{
                                                        fontSize: "24px",
                                                        fontFamily: "montserrat, bold",
                                                        marginTop: "10%",
                                                        paddingBottom: "0%",
                                                        padding: "0 48px",
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            woundsAssets.wounds1[1].content.split("--")[0],
                                                    }}
                                                ></StyledSubtitle>
                                            </Grid>
                                            <Grid item md={12}>
                                                <p
                                                    style={{
                                                        fontSize: "17px",
                                                        marginTop: "0.7%",
                                                        lineHeight: "1.1",
                                                        paddingBottom: "5%",
                                                        padding: "0 30px",
                                                        marginLeft: "9%",
                                                        fontFamily: "Montserrat, medium",
                                                        color: "#666666",
                                                        fontWeight: "500",
                                                        textAlign: "justify"
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            woundsAssets.wounds1[1].content.split("--")[1],
                                                    }}
                                                ></p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={6} className="d-flex justify-end">
                                        <img
                                            src={woundsAssets.wounds1[0].content}
                                            alt={woundsAssets.wounds1[0].alt}
                                            style={{
                                                width: "95%",
                                                marginTop: "2%",
                                                height: "99%",
                                            }}
                                        />
                                    </Grid>
                                </React.Fragment>
                            )}
                            {woundsAssets.wounds2 !== undefined && (
                                <React.Fragment>
                                    <Grid item md={6} className="d-flex justify-end">
                                        <img
                                            src={woundsAssets.wounds2[0].content}
                                            alt={woundsAssets.wounds2[0].alt}
                                            style={{
                                                width: "100%",
                                                marginTop: "4%",
                                                height: "88.3%",
                                            }}
                                        />
                                    </Grid>
                                    <Grid md={6} className="d-flex align-items-center">
                                        <Grid md={12}>
                                            <StyledSubtitle
                                                style={{
                                                    padding: "0% 23px",
                                                    fontSize: "24px",
                                                    marginTop: "8%",
                                                    marginLeft: "16px",
                                                    fontFamily: "montserrat, bold",
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.wounds2[1].content.split("--")[0],
                                                }}
                                            ></StyledSubtitle>
                                            <p
                                                style={{
                                                    fontSize: "17px",
                                                    marginLeft: "7%",
                                                    marginTop: "5.7%",
                                                    lineHeight: "1.1",
                                                    paddingBottom: "5%",
                                                    fontFamily: "Montserrat, medium",
                                                    color: "#666666",
                                                    fontWeight: "500",
                                                    textAlign: "justify"
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.wounds2[1].content.split("--")[1],
                                                }}
                                            ></p>
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                            )}
                        </Grid>
                    ) : (
                        <React.Fragment>
                            {woundsAssets.wounds1 !== undefined && (
                                <Grid container>
                                    <Grid xs={12} sm={12} md={12}>
                                        <StyledWounds1Image
                                            src={woundsAssets.wounds1[0].content}
                                            alt={woundsAssets.wounds1[0].alt}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Grid item md={12}>
                                            <StyledTitleWounds
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.wounds1[1].content.split("--")[0],
                                                }}
                                            ></StyledTitleWounds>
                                        </Grid>
                                        <Grid item md={12}>
                                            <StyledDescriptionWounds
                                            style={{
                                                textAlign: "justify"
                                            }}
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.wounds1[1].content.split("--")[1],
                                                }}
                                            ></StyledDescriptionWounds>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                            {woundsAssets.wounds2 !== undefined && (
                                <Grid container>
                                    <Grid xs={12} sm={12} md={12}>
                                        <StyledWounds1Image
                                            src={woundsAssets.wounds2[0].content}
                                            alt={woundsAssets.wounds2[0].alt}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Grid item md={12}>
                                            <StyledTitleWounds
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.wounds2[1].content.split("--")[0],
                                                }}
                                            ></StyledTitleWounds>
                                        </Grid>
                                        <Grid item md={12}>
                                            <StyledDescriptionWounds
                                             style={{
                                                textAlign: "justify"
                                            }}
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.wounds2[1].content.split("--")[1],
                                                }}
                                            ></StyledDescriptionWounds>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                        </React.Fragment>
                    )}
                </StyledTerapeuticNumberSection1>
            )
        },
        {
            name: "Clasificación",
            id: "Clasificación",
            title: "Clasificación",
            content: (
                <Grid container style={{marginTop: "2%"}}>
                    <Grid item md={12}>
                        <StyledTitleClasification className="lg:pl-10 xl:pl-10">
                            Clasificación
                        </StyledTitleClasification>
                    </Grid>
                    <Grid
                        item
                        md={12}
                        style={{display: "flex", justifyContent: "center"}}
                    >
                        <StyledImageGeneral
                            src={
                                woundsAssets.clasification !== undefined &&
                                woundsAssets.clasification.content
                            }
                            alt=""
                            style={{width: "1110px", marginLeft: "4.5%"}}
                        />
                    </Grid>
                </Grid>
            )
        },
        {
            name: "Tipos de tejido en una herida",
            id: "Tipos de tejido en una herida",
            title: "Tipos de tejido en una herida",
            content: (
                <>
                    <Container maxWidth="xl">
                        <StyledTitleTypesWounds>
                            Tipos de tejido en una herida
                        </StyledTitleTypesWounds>
                        <StyledDescriptionTypesWounds>
                            {woundsAssets.wound_type_description !== undefined &&
                                woundsAssets.wound_type_description.content}
                        </StyledDescriptionTypesWounds>
                    </Container>
                    <StyledTabContainer
                        container
                        className="pt-8 justify-center"
                        style={{display: "grid"}}
                    >
                        <Box
                            style={{marginLeft: "4%", marginTop: "1.7%"}}
                            sx={{
                                width: "100%",
                                typography: "body1",
                            }}
                        >
                            <TabContext value={value}>
                                <Box sx={{borderBottom: 1, borderColor: "transparent"}}>
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                        className="tabs"
                                    >
                                        {_.map(tabs, (item: any, index: number) => (
                                            <Tab
                                                className="mr-1 heridas-tabs"
                                                label={item}
                                                value={index.toString()}
                                                style={{
                                                    backgroundColor: "#8A8A8A",
                                                    textTransform: "capitalize",
                                                }}
                                            />
                                        ))}
                                    </TabList>
                                </Box>
                                <TabPanel value="0">
                                    <Grid container className="justify-center align-items-center">
                                        {_.map(woundsAssets.tabs, (item: any, index: number) => (
                                            <React.Fragment>
                                                {item.section.includes("1-image") && (
                                                    <Grid
                                                        item
                                                        md={12}
                                                        className="lg:pr-12 xl:pr-12 container-tab"
                                                        key={index}
                                                    >
                                                        <img src={item.content} alt=""/>
                                                    </Grid>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="1">
                                    <Grid container className="justify-center align-items-center">
                                        {_.map(woundsAssets.tabs, (item: any, index: number) => (
                                            <React.Fragment>
                                                {item.section.includes("2-image") && (
                                                    <Grid
                                                        item
                                                        md={12}
                                                        className="lg:pr-12 xl:pr-12 container-tab"
                                                        key={index}
                                                    >
                                                        <img src={item.content} alt=""/>
                                                    </Grid>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="2">
                                    <Grid container className="justify-center align-items-center">
                                        {_.map(woundsAssets.tabs, (item: any, index: number) => (
                                            <React.Fragment>
                                                {item.section.includes("3-image") && (
                                                    <Grid
                                                        item
                                                        md={12}
                                                        className="lg:pr-12 xl:pr-12 container-tab"
                                                        key={index}
                                                    >
                                                        <img src={item.content} alt=""/>
                                                    </Grid>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Grid container className="justify-center align-items-center">
                                        {_.map(woundsAssets.tabs, (item: any, index: number) => (
                                            <React.Fragment>
                                                {item.section.includes("4-image") && (
                                                    <Grid
                                                        item
                                                        md={12}
                                                        className="lg:pr-12 xl:pr-12 container-tab"
                                                        key={index}
                                                    >
                                                        <img src={item.content} alt=""/>
                                                    </Grid>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Grid>
                                </TabPanel>
                                <TabPanel value="4">
                                    <Grid container className="justify-center align-items-center">
                                        {_.map(woundsAssets.tabs, (item: any, index: number) => (
                                            <React.Fragment>
                                                {item.section.includes("5-image") && (
                                                    <Grid
                                                        item
                                                        md={12}
                                                        className="lg:pr-12 xl:pr-12 container-tabzx"
                                                        key={index}
                                                    >
                                                        <img src={item.content} alt=""/>
                                                    </Grid>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Grid>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </StyledTabContainer>
                </>
            )
        },
        {
            name: "La importancia del lavado de manos",
            id: "La importancia del lavado de manos",
            title: "La importancia del lavado de manos",
            content: (
                <>
                    {width > 1024 ? (
                        <StyledImageImportant
                            alt={
                                woundsAssets.recomendation_wounds !== undefined &&
                                woundsAssets.recomendation_wounds.alt
                            }
                            src={
                                woundsAssets.recomendation_wounds !== undefined &&
                                woundsAssets.recomendation_wounds.content
                            }
                        />
                    ) : (
                        <StyledImageImportant
                            alt={
                                woundsAssets.lavado_responsive !== undefined &&
                                woundsAssets.lavado_responsive.alt
                            }
                            src={
                                woundsAssets.lavado_responsive !== undefined &&
                                woundsAssets.lavado_responsive.content
                            }
                        />
                    )}
                </>
            )
        },
        {
            name: "Realice en casa la curación de una herida luego de una emergencia",
            id: "Realice en casa la curación de una herida luego de una emergencia",
            title: "Realice en casa la curación de una herida luego de una emergencia",
            content: (
                <>
                    {woundsAssets.lavado !== undefined && (
                        <Grid container className="justify-center">
                            {_.map(
                                woundsAssets.lavado,
                                (item: ITerapeuticNumber, index: number) => (
                                    <Grid
                                        item
                                        md={6}
                                        style={
                                            index === 1
                                                ? {
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginTop: "1.6%",
                                                }
                                                : {}
                                        }
                                    >
                                        {index === 0 ? (
                                            <StyledImageGeneral
                                                key={index}
                                                alt={item.alt}
                                                src={item.content}
                                            />
                                        ) : (
                                            <React.Fragment>
                                                <Grid md={12}>
                                                    <StyledTitleEmergency>
                                                        {item.content.split("--")[0]}
                                                    </StyledTitleEmergency>
                                                    <StyledDescriptionEmergency
                                                        style={{textAlign: "justify"}}
                                                    >
                                                        {item.content.split("--")[1]}
                                                    </StyledDescriptionEmergency>
                                                </Grid>
                                            </React.Fragment>
                                        )}
                                    </Grid>
                                )
                            )}
                        </Grid>
                    )}
                </>
            )
        },
        {
            name: "Recuerde lavar sus manos y usar guantes antes de iniciar",
            id: "Recuerde lavar sus manos y usar guantes antes de iniciar",
            title: "Recuerde lavar sus manos y usar guantes antes de iniciar",
            content: (
                <>
                    {woundsAssets.remembers_wounds !== undefined && (
                        <Grid container className="justify-center">
                            <StyledTitleRemember>
                                {woundsAssets.remembers_wounds[1].content.split("--")[0]}
                            </StyledTitleRemember>

                            {width > 1024 ? (
                                <StyledImageGeneral
                                    src={woundsAssets.remembers_wounds[0].content}
                                    alt={woundsAssets.remembers_wounds[0].alt}
                                    style={{
                                        marginTop: "-1.8%",
                                        width: "76.5%",
                                        marginLeft: "3.9%",
                                    }}
                                />
                            ) : (
                                <StyledWounds1Image
                                    src={woundsAssets.manos_responsive1.content}
                                    alt={woundsAssets.remembers_wounds[0].alt}
                                />
                            )}

                            <StyledTitleHands className="mt-8">
                                {woundsAssets.remembers_wounds[1].content.split("--")[1]}
                            </StyledTitleHands>
                        </Grid>
                    )}
                </>
            )
        },
        {
            name: "En caso de atender a una persona herida",
            id: "En caso de atender a una persona herida",
            title: "En caso de atender a una persona herida",
            content: (
                <>
                    {
                        woundsAssets.aux_person !== undefined && (
                            <StyledContainerCase className="lg:py-16 xl:py-16 py-8 mt-8">
                                <Container maxWidth="lg">
                                    <StyledTitleCase className="lg:pb-12 xl:pb-12 pb-8 lg:text-center xl:text-center">
                                        En caso de atender a una persona herida:
                                    </StyledTitleCase>
                                </Container>
                                <StyledDescriptionCase
                                    dangerouslySetInnerHTML={{
                                        __html: woundsAssets.aux_person.content,
                                    }}
                                ></StyledDescriptionCase>
                            </StyledContainerCase>
                        )
                    }
                </>
            )
        },
        {
            name: "Una herida quirúrgica",
            id: "Una herida quirúrgica",
            title: "Una herida quirúrgica",
            content: (
                <>
                    {woundsAssets.quiq_wounds !== undefined && (
                        <React.Fragment>
                            <StyledTitleQuirurgicas>Heridas quirúrgicas</StyledTitleQuirurgicas>
                            {width > 1024 ? (
                                <React.Fragment>
                                    <Grid item md={6}>
                                        <StyledSubtitle
                                            style={{
                                                textAlign: "center",
                                                fontFamily: "Montserrat, bold",
                                                fontSize: "25px",
                                                marginLeft: "-51.1%",
                                                marginTop: "7.3%",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.quirurgicas_text.content.split("--")[0],
                                            }}
                                        ></StyledSubtitle>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.quirurgicas_text.content.split("--")[1],
                                            }}
                                            className=""
                                            style={{
                                                // padding: "0 160px",
                                                marginTop: "-0.2%",
                                                marginLeft: "6.9%",
                                                fontFamily: "Montserrat, medium",
                                                color: "#666666",
                                                fontSize: "17px",
                                                width: "48%",
                                                fontWeight: "500",
                                                textAlign: "justify"
                                            }}
                                        ></p>
                                    </Grid>
                                    <Grid container>
                                        <Grid item md={6}>
                                            <img
                                                src={woundsAssets.quiq_wounds.content}
                                                alt={woundsAssets.quiq_wounds.alt}
                                                style={{
                                                    width: "500px",
                                                    marginTop: "-62.2%",
                                                    marginLeft: "113.1%",
                                                    height: "382px",
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                            ) : (
                                <Grid container>
                                    <Grid item xs={12} md={12} sm={12}>
                                        <StyledWounds1Image
                                            src={woundsAssets.quiq_wounds.content}
                                            alt={woundsAssets.quiq_wounds.alt}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12} sm={12}>
                                        <StyledTitleClasification
                                            style={{paddingLeft: "8%"}}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.quirurgicas_text.content.split("--")[0],
                                            }}
                                        ></StyledTitleClasification>
                                    </Grid>
                                    <Grid item xs={12} md={12} sm={12}>
                                        <StyledDescriptionEmergency
                                            style={{paddingRight: 24, textAlign: "justify"}}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    woundsAssets.quirurgicas_text.content.split("--")[1],
                                            }}
                                        ></StyledDescriptionEmergency>
                                    </Grid>
                                </Grid>
                            )}
                        </React.Fragment>
                    )}
                </>
            )
        },
        {
            name: "Característica de una herida quirúrgica",
            id: "Características de una herida quirúrgica",
            title: "Características de una herida quirúrgica",
            content: (
                <StyledTerapeuticNumberSection1
                    style={{backgroundRepeat: "no-repeat"}}
                    background={
                        woundsAssets.Fondo_Background1 &&
                        woundsAssets.Fondo_Background1.content
                    }
                >
                    {woundsAssets.quirurgicas_1 !== undefined && (
                        <React.Fragment>
                            {width > 1024 ? (
                                <StyledSubtitle
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        marginTop: "2.6%",
                                        marginLeft: "7%",
                                        fontSize: "28px",
                                        zIndex: 1,
                                    }}
                                >
                                    Una herida quirúrgica
                                </StyledSubtitle>
                            ) : (
                                <StyledTitleQuirurgicas>
                                    Una herida quirúrgica
                                </StyledTitleQuirurgicas>
                            )}
                            <Grid container className="justify-center">
                                {width > 1024 ? (
                                    <StyledImageGeneral
                                        src={woundsAssets.quirurgicas_1.content}
                                        alt={woundsAssets.quirurgicas_1.alt}
                                        style={{
                                            marginBottom: "3%",
                                            width: "80%",
                                            marginTop: "-1.4%",
                                            marginLeft: "3.8%",
                                        }}
                                    />
                                ) : (
                                    <StyledWounds1Image
                                        src={woundsAssets.quirurgicas_1.content}
                                        alt={woundsAssets.quirurgicas_1.alt}
                                    />
                                )}
                            </Grid>
                        </React.Fragment>
                    )}

                    {/* caracteristicas */}
                    {woundsAssets.caracteristicas_cuadro !== undefined && width > 1024 ? (
                        <React.Fragment>
                            <Grid item md={6}>
                                <StyledSubtitle
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontSize: "25px",
                                        marginLeft: "-41.8%",
                                        marginTop: "1.8%",
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            woundsAssets.heridas_casracteristicas.content.split(
                                                "--"
                                            )[0],
                                    }}
                                ></StyledSubtitle>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            woundsAssets.heridas_casracteristicas.content.split(
                                                "--"
                                            )[1],
                                    }}
                                    className=""
                                    style={{
                                        marginTop: "-2%",
                                        marginLeft: "6.9%",
                                        fontFamily: "Montserrat, medium",
                                        color: "#666666",
                                        fontSize: "17px",
                                        fontWeight: "600",
                                    }}
                                ></p>
                            </Grid>
                            <Grid container>
                                <Grid item md={12}>
                                    <img
                                        src={woundsAssets.caracteristicas_cuadro.content}
                                        alt={woundsAssets.caracteristicas_cuadro.alt}
                                        style={{
                                            marginLeft: "0%",
                                            marginTop: "-11.8%",
                                            height: "500px",
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    ) : (
                        woundsAssets.Caracteristicas_responsive01 !== undefined && (
                            <StyledWounds1Image
                                style={{marginTop: "3%"}}
                                src={woundsAssets.Caracteristicas_responsive01.content}
                                alt={woundsAssets.Caracteristicas_responsive01.alt}
                            />
                        )
                    )}
                </StyledTerapeuticNumberSection1>
            )
        },
        {
            name: "Factores que afectan la cicatrización de las heridas quirúrgicas",
            id: "Factores que afectan la cicatrización de las heridas quirúrgicas",
            title: "Factores que afectan la cicatrización de las heridas quirúrgicas",
            content: (
                <React.Fragment>
                    {
                        woundsAssets.factoresTitle && (
                            <>
                                <StyledTitleFactores>
                                    {woundsAssets.factoresTitle.content}
                                </StyledTitleFactores>
                                <StyledDescripcionFactores>
                                    {woundsAssets.factoresDescription.content}
                                </StyledDescripcionFactores>
                                <Grid container className="justify-center">
                                    {width > 1024 ? (
                                        <StyledImageGeneral
                                            src={woundsAssets.factoresImage.content}
                                            alt={woundsAssets.factoresImage.content}
                                            style={{marginTop: "2.5%", width: "91%", marginLeft: "4%"}}
                                        />
                                    ) : (
                                        <StyledWounds1Image
                                            src={woundsAssets.Cuadro_responsive.content}
                                            alt={woundsAssets.factoresImage.content}
                                            style={{padding: "0px 9%"}}
                                        />
                                    )}
                                </Grid>
                                {width > 1024 && woundsAssets.factoresSubDescription ? (
                                    <p
                                        style={{
                                            fontSize: "17px",
                                            padding: "17px 114px",
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            marginTop: "0.2%",
                                            fontWeight: "500",
                                            textAlign: "justify"
                                        }}
                                    >
                                        {woundsAssets.factoresSubDescription.content}
                                    </p>
                                ) : (
                                    <StyledDescripcionFactores>
                                        {woundsAssets.factoresSubDescription && woundsAssets.factoresSubDescription.content}
                                    </StyledDescripcionFactores>
                                )}
                                {width > 1024 && woundsAssets.factoresSubDescription ? (
                                    <p
                                        style={{
                                            fontSize: "17px",
                                            padding: "17px 114px",
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            marginTop: "0.2%",
                                            fontWeight: "500",
                                            textAlign: "justify"
                                        }}
                                    >
                                        {woundsAssets.factoresSubDescription.content}
                                    </p>
                                ) : (
                                    <StyledDescripcionFactores>
                                        {woundsAssets.factoresSubDescription && woundsAssets.factoresSubDescription.content}
                                    </StyledDescripcionFactores>
                                )}
                            </>
                        )
                    }

                </React.Fragment>
            )
        },
        {
            name: "¿Cómo identificar estas complicaciones?",
            id: "¿Cómo identificar estas complicaciones?",
            title: "¿Cómo identificar estas complicaciones?",
            content: (
                <>
                    {
                        woundsAssets.complicacionesImage && (
                            <>
                                {width > 1024 ? (
                                    <StyledSubtitle
                                        style={{
                                            marginBottom: "3%",
                                            marginLeft: "7%",
                                            marginTop: "2.3%",
                                            fontSize: "28.6px",
                                        }}
                                    >
                                        {woundsAssets.complicacionesTitle.content}
                                    </StyledSubtitle>
                                ) : (
                                    <StyledTitleFactores>
                                        {woundsAssets.complicacionesTitle.content}
                                    </StyledTitleFactores>
                                )}
                                <Grid container className="justify-center">
                                    {width > 1024 ? (
                                        <StyledImageGeneral
                                            src={woundsAssets.complicacionesImage.content}
                                            alt={woundsAssets.complicacionesImage.content}
                                            style={{marginTop: "-1%", width: "641px", marginLeft: "1%"}}
                                        />
                                    ) : (
                                        <StyledWounds1Image
                                            src={woundsAssets.complicacionesImage.content}
                                            alt={woundsAssets.complicacionesImage.content}
                                        />
                                    )}
                                </Grid>
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Signos de infección de la herida quirúrgica",
            id: "Signos de infección de la herida quirúrgica",
            title: "Signos de infección de la herida quirúrgica",
            content: (
                <>
                    {
                        woundsAssets.Heridas_imagen_13 && (
                            <>
                                {width > 1024 ? (
                                    <StyledSubtitle
                                        style={{
                                            marginBottom: "3%",
                                            marginTop: "6.7%",
                                            fontSize: "25px",
                                            marginLeft: "7%",
                                        }}
                                    >
                                        {woundsAssets.Heridas_titulo3.content}
                                    </StyledSubtitle>
                                ) : (
                                    <StyledTitleFactores>
                                        {woundsAssets.Heridas_titulo3.content}
                                    </StyledTitleFactores>
                                )}

                                {width > 1024 ? (
                                    <p
                                        style={{
                                            fontSize: "17px",
                                            padding: "6px 81px",
                                            fontWeight: "500",
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            textAlign: "justify"
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: woundsAssets.Herida_texto_4.content,
                                        }}
                                    ></p>
                                ) : (
                                    <StyledDescripcionFactores
                                        dangerouslySetInnerHTML={{
                                            __html: woundsAssets.Herida_texto_4.content,
                                        }}
                                    ></StyledDescripcionFactores>
                                )}
                                <Grid container className="justify-center">
                                    {width > 1024 ? (
                                        <StyledImageGeneral
                                            src={woundsAssets.Heridas_imagen_13.content}
                                            alt={woundsAssets.Heridas_imagen_13.content}
                                            style={{marginTop: "3.9%", width: "70%", marginLeft: "3%"}}
                                        />
                                    ) : (
                                        <StyledWounds1Image
                                            src={woundsAssets.Heridas_imagen_13.content}
                                            alt={woundsAssets.Heridas_imagen_13.content}
                                        />
                                    )}
                                </Grid>
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "¿Qué hacer si tengo estos síntomas?",
            id: "¿Qué hacer si tengo estos síntomas?",
            title: "¿Qué hacer si tengo estos síntomas?",
            content: (
                <>
                    {
                        woundsAssets.principal_banner && (
                            <>
                                {woundsAssets.Heridas_imagen_14 !== undefined && (
                                    <div
                                        style={{
                                            background: "#005D93",
                                            marginLeft: "0.9px",
                                            marginRight: "-1px",
                                            marginTop: "1.3%",
                                            height: "2.5%",
                                        }}
                                        className="xl:py-16 lg:py-16 py-10"
                                    >
                                        <Container maxWidth="lg">
                                            {width > 1024 ? (
                                                <h1
                                                    className="pb-12 text-center"
                                                    style={{
                                                        fontSize: 24,
                                                        fontWeight: "700",
                                                        marginTop: "-3%",
                                                        marginLeft: "-51.6%",
                                                        color: "#fff",
                                                        fontFamily: "montserrat, bold",
                                                    }}
                                                >
                                                    ¿Qué hacer si tengo estos síntomas?
                                                </h1>
                                            ) : (
                                                <StyledTitleReferences className="xl:pb-12 lg:pb-12 pb-6 text-white">
                                                    ¿Qué hacer si tengo estos síntomas?
                                                </StyledTitleReferences>
                                            )}
                                        </Container>
                                        {width > 1024 ? (
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.Heridas_imagen_14.content,
                                                }}
                                                className=""
                                                style={{
                                                    padding: "0 137px",
                                                    marginTop: "-1.9%",
                                                    fontFamily: "Montserrat, medium",
                                                    fontSize: 15,
                                                    color: "#fff",
                                                    fontWeight: "600",
                                                }}
                                            ></p>
                                        ) : (
                                            <StyledDescriptionReferences
                                                dangerouslySetInnerHTML={{
                                                    __html: woundsAssets.Heridas_imagen_14.content,
                                                }}
                                                className="text-white"
                                                noReference
                                                style={{paddingLeft: "13%"}}
                                            ></StyledDescriptionReferences>
                                        )}
                                    </div>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "¿Cómo cuidar de una herida quirúrgica en casa?",
            id: "¿Cómo cuidar de una herida quirúrgica en casa?",
            title: "¿Cómo cuidar de una herida quirúrgica en casa?",
            content: (
                <>
                    {woundsAssets.Heridas_imagen_15 !== undefined && (
                        <React.Fragment>
                            {width < 1024 && (
                                <StyledWounds1Image
                                    src={woundsAssets.Heridas_imagen_15.content}
                                    alt={woundsAssets.Heridas_imagen_15.alt}
                                />
                            )}
                            <Grid item md={6}>
                                {width > 1024 ? (
                                    <StyledSubtitle
                                        style={{
                                            fontWeight: "montserrat, bold",
                                            fontSize: "25px",
                                            marginLeft: "6.1%",
                                            marginTop: "5.1%",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                woundsAssets.cuidar_text_heridad.content.split("--")[0],
                                        }}
                                    ></StyledSubtitle>
                                ) : (
                                    <StyledTitleFactores
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                woundsAssets.cuidar_text_heridad.content.split("--")[0],
                                        }}
                                    ></StyledTitleFactores>
                                )}
                                {width > 1024 ? (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                woundsAssets.cuidar_text_heridad.content.split("--")[1],
                                        }}
                                        className=""
                                        style={{
                                            // padding: "0 160px",
                                            marginTop: "-5.9%",
                                            marginLeft: "6.1%",
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            fontSize: "17px",
                                            width: "48%",
                                            fontWeight: "500",
                                            textAlign: "justify"
                                        }}
                                    ></p>
                                ) : (
                                    <StyledDescripcionFactores
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                woundsAssets.cuidar_text_heridad.content.split("--")[1],
                                        }}
                                    ></StyledDescripcionFactores>
                                )}
                            </Grid>
                            {width > 1024 && (
                                <Grid container>
                                    <Grid item md={6}>
                                        <img
                                            src={woundsAssets.Heridas_imagen_15.content}
                                            alt={woundsAssets.Heridas_imagen_15.alt}
                                            style={{
                                                marginTop: "-72.3%",
                                                marginLeft: "108.3%",
                                                // height: "505px",
                                                fontFamily: "montserrat",
                                                width: "530px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            )}
                        </React.Fragment>
                    )}
                    {width > 1024 && woundsAssets.Heridas_texto_17 ? (
                        <StyledSubtitle
                            style={{
                                marginBottom: "3%",
                                fontWeight: "bold",
                                marginLeft: "7.3%",
                                marginTop: "3.3%",
                                fontSize: "25px",
                                textAlign: "center",
                                fontFamily: "montserrat, bold",
                            }}
                        >
                            {woundsAssets.Heridas_texto_17.content}
                        </StyledSubtitle>
                    ) : (
                        <StyledTitleFactores style={{textAlign: "center"}}>
                            {woundsAssets.Heridas_texto_17 && woundsAssets.Heridas_texto_17.content}
                        </StyledTitleFactores>
                    )}
                </>
            )
        },
        {
            name: "Referencias",
            id: "Referencias",
            title: "Referencias",
            content: (
                <>
                    {woundsAssets.references !== undefined && (
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
                                    __html: woundsAssets.references.content,
                                }}
                                className="text-white text-xs"
                            ></StyledDescriptionReferences>
                        </div>
                    )}
                </>
            )
        }
    ]

    return (
        <React.Fragment>
            {/* Banner Principal */}
            <StyledImage
                src={
                    woundsAssets.principal_banner !== undefined &&
                    woundsAssets.principal_banner.content
                }
                alt={
                    woundsAssets.principal_banner !== undefined &&
                    woundsAssets.principal_banner.alt
                }
            />
            <div className="mt-4" id="accordions">
                {
                    mapContent.map((item: any, index: any) => (
                        <Accordion
                            name={item.name}
                            id={item.id}
                            title={item.title}
                            setExpanded={setExpanded}
                            expanded={expanded}
                        >
                            {item.content}
                        </Accordion>
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export default Heridas;
