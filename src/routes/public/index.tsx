import { map } from "lodash";
import { Route } from "models/interfaces/routes";
import useViews from "views";
import Profesionales from "views/screens/profesionales";
import PublicRoutes from "./public";

const usePublicRoutes = () => {
    const { useScreens } = useViews();
    const {
        Home,
        Login,
        TerapeuticNumber,
        Contact,
        Form,
        Products,
        Blog,
        BlogDetail,
        Pacientes,
        Cuidadores,
        Register,
        RecoveryPassword,
        ActiveUsers,
        CommentAdmin,
        ClinicalStudies
    } = useScreens();


    const routes: Array<Route> = [
        {
            path: "/",
            exact: true,
            Component: Home,
            name: "Home"
        },
        {
            path: "/login",
            exact: true,
            Component: Login,
            name: "Login"
        },
        {
            path: "/terapeutic-number/:type",
            exact: true,
            Component: TerapeuticNumber,
            name: "TerapeuticNumber"
        },
        {
            path: "/contact",
            exact: true,
            Component: Contact,
            name: "Contact"
        },
        {
            path: "/contact/form",
            exact: true,
            Component: Form,
            name: "Form"
        },
        {
            path: "/products/:type",
            exact: true,
            Component: Products,
            name: "Products"
        },
        {
            path: "/blog",
            exact: true,
            Component: Blog,
            name: "Blog"
        },
        {
            Component: BlogDetail,
            path: "/detail/:id",
            exact: true,
            name: "BlogDetail"
        },
        {
            Component: Pacientes,
            path: "/aliados/pacientes",
            exact: true,
            name: "Pacientes"
        },
        {
            Component: Cuidadores,
            path: "/cuidadores/:type",
            exact: true,
            name: "Cuidadores"
        },
        {
            Component: Register,
            path: "/register",
            exact: true,
            name: "Register"
        },
        {
            Component: RecoveryPassword,
            path: "/recovery-password",
            exact: true,
            name: "RecoveryPassword"
        },
        {
            Component: ActiveUsers,
            path: '/active-users',
            exact: true,
            name: "ActiveUsers"
        },
        {
            Component: Profesionales,
            path: '/profesionales/:type',
            exact: true,
            name: "Profesionales"
        },
        {
            Component: CommentAdmin,
            path: '/comments-admin',
            exact: true,
            name: "CommentsAdmin"
        },
        {
            Component: ClinicalStudies,
            path: "/Estudios-clinicos",
            name: "ClinicalStudies",
            exact: true
        }
    ];

    return map(routes, (route: Route, index: number) => (   
        <PublicRoutes key={index} {...route} />
    ))

}

export default usePublicRoutes;