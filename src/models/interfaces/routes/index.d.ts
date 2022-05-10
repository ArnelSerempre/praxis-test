import { ComponentType } from "react";

export interface PublicRoutesInterface {
    Component: ComponentType<any>;
    layout?: ComponentType<any>;
    layoutProps?: {};
    name: string;
}

export interface Route extends PublicRoutesInterface {
    exact?: boolean,
    path: string
}

export interface PrivateRoutesInterface {
    Component: ComponentType<any>;
    layout?: ComponentType<any>;
    layoutProps?: {};
    name?: string;
}

export interface PrivateRouteInterface extends PrivateRoutesInterface {
    redirectTo?: string;
}