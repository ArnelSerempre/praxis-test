import { Grid } from "@mui/material";
import useModels from "models";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { StyledContainer } from "../Home/home.styles";
import Login from "../Login";
import Cientifica from "./cientifica";
import Informacion from "./informacion";
import useProfesionalesStyles from "./profesionales.style";
import Salud from "./salud";

const Profesionales: FC = (): JSX.Element => {
  // Products
  const { StyledAppBarPage, StyledGrid, StyledGrid2 } =
    useProfesionalesStyles();

  const { useSelectors } = useModels();
  const { useAuthSelectors } = useSelectors();
  const { loginSelector } = useAuthSelectors();
  const login = useSelector(loginSelector);

  const obj = {
    background:
      "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/experanza.png",
    logo: "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/factor_epiprot1.png",
    show: true,
  };

  const { type } = useParams();

  return (
    <React.Fragment>
      {login.token === undefined ? (
        <React.Fragment>
          <Login {...obj} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledContainer maxWidth="lg">
            <StyledAppBarPage position="relative">
              <Grid container>
                <StyledGrid
                  xs={6}
                  className="flex justify-center items-center"
                  selected={type === "salud" && true}
                >
                  <Link
                    to="/profesionales/salud"
                    className="text-white text-md"
                  >
                    Factor de Crecimiento Epidérmico
                  </Link>
                </StyledGrid>
                <StyledGrid2
                  xs={6}
                  className="flex justify-center items-center"
                  selected={type === "cientifica" && true}
                >
                  <Link
                    to="/profesionales/cientifica"
                    className="text-white text-md"
                  >
                    Evidencia científica
                  </Link>
                </StyledGrid2>
              </Grid>
            </StyledAppBarPage>
            {type === "salud" ? (
              <Salud />
            ) : type === "cientifica" ? (
              <Cientifica />
            ) : (
              <Informacion />
            )}
          </StyledContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Profesionales;
