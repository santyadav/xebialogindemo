import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        name: "Luke Skywalker",
        birth_year: "19BBY",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { name, birth_year, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ name, birth_year }).then(data => {
            if (data.count < 1) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                let finaluser;
                for (let i=0; i < data.results.length; i++) {
                    console.log("Log data " + data.results[i].name);
                    if (data.results[i].name === name) {
                        finaluser = data.results[i];
                    }
                }
                console.log(finaluser);
                //return false;

                authenticate(finaluser, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true					
                  
         });
                });
            }
        });
    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="email"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("birth_year")}
                    type="password"
                    className="form-control"
                    value={birth_year}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
<Link to="signup" className="btn btn-primary" style={{margin:"10px"}}>
                Create an Account
            </Link>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

 
    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            }else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

      

    return (
        <Layout
            title="Signin"
            description="Signin to Node React E-Testing App App"
            className="container col-md-6"
        >
		<div className="main-container">
		   <h1 className="arial default-transform large headinghow">Login or Create an Account</h1>
		  <p>If you have an account with us, please log in else <Link to="Signup">signup</Link></p>
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}

</div>
</Layout>
    );
};

export default Signin;
