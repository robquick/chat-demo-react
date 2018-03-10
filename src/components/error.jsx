import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 45% !important;
    padding-top: 10px !important;
`;

let Error = () => {
    return (
        <Container className="container-fluid">
            <div className="jumbotron">
                <h1>404: OH NOES!</h1>
                <p>Are you lost?</p>
                <p>
                    <Link to="/">Return Home</Link>
                </p>
            </div>
        </Container>
    );
};

export default Error;
