import { Router, Redirect, Route, Switch } from 'react-router-dom';

import history from './core/utils/history';
import Login from './pages/Login';
import Principal from './pages/Home'
import A403 from 'pages/403';
import Navbar from 'core/components/navbar';

const Routes = () => (
    <Router history={history} >
        <Navbar/>
        <Switch>

            <Redirect from="/" to="/login" />
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/home">
                <Principal />
            </Route>
            <Route path="/403">
                <A403 />
            </Route>
        </Switch>
    </Router>

);

export default Routes;