import PrivateRoute from "./private";
import _ from "lodash";
import { PrivateRoutesInterface } from "models/interfaces/routes";

const routes : Array<PrivateRoutesInterface> = []

const usePrivateRoutes = () => {
    return _.map(routes, (route: PrivateRoutesInterface, index: number) => {
        return <PrivateRoute key={index} {...route}/>
    })
}

export default usePrivateRoutes;