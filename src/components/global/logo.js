import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "./../../assets/logo.svg";

class Logo extends Component{
    render(){
        return(
            <NavLink exact to="/" className={(this.props.section==="footer"?"footer-logo":"")}><img src={LogoImg} alt="Xepelin" /></NavLink>
        )
    }
}

export default Logo;