import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Entrance extends Component{
    render(){
        return(
            <Fragment>
                <NavLink to="/empezar" className="nav-login">
                    <div className="nav-login-fill"></div>
                    <span>Ingresar</span>
                </NavLink>
                <NavLink to="/empezar" className="nav-register">
                    <div className="nav-register-fill"></div>
                    <span>Regístrate</span>
                </NavLink>
            </Fragment>
        )
    }
}

export default Entrance;