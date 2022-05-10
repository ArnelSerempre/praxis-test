import { FC } from "react";
import { Route } from "react-router-dom";
import { PublicRoutesInterface } from "models/interfaces/routes";
import useViews from "views";

const PublicRoutes : FC<PublicRoutesInterface> = ({
    Component,
    layout,
    layoutProps,
    name,
    ...otherProps
}) : JSX.Element => {
    // Layout
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

export default PublicRoutes;