import { isAllowedByRole, isAuthenticated, Role } from "core/utils/auth";
import { Redirect, Route } from "react-router";

type Props = {
    children: React.ReactNode;
    path: string;
    allowedRoutes?:Role[];
}
const PrivateRoute = ({ children, path, allowedRoutes }: Props) => {


    return (
        <Route
            path={path}
            render={({ location }) => {
                if (!isAuthenticated()) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                } else if (isAuthenticated() && !isAllowedByRole(allowedRoutes)) {
                    return (
                        <Redirect to={{ pathname: "/403" }}/>
                    )
                }
                return children;
            }}
        />
    );
}
export default PrivateRoute;