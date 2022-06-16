import {Container, Grid} from "@mui/material";
import useControllers from "controllers";
import React, {FC, useState} from "react";
import useProductsStyles from "../products.style";
import {
    StyledImageGeneral,
    StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";
import {
    StyledDescriptionText,
    StyledImageResponsive,
    StyledSectionDescription,
    StyledTitleText,
} from "../Epiprot/epiprot.responsive.styles";
import {StyledTitleTypesWounds} from "views/screens/terapeutic-number/Heridas/heridas.responsive.styles";
import Accordion from "../../../components/Accordion";

const Proctokinasa: FC = (): JSX.Element => {
    // Styles
    const {
        StyledImage,
        StyledTerapeuticNumberSection,
        StyledTitulo1,
        StyledTitulo,
    } = useProductsStyles();

    // Products
    const {useScreenHooks} = useControllers();
    const {useProducts} = useScreenHooks();
    const {products} = useProducts();

    const {proctokinasa} = products;

    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [expanded, setExpanded] = useState<string | false>(false);

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    const proctokinasaArray: any[] = [
        {
            name: "Descripcion",
            id: "Descripcion",
            title: "Descripcion",
            content: (
                <>
                    {
                        proctokinasa && (
                            <>
                                {width > 1024 ? (
                                    <StyledTerapeuticNumberSection
                                        style={{backgroundSize: "105% 124%"}}
                                        background={proctokinasa.background_description.content}
                                    >
                                        <Container>
                                            <Grid item lg={12} className="flex justify-center">
                                                <StyledTitulo
                                                    style={{
                                                        fontFamily: "Montserrat, bold",
                                                        fontSize: "25px",
                                                        marginTop: "-8.2%",
                                                    }}
                                                >
                                                    Proctokinasa®
                                                </StyledTitulo>
                                            </Grid>
                                            <Grid item lg={12} className="">
                                                <StyledTitulo1
                                                    style={{
                                                        lineHeight: "1",
                                                        padding: "0 56px",
                                                        marginTop: "-1.3%",
                                                        fontFamily: "Montserrat, medium",
                                                        fontSize: "17px",
                                                        color: "#666666",
                                                        marginLeft: "5.4%",
                                                    }}
                                                >
                                                    {proctokinasa.vulcosan_texto_1.content}
                                                </StyledTitulo1>
                                            </Grid>
                                        </Container>
                                    </StyledTerapeuticNumberSection>
                                ) : (
                                    <StyledSectionDescription
                                        background={proctokinasa.background_description.content}
                                    >
                                        <Container>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={12}
                                                className="d-flex justify-center"
                                            >
                                                <StyledTitleText>Proctokinasa®</StyledTitleText>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={12}
                                                className="d-flex justify-center"
                                            >
                                                <StyledDescriptionText>
                                                    {proctokinasa.vulcosan_texto_1.content}
                                                </StyledDescriptionText>
                                            </Grid>
                                        </Container>
                                    </StyledSectionDescription>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Indicaciones y áreas de aplicación",
            id: "Indicaciones y áreas de aplicación",
            title: "Indicaciones y áreas de aplicación",
            content: (
                <>
                    {
                        proctokinasa && (
                            <>
                                <Grid container>
                                    {proctokinasa.content.map((item: any, index: number) => {
                                        if (index % 2 === 0) {
                                            return (
                                                <React.Fragment>
                                                    {width > 1024 ? (
                                                        <>
                                                            <Grid item md={6} className="mt-12 pr-5">
                                                                <StyledTitulo
                                                                    style={{
                                                                        fontSize: 25,
                                                                        fontFamily: "Montserrat, bold",
                                                                    }}
                                                                >
                                                                    {item.title}
                                                                </StyledTitulo>
                                                                <StyledTitulo1
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.text,
                                                                    }}
                                                                    style={{
                                                                        fontSize: 17,
                                                                        fontFamily: "Montserrat, bold",
                                                                        color: "#666666",
                                                                        fontWeight: "500",
                                                                    }}
                                                                ></StyledTitulo1>
                                                            </Grid>
                                                            <Grid
                                                                item
                                                                md={6}
                                                                className="d-flex justify-center mt-12"
                                                            >
                                                                <StyledImageGeneral
                                                                    src={item.image}
                                                                    alt=""
                                                                    style={{width: "100%"}}
                                                                />
                                                            </Grid>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={12}
                                                                md={12}
                                                                className="d-flex justify-center mt-12"
                                                            >
                                                                <StyledImageResponsive
                                                                    src={item.image}
                                                                    alt=""
                                                                    style={{width: "100%", maxWidth: "100%"}}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={12} md={12} className="mt-6">
                                                                <StyledTitleText>{item.title}</StyledTitleText>
                                                                <StyledDescriptionText
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.text,
                                                                    }}
                                                                ></StyledDescriptionText>
                                                            </Grid>
                                                        </>
                                                    )}
                                                </React.Fragment>
                                            );
                                        } else {
                                            return (
                                                <React.Fragment>
                                                    {width > 1024 ? (
                                                        <>
                                                            <Grid
                                                                item
                                                                md={6}
                                                                className="d-flex justify-center mt-12 pr-5"
                                                            >
                                                                <StyledImageGeneral
                                                                    src={item.image}
                                                                    alt=""
                                                                    style={{width: "100%"}}
                                                                />
                                                            </Grid>

                                                            <Grid item md={6} className="mt-12">
                                                                <StyledTitulo
                                                                    style={{
                                                                        fontSize: 25,
                                                                        fontFamily: "Montserrat, bold",
                                                                    }}
                                                                >
                                                                    {item.title}
                                                                </StyledTitulo>
                                                                <StyledTitulo1
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.text,
                                                                    }}
                                                                    style={{
                                                                        fontSize: 17,
                                                                        fontFamily: "Montserrat, bold",
                                                                        color: "#666666",
                                                                        fontWeight: "500",
                                                                    }}
                                                                ></StyledTitulo1>
                                                            </Grid>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Grid
                                                                item
                                                                xs={12}
                                                                sm={12}
                                                                md={12}
                                                                className="d-flex justify-center mt-12"
                                                            >
                                                                <StyledImageResponsive
                                                                    src={item.image}
                                                                    alt=""
                                                                    style={{width: "100%", maxWidth: "100%"}}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={12} md={12} className="mt-6">
                                                                <StyledTitleText>{item.title}</StyledTitleText>
                                                                <StyledDescriptionText
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.text,
                                                                    }}
                                                                ></StyledDescriptionText>
                                                            </Grid>
                                                        </>
                                                    )}
                                                </React.Fragment>
                                            );
                                        }
                                    })}
                                </Grid>
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Aplicacion",
            id: "Aplicacion",
            title: "Aplicacion",
            content: (
                <>
                    {
                        proctokinasa && (
                            <>
                                <Grid item md={12} className="mt-12">
                                    {width > 1024 ? (
                                        <React.Fragment>
                                            <StyledTitleTypesWounds style={{marginLeft: "-2%"}}>
                                                Aplicación
                                            </StyledTitleTypesWounds>
                                            <StyledImageGeneral
                                                src={
                                                    proctokinasa.preImage !== undefined &&
                                                    proctokinasa.preImage.content
                                                }
                                                alt=""
                                                style={{width: "100%"}}
                                            />
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <StyledTitleText>Aplicación</StyledTitleText>
                                            <StyledImageResponsive
                                                src={
                                                    proctokinasa.preImage !== undefined &&
                                                    proctokinasa.preImage.content
                                                }
                                                alt=""
                                                style={{width: "100%"}}
                                            />
                                        </React.Fragment>
                                    )}
                                </Grid>
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Tipos de tejido en una herida",
            id: "Tipos de tejido en una herida",
            title: "Tipos de tejido en una herida",
            content: (
                <>
                    {
                        proctokinasa && (
                            <>
                                <Grid container className="mt-12">
                                    <div
                                        style={{
                                            background: "#005D9A",
                                            marginTop: "0%",
                                            height: "6.9%",
                                        }}
                                        className="xl:py-16 lg:py-16 py-8"
                                    >
                                        {width > 1024 ? (
                                            <React.Fragment>
                                                <Grid container>
                                                    <Grid item md={6}>
                                                        <img
                                                            src={proctokinasa.aplicacion_imagen_webmovil.content}
                                                            alt={proctokinasa.aplicacion_imagen_webmovil.alt}
                                                            style={{
                                                                marginTop: "6.1%",
                                                                marginLeft: "112.4%",
                                                                width: "70%",
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>

                                                <Grid item md={6}>
                                                    <StyledSubtitle
                                                        style={{
                                                            fontFamily: "Montserrat, bold",
                                                            fontSize: "25px",
                                                            marginLeft: "16.3%",
                                                            marginTop: "-44.4%",
                                                        }}
                                                        className="text-white"
                                                        dangerouslySetInnerHTML={{
                                                            __html: proctokinasa.references.content.split("--")[0],
                                                        }}
                                                    ></StyledSubtitle>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: proctokinasa.references.content.split("--")[1],
                                                        }}
                                                        className="text-white"
                                                        style={{
                                                            marginTop: "0%",
                                                            marginLeft: "16.3%",
                                                            fontFamily: "Montserrat, medium",
                                                            color: "#666666",
                                                            fontSize: "17px",
                                                            fontWeight: "500",
                                                        }}
                                                    ></p>
                                                </Grid>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <Grid container>
                                                    <Container>
                                                        <Grid item md={12}>
                                                            <StyledTitleText
                                                                className="text-white"
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        proctokinasa.references.content.split("--")[0],
                                                                }}
                                                            ></StyledTitleText>

                                                            <StyledDescriptionText
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        proctokinasa.references.content.split("--")[1],
                                                                }}
                                                                className="text-white"
                                                            ></StyledDescriptionText>

                                                            <StyledImageResponsive
                                                                src={proctokinasa.aplicacion_imagen_webmovil.content}
                                                                alt={proctokinasa.aplicacion_imagen_webmovil.alt}
                                                            />
                                                        </Grid>
                                                    </Container>
                                                </Grid>
                                            </React.Fragment>
                                        )}
                                    </div>
                                </Grid>
                            </>
                        )
                    }
                </>
            )
        }
    ]

    return (
        <React.Fragment>
            {proctokinasa !== undefined && (
                <React.Fragment>
                    <StyledImage
                        src={proctokinasa.banner_principal.content}
                        alt={proctokinasa.banner_principal.alt}
                    />
                    <div className="my-4">
                        {
                            proctokinasaArray.map((item: any, index: number) => (
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
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Proctokinasa;
