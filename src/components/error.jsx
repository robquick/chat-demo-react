import React from "react";
import { Link } from "react-router";

const styles = { width: "45%", paddingTop: 10 };

let Error = () => {
    return (
      <div className="container-fluid" style={styles}>
        <div className="jumbotron">
          <h1>404:  OH NOES!</h1>
          <p>Are you lost?</p>
          <p><Link to="/">Return Home</Link></p>
        </div>
      </div>  
    );
};

export default Error;