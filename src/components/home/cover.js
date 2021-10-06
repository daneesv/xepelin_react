import React, { Component } from "react";
import Coin1Img from "./../../assets/coin-1.png";
import Coin2Img from "./../../assets/coin-2.png";
import Light1Img from "./../../assets/light-1.png";
import Light2Img from "./../../assets/light-2.png";
import GuyImg from "./../../assets/guy.png";
import StarImg from "./../../assets/star.png";
import ArrowImg from "./../../assets/arrow.svg";
import OrangeImg from "./../../assets/diamond-orange.svg";
import PurpleImg from "./../../assets/diamond-purple.svg";
import PinkImg from "./../../assets/diamond-pink.svg";

class Cover extends Component{

    openModal(event){
        event.preventDefault();
        clearTimeout(window.modalDisplay);
        document.getElementById("modal-overlay").style.display="block";
        document.getElementById("modal-overlay").classList.remove("modal-overlay-hide");
        document.getElementById("modal-overlay").classList.add("modal-overlay-show");
        document.getElementById("modal").style.display="block";
        document.getElementById("modal-window").style.display="block";
        document.getElementById("modal-window").classList.remove("modal-window-hide");
        document.getElementById("modal-window").classList.add("modal-window-show");
    }

    render(){
        return(
            <div className="cover noselect">
                <div className="cover-frame">
                    <div className="cover-coin-1">
                        <img alt="" src={Coin1Img} />
                    </div>
                    <div className="cover-coin-2">
                        <img alt="" src={Coin2Img} />
                    </div>
                    <div className="cover-light-1">
                        <img alt="" src={Light1Img} />
                    </div>
                    <div className="cover-guy">
                        <img className="cover-guy-pic" alt="" src={GuyImg} />
                        <img className="cover-guy-star" alt="" src={StarImg} />
                    </div>
                    <div className="cover-light-2">
                        <img alt="" src={Light2Img} />
                    </div>
                    <div className="cover-intro">
                        <div>
                            <div className="cover-intro-title">Financia el sueño de tu empresa</div>
                            <div className="cover-intro-text">Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos permite financiar en el mismo día.</div>
                            <a href="/" className="cover-intro-btn" onClick={(event)=>{this.openModal(event)}}>
                                <div className="cover-intro-btn-caption">Empieza a financiarte</div>
                                <div className="cover-intro-btn-arrow"><img alt="" src={ArrowImg} /></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="cover-diamond-orange">
                    <img alt="" src={OrangeImg} />
                </div>
                <div className="cover-diamond-purple">
                    <img alt="" src={PurpleImg} />
                </div>
                <div className="cover-diamond-pink">
                    <img alt="" src={PinkImg} />
                </div>
            </div>
        )
    }
    
}

export default Cover;