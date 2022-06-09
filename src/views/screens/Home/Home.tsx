import { Grid } from "@mui/material";
import useControllers from "controllers";
import { Fragment } from "react";
import {
  StyledAccordion,
  StyledContainer,
  StyledGrid,
  StyledImage,
  StyledImgSections,
  StyledLink,
  StyledLink2,
  StyledSectionsHome,
  StyledTitleSection
} from "./home.styles";

const Home = () => {
  // Controllers
  const { useGeneralHooks, useScreenHooks } = useControllers();
  const { useGeneral } = useGeneralHooks();
  const { width } = useGeneral();
  const { useHome } = useScreenHooks();
  const {
    useContentHome,
    handlerHover,
    hover
  } = useHome();
  const { content } = useContentHome();

  console.log(content)

  return width >= 1024 ? (
    <Fragment>
      <StyledContainer maxWidth="lg">
        {/* Main image */}
        <StyledImage
          src={content.homeBanner.content}
          alt={content.homeBanner.alt}
          width={width}
        />

        {/* Sections */}
        <StyledSectionsHome background={content.background.content}>
          <Grid item lg={12} className="text-center">
            <StyledTitleSection>
              Secciones:
            </StyledTitleSection>
          </Grid>
          <StyledGrid item lg={12} className="flex justify-center">
            <StyledLink
              href="/terapeutic-number/heridas"
              onMouseOver={() => handlerHover("over", 1)}
              onMouseLeave={() => handlerHover("leave", 1)}
              hover={hover.hover && hover.id === 1}
            >
              {
                hover.hover && hover.id === 1 ? (
                  <StyledImgSections
                    alt={content.section1.content}
                    src={content.section1.sectionHover?.content}
                  />
                ) : (
                  <StyledImgSections
                    alt={content.section1.content}
                    src={content.section1.section?.content}
                  />
                )
              }
            </StyledLink>
            <StyledLink2
              href="/aliados/pacientes"
              onMouseOver={() => handlerHover("over", 2)}
              onMouseLeave={() => handlerHover("leave", 2)}
              hover={hover.hover && hover.id === 2}
            >
              {
                hover.hover && hover.id === 2 ? (
                  <StyledImgSections
                    alt={content.section2.content}
                    src={content.section2.sectionHover?.content}
                  />
                ) : (
                  <StyledImgSections
                    alt={content.section2.content}
                    src={content.section2.section?.content}
                  />
                )
              }
            </StyledLink2>
            <StyledLink2
              href="/products/Vulcosan"
              onMouseOver={() => handlerHover("over", 3)}
              onMouseLeave={() => handlerHover("leave", 3)}
              hover={hover.hover && hover.id === 3}
            >
              {
                hover.hover && hover.id === 3 ? (
                  <StyledImgSections
                    alt={content.section3.content}
                    src={content.section3.sectionHover?.content}
                  />
                ) : (
                  <StyledImgSections
                    alt={content.section3.content}
                    src={content.section3.section?.content}
                  />
                )
              }
            </StyledLink2>
            <StyledLink2
              href="/products/Vulcosan"
              onMouseOver={() => handlerHover("over", 4)}
              onMouseLeave={() => handlerHover("leave", 4)}
              hover={hover.hover && hover.id === 4}
            >
              {
                hover.hover && hover.id === 4 ? (
                  <StyledImgSections
                    alt={content.section4.content}
                    src={content.section4.sectionHover?.content}
                  />
                ) : (
                  <StyledImgSections
                    alt={content.section4.content}
                    src={content.section4.section?.content}
                  />
                )
              }
            </StyledLink2>
          </StyledGrid>
        </StyledSectionsHome>
        <StyledAccordion>
          <figure>
            <img src={content.misionVision.content} alt={content.misionVision.alt} />
            <input type="radio" name="ac--radio" checked={true}/>
            <figure>
              <img src={content.gerencialTeam.content} alt={content.gerencialTeam.alt} />
              <input type="radio" name="ac--radio"/>
            </figure>
          </figure>

        </StyledAccordion>
      </StyledContainer>
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
}

export default Home;