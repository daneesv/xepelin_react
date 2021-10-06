import React, { Component, Fragment } from "react";
import Cover from "./cover";
import Solutions from "./solutions";
import Testimonials from "./testimonials";

class Home extends Component{
    render(){
        return(
            <Fragment>
                <Cover />
                <Solutions />
                <Testimonials />
            </Fragment>
        )
    }
}

export default Home;