import React, { FC, useEffect, useState } from "react";
import useControllers from "controllers";
import useHomeStyles, { StyledContainer, StyledImage } from "./home.styles";
import { Container, Grid } from "@mui/material";
import "styles/styles.scss";

const Home: FC = (): JSX.Element => {
  // Controllers
  // const { useScreenHooks } = useControllers();
  // const { useHome } = useScreenHooks();
  // const {
  //   gerencialTeam,
  //   homeBanner,
  //   misionVision,
  //   handlerHover,
  //   hover,
  //   section1,
  //   section2,
  // } = useHome();

  // Styles
  const {
    StyledSectionsHome,
    StyledTitleSection,  
    StyledImgSections2,
    StyledImgSections3,
    StyledImgSections4,
    StyledSectionPraxis,
  } = useHomeStyles();

  // console.log(misionResponsive);

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
      <span>Hola</span>
    // <React.Fragment>
    //   {/* banner */}
    //   <StyledContainer maxWidth="lg">
    //     { width <= 1023 ? (
    //       <StyledImage
    //       style={{ marginTop: width >= 768 ? "11%" : (width >= 500 && width <= 767) ? '22%' : '29%' }}
    //       src={banner_responsive1.content}
    //       alt=""
    //       />
    //     ) : (
    //       <StyledImage
    //       style={{ marginTop:  "12%" }}
    //       src={homeBanner.content}
    //       alt=""
    //       />
    //
    //     )}
    //   {/* banner */}
    //
    //     {/* secciones */}
    //     <StyledSectionsHome
    //       background={background.content}
    //       style={{ paddingBottom: "1rem", paddingTop: width >= 1024 ? "4rem" : (width >= 300 && width <= 767) ? "1rem" :"3rem"  }}
    //     >
    //       <Grid item lg={12} className="text-center">
    //         <StyledTitleSection
    //           style={{
    //             fontSize: width >= 1024 ? "45px" : (width >= 300 && width <= 767) ? "20px" : "45px",
    //             fontFamily: "montserrat, bold",
    //           }}
    //         >
    //           Secciones:
    //         </StyledTitleSection>
    //       </Grid>
    //
    //       <Grid
    //         item
    //         lg={12}
    //         className="flex justify-center"
    //         style={{
    //           paddingLeft: width >= 1024 ? "0%" : "10%",
    //           paddingRight: width >= 1024 ? "0%" : "10%",
    //           paddingTop: width >= 1024 ? "3.5rem" : (width >= 300 && width <= 767) ? "2.5rem !important" : "3.5rem",
    //           paddingBottom: width >= 1024 ? "3.5rem" : (width >= 300 && width <= 767) ? "2.5rem !important" : "3.5rem"
    //         }}
    //       >
    //         <a
    //           href="/terapeutic-number/heridas"
    //           // className="col-lg-3"
    //           onMouseLeave={() => handlerHover("leave", 1)}
    //           onMouseOver={() => handlerHover("over", 1)}
    //           style={{ zIndex: hover.hover && hover.id === 1 ? 1 : undefined }}
    //         >
    //           {hover.hover && hover.id === 1 ? (
    //             <StyledImgSections1
    //               src={section1 && section1.sectionHover?.content}
    //               alt={section1.sectionHover?.alt}
    //               style={{ width: 257 }}
    //               // onClick={() => history.push("/terapeutic-number/heridas")}
    //             />
    //           ) : (
    //             <StyledImgSections1
    //               src={section1 && section1.section?.content}
    //               alt={section1.section?.alt}
    //             />
    //           )}
    //         </a>
    //         <a
    //           href="/aliados/pacientes"
    //           className="2xl:-ml-12 -ml-4 sm:-ml-12 xs:-ml-12 "
    //           onMouseLeave={() => handlerHover("leave", 2)}
    //           onMouseOver={() => handlerHover("over", 2)}
    //           style={{ zIndex: hover.hover && hover.id === 2 ? 1 : undefined }}
    //         >
    //           {hover.hover && hover.id === 2 ? (
    //             <StyledImgSections2
    //               src={section2 && section2.sectionHover?.content}
    //               alt={section2.sectionHover?.alt}
    //               style={{ width: 257 }}
    //               // onClick={() => history.push("/aliados/pacientes")}
    //             />
    //           ) : (
    //             <StyledImgSections2
    //               src={section2 && section2.section?.content}
    //               alt={section2 && section2.section?.alt}
    //             />
    //           )}
    //         </a>
    //         <a
    //           href="/products/Vulcosan"
    //           className="2xl:-ml-12 -ml-4 sm:-ml-12 xs:-ml-12"
    //           onMouseLeave={() => handlerHover("leave", 3)}
    //           onMouseOver={() => handlerHover("over", 3)}
    //           style={{ zIndex: hover.hover && hover.id === 3 ? 1 : undefined }}
    //         >
    //           {hover.hover && hover.id === 3 ? (
    //             <StyledImgSections3
    //               src={section3 && section3.sectionHover?.content}
    //               alt={section3.sectionHover?.alt}
    //               // onClick={() => history.push("/products/Vulcosan")}
    //               style={{ width: 257 }}
    //             />
    //           ) : (
    //             <StyledImgSections3
    //               src={section3 && section3.section?.content}
    //               alt={section3.section?.alt}
    //             />
    //           )}
    //         </a>
    //         <a
    //           href="/blog"
    //           className="2xl:-ml-12 -ml-4 sm:-ml-12 xs:-ml-12"
    //           onMouseLeave={() => handlerHover("leave", 4)}
    //           onMouseOver={() => handlerHover("over", 4)}
    //           style={{ zIndex: hover.hover && hover.id === 4 ? 1 : undefined }}
    //         >
    //           {hover.hover && hover.id === 4 ? (
    //             <StyledImgSections4
    //               src={section4 && section4.sectionHover?.content}
    //               alt={section3.sectionHover?.alt}
    //               // onClick={() => history.push("/blog")}
    //               style={{ width: 257 }}
    //             />
    //           ) : (
    //             <StyledImgSections4
    //               src={section4 && section4.section?.content}
    //               alt={section4 && section4.section?.alt}
    //             />
    //           )}
    //         </a>
    //       </Grid>
    //     </StyledSectionsHome>
    //     {/* seccciones */}
    //
    //     {/* mision vision */}
    //     <StyledSectionPraxis className="py-12">
    //       <Container maxWidth="lg">
    //         <Grid container className="lg:py-12">
    //           {width <= 1023 ? (
    //             <img
    //               src={misionResponsive.content}
    //               alt={misionResponsive.alt}
    //               width="100%"
    //             />
    //           ) : (
    //             <img
    //               src={misionVision.content}
    //               alt={misionVision.alt}
    //               width="100%"
    //             />
    //           )}
    //         </Grid>
    //         {width <= 1023 ? (
    //           <img
    //             src={gerencialResponsive.content}
    //             alt={gerencialResponsive.alt}
    //             width="100%"
    //             className="pt-6 lg:pt-16 xs:pt-20 md:pt-20"
    //           />
    //         ) : (
    //           <img
    //             src={gerencialTeam.content}
    //             alt={gerencialTeam.alt}
    //             width="100%"
    //             className="pt-6 lg:pt-16"
    //           />
    //         )}
    //       </Container>
    //     </StyledSectionPraxis>
    //     {/* mision vision */}
    //   </StyledContainer>
    // </React.Fragment>
  );
};

export default Home;
