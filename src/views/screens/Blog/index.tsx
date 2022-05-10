import { Container, Grid } from "@mui/material";
import React, { FC, useState } from "react";
import useBlogStyles from "./blog.styles";
import _ from "lodash";
import useControllers from "controllers";
// import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import { StyledContainer } from "../Home/home.styles";
import { StyledTitleText } from "../products/Epiprot/epiprot.responsive.styles";

const Blog: FC = (): JSX.Element => {
  // Styles
  const {
    StyledImageBanner,
    StyledBlogFirstSection,
    StyledImage,
    StyledTextDescription,
    StyledButtonViewMore,
    StyledContainer2,
    StyledTitle2,
  } = useBlogStyles();

  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useBlog } = useScreenHooks();
  const { postsAssets, recentPosts } = useBlog("principal");
  const history = useHistory();

  /** States */
  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <React.Fragment>
      <StyledContainer maxWidth="lg">
        {postsAssets !== undefined && (
          <React.Fragment>
            <StyledImageBanner
              style={{ marginTop: width < 769 ? "29.4%" : "12%" }}
              src={postsAssets.blog_banner_principal?.content}
              alt="Blog's Banner Image"
            />
            <StyledBlogFirstSection
              style={{
                backgroundSize: width > 1024 ? "108% 100%" : "100% 100%",
              }}
              background={
                width > 1024 ? postsAssets.blog_background_recent?.content : ""
              }
              className="xl:py-12 py-8"
            >
              <Container>
                {width > 1024 ? (
                  <StyledTitle2
                    className="pb-16"
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontFamily: "montserrat, bold",
                      marginTop: "0%"
                    }}
                  >
                    Reciente
                  </StyledTitle2>
                ) : (
                  <StyledTitleText className="text-center">
                    Reciente
                  </StyledTitleText>
                )}
                <Grid container>
                  {_.map(recentPosts, (item: any, index: any) => {
                    if (index === 0) {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={3}
                          key={index}
                          className="px-6"
                        >
                          <StyledImage
                            src={postsAssets.blog_number_1?.content}
                            alt="pre-test"
                            style={{ position: "absolute   " }}
                          />
                          <Grid item lg={12}>
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%",
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    } else if (index === 1) {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={3}
                          key={index}
                          className="px-6"
                        >
                          <Grid item lg={12}>
                            <StyledImage
                              src={postsAssets.blog_number_2?.content}
                              alt="pre-test"
                              style={{ position: "absolute   " }}
                            />
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%",
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    } else if (index === 2) {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={3}
                          key={index}
                          className="px-6"
                        >
                          <Grid item lg={12}>
                            <StyledImage
                              src={postsAssets.blog_number_3?.content}
                              alt="pre-test"
                              style={{ position: "absolute   " }}
                            />
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%",
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    } else if (index === 3) {
                      return (
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={3}
                          key={index}
                          className="px-6"
                        >
                          <Grid item lg={12}>
                            <StyledImage
                              src={postsAssets.blog_number_4?.content}
                              alt="pre-test"
                              style={{ position: "absolute   " }}
                            />
                            <StyledImage
                              src={item.image}
                              alt="Test"
                              style={{ width: "100%" }}
                            />
                          </Grid>
                          <p
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                              marginTop: "8%",
                            }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Officiis, a obcaecati?
                          </p>
                          <StyledButtonViewMore
                            onClick={() => history.push(`/detail/${item.id}`)}
                            style={{
                              fontSize: width < 769 ? "12px" : "17px",
                              fontFamily: "Montserrat, medium",
                              color: "#666666",
                              fontWeight: "500",
                            }}
                          >
                            Seguir Leyendo
                          </StyledButtonViewMore>
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </Container>
            </StyledBlogFirstSection>
            <StyledContainer2>
              <Container className="xl:py-16 lg:py-14 py-6 mt-12">
                <Grid container>
                  {_.map(recentPosts, (item: any, index: any) => (
                    <Grid item sm={6} md={6} lg={4} className="xl:mt-12 lg:mt-12 px-6">
                      <Grid item lg={12}>
                        <StyledTitle2
                          style={{
                            fontSize: width > 1024 ? "22px" : width < 769 ? "17px" : "22px",
                            fontWeight: "700",
                            fontFamily: "Montserrat, bold",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur
                        </StyledTitle2>
                        <StyledTextDescription
                          style={{ fontSize: width > 1024 ? "15px" : width < 769 ? "12px" : "17px" }}
                          dangerouslySetInnerHTML={{
                            __html:
                              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, a obcaecati?",
                          }}
                        ></StyledTextDescription>
                        <StyledButtonViewMore
                          onClick={() => history.push(`/detail/${item.id}`)}
                          style={{
                            fontSize: width > 1024 ? "17px" : width < 769 ? "12px" : "17px",
                            fontFamily: "Montserrat, medium",
                            color: "#666666",
                            fontWeight: "500",
                          }}
                        >
                          Seguir Leyendo
                        </StyledButtonViewMore>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </StyledContainer2>
          </React.Fragment>
        )}
        {/* 
            
                
            </StyledBlogFirstSection>
            
            <StyledBlogFirstSection background="http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso 4.png" >
                <Container>
                    <Grid item lg={12} className="py-1 md:py-6">
                        <Grid item lg={12} className="flex justify-center">
                            <StyledTitle2>Comentarios</StyledTitle2>
                        </Grid>
                        <Grid item lg={12} className="py-8">
                            <Slider
                                slidesToShow={3}
                                slideToScroll={1}
                                arrows={true}
                                autoplay={true}
                                speed={5000}
                                responsive={[
                                    {
                                        breakpoint: 1025,
                                        settings: {
                                            slidesToShow: 2,
                                            arrows: false
                                        }
                                    },
                                    {
                                        breakpoint: 600,
                                        settings: {
                                            slidesToShow: 1,
                                            arrows: false
                                        }
                                    }
                                ]}
                            >
                                {
                                    _.map(comments, (item: any, index: any) => (
                                        <div>
                                            <Card sx={{ maxWidth: '100%' }} className="mr-6">
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="py-3">
                                                        {new Date(item.date).toDateString()}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className="py-3">
                                                        <b>{item.author_name}</b>
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom dangerouslySetInnerHTML={{ __html: item.content.rendered }}></Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </Grid>
                    </Grid>
                </Container>
            </StyledBlogFirstSection> */}
      </StyledContainer>
    </React.Fragment>
  );
};

export default Blog;
