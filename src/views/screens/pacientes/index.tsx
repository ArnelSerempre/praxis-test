import { Container, Grid } from "@mui/material";
import useControllers from "controllers";
import React, { useState } from "react";
import usePacientesStyles from "./pacientes.styles";
import _ from "lodash";
import { Link } from "react-router-dom";
import { StyledContainer } from "../terapeutic-number/terapeutic-number.style";
import {
  StyledDescriptionText,
  StyledTitleText,
} from "../products/Epiprot/epiprot.responsive.styles";

const Pacientes = () => {
  const { useScreenHooks } = useControllers();
  const { useBlog } = useScreenHooks();
  const { recentPosts } = useBlog("principal");

  // Styles
  const {
    StyledImage,
    StyledImage1,
    StyledSection,
    StyledTitle,
    StyledButtonViewMore,
  } = usePacientesStyles();

  /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));
  return (
    <React.Fragment>
      <StyledContainer maxWidth="lg">
        <Grid item lg={12}>
          <StyledImage1
            src={
              "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/pacientesfondobackground.png"
            }
            alt="Pacients' Image"
          />
        </Grid>
        <StyledSection
          item
          lg={12}
          background="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/historias_de_vida.png"
        >
          <Container>
            <Grid item lg={12}>
              {width > 1024 ? (
                <StyledTitle
                  className="text-center"
                  style={{ fontFamily: "montserrat, bold" }}
                >
                  Historias de vida
                </StyledTitle>
              ) : (
                <StyledTitleText className="text-center">
                  Historias de vida
                </StyledTitleText>
              )}
            </Grid>
            <Grid item lg={12}>
              <Grid container>
                {_.map(recentPosts, (item: any, index: number) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    className="xl:px-10 lg:px-10 px-3 pb-10"
                  >
                    <StyledImage
                      src={item.image}
                      alt="image"
                      className="xl:pb-6 lg:pb-6 pb-3 w-full"
                    />
                    {width > 1024 ? (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit nobis esse in suscipit et. Tempore labore
                        temporibus ut pariatur est dolore nihil earum! Similique
                        harum assumenda repudiandae quis. Inventore, autem?
                      </p>
                    ) : (
                      <StyledDescriptionText style={{ margin: "2% 0px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit nobis esse in suscipit et. 
                      </StyledDescriptionText>
                    )}
                    <Grid item lg={12} className="">
                      <Link to={`/detail/${item.ID}`}>
                        <StyledButtonViewMore>
                          Seguir Leyendo
                        </StyledButtonViewMore>
                      </Link>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        </StyledSection>
      </StyledContainer>
    </React.Fragment>
  );
};

export default Pacientes;
