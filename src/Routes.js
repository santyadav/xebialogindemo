import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Search from "./user/Search";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import Profile from "./user/Profile";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/search" exact component={Search} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Profile}
                />
                
                
                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
