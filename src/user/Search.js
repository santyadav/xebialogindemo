import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { searchword } from "../auth";
import { Link } from "react-router-dom";
import ReactTable from 'react-table';
import { loadPlanates } from "./apiUser";
import "react-table/react-table.css";


const Dashboard = () => {
    const [products, setProducts] = useState([]);

    const [values, setValues] = useState({
        searchword: "",
        searchresults: [],
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { searchword, searchresults, loading, error, redirectToReferrer } = values;


    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const loadPlanet = () => {
        loadPlanates().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                setProducts(data.results);
            }
        });
    };

    /*const clickSubmit = event => {
        event.preventDefault();
        console.log(searchword);

        setValues({ ...values, error: false, loading: true });
        searchword({ searchword }).then(data => {
            if (data.count < 1) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                
                authenticate(finaluser, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true                    
                  
         });
                });
            }
        });
    };*/

    useEffect(() => {
        loadPlanet();
    }, []);
         
    const columns =[
        {
            Header: "Population",
            accessor: "population",
            defaultSortMethod: [],
        },
        {
            Header: "Planets Name",
            accessor: "name"
        },
        
        {
            Header: "Surface",
            accessor: "surface_water"
           
        },
        {
            Header: "Diameter",
            accessor: "diameter"
        },
        {
            Header: "Climate",
            accessor: "climate"
        }

    ]
         
    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/user/dashboard">
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

    /*const searchwordForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Search Planet</label>
                <input
                    onChange={handleChange("searchword")}
                    type="email"
                    className="form-control"
                    value={searchword}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>


            <ul className="nav nav-tabs categorymenu">
            {searchresults.map((c, i) => (
                <li  key={i} className="nav-item" value={c.name}>
                    {c.name}
                </li>
            ))}
         </ul> 
        </form>

          
    );*/

   

    return (
        <Layout
            title="Dashboard"
            description="have good search"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3 sidebardash">{userLinks()}</div>
                <div className="col-9 rightbardash">
                    {/*searchwordForm()*/}
                    <ReactTable 
                        columns={columns}
                        data = {products}
                        filterable
                        sortable
                        defaultPageSize={10}
                        noDataText={"Please wait ...loading"}
                    >
                    </ReactTable>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
