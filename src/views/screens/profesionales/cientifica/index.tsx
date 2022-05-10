import React, { useState } from "react";
import { Grid } from "@mui/material";
import useCientificaStyles from "./cientifica.style";
import { Link } from "react-router-dom";
import useControllers from "controllers";
import { StyledTitleText } from "views/screens/products/Epiprot/epiprot.responsive.styles";

const Cientifica = () => {
  // Styles
  const { StyledSection4, StyledTitleSection2, StyledImage2, ContainerStyled } =
    useCientificaStyles();

  const { useScreenHooks } = useControllers();
  const { useProducts } = useScreenHooks();
  const { products } = useProducts();
  const { cuidadores } = products;
  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <React.Fragment>
      <StyledSection4 background={cuidadores !== undefined && cuidadores.artesanalBackground.content}>
        <ContainerStyled>
          {
            width > 1024 ? (
              <Grid item md={12} className="flex justify-center py-12">
            <StyledTitleSection2>Evidencia científica</StyledTitleSection2>
          </Grid>
            ) : (
              <StyledTitleText className="text-center pt-6">
                Evidencia científica
              </StyledTitleText>
            )
          }
          
          <Grid item md={12} className="xl:py-12 pb-6 py-6 d-flex justify-center">
            <Link to="/" className="d-flex justify-center">
              <StyledImage2  style={{ marginTop: "-6%", width: "80%" }} src={cuidadores !== undefined && cuidadores.evidencia_cientificac.content   } />
            </Link>
          </Grid>
        </ContainerStyled>
      </StyledSection4>
    </React.Fragment>
  );
};

export default Cientifica;
