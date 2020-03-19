import React from "react";
import { Link, withRouter } from "react-router-dom";


const HomeContent = () => (
<div className="banner bannerheight">

  <div className="ourservices">
    <div className="sec-head"> Home Page Demo Application </div>
    <div className="row services">
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
    <div> <h2>What is Lorem Ipsum?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation</p>
    </div>
    </div>
   
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <div> <h2>Why do we use it?</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et 
         dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      </div>
      </div>
    </div>
  </div>






</div>
);

export default withRouter(HomeContent);
