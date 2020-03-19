import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { read, getPurchaseHistory } from "./apiUser";
import moment from "moment";

const Dashboard = () => {
   let auth ;
    
    const [values, setValues] = useState({
        birth_year: "",
        name: "",
        gender: "",
        homeworld: ""
    });
    const { birth_year, name, gender, homeworld} = values;

    if (typeof window !== "undefined") {
            if (localStorage.getItem("jwt")) {
                 auth = JSON.parse(localStorage.getItem("jwt"));  
            }
        } 

   /*const init = () => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("jwt")) {
                 auth = JSON.parse(localStorage.getItem("jwt"));  
            }
        } 
    };

    const readprofiledata = userId => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("jwt")) {
                 auth = JSON.parse(localStorage.getItem("jwt"));  
            }
        }  
    };

    useEffect(() => {        
        readprofiledata();
        init();
    }, []);
    console.log(auth);*/
    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" >
                            My Profile
                        </Link>
                    </li>
                    
                    <li className="list-group-item">
                        <Link className="nav-link" to="/search">
                            Search
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">G'day {auth.name}!</h3>
                
                <ul className="list-group">
                    <li className="list-group-item"><label> Name: </label> {auth.name}</li>
                    <li className="list-group-item"><label> Gender: </label> {auth.gender}</li>
                    <li className="list-group-item"><label> Hair Color: </label> {auth.hair_color}</li>
                    <li className="list-group-item"><label> Homeworld: </label> {auth.homeworld}</li>
                    
                </ul>
            </div>
        );
    };

   

    return (
        <Layout
            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3 sidebardash">{userLinks()}</div>
                <div className="col-9 rightbardash">
                    {userInfo()}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
