import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ArrowImg from "./../../assets/arrow.svg";
import StarImg from "./../../assets/star.svg";

class TestimonialDetail extends Component{
    render(){
        return(
            <div id={"testimonialDetail"+this.props.id} className={"testimonial-detail"+(this.props.id===1?" testimonial-detail-shown":"")}>
                <div className="testimonial-title">{this.props.title}</div>
                <div className="testimonial-stars">
                    <img alt="" className={"testimonial-star"+(this.props.stars<1?" testimonial-star-off":"")} src={StarImg} />
                    <img alt="" className={"testimonial-star"+(this.props.stars<2?" testimonial-star-off":"")} src={StarImg} />
                    <img alt="" className={"testimonial-star"+(this.props.stars<3?" testimonial-star-off":"")} src={StarImg} />
                    <img alt="" className={"testimonial-star"+(this.props.stars<4?" testimonial-star-off":"")} src={StarImg} />
                    <img alt="" className={"testimonial-star"+(this.props.stars<5?" testimonial-star-off":"")} src={StarImg} />
                </div>
                <div className="testimonial-text" dangerouslySetInnerHTML={{ __html:this.props.content}}></div>
                <NavLink to={"/testimonios/"+this.props.id} className="testimonial-btn noselect">
                    <div className="testimonial-btn-caption">Conocer más</div>
                    <div className="testimonial-btn-arrow"><img alt="" src={ArrowImg} /></div>
                </NavLink>
            </div>
        )
    }
}

export default TestimonialDetail;