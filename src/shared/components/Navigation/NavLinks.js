import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import './NavLinks.css'
import { AuthContext } from '../../context/auth-context';
const NavLinks = props => {
    const auth = useContext(AuthContext)
    
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            {auth.isLoggedIn && (
                <li>
                    <NavLink to={`/${auth.userId}/places`}>My Places</NavLink>
                </li>   
            )}
            {auth.isLoggedIn && (
                <li>
                    <NavLink to="/places/new">Add Place</NavLink>
                </li>
            )}
            {!auth.isLoggedIn && (<li>
                <NavLink to="/auth">Log In</NavLink>
            </li>
            )}
            {auth.isLoggedIn && (<li>
                <NavLink to="/auth" onClick={auth.logout}>Log Out</NavLink>
            </li>
            )}
        </ul>
    );
};

export default NavLinks