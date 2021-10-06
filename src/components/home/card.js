import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ArrowImg from "./../../assets/arrow-2.svg";
import Solution1Img from "./../../assets/solution-1.png";
import Solution2Img from "./../../assets/solution-2.png";
import Solution3Img from "./../../assets/solution-3.png";
import Solution4Img from "./../../assets/solution-4.png";

class Card extends Component{
    render(){
        return(
            <NavLink className="solution" to={"/soluciones/"+this.props.route}>
                <div className="solution-graphic">
                    {(()=>{
                        if(this.props.id===1){
                            return(<img alt="" className="solution-picture" src={Solution1Img} />)
                        }else if(this.props.id===2){
                            return(<img alt="" className="solution-picture" src={Solution2Img} />)
                        }else if(this.props.id===3){
                            return(<img alt="" className="solution-picture" src={Solution3Img} />)
                        }else if(this.props.id===4){
                            return(<img alt="" className="solution-picture" src={Solution4Img} />)
                        }
                    })()}
                </div>
                <div className="solution-title">{this.props.title}</div>
                <div className="solution-description">{this.props.description}</div>
                <div className="solution-btn">
                    <div>Explorar</div>
                    <div className="solution-btn-arrow"><img alt="" src={ArrowImg} /></div>
                </div>
            </NavLink>
        )
    }
}

export default Card;