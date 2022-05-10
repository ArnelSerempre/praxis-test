/// <reference types="react-scripts" />
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

declare module "lodash";
declare module "react-router";
declare module "react-router-dom";
declare module "styled-components";
declare module "react-swipeable-views";
declare module "react-slick";
declare module "@mui/material"; 