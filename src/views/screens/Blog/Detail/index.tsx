import { Container, Grid } from "@mui/material";
// import useControllers from "controllers";
import React, { FC, useState } from "react";
import useBlogStyles from "../blog.styles";
import "styles/styles.scss";
import { StyledContainer } from "views/screens/Home/home.styles";
import {
  StyledImageResponsive,
  StyledTitleText,
} from "views/screens/products/Epiprot/epiprot.responsive.styles";
import { StyledDescripcionFactores } from "views/screens/terapeutic-number/Heridas/heridas.responsive.styles";
// import { Controller } from "react-hook-form";

const BlogDetail: FC = (): JSX.Element => {
  // // Styles
  const {
    StyledImage,
    StyledDate,
    StyledTitlePost,
    StyledTextData,
    StyledTitle2,
    StyledTextarea,
    StyledButtonViewMore,
  } = useBlogStyles();

  console.log();

  //   const { useScreenHooks } = useControllers();
  //   const { useBlog } = useScreenHooks();
  // const { control, handleSubmit, handleComment, post, login } = useBlog();

  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <React.Fragment>
      <StyledContainer maxWidth="lg">
        {/* <p>Hola</p> */}
        {width > 1024 ? (
          <StyledImage
            src={
              "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/portadablog.png"
            }
            alt="Post's Image"
          />
        ) : (
          <StyledImageResponsive
            src={
              "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/portadablog.png"
            }
            alt="Post's Image"
            className="pt-24"
          ></StyledImageResponsive>
        )}

        <Container>
          <StyledDate>15-03-2022</StyledDate>
          {width > 1024 ? (
            <StyledTitlePost
              className="pt-12 text-center"
              style={{
                fontSize: "30px",
                fontFamily: "montserrat, bold",
                paddingBottom: "0%",
                padding: "0 48px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </StyledTitlePost>
          ) : (
            <StyledTitleText className="text-center pt-4">
              Lorem ipsum dolor sit amet consectetur.
            </StyledTitleText>
          )}
          <StyledTextData className="xl:pt-12 pb-6">
            <Grid container>
              {width > 1024 ? (
                <React.Fragment>
                  <Grid
                    md={12}
                    item
                    style={{
                      fontSize: "17px",
                      fontFamily: "Montserrat, medium",
                      color: "#666666",
                      fontWeight: "500",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nostrum quam, nisi nulla repudiandae vitae quidem quas atque
                    porro eligendi, minima ratione doloribus non nemo
                    repellendus, iusto deleniti itaque aliquid dolorum! Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, corrupti id hic quam omnis nam magni fuga sint
                    totam eius cum velit! Unde non adipisci accusamus
                    perferendis ad sed fuga. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam voluptatum
                    reprehenderit perspiciatis vel ad, sed alias voluptas labore
                    error excepturi cumque sequi eveniet inventore minus
                    architecto aspernatur ipsa, ab dignissimos. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Ratione quas
                    provident dolore? Earum numquam, minima impedit accusantium,
                    quas consequuntur inventore consectetur, cum ullam commodi
                    molestias mollitia. Ut facere est dolorem. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorum repudiandae
                    asperiores ex ab dolorem. Voluptas, reprehenderit numquam
                    nihil dolores dolore ad commodi veritatis dolor et nisi,
                    officiis assumenda? Magnam, alias.
                  </Grid>

                  <Grid
                    item
                    md={6}
                    className="pt-6"
                    style={{
                      fontSize: "17px",
                      fontFamily: "Montserrat, medium",
                      color: "#666666",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nostrum quam, nisi nulla repudiandae vitae quidem quas atque
                    porro eligendi, minima ratione doloribus non nemo
                    repellendus, iusto deleniti itaque aliquid dolorum! Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, corrupti id hic quam omnis nam magni fuga sint
                    totam eius cum velit! Unde non adipisci accusamus
                    perferendis ad sed fuga. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam voluptatum
                    reprehenderit perspiciatis vel ad, sed alias voluptas labore
                    error excepturi cumque sequi eveniet inventore minus
                    architecto aspernatur ipsa, ab dignissimos. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Ratione quas
                    provident dolore? Earum numquam, minima impedit accusantium,
                    quas consequuntur inventore consectetur, cum ullam commodi
                    molestias mollitia. Ut facere est dolorem. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorum repudiandae
                    asperiores ex ab dolorem. Voluptas, reprehenderit numquam
                    nihil dolores dolore ad commodi veritatis dolor et nisi,
                    officiis assumenda? Magnam, alias.
                  </Grid>

                  <Grid item md={6} className="pt-6">
                <img
                  src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/cuadro-azul.png"
                  alt=""
                  className="ml-6 w-full"
                />{" "}
              </Grid>

              <Grid
                md={12}
                item
                className="mt-6"
                style={{
                  fontSize: "17px",
                  fontFamily: "Montserrat, medium",
                  color: "#666666",
                  fontWeight: "500",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum quam, nisi nulla repudiandae vitae quidem quas atque
                porro eligendi, minima ratione doloribus non nemo repellendus,
                iusto deleniti itaque aliquid dolorum! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Voluptatum, corrupti id hic
                quam omnis nam magni fuga sint totam eius cum velit! Unde non
                adipisci accusamus perferendis ad sed fuga. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quibusdam voluptatum
                reprehenderit perspiciatis vel ad, sed alias voluptas labore
                error excepturi cumque sequi eveniet inventore minus architecto
                aspernatur ipsa, ab dignissimos. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ratione quas provident dolore?
                Earum numquam, minima impedit accusantium, quas consequuntur
                inventore consectetur, cum ullam commodi molestias mollitia. Ut
                facere est dolorem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolorum repudiandae asperiores ex ab dolorem.
                Voluptas, reprehenderit numquam nihil dolores dolore ad commodi
                veritatis dolor et nisi, officiis assumenda? Magnam, alias.
              </Grid>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <StyledDescripcionFactores style={{ margin: "4%" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nostrum quam, nisi nulla repudiandae vitae quidem quas atque
                    porro eligendi, minima ratione doloribus non nemo
                    repellendus, iusto deleniti itaque aliquid dolorum! Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, corrupti id hic quam omnis nam magni fuga sint
                    totam eius cum velit! Unde non adipisci accusamus
                    perferendis ad sed fuga. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam voluptatum
                    reprehenderit perspiciatis vel ad, sed alias voluptas labore
                    error excepturi cumque sequi eveniet inventore minus
                    architecto aspernatur ipsa, ab dignissimos. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Ratione quas
                    provident dolore? Earum numquam, minima impedit accusantium,
                    quas consequuntur inventore consectetur, cum ullam commodi
                    molestias mollitia. Ut facere est dolorem. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorum repudiandae
                    asperiores ex ab dolorem. Voluptas, reprehenderit numquam
                    nihil dolores dolore ad commodi veritatis dolor et nisi,
                    officiis assumenda? Magnam, alias.
                  </StyledDescripcionFactores>

                  <StyledDescripcionFactores style={{ margin: "4%" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nostrum quam, nisi nulla repudiandae vitae quidem quas atque
                    porro eligendi, minima ratione doloribus non nemo
                    repellendus, iusto deleniti itaque aliquid dolorum! Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, corrupti id hic quam omnis nam magni fuga sint
                    totam eius cum velit! Unde non adipisci accusamus
                    perferendis ad sed fuga. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam voluptatum
                    reprehenderit perspiciatis vel ad, sed alias voluptas labore
                    error excepturi cumque sequi eveniet inventore minus
                    architecto aspernatur ipsa, ab dignissimos. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Ratione quas
                    provident dolore? Earum numquam, minima impedit accusantium,
                    quas consequuntur inventore consectetur, cum ullam commodi
                    molestias mollitia. Ut facere est dolorem. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorum repudiandae
                    asperiores ex ab dolorem. Voluptas, reprehenderit numquam
                    nihil dolores dolore ad commodi veritatis dolor et nisi,
                    officiis assumenda? Magnam, alias.
                  </StyledDescripcionFactores>

                  <Grid item md={6} className="pt-6">
                <StyledImageResponsive
                  src="http://api-praxis.eml.com.co/wp-content/uploads/2022/03/cuadro-azul.png"
                  alt=""
                  className="w-full"
                />
              </Grid>
              <StyledDescripcionFactores style={{ margin: "4%" }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nostrum quam, nisi nulla repudiandae vitae quidem quas atque
                    porro eligendi, minima ratione doloribus non nemo
                    repellendus, iusto deleniti itaque aliquid dolorum! Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatum, corrupti id hic quam omnis nam magni fuga sint
                    totam eius cum velit! Unde non adipisci accusamus
                    perferendis ad sed fuga. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam voluptatum
                    reprehenderit perspiciatis vel ad, sed alias voluptas labore
                    error excepturi cumque sequi eveniet inventore minus
                    architecto aspernatur ipsa, ab dignissimos. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Ratione quas
                    provident dolore? Earum numquam, minima impedit accusantium,
                    quas consequuntur inventore consectetur, cum ullam commodi
                    molestias mollitia. Ut facere est dolorem. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorum repudiandae
                    asperiores ex ab dolorem. Voluptas, reprehenderit numquam
                    nihil dolores dolore ad commodi veritatis dolor et nisi,
                    officiis assumenda? Magnam, alias.
                  </StyledDescripcionFactores>
                </React.Fragment>
              )}

             
            </Grid>
          </StyledTextData>
          <Grid className="xl:pt-16 xl:mt-12">
            {
              width > 1024 ? (
                <StyledTitle2
              className="py-6"
              style={{
                fontSize: "30px",
                fontFamily: "montserrat, bold",
                paddingBottom: "0%",
                fontWeight: "600",
              }}
            >
              Deja tu respuesta
            </StyledTitle2>
              ) : (
                <StyledTitleText>
                  Deja tu respuesta
                </StyledTitleText>
              )
            }
            
            {/* <Controller
              control={control}
              name="comment"
              render={({ field }) => ( */}
            <StyledTextarea
              style={{ padding: 15 }}
              //   onChange={field.onChange}
              //   value={field.value}
            ></StyledTextarea>
            {/* )}
            /> */}

            <Grid item lg={12} className="py-2 flex justify-center">
              <StyledButtonViewMore /*onClick={handleSubmit(handleComment)}*/>
                Enviar
              </StyledButtonViewMore>
            </Grid>
          </Grid>
          {/* {login.token !== undefined && post.categories === "Sin categoría" && (
          <Grid className="py-6">
            <StyledTitle2 className="py-6">Deja tu respuesta</StyledTitle2>
            <Controller
              control={control}
              name="comment"
              render={({ field }) => (
                <StyledTextarea
                  onChange={field.onChange}
                  value={field.value}
                ></StyledTextarea>
              )}
            />

            <Grid item lg={12} className="py-2 flex justify-center">
              <StyledButtonViewMore onClick={handleSubmit(handleComment)}>
                Enviar
              </StyledButtonViewMore>
            </Grid>
          </Grid>
        )} */}
        </Container>
      </StyledContainer>
    </React.Fragment>
  );
};

export default BlogDetail;
