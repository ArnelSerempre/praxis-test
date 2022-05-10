import { FC } from "react";
import { Route } from "react-router-dom";
import { PrivateRouteInterface } from "models/interfaces/routes";
import useViews from "views";

const PrivateRoute : FC<PrivateRouteInterface> = ({
    Component,
    layout,
    layoutProps,
    redirectTo = "/",
    ...otherProps
}) : JSX.Element => {
    // Layouts
    const { useLayouts } = useViews();
    const { GeneralLayout } = useLayouts();
    const Layout = layout || GeneralLayout;

    return (
        <Route
            {...otherProps}
            render={(props: any) => {
                return (
                    <Layout {...layoutProps}>
                        <Component {...props}/>
                    </Layout>
                )
            }}
        />
    );
}

export default PrivateRoute;