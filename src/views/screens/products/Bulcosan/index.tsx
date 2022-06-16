import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { FC, useState } from "react";
import useProductsStyles from "../products.style";
import {
    StyledImageGeneral,
    StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";
import {
    StyledDescriptionText,
    StyledDescriptionWhiteText,
    StyledImageResponsive,
    StyledSectionDescription,
    StyledTitleText,
    StyledTitleTextWhite,
} from "../Epiprot/epiprot.responsive.styles";
import Accordion from "../../../components/Accordion";

const Bulcosan: FC = (): JSX.Element => {
    // Styles
    const {
        StyledImage,
        StyledTerapeuticNumberSection,
        StyledTitulo1,
        StyledTitulo,
    } = useProductsStyles();

    // Products
    const { useScreenHooks } = useControllers();
    const { useProducts } = useScreenHooks();
    const { products } = useProducts();

    const { bulcosan } = products;

    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [expanded, setExpanded] = useState<string | false>(false);

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    const bulcosanArray = [
        {
            name: "Vulcosan®",
            id: "Vulcosan®",
            title: "Vulcosan®",
            content: (
                <>
                    {
                        bulcosan && (
                            <>
                                {width > 1024 ? (
                                    <StyledTerapeuticNumberSection
                                        style={{ backgroundSize: "104% 96%" }}
                                        background={bulcosan.background_description.content}
                                    >
                                        <Container>
                                            <Grid item lg={12} className="flex justify-center">
                                                <StyledImageGeneral
                                                    src={bulcosan.vulcosan_titulo_1.content}
                                                    alt={bulcosan.vulcosan_titulo_1.alt}
                                                    style={{
                                                        width: "auto",
                                                        marginTop: "-1%",
                                                        marginLeft: "4.8%",
                                                    }}
                                                />
                                            </Grid>

                                            <Grid item lg={12} className="">
                                                <StyledTitulo1
                                                    style={{
                                                        lineHeight: "1.3",
                                                        fontSize: "17px",
                                                        padding: "0 56px",
                                                        marginTop: "2.7%",
                                                        fontFamily: "Montserrat, medium",
                                                        color: "#666666",
                                                        marginLeft: "5.4%",
                                                        textAlign: "justify",
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            bulcosan.vulcosan_texto_1.content,
                                                    }}
                                                ></StyledTitulo1>
                                            </Grid>
                                        </Container>
                                    </StyledTerapeuticNumberSection>
                                ) : (
                                    <StyledSectionDescription
                                        background={bulcosan.background_description.content}
                                        className="py-8"
                                    >
                                        <Container>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={12}
                                                className="d-flex justify-center"
                                            >
                                                <img
                                                    src={bulcosan.vulcosan_titulo_1.content}
                                                    alt={bulcosan.vulcosan_titulo_1.alt}
                                                    style={{ width: width < 769 ? "45%" : "auto" }}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={12}
                                                className="d-flex justify-center"
                                            >
                                                <StyledDescriptionText
                                                    style={{ textAlign: "justify" }}
                                                    className="mt-8"
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            bulcosan !== undefined &&
                                                            bulcosan.vulcosan_texto_1.content,
                                                    }}
                                                ></StyledDescriptionText>
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
                        bulcosan && (
                            <>
                                {bulcosan.indicaciones_image !== undefined && (
                                    <React.Fragment>
                                        {width > 1024 ? (
                                            <React.Fragment>
                                                <Grid item md={6}>
                                                    <StyledSubtitle
                                                        style={{
                                                            textAlign: "center",
                                                            fontFamily: "Montserrat, bold",
                                                            fontSize: "25px",
                                                            marginLeft: "-54.1%",
                                                            marginTop: "2.8%",
                                                        }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: bulcosan.indicaciones.content.split("--")[0],
                                                        }}
                                                    ></StyledSubtitle>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: bulcosan.indicaciones.content.split("--")[1],
                                                        }}
                                                        className=""
                                                        style={{
                                                            // padding: "0 160px",
                                                            marginTop: "-3%",
                                                            marginLeft: "5.5%",
                                                            fontFamily: "Montserrat, medium",
                                                            color: "#666666",
                                                            fontSize: "17px",
                                                            width: "48%",
                                                            fontWeight: "500",
                                                            lineHeight: "2.2",
                                                        }}
                                                    ></p>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: bulcosan.indicaciones.content.split("--")[2],
                                                        }}
                                                        className=""
                                                        style={{
                                                            // padding: "0 160px",
                                                            marginTop: "-4.8%",
                                                            fontFamily: "Montserrat, medium",
                                                            color: "#666666",
                                                            fontSize: "17px",
                                                            width: "63%",
                                                            fontWeight: "500",
                                                            padding: "0 7%",
                                                            marginLeft: "-5%",
                                                            textAlign: "justify",
                                                        }}
                                                    ></p>
                                                </Grid>
                                                <Grid container>
                                                    <Grid item md={6}>
                                                        <img
                                                            src={bulcosan.indicaciones_image.content}
                                                            alt={bulcosan.indicaciones_image.alt}
                                                            style={{
                                                                width: "500px",
                                                                marginTop: "-73%",
                                                                marginLeft: "108.1%",
                                                                height: "414.6px",
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <StyledImageResponsive
                                                        src={bulcosan.are_infectada.content}
                                                        alt={bulcosan.are_infectada.alt}
                                                        style={{ maxWidth: "100%" }}
                                                    />
                                                </Grid>
                                                <Container>
                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <StyledTitleText
                                                            dangerouslySetInnerHTML={{
                                                                __html: bulcosan.indicaciones.content.split("--")[0],
                                                            }}
                                                        ></StyledTitleText>
                                                        <StyledDescriptionText
                                                            dangerouslySetInnerHTML={{
                                                                __html: bulcosan.indicaciones.content.split("--")[1],
                                                            }}
                                                        ></StyledDescriptionText>
                                                        <StyledDescriptionText
                                                            style={{ textAlign: "justify" }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: bulcosan.indicaciones.content.split("--")[2],
                                                            }}
                                                        ></StyledDescriptionText>
                                                    </Grid>
                                                </Container>
                                            </React.Fragment>
                                        )}
                                    </React.Fragment>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Características y ventajas",
            id: "Características y ventajas",
            title: "Características y ventajas",
            content: (
                <>
                    {
                        bulcosan && (
                            <>
                                <StyledTerapeuticNumberSection
                                    background={bulcosan.caracteristicas_background.content}
                                    style={{
                                        paddingTop: width < 1024 ? "2rem" : "9rem",
                                        paddingBottom: width < 1024 ? "1rem" : "9rem",
                                    }}
                                >
                                    {width > 1024 ? (
                                        <Container className="xl:mt-12 lg:mt-12">
                                            <Grid container className="mt-5">
                                                {bulcosan.caracteristicas !== undefined && (
                                                    <React.Fragment>
                                                        <Grid container>
                                                            <Grid item md={6}>
                                                                <img
                                                                    src={bulcosan.caracteristicas.content}
                                                                    alt={bulcosan.caracteristicas.alt}
                                                                    style={{
                                                                        width: "500px",
                                                                        marginTop: "-27.7%",
                                                                        marginLeft: "-4.2%",
                                                                        height: "414.6px",
                                                                    }}
                                                                />
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <StyledSubtitle
                                                                    style={{
                                                                        textAlign: "center",
                                                                        fontFamily: "Montserrat, bold",
                                                                        fontSize: "25px",
                                                                        marginLeft: "-44.1%",
                                                                        marginTop: "-16.2%",
                                                                    }}
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            bulcosan.caracteristicas_image.content.split(
                                                                                "--"
                                                                            )[0],
                                                                    }}
                                                                ></StyledSubtitle>
                                                                <p
                                                                    dangerouslySetInnerHTML={{
                                                                        __html:
                                                                            bulcosan.caracteristicas_image.content.split(
                                                                                "--"
                                                                            )[1],
                                                                    }}
                                                                    className=""
                                                                    style={{
                                                                        // padding: "0 160px",
                                                                        marginTop: "-1.8%",
                                                                        marginLeft: "12.7%",
                                                                        fontFamily: "Montserrat, medium",
                                                                        color: "#666666",
                                                                        fontSize: "17px",
                                                                        fontWeight: "500",
                                                                    }}
                                                                ></p>
                                                            </Grid>
                                                        </Grid>
                                                    </React.Fragment>
                                                )}

                                                {/* cuadro3 */}
                                            </Grid>
                                        </Container>
                                    ) : (
                                        <Grid container>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={12}
                                                className="d-flex justify-center"
                                            >
                                                <StyledImageResponsive
                                                    src={bulcosan.caracteristicas_responsive.content}
                                                    alt={bulcosan.caracteristicas_responsive.alt}
                                                    style={{ maxWidth: "100%" }}
                                                />
                                            </Grid>
                                            <Container>
                                                <Grid item xs={12} sm={12} md={12}>
                                                    <StyledTitleText
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                bulcosan.caracteristicas_image.content.split("--")[0],
                                                        }}
                                                    ></StyledTitleText>
                                                    <StyledDescriptionText
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                bulcosan.caracteristicas_image.content.split("--")[1],
                                                        }}
                                                    ></StyledDescriptionText>
                                                </Grid>
                                            </Container>
                                        </Grid>
                                    )}

                                    {width > 1024 ? (
                                        <Grid container className="mt-14">
                                            <Grid item md={6}>
                                                <StyledTitulo
                                                    style={{
                                                        marginTop: "3.2%",
                                                        fontFamily: "Montserrat, bold",
                                                        fontSize: 25,
                                                        fontWeight: "700",
                                                        marginLeft: "9.2%",
                                                        marginBottom: "6%"
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: bulcosan.ventajas_responsives1.content.split("--")[0],
                                                    }}
                                                >
                                                </StyledTitulo>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: bulcosan.ventajas_responsives1.content.split("--")[1],
                                                    }}
                                                    style={{
                                                        marginTop: "-3%",
                                                        marginLeft: "14.5%",
                                                        fontFamily: "Montserrat, medium",
                                                        color: "#666666",
                                                        fontSize: "17px",
                                                        fontWeight: "500",
                                                        lineHeight: "1.7",
                                                    }}
                                                ></p>
                                            </Grid>
                                            <Grid item md={6}>
                                                <StyledImageGeneral
                                                    src={bulcosan.ventajas_imagen.content}
                                                    alt={bulcosan.ventajas_imagen.alt}
                                                    style={{
                                                        width: "100%",
                                                        marginLeft: "0%",
                                                        height: "125.5%",
                                                        marginTop: "-4%",
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    ) : (
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <StyledImageResponsive
                                                    src={bulcosan.ventaja_responsive1.content}
                                                    alt={bulcosan.ventaja_responsive1.alt}
                                                    style={{ maxWidth: "100%" }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} className="mt-6">
                                                <Container>
                                                    <StyledTitleText dangerouslySetInnerHTML={{
                                                        __html: bulcosan.ventajas_responsives1.content.split("--")[0],
                                                    }}></StyledTitleText>
                                                    <StyledDescriptionText dangerouslySetInnerHTML={{
                                                        __html: bulcosan.ventajas_responsives1.content.split("--")[1],
                                                    }}></StyledDescriptionText>
                                                </Container>
                                            </Grid>
                                        </Grid>
                                    )}
                                </StyledTerapeuticNumberSection>
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Aplicación y fácil manipulación",
            id: "Aplicación y fácil manipulación",
            title: "Aplicación y fácil manipulación",
            content: (
                <>
                    {
                        bulcosan && (
                            <>
                                {width > 1024 ? (
                                    <>
                                        <StyledTitulo
                                            style={{
                                                textAlign: "center",
                                                fontFamily: "Montserrat, bold",
                                                fontSize: "25px",
                                                marginLeft: "-77.1%",
                                            }}
                                        >
                                            {bulcosan.aplicacion_title.content}
                                        </StyledTitulo>
                                        <Grid container className="mt-5 justify-center">
                                            <StyledImageGeneral
                                                src={bulcosan.aplicacion_image.content}
                                                alt={bulcosan.aplicacion_image.alt}
                                                style={{ width: "100%", marginLeft: "4%", marginTop: "1%" }}
                                            />
                                        </Grid>
                                        <StyledTitulo
                                            className=""
                                            style={{
                                                textAlign: "center",
                                                fontFamily: "Montserrat, bold",
                                                fontSize: "25px",
                                                marginLeft: "-67.1%",
                                                marginTop: "4.9%",
                                            }}
                                        >
                                            {bulcosan.facil_title.content}
                                        </StyledTitulo>
                                        <Grid container className="mt-12">
                                            <Grid
                                                item
                                                md={6}
                                                className="d-flex justify-center align-items-center"
                                            >
                                                <StyledImageGeneral
                                                    src={bulcosan.facil_image.content}
                                                    alt={bulcosan.facil_image.alt}
                                                    style={{
                                                        width: "50%",
                                                        marginLeft: "-10%",
                                                        marginTop: "-4%",
                                                    }}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                className="d-flex justify-center align-items-center"
                                            >
                                                <StyledImageGeneral
                                                    src={bulcosan.facil_image2.content}
                                                    alt={bulcosan.facil_image2.alt}
                                                    style={{
                                                        width: "100%",
                                                        marginLeft: "-34%",
                                                        marginTop: "-6%",
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </>
                                ) : (
                                    <>
                                        <Container>
                                            <StyledTitleText>
                                                {bulcosan.aplicacion_title.content}
                                            </StyledTitleText>
                                        </Container>

                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            className="d-flex justify-center "
                                        >
                                            <StyledImageResponsive
                                                src={bulcosan.tabla_responsive_aplicacion.content}
                                                alt={bulcosan.tabla_responsive_aplicacion.alt}
                                                style={{ maxWidth: "80%" }}
                                            />
                                        </Grid>
                                        <Container>
                                            <StyledTitleText className="mt-6">
                                                {bulcosan.facil_title.content}
                                            </StyledTitleText>
                                        </Container>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            className="d-flex justify-center "
                                        >
                                            <StyledImageResponsive
                                                src={bulcosan.facil_manipulacion.content}
                                                alt={bulcosan.facil_manipulacion.alt}
                                                style={{ maxWidth: "80%" }}
                                            />
                                        </Grid>
                                    </>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Contraindicaciones",
            id: "Contraindicaciones",
            title: "Contraindicaciones",
            content: (
                <>
                    {
                        bulcosan && (
                            <>
                                {bulcosan.references !== undefined && (
                                    <div
                                        style={{
                                            background: "#005D93",
                                            marginLeft: "0.1%",
                                            marginRight: "0px",
                                            marginTop: "4.3%",
                                            height: "4.4%",
                                        }}
                                        className="xl:py-16 lg:py-16 py-6"
                                    >
                                        {width > 1024 ? (
                                            <>
                                                <StyledSubtitle
                                                    style={{
                                                        textAlign: "center",
                                                        fontFamily: "Montserrat, bold",
                                                        fontSize: "25px",
                                                        marginLeft: "-61.1%",
                                                        marginTop: "-3.7%",
                                                        color: "#fff",
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: bulcosan.references.content.split("--")[0],
                                                    }}
                                                ></StyledSubtitle>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: bulcosan.references.content.split("--")[1],
                                                    }}
                                                    className="text-white"
                                                    style={{
                                                        padding: "0 160px",
                                                        marginTop: "-2.7%",
                                                        marginLeft: "-3.3%",
                                                        fontFamily: "Montserrat, medium",
                                                        fontSize: "17px",
                                                        lineHeight: "1.8",
                                                    }}
                                                ></p>
                                            </>
                                        ) : (
                                            <>
                                                <Container>
                                                    <StyledTitleTextWhite
                                                        className="text-white"
                                                        dangerouslySetInnerHTML={{
                                                            __html: bulcosan.references.content.split("--")[0],
                                                        }}
                                                    ></StyledTitleTextWhite>
                                                    <StyledDescriptionWhiteText
                                                        className="text-white"
                                                        dangerouslySetInnerHTML={{
                                                            __html: bulcosan.references.content.split("--")[1],
                                                        }}
                                                    ></StyledDescriptionWhiteText>
                                                </Container>
                                            </>
                                        )}
                                    </div>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
    ]

    return (
        <React.Fragment>
            {bulcosan !== undefined && (
                <React.Fragment>
                    {/* banner */}
                    <StyledImage
                        src={bulcosan.banner_principal.content}
                        alt={bulcosan.banner_principal.alt}
                    />
                    {/* banner */}
                    <div className="my-4">
                        {
                            bulcosanArray.map((item: any, index: number) => (
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
                    <Container>
                        <Grid
                            container
                            className="xl:mt-12 lg:mt-12 xl:mb-12 lg:mb-12 mt-6 mb-6 align-items-center"
                        >
                            {width > 1024 ? (
                                <>
                                    <StyledTitulo
                                        style={{
                                            padding: "0 160px",
                                            marginTop: "-2.1%",
                                            marginLeft: "-3.9%",
                                            fontFamily: "Montserrat, bold",
                                            fontSize: "25px",
                                        }}
                                    >
                                        {bulcosan.consiguelo.content}
                                    </StyledTitulo>
                                    <a
                                        href="https://www.cruzverde.com.co/aposito-esteril-caja-x-10-vulcosan-phmb-10cm-x-10cm/COCV_386040.html"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <StyledImageGeneral
                                            src={bulcosan.cruz.content}
                                            style={{
                                                width: "auto",
                                                marginTop: "-8%",
                                                marginLeft: "-64.6%",
                                            }}
                                            alt={bulcosan.cruz.alt}
                                        />
                                    </a>
                                </>
                            ) : (
                                <>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        className="d-flex justify-center "
                                    >
                                        <StyledTitleText className="text-center">
                                            {bulcosan.consiguelo.content}
                                        </StyledTitleText>
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        className="d-flex justify-center "
                                    >
                                        <a
                                            href="https://www.cruzverde.com.co/aposito-esteril-caja-x-10-vulcosan-phmb-10cm-x-10cm/COCV_386040.html"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={bulcosan.cruz.content}
                                                alt={bulcosan.cruz.alt}
                                            />
                                        </a>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Container>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Bulcosan;
