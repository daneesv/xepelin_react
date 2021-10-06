import React, { Component } from "react";
import Card from "./card";
import Slide from "./slide";
import OrangeImg from "./../../assets/orange.svg";
import GreenImg from "./../../assets/green.svg";
import SolutionsData from "./../../data/solutions.json";
import Swiper from "swiper";
import "swiper/swiper.min.css";

class Solutions extends Component{

    componentDidMount(){
        this.swiper=new Swiper(".swiper",{
            slideActiveClass:"solution-active",
            grabCursor:true,
            pagination:{
                el:".swiper-pagination",
                clickable:1
            },
            on:{
                slideChange:function(){
                    document.getElementById("swiper-bg").classList.add("swiper-change");
                    setTimeout(()=>{
                        document.getElementById("swiper-bg").classList.remove("swiper-change");
                    },250);
                }
            }
        });
    }

    render(){
        return(
            <div className="solutions">
                <div className="solutions-intro">
                    <div className="solutions-intro-title">¿Cómo lo hacemos realidad?</div>
                    <div className="solutions-intro-text">Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos permite financiar en el mismo día.</div>
                </div>
                <div className="solutions-swiper noselect">
                    <div className="swiper">
                        <div id="swiper-bg" className="swiper-bg"></div>
                        <div className="swiper-wrapper">
                            {SolutionsData.solutions.map(solution=>(
                                <Slide key={solution.id} id={solution.id} route={solution.route} title={solution.title} description={solution.description} />
                            ))}
                        </div>
                        <div id="swiper-pagination"></div>
                    </div>
                </div>
                <div className="solutions-list">
                    {SolutionsData.solutions.map(solution=>(
                        <Card key={solution.id} id={solution.id} route={solution.route} title={solution.title} description={solution.description} />
                    ))}
                </div>
                <div className="solutions-orange">
                    <img alt="" src={OrangeImg} />
                </div>
                <div className="solutions-green">
                    <img alt="" src={GreenImg} />
                </div>
            </div>
        )
    }

}

export default Solutions;