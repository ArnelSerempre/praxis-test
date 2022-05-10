import React, { FC, useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  Fade,
  Grid,
  List,
  SwipeableDrawer,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import useHeaderStyles from "./header.style";
import useControllers from "controllers";
import { Link, useHistory } from "react-router-dom";
import _ from "lodash";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Header: FC = (): JSX.Element => {
  const {
    AppBarComponent,
    StyledButtonLogin,
    StyledAccountIcon,
    StyledButtonMenu,
    StyledContainerMenu,
    StyledHamburgerIcon,
    StyledContainerMenu2,
    StyledListItem,
  } = useHeaderStyles();

  const history = useHistory();

  const [width, setWidth] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const { useScreenHooks, useComponentsHooks } = useControllers();
  const { useHeader } = useComponentsHooks();
  const {
    open,
    closeDrawer,
    openDrawer,
    expandMenu,
    expand,
    expand1,
    expand2,
    expand3,
    expand4,
    login,
    closeSesion,
  } = useHeader();
  const { useGeneral } = useScreenHooks();
  const { menus } = useGeneral();

  return (
    <React.Fragment>
      <AppBarComponent position="fixed">
        <Container maxWidth="xl">
          <Toolbar
            className="py-6"
            style={{ justifyContent: "space-between" }}
            variant="regular"
          >
            {width > 1024 && (
              <img
                src={
                  "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/Recurso-13.png"
                }
                alt="Logo Profix"
                onClick={() => history.push("/")}
              />
            )}
            <StyledContainerMenu item md={12}>
              <Grid item md={12} className="flex justify-end">
                {login.token !== undefined ? (
                  <React.Fragment>
                    {login.user.role === "admin" ? (
                      <React.Fragment>
                        <StyledButtonLogin
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Hola! Dr(a). {login.user.fullname}
                          <StyledAccountIcon />
                        </StyledButtonLogin>
                        <div
                          className="dropdown-menu pr-6"
                          aria-labelledby="navbarDropdown"
                        >
                          <StyledButtonMenu>
                            <Link to="/active-users">Activar usuarios</Link>
                          </StyledButtonMenu>

                          <StyledButtonMenu
                            isSubmenu
                            onClick={() => closeSesion()}
                          >
                            Cerrar Sesion
                          </StyledButtonMenu>
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <StyledButtonLogin
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Hola! Dr(a). {login.user.fullname}
                          <StyledAccountIcon />
                        </StyledButtonLogin>
                        <div
                          className="dropdown-menu pr-6"
                          aria-labelledby="navbarDropdown"
                        >
                          <StyledButtonMenu onClick={() => closeSesion()}>
                            Cerrar Sesion
                          </StyledButtonMenu>
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <Link to="/login">
                    <StyledButtonLogin>
                      Iniciar Sesión
                      <StyledAccountIcon />
                    </StyledButtonLogin>
                  </Link>
                )}
              </Grid>
              <Grid item md={12} className="flex justify-end">
                <Box
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  className="flex justify-end mt-4"
                >
                  {_.map(menus, (item: any, index: any) => {
                    if (
                      item.submenus !== undefined &&
                      item.submenus.length > 0
                    ) {
                      return (
                        <div className="nav-item dropdown" key={index}>
                          <StyledButtonMenu
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {item.post_title}
                          </StyledButtonMenu>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            {_.map(
                              item.submenus,
                              (submenu: any, idx: number) => (
                                <React.Fragment>
                                  <StyledButtonMenu key={idx} isSubmenu>
                                    <Link to={submenu.url}>
                                      {submenu.post_title}
                                    </Link>
                                  </StyledButtonMenu>
                                </React.Fragment>
                              )
                            )}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <Link to={item.url} key={index}>
                          <StyledButtonMenu>{item.post_title}</StyledButtonMenu>
                        </Link>
                      );
                    }
                  })}
                </Box>
              </Grid>
            </StyledContainerMenu>
            <StyledContainerMenu2 item md={12} sm={12} xs={12}>
              <Button onClick={openDrawer}>
                <StyledHamburgerIcon color="#004289" />
              </Button>
              <SwipeableDrawer
                anchor="right"
                open={open}
                onOpen={openDrawer}
                onClose={closeDrawer}
                style={{ width: "100%" }}
              >
                <Box className="px-6 py-6">
                  <List>
                    {login.token !== undefined ? (
                      <React.Fragment>
                        {login.user.role === "admin" ? (
                          <React.Fragment>
                            <StyledListItem className="justify-between shadow-md mb-6">
                              <p
                                onClick={() => closeDrawer()}
                                style={{ fontSize: 17 }}
                              >
                                X
                              </p>
                              <img
                                src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/praxis_responsive.png"
                                alt=""
                                width="100"
                                onClick={() => history.push("/")}
                              />
                              <img
                                src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/logo.png"
                                alt=""
                              />
                            </StyledListItem>
                            <StyledListItem
                              onClick={() => expandMenu("personal")}
                            >
                              <b>Hola!, Dr(a) {login.user.fullname}</b>
                              {expand ? <ExpandLess /> : <ExpandMore />}
                            </StyledListItem>
                            <Collapse in={expand1} timeout="auto" unmountOnExit>
                              <Fade in={expand1}>
                                <List component="div" disablePadding>
                                  <StyledListItem sx={{ pl: 4 }}>
                                    <Link to="/active-users">
                                      Activar Usuarios
                                    </Link>
                                  </StyledListItem>

                                  <StyledListItem
                                    sx={{ pl: 4 }}
                                    onClick={() => closeSesion()}
                                  >
                                    Cerrar Sesion
                                  </StyledListItem>
                                </List>
                              </Fade>
                            </Collapse>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <StyledListItem
                              onClick={() => expandMenu("personal")}
                            >
                              <b>Hola!, Dr(a) {login.user.fullname}</b>
                              {expand ? <ExpandLess /> : <ExpandMore />}
                            </StyledListItem>
                            <Collapse in={expand} timeout="auto" unmountOnExit>
                              <Fade in={expand}>
                                <List component="div" disablePadding>
                                  <StyledListItem
                                    sx={{ pl: 4 }}
                                    onClick={() => closeSesion()}
                                  >
                                    Cerrar Sesion
                                  </StyledListItem>
                                </List>
                              </Fade>
                            </Collapse>
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    ) : (
                      <>
                        <StyledListItem className="justify-between shadow-md mb-6 ">
                          <p
                            onClick={() => closeDrawer()}
                            style={{ fontSize: 17 }}
                          >
                            X
                          </p>
                          <Link to="/">
                            <img
                              src="http://api-praxis.eml.com.co/wp-content/uploads/2022/04/praxis_responsive.png"
                              alt=""
                              width="100"
                            />
                          </Link>
                          <div> </div>
                        </StyledListItem>
                        <StyledListItem>
                          <Link to="/login">
                            <StyledButtonLogin>
                              Iniciar Sesión
                              <StyledAccountIcon />
                            </StyledButtonLogin>
                          </Link>
                        </StyledListItem>
                      </>
                    )}

                    {_.map(menus, (item: any, index: any) => {
                      if (
                        item.submenus !== undefined &&
                        item.submenus.length > 0
                      ) {
                        return (
                          <React.Fragment>
                            <StyledListItem
                              onClick={() => expandMenu(`menu${index}`)}
                              key={index}
                            >
                              {item.post_title === "Líneas de cuidado" ? (
                                <React.Fragment>
                                  {item.post_title}
                                  {expand4 ? <ExpandLess /> : <ExpandMore />}
                                </React.Fragment>
                              ) : item.post_title === "Aliados" ? (
                                <React.Fragment>
                                  {item.post_title}
                                  {expand2 ? <ExpandLess /> : <ExpandMore />}
                                </React.Fragment>
                              ) : (
                                <React.Fragment>
                                  {item.post_title}
                                  {expand3 ? <ExpandLess /> : <ExpandMore />}
                                </React.Fragment>
                              )}
                            </StyledListItem>
                            {item.post_title === "Líneas de cuidado" ? (
                              <React.Fragment>
                                <Collapse
                                  in={expand4}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Fade in={expand4}>
                                    <List component="div" disablePadding>
                                      {_.map(
                                        item.submenus,
                                        (submenu: any, idx: number) => (
                                          <StyledListItem
                                            sx={{ pl: 4 }}
                                            key={idx}
                                            onClick={() => {
                                              closeDrawer();
                                              history.push(submenu.url);
                                            }}
                                          >
                                            {submenu.post_title}
                                          </StyledListItem>
                                        )
                                      )}
                                    </List>
                                  </Fade>
                                </Collapse>
                              </React.Fragment>
                            ) : item.post_title === "Aliados" ? (
                              <React.Fragment>
                                <Collapse
                                  in={expand2}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Fade in={expand2}>
                                    <List component="div" disablePadding>
                                      {_.map(
                                        item.submenus,
                                        (submenu: any, idx: number) => (
                                          <StyledListItem
                                            sx={{ pl: 4 }}
                                            key={idx}
                                            onClick={() => {
                                              closeDrawer();
                                              history.push(submenu.url);
                                            }}
                                          >
                                            {submenu.post_title}
                                          </StyledListItem>
                                        )
                                      )}
                                    </List>
                                  </Fade>
                                </Collapse>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <Collapse
                                  in={expand3}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Fade in={expand3}>
                                    <List component="div" disablePadding>
                                      {_.map(
                                        item.submenus,
                                        (submenu: any, idx: number) => (
                                          <StyledListItem
                                            sx={{ pl: 4 }}
                                            key={idx}
                                            onClick={() => {
                                              closeDrawer();
                                              history.push(submenu.url);
                                            }}
                                          >
                                            {submenu.post_title}
                                          </StyledListItem>
                                        )
                                      )}
                                    </List>
                                  </Fade>
                                </Collapse>
                              </React.Fragment>
                            )}
                          </React.Fragment>
                        );
                      } else {
                        return (
                          <StyledListItem key={index}>
                            <Link to={item.url}>{item.post_title}</Link>
                          </StyledListItem>
                        );
                      }
                    })}
                  </List>
                </Box>
              </SwipeableDrawer>
            </StyledContainerMenu2>
            {width < 1024 && (
              <React.Fragment>
                <img
                  src={
                    "http://api-praxis.eml.com.co/wp-content/uploads/2022/03/Recurso-13.png"
                  }
                  alt="Logo Profix"
                  style={{ width: width < 1024 ? "50%" : "" }}
                  onClick={() => history.push("/")}
                />
                <div></div>
              </React.Fragment>
            )}
          </Toolbar>
        </Container>
      </AppBarComponent>
    </React.Fragment>
  );
};

export default Header;
