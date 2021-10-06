import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";
import Entrance from "./entrance";
import Mobile from "./mobile";

//Fix bar on scroll
window.addEventListener("scroll",function(){
    var scroll=window.pageYOffset || document.documentElement.scrollTop;
    if(scroll<=0){
        document.getElementById("nav").classList.remove("nav-fixed");
    }else{
        document.getElementById("nav").classList.add("nav-fixed");
    }
});

class Header extends Component{

    openMobile(){
        clearTimeout(window.mobileDisplay);
        document.getElementById("mobile").style.display="block";
        document.getElementById("mobile").classList.remove("mobile-hide");
        document.getElementById("mobile").classList.add("mobile-show");
    }

    render(){
        return(
            <Fragment>
                <div id="nav">
                    <div className="nav-content">
                        <div className="nav-logo">
                            <Logo section="header" />
                        </div>
                        <div className="nav-buttons">
                            <NavLink to="/soluciones" className="nav-button" activeClassName="nav-button-on">Soluciones</NavLink>
                            <NavLink to="/sobre-nosotros" className="nav-button" activeClassName="nav-button-on">Sobre nosotros</NavLink>
                            <NavLink to="/recursos" className="nav-button" activeClassName="nav-button-on">Recursos</NavLink>
                            <NavLink to="/job-board" className="nav-button" activeClassName="nav-button-on">Job Board</NavLink>
                        </div>
                        <div className="nav-actions">
                            <Entrance />
                        </div>
                        <div className="nav-menu" onClick={this.openMobile}>
                            <div className="nav-menu-lines">
                                <div className="nav-menu-line"></div>
                                <div className="nav-menu-line"></div>
                                <div className="nav-menu-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Mobile />
            </Fragment>
        )
    }
    
}

export default Header;