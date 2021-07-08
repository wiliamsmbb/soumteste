import { Switch } from 'react-router';
import PrivateRoutes from 'core/assets/PrivateRoutes';
import Principal from './principal';
import Teste from './teste';

const Home = () => {
    return (
        <Switch>
            <PrivateRoutes path="/home" allowedRoutes={['ROLE_ADMIN']}>
                <Principal/>
            </PrivateRoutes>
            <PrivateRoutes path="/teste" allowedRoutes={['ROLE_ADMIN','ROLE_OPERATOR']}>
                <Teste/>
            </PrivateRoutes>
        </Switch>
    );
}
export default Home;