import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container-fluid row hero-section">
        <div className="col-md-6 col-sm-6 mx-auto col-lg-6 col-10 text-center">
          <p>Hello!!</p>
          <p> Welcome to </p>
          <h1>Shivam Som React Website</h1>
        </div>
        <div className="col-md-6 col-sm-6 mx-auto col-lg-6 col-10 ">
          <img src={Menu[1].image} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
}

export default Home;
