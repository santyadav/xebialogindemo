import React from "react";
import Layout from "./Layout";
import HomeContent from "./HomeContent";

const Home = () => {

    return (
        <Layout
            title="Home Page"
            description="Node React E-Test App"  >
		<div className="main-container">
           
            <HomeContent /> 
		</div>
        </Layout>
    );
};

export default Home;
