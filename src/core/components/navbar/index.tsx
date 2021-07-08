import './styles.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import { useEffect, useState } from 'react';


const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();
    
    useEffect(()=>{
        //console.log('navbar iniciada! ',location);
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    },[location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        event.preventDefault();
        logout();
    }

    return (
        (
            <nav className="row bg-primary main-nav">
                <div className="col-3 ">
                    <Link to="/login" className="nav-logo-text">
                        <h4>Login</h4>
                    </Link>
                </div>
                <div className="col-6 ">
                    <ul className="main-menu">
                        <li>
                            <NavLink className="nav-link" to="/home" exact>auth ROLE_ADMIN</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/teste">auth ROLE_OPERATOR</NavLink>
                        </li>

                        <li>
                            <NavLink className="nav-link" to="/403">geral</NavLink>
                        </li>

                    </ul>

                </div>
                <div className="col-3 text-right ">
                    {currentUser && (
                        <>
                            {currentUser}
                            <a href="#logout" className="nav-link active d-inline" onClick={handleLogout}>
                                LogOut
                            </a>
                        </>
                    )}
                    {!currentUser && (

                        <Link className="nav-link active" to="/login">LogIn</Link>

                    )}
                </div>
            </nav>
        )
    );
}

export default Navbar;