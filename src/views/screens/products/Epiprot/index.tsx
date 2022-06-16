import {Container, Grid} from "@mui/material";
import useControllers from "controllers";
import React, {FC, useState} from "react";
import useProductsStyles from "../products.style";
import Login from "views/screens/Login";
import useModels from "models";
import {useSelector} from "react-redux";
import {
    StyledImageGeneral,
    StyledSubtitle,
} from "views/screens/terapeutic-number/terapeutic-number.style";
import {StyledWounds1Image} from "views/screens/terapeutic-number/Heridas/heridas.responsive.styles";
import {
    StyledDescriptionText,
    StyledSectionDescription,
    StyledTitleText,
    StyledImageResponsive,
    StyledDescriptionWhiteText,
} from "./epiprot.responsive.styles";
import {Modal} from "@mui/material";
import {Box} from "@mui/material";
import {Button} from "@mui/material";
import Accordion from "../../../components/Accordion";

const Epiprot: FC = (): JSX.Element => {
    // Styles
    const {
        StyledImage,
        StyledTerapeuticNumberSection,
        StyledTitulo1,
        StyledTitulo,
    } = useProductsStyles();

    const {useSelectors} = useModels();
    const {useAuthSelectors} = useSelectors();
    const {loginSelector} = useAuthSelectors();
    const login = useSelector(loginSelector);

    // Products
    const {useScreenHooks} = useControllers();
    const {useProducts} = useScreenHooks();
    const {products} = useProducts();

    const obj = {
        background:
            "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/epiprot_epidermico_humano.png",

        show: true,
        height: "27.6rem",
    };

    const {epiprot} = products;

    const [firstImage, setFirstImage] = useState<boolean>(false);

    /** States */
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [expanded, setExpanded] = useState<string | false>(false);

    window.addEventListener("resize", () => setWidth(window.innerWidth));

    console.log(width)

    const [open, setOpen] = React.useState(false);
    const [itemRender, setItemRender] = React.useState("");
    const handleOpen = (item: any) => {
        setItemRender(item);
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

    const epiprotArray = [
        {
            name: "Epiprot®",
            id: "Epiprot®",
            title: "Epiprot®",
            content: (
                <>
                    {width > 1024 ? (
                        <StyledTerapeuticNumberSection
                            style={{backgroundSize: "104% 95%"}}
                            background={
                                epiprot !== undefined &&
                                epiprot.background_description.content
                            }
                        >
                            <Container>
                                <Grid item lg={12} className="flex justify-center">
                                    <StyledImage
                                        style={{marginLeft: "4%", marginTop: "-4.2%"}}
                                        src={
                                            epiprot !== undefined &&
                                            epiprot.title_description.content
                                        }
                                        alt={
                                            epiprot !== undefined && epiprot.title_description.alt
                                        }
                                    />
                                </Grid>
                                <Grid item lg={12} className="">
                                    <StyledTitulo1
                                        style={{
                                            lineHeight: "1",
                                            fontSize: "17px",
                                            padding: "0 118px",
                                            marginTop: "4.7%",
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            textAlign: "justify"
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                epiprot !== undefined &&
                                                epiprot.text_description.content,
                                        }}
                                    ></StyledTitulo1>
                                </Grid>
                            </Container>
                        </StyledTerapeuticNumberSection>
                    ) : (
                        <React.Fragment>
                            <StyledSectionDescription
                                background={epiprot.background_description.content}
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
                                            src={
                                                epiprot !== undefined &&
                                                epiprot.title_description.content
                                            }
                                            alt={
                                                epiprot !== undefined &&
                                                epiprot.title_description.alt
                                            }
                                            style={{width: width < 769 ? "45%" : "auto"}}
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
                                            className="mt-8"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    epiprot !== undefined &&
                                                    epiprot.text_description.content,
                                            }}
                                        ></StyledDescriptionText>
                                    </Grid>
                                </Container>
                            </StyledSectionDescription>
                        </React.Fragment>
                    )}
                </>
            ),
        },
        {
            name: "Composición",
            id: "Composición",
            title: "Composición",
            content: (
                <Container>
                    {width > 1024 && epiprot ? (
                        <React.Fragment>
                            <StyledTitulo
                                style={{
                                    marginTop: "2%",
                                    fontFamily: "Montserrat, bold",
                                    fontSize: "25px",
                                    marginLeft: "5%",
                                }}
                            >
                                {epiprot.title_composition.content}
                            </StyledTitulo>
                            <StyledTitulo1
                                style={{
                                    lineHeight: "1",
                                    fontSize: "17px",
                                    padding: "0 56px",
                                    marginTop: "1.7%",
                                    fontFamily: "Montserrat, medium",
                                    color: "#666666",
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: epiprot.text_composition.content,
                                }}
                            ></StyledTitulo1>
                            <Grid container className="justify-center">
                                <StyledImageGeneral
                                    src={epiprot.image_composition.content}
                                    alt={epiprot.image_composition.alt}
                                    style={{
                                        width: "94%",
                                        marginLeft: "5%",
                                        marginTop: "2.7%",
                                    }}
                                />
                            </Grid>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <StyledTitleText>
                                {epiprot && epiprot.title_composition.content}
                            </StyledTitleText>
                            <StyledDescriptionText
                                dangerouslySetInnerHTML={{
                                    __html: epiprot && epiprot.text_composition.content,
                                }}
                            ></StyledDescriptionText>
                            <Grid container className="justify-center">
                                <StyledImageResponsive
                                    src={epiprot && epiprot.tabvle_aliados_responsive.content}
                                    alt={epiprot && epiprot.tabvle_aliados_responsive.alt}
                                    onClick={() => handleOpen("tabla1")}
                                />
                            </Grid>
                        </React.Fragment>
                    )}
                </Container>
            )
        },
        {
            name: "Fuente de obtención de la materia prima",
            id: "Fuente de obtención de la materia prima",
            title: "Fuente de obtención de la materia prima",
            content: (
                <>
                    {
                        epiprot && (
                            <StyledTerapeuticNumberSection
                                style={{
                                    paddingTop: width < 1024 ? "2rem" : "9rem",
                                    paddingBottom: width < 1024 ? "2rem" : "1rem",
                                }}
                                background={
                                    epiprot !== undefined && epiprot.fuente_background.content
                                }
                            >
                                <Grid container>
                                    {width > 1024 ? (
                                        <React.Fragment>
                                            <Grid item md={6}>
                                                <StyledTitulo
                                                    style={{
                                                        marginTop: "-19.4%",
                                                        marginLeft: "10.3%",
                                                        fontFamily: "Montserrat, bold",
                                                        fontSize: "23px",
                                                    }}
                                                >
                                                    {epiprot.fuente_title.content}
                                                </StyledTitulo>
                                                <StyledTitulo1
                                                    style={{
                                                        fontSize: "17px",
                                                        marginTop: "-8.5%",
                                                        lineHeight: "1.2",
                                                        marginLeft: "10.7%",
                                                        width: "131%",
                                                        textAlign: "justify"
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: epiprot.fuente_text.content,
                                                    }}
                                                ></StyledTitulo1>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Grid container className="">
                                                    <StyledImageGeneral
                                                        style={{
                                                            width: "77%",
                                                            marginTop: "-24.1%",
                                                            marginLeft: "27.4%",
                                                        }}
                                                        src={epiprot.fuente_image.content}
                                                        alt={epiprot.fuente_image.alt}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <StyledImageResponsive
                                                    src={epiprot.imagen_Responsive1.content}
                                                    alt={epiprot.imagen_Responsive1.alt}
                                                    style={{maxWidth: "100%"}}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <StyledTitleText>
                                                    {epiprot.fuente_title.content}
                                                </StyledTitleText>
                                                <StyledDescriptionText
                                                    dangerouslySetInnerHTML={{
                                                        __html: epiprot.fuente_text.content,
                                                    }}
                                                ></StyledDescriptionText>
                                            </Grid>
                                        </React.Fragment>
                                    )}
                                </Grid>
                            </StyledTerapeuticNumberSection>
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
                        epiprot && (
                            <>
                                {width > 1024 ? (
                                    <React.Fragment>
                                        <Grid container className="justify-center">
                                            <StyledImageGeneral
                                                src={epiprot.contraindicaciones.content}
                                                alt={epiprot.contraindicaciones.alt}
                                                style={{width: "98%", marginLeft: "3%"}}
                                            />
                                        </Grid>
                                        <Grid container className="justify-center">
                                            <StyledImageGeneral
                                                src={epiprot.precauciones.content}
                                                alt={epiprot.precauciones.alt}
                                                style={{
                                                    width: "100%",
                                                    marginLeft: "2%",
                                                    marginTop: "-1%",
                                                }}
                                            />
                                        </Grid>
                                    </React.Fragment>
                                ) : (
                                    <Grid container className="justify-center">
                                        <React.Fragment>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                                sm={12}
                                                className="d-flex justify-center"
                                            >
                                                <StyledImageResponsive
                                                    src={epiprot.Indicaciones_responsive2.content}
                                                    alt={epiprot.Indicaciones_responsive2.alt}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                                sm={12}
                                                className="d-flex justify-center"
                                            >
                                                <StyledImageResponsive
                                                    src={epiprot.Precacusiones_responsive.content}
                                                    alt={epiprot.Precacusiones_responsive.alt}
                                                />
                                            </Grid>
                                        </React.Fragment>
                                    </Grid>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Datos Principales",
            id: "Datos Principales",
            title: "Datos Principales",
            content: (
                <>
                    {
                        epiprot && (
                            <>
                                {width > 1024 ? (
                                    <StyledTitulo1
                                        style={{
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            fontSize: 17,
                                            fontWeight: "500",
                                            marginLeft: "10%",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: epiprot.categoria_text.content,
                                        }}
                                    ></StyledTitulo1>
                                ) : (
                                    <StyledDescriptionText
                                        dangerouslySetInnerHTML={{
                                            __html: epiprot.categoria_text.content,
                                        }}
                                    ></StyledDescriptionText>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Detalles",
            id: "Detalles",
            title: "Detalles",
            content: (
                <>
                    {
                        epiprot && (
                            <>
                                <Grid container>
                                    {epiprot.table_category !== undefined && (
                                        <Grid container className="justify-center">
                                            {width > 1024 ? (
                                                <React.Fragment>
                                                    <Grid item md={6}>
                                                        <StyledImageGeneral
                                                            src={epiprot.table_category.content}
                                                            alt={epiprot.table_category.alt}
                                                            style={{
                                                                marginTop: "2.2%",
                                                                width: "80.5%",
                                                                marginLeft: "22%",
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item md={6}>
                                                        <p
                                                            style={{
                                                                fontSize: 17,
                                                                marginLeft: "10.7%",
                                                                marginTop: "22px",
                                                                fontFamily: "Montserrat, medium",
                                                                color: "#666666",
                                                                fontWeight: "500",
                                                            }}
                                                            dangerouslySetInnerHTML={{
                                                                __html: epiprot.centro_ingenieria.content,
                                                            }}
                                                        ></p>
                                                    </Grid>
                                                </React.Fragment>
                                            ) : (
                                                <React.Fragment>
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={12}
                                                        md={12}
                                                        className="d-flex justify-center"
                                                    >
                                                        <StyledImageResponsive
                                                            src={epiprot.tabla_responsive_2.content}
                                                            alt={epiprot.tabla_responsive_2.alt}
                                                            onClick={() => handleOpen("tabla2")}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12}>
                                                        <StyledDescriptionText
                                                            dangerouslySetInnerHTML={{
                                                                __html: epiprot.centro_ingenieria.content,
                                                            }}
                                                        ></StyledDescriptionText>
                                                    </Grid>
                                                </React.Fragment>
                                            )}
                                        </Grid>
                                    )}
                                </Grid>
                                {width > 1024 ? (
                                    <StyledTitulo1
                                        style={{
                                            fontSize: 17,
                                            marginLeft: "10.1%",
                                            marginTop: "-57px",
                                            fontFamily: "Montserrat, medium",
                                            color: "#666666",
                                            fontWeight: "500",
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: epiprot.table_category_para.content,
                                        }}
                                    ></StyledTitulo1>
                                ) : (
                                    <StyledDescriptionText
                                        dangerouslySetInnerHTML={{
                                            __html: epiprot.table_category_para.content,
                                        }}
                                    ></StyledDescriptionText>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Indicaciones",
            id: "Indicaciones",
            title: "Indicaciones",
            content: (
                <>
                    {
                        epiprot && (
                            <Grid container className="xl:mt-12 xl:mb-12 mb-6">
                                {width > 1024 ? (
                                    <React.Fragment>
                                        <Grid item md={6}>
                                            <Grid item md={12}>
                                                <StyledSubtitle
                                                    style={{
                                                        marginTop: "6.5%",
                                                        fontFamily: "Montserrat, bold",
                                                        fontSize: 25,
                                                        fontWeight: "700",
                                                        marginLeft: "10.4%",
                                                    }}
                                                >
                                                    Indicaciones
                                                </StyledSubtitle>
                                            </Grid>
                                            <Grid item md={12}>
                                                <StyledTitulo1
                                                    style={{
                                                        marginTop: "-12.9%",
                                                        fontFamily: "Montserrat, medium",
                                                        color: "#666666",
                                                        fontSize: 15,
                                                        fontWeight: "600",
                                                        marginLeft: "10%",
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: epiprot.indications_text.content,
                                                    }}
                                                ></StyledTitulo1>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={6} className="">
                                            <StyledImageGeneral
                                                src={epiprot.indications_image.content}
                                                style={{
                                                    width: "100%",
                                                    marginTop: "-5.8%",
                                                    height: "124%",
                                                    marginLeft: "4.5%",
                                                }}
                                                alt={epiprot.indications_image.alt}
                                            />
                                        </Grid>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <StyledImageResponsive
                                                src={epiprot.iNDICACIONES_RESPONSIVE3.content}
                                                alt={epiprot.iNDICACIONES_RESPONSIVE3.alt}
                                                style={{maxWidth: "100%"}}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <StyledTitleText>Indicaciones</StyledTitleText>
                                            <StyledDescriptionText
                                                dangerouslySetInnerHTML={{
                                                    __html: epiprot.indications_text.content,
                                                }}
                                            ></StyledDescriptionText>
                                        </Grid>
                                    </React.Fragment>
                                )}
                            </Grid>
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
                        epiprot && (
                            <>
                                {width > 1024 ? (
                                    <React.Fragment>
                                        <StyledTitulo
                                            style={{
                                                marginTop: "4.2%",
                                                fontFamily: "Montserrat, bold",
                                                fontSize: 25,
                                                fontWeight: "700",
                                                marginLeft: "5.1%",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: epiprot.aplicacion_title.content,
                                            }}
                                        ></StyledTitulo>
                                        <StyledTitulo1
                                            style={{
                                                marginTop: "-4.5%",
                                                fontFamily: "Montserrat, medium",
                                                color: "#666666",
                                                fontSize: 15,
                                                fontWeight: "600",
                                                marginLeft: "5.2%",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: epiprot.aplicacion_text.content,
                                            }}
                                        ></StyledTitulo1>
                                        <Grid item md={12} className="d-flex justify-center">
                                            <StyledImageGeneral
                                                src={epiprot.aplicacion_image.content}
                                                style={{
                                                    width: "97%",
                                                    marginLeft: "5.3%",
                                                    marginTop: "0.5%",
                                                }}
                                                alt={epiprot.aplicacion_image.alt}
                                            />
                                        </Grid>
                                        <StyledTitulo1
                                            style={{
                                                marginTop: "-4.9%",
                                                fontFamily: "Montserrat, medium",
                                                color: "#666666",
                                                fontSize: 15,
                                                fontWeight: "600",
                                                marginLeft: "5.2%",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: epiprot.aplicacion_para.content,
                                            }}
                                        ></StyledTitulo1>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <StyledTitleText
                                            dangerouslySetInnerHTML={{
                                                __html: epiprot.aplicacion_title.content,
                                            }}
                                        ></StyledTitleText>
                                        <StyledDescriptionText
                                            dangerouslySetInnerHTML={{
                                                __html: epiprot.aplicacion_text.content,
                                            }}
                                        ></StyledDescriptionText>
                                        <Grid container className="justify-center">
                                            <StyledImageResponsive
                                                src={epiprot.aplicacion_responsive3.content}
                                                alt={epiprot.aplicacion_responsive3.alt}
                                            />
                                        </Grid>
                                        <StyledDescriptionText
                                            dangerouslySetInnerHTML={{
                                                __html: epiprot.aplicacion_para.content,
                                            }}
                                        ></StyledDescriptionText>
                                    </React.Fragment>
                                )}
                            </>
                        )
                    }
                </>
            )
        },
        {
            name: "Condiciones de alcenamiento",
            id: "Condiciones de alcenamiento",
            title: "Condiciones de alcenamiento",
            content: (
                <>
                    {
                        epiprot && (
                            <>
                                {width > 1024 ? (
                                    <Grid container className="mt-5">
                                        {epiprot.conditions &&
                                            epiprot.conditions.map((item: any, key: number) => (
                                                <Grid
                                                    key={key}
                                                    item
                                                    md={6}
                                                    className="d-flex justify-center"
                                                >
                                                    <StyledImageGeneral
                                                        src={item.content}
                                                        alt={item.alt}
                                                        style={{width: "100%", marginLeft: "5%"}}
                                                    />
                                                </Grid>
                                            ))}
                                    </Grid>
                                ) : (
                                    <>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            className="d-flex justify-center"
                                        >
                                            <StyledImageResponsive
                                                src={epiprot.manipulacion_responsive_1.content}
                                                alt={epiprot.manipulacion_responsive_1.alt}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            className="d-flex justify-center"
                                        >
                                            <StyledImageResponsive
                                                src={epiprot.Condiciones_responsive.content}
                                                alt={epiprot.Condiciones_responsive.alt}
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
            name: "Datos legales",
            id: "Datos legales",
            title: "Datos legales",
            content: (
                <>
                    {
                        epiprot && (
                            <>
                                {epiprot.almacenamiento2 !== undefined && (
                                    <div
                                        style={{
                                            background: "#005D93",
                                            marginLeft: "0.1%",
                                            marginRight: "0px",
                                            marginTop: "1.3%",
                                            height: "5.4%",
                                            marginBottom: "2%"
                                        }}
                                        className="xl:py-16 lg:py-16 py-6"
                                    >
                                        {width > 1024 ? (
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: epiprot.almacenamiento2.content,
                                                }}
                                                className="text-white"
                                                style={{
                                                    padding: "0 160px",
                                                    marginTop: "-3.7%",
                                                    marginLeft: "-7.8%",
                                                    fontFamily: "Montserrat, medium",
                                                    fontSize: "17px",
                                                    lineHeight: "1.8",
                                                }}
                                            ></p>
                                        ) : (
                                            <StyledDescriptionWhiteText
                                                className="text-white"
                                                dangerouslySetInnerHTML={{
                                                    __html: epiprot.almacenamiento2.content,
                                                }}
                                            ></StyledDescriptionWhiteText>
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
            name: "Reporte de los eventos adversos",
            id: "Reporte de los eventos adversos",
            title: "Reporte de los eventos adversos",
            content: (
                <>
                    {
                        epiprot && (
                            <>
                                <Grid container>
                                    {width > 1024 ? (
                                        epiprot.final &&
                                        epiprot.final.map((item: any, key: number) => (
                                            <Grid
                                                key={key}
                                                item
                                                md={6}
                                                className="d-flex justify-center"
                                            >
                                                <StyledImageGeneral
                                                    src={item.content}
                                                    alt={item.alt}
                                                    style={{
                                                        width: "100%",
                                                        marginTop: "-1%",
                                                        marginLeft: "6%",
                                                    }}
                                                />
                                            </Grid>
                                        ))
                                    ) : (
                                        <>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={12}
                                                className="d-flex justify-center mt-5"
                                            >
                                                <StyledImageResponsive
                                                    src={epiprot.farmaco_responsive.content}
                                                    alt={epiprot.farmaco_responsive.alt}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                sm={12}
                                                md={12}
                                                className="d-flex justify-center mb-5"
                                            >
                                                <StyledImageResponsive
                                                    src={epiprot.Reporte_responsive.content}
                                                    alt={epiprot.Reporte_responsive.alt}
                                                />
                                            </Grid>
                                        </>
                                    )}
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
            {login.token === undefined ? (
                <React.Fragment>
                    {!firstImage ? (
                        <div className="d-flex justify-center">
                            {width > 1024 ? (
                                <StyledImage
                                    style={{marginBottom: "5%"}}
                                    src={epiprot !== undefined && epiprot.banner_1.content}
                                    alt={epiprot !== undefined && epiprot.banner_1.alt}
                                    onClick={() => setFirstImage(true)}
                                />
                            ) : (
                                <StyledWounds1Image
                                    src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/tratamientoP.png"
                                    alt=""
                                    style={{width: width < 769 ? "100%" : "80%"}}
                                    onClick={() => setFirstImage(true)}
                                />
                            )}
                        </div>
                    ) : (
                        <Login {...obj} />
                    )}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {epiprot && (
                        <React.Fragment>
                            {/* banner principal */}
                            <StyledImage
                                style={{}}
                                src={epiprot !== undefined && epiprot.principal_banner.content}
                                alt={epiprot !== undefined && epiprot.principal_banner.alt}
                            />
                            {/* banner principal */}
                            <div className="my-4">
                                {
                                    epiprotArray.map((item: any, index: number) => (
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
            )}
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
                                itemRender === "tabla1"
                                    ? "http://api-praxis.eml.com.co/wp-content/uploads/2022/04/tabala-composicion.png"
                                    : "http://api-praxis.eml.com.co/wp-content/uploads/2022/04/tabla-prescribir.png"
                            }
                            alt=""
                            style={{width: "55%"}}
                        />
                    </Grid>

                    <Button onClick={handleClose}>Cerrar</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default Epiprot;
