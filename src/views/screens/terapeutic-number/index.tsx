import React, { FC, Fragment, useEffect, useState } from "react";
import useTerapeuticNumberStyles, {
  StyledContainer,
} from "./terapeutic-number.style";
import Heridas from "./Heridas";
import Ulceras from "./ulceras";
import { useParams, Link } from "react-router-dom";
import Diabetes from "./diabetes/index";
// import Hemorroides from "./hemorroides";
import { Grid } from "@mui/material";
// import { Container } from "@mui/material";

const TerapeuticNumber: FC = (): JSX.Element => {
  const {
    StyledAppBarPage,
    StyledGrid,
    StyledGrid3,
    // StyledGrid4,
    StyledGrid2,
  } = useTerapeuticNumberStyles();

  const { type } = useParams();

  const [width, setWidth] = useState<number>(window.innerWidth);

 

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <React.Fragment>
      <StyledContainer maxWidth="lg">
        <StyledAppBarPage position="relative">
          <Grid container>
            <StyledGrid
              xs={4}
              className="flex justify-center items-center"
              selected={type === "heridas" && true}
            >
              <Link
                to="/terapeutic-number/heridas"
                className="text-white text-md "
                style={{
                  fontSize: width <= 767 ? "10px" : "15px",
                }}
              >
                Heridas
              </Link>
            </StyledGrid>
            <StyledGrid2
              xs={4}
              className="flex justify-center items-center"
              selected={type === "ulceras" && true}
            >
              <Link
                to="/terapeutic-number/ulceras"
                className="text-white text-md"
                style={{
                  fontSize: width <= 767 ? "10px" : "15px",
                }}
              >
                Úlceras
              </Link>
            </StyledGrid2>
            <StyledGrid3
              xs={4}
              className="flex justify-center items-center"
              selected={type === "diabetes" && true}
            >
              <Link
                to="/terapeutic-number/diabetes"
                className="text-white text-md"
                style={{
                  fontSize: width <= 767 ? "10px" : "15px",
                }}
              >
                Diabetes
              </Link>
            </StyledGrid3>
            {/* <StyledGrid4
              xs={3}
              className="flex justify-center items-center"
              selected={type === "enfermedad-hemorrodial" && true}
            >
              <Link
                to="/terapeutic-number/enfermedad-hemorrodial"
                className="text-white text-md"
                style={{
                  fontSize: width <= 767 ? "10px" : "15px",
                }}
              >
                Enfermedad hemorroidal
              </Link>
            </StyledGrid4> */}
          </Grid>
        </StyledAppBarPage>

        {type === "heridas" ? (
          <Heridas />
        ) : type === "ulceras" ? (
          <Ulceras />
        ) : type === "diabetes" ? (
          <Diabetes />
        ) : (
          <Fragment></Fragment>
          // <Hemorroides />
        )}
      </StyledContainer>
    </React.Fragment>
  );
};

export default TerapeuticNumber;
