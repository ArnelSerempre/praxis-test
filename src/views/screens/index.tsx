import { lazy } from "react";

const Home = lazy(() => import('./Home/index'));
const Login = lazy(() => import('./Login'));
const TerapeuticNumber = lazy(() => import('./terapeutic-number'));
const Contact = lazy(() => import('./contact'));
const Form = lazy(() => import('./contact/form'));
const Products = lazy(() => import('./products'));
const Blog = lazy(() => import('./Blog'));
const BlogDetail = lazy(() => import('./Blog/Detail'));
const Pacientes = lazy(() => import('./pacientes'));
const Cuidadores = lazy(() => import('./cuidadores'));
const Register = lazy(() => import('./Register'));
const RecoveryPassword = lazy(() => import('./RecoveryPassword'));
const ActiveUsers = lazy(() => import('./Active Users'));
const CommentAdmin = lazy(() => import('./CommentAdmin'));

const useScreens = () => {      
    return {
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
        CommentAdmin
    };
};

export default useScreens;