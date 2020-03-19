import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../img/logo.png';


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#c31f41" };
    } else {
        return { color: "#000000" };
    }
};

const CategoryMenu = ({ history }) => (
	<section id="myHeaderhead" fixed="top" >
	  	
   
	
    <div className="container-fluid">

                <Link
                    className="logonav"
                    style={isActive(history, "/")}
                    to="/">
                    <img className="logochange" src={logo}  alt="Xebia" />
                </Link>
            
        <ul className="nav nav-tabs categorymenu">
            
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/">
                    Home2
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/">
                    Home3
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/">
                    Home4
                </Link>
            </li>

			
        </ul>
    </div>

</section>
);

export default withRouter(CategoryMenu);

