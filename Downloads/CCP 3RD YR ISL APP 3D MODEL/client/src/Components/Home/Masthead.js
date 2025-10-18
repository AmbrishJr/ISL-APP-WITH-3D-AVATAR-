import React from "react";

function Masthead() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center home-gradient">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <div className="col-lg-7 text-white font-weight-bold display-1 text-center">
          Welcome to ISL Genie!
        </div>
        <div className="col-lg-4 divider my-4" />
        <div
          className="col-lg-7 container text-white-50 lead text-center"
          style={{ fontSize: "5rem !important" }}
        >
          The complete toolkit for Indian Sign Language. Our application enables seamless translation between English to ISL and Hindi to ISL, and vice versa. Explore our range of
          features which have been carefully designed keeping in mind the
          specific needs of the hearing-impaired community and those learning Indian Sign Language.
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a className="btn btn-info btn-lg px-3" href="#intro">
            Get Started <i className="fa fa-angle-down" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Masthead;
