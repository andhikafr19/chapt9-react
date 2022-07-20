import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/Navbar";

class Home extends Component {
    render() {
        return(
            <Fragment>
                <Navbar/>
                <Container>
                    <h1>Ini Halaman Home</h1>
                </Container>
            </Fragment>
                
        );
    }
}

export default Home