import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Entrance from "./entrance";
import Social from "./social";
import CloseImg from "./../../assets/close.svg";

class Mobile extends Component{

    closeMobile(event){
        event.stopPropagation();
        document.getElementById("mobile").classList.remove("mobile-show");
        document.getElementById("mobile").classList.add("mobile-hide");
        window.mobileDisplay=setTimeout(function(){
            document.getElementById("mobile").style.display="none";
        },300);
    }

    render(){
        return(
            <div id="mobile" onClick={this.closeMobile}>
                <div className="mobile-content">
                    <div>
                        <div className="mobile-actions">
                            <Entrance />
                        </div>
                        <div></div>
                        <div className="mobile-buttons">
                            <NavLink to="https://www.xepelin.com/soluciones" className="nav-button" activeClassName="nav-button-on">Soluciones</NavLink>
                            <NavLink to="https://www.xepelin.com/sobre-nosotros" className="nav-button" activeClassName="nav-button-on">Sobre nosotros</NavLink>
                            <NavLink to="https://www.xepelin.com/recursos" className="nav-button" activeClassName="nav-button-on">Recursos</NavLink>
                            <NavLink to="https://www.notion.so/xepelin/Job-Board-0cd3c52cd3ba4f58ad55fb704993642b" className="nav-button" activeClassName="nav-button-on">Job Board</NavLink>
                        </div>
                        <div></div>
                        <Social section="mobile" />
                    </div>
                </div>
                <div className="mobile-close" onClick={(event)=>{this.closeMobile(event)}}><img alt="Cerrar" src={CloseImg} /></div>
            </div>
        )
    }
    
}

export default Mobile;