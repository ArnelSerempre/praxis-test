import { BrowserRouter as Router, Switch } from "react-router-dom";
import { map } from "lodash";
import usePrivateRoutes from "./private";
import usePublicRoutes from "./public";

const useRouter = () => {
    const privateRoutes = usePrivateRoutes();
    const publicRoutes = usePublicRoutes();

    console.log(publicRoutes)

    const routes = [...privateRoutes, ...publicRoutes];

    return (
        <Router>
            <Switch>
                {map(routes)}
            </Switch>
        </Router>
    );
}

export default useRouter;