import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import whatsapppng from '../img/whatsapp.png';
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#000000" };
    } else {
        return { color: "white" };
    }
};

const Menu = ({ history }) => (
	
	<div className="container-fluid bg-light" fixed="top" >	
	
<div className="links">
        <a className="navbar-brand" href="tel:+91-9999-84-6622"> <img src={whatsapppng}  alt="whatsapp" /> or CALL
			   +91-9718-28-0525</a>
        <ul className="nav nav-tabs topmenu top-right text-uppercase">

            {isAuthenticated()  && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard">
                        Dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            LOGIN
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            REGISTER
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            )}
        </ul>

  
</div>
</div>
);

export default withRouter(Menu);
