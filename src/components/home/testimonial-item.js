import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ArrowImg from "./../../assets/arrow-3.svg";
import StarImg from "./../../assets/star.svg";

class TestimonialItem extends Component{
    render(){
        return(
            <NavLink to={"/testimonios/"+this.props.id} className="testimonial-single">
                <div className="testimonial-single-card">
                    <div className="testimonial-avatar">
                        <div className="testimonial-pic" style={{backgroundImage:"url(testimonials/"+this.props.id+".jpg)"}}></div>
                    </div>
                    <div className="testimonial-single-info">
                        <div className="testimonial-single-name">{this.props.name}</div>
                        <div className="testimonial-single-role">{this.props.role}</div>
                    </div>
                </div>
                <div className="testimonial-single-detail">
                    <div className="testimonial-single-intro">
                        <div className="testimonial-single-title">{this.props.title}</div>
                        <div className="testimonial-stars testimonial-stars-single">
                            <img alt="" className={"testimonial-star"+(this.props.stars<1?" testimonial-star-off":"")} src={StarImg} />
                            <img alt="" className={"testimonial-star"+(this.props.stars<2?" testimonial-star-off":"")} src={StarImg} />
                            <img alt="" className={"testimonial-star"+(this.props.stars<3?" testimonial-star-off":"")} src={StarImg} />
                            <img alt="" className={"testimonial-star"+(this.props.stars<4?" testimonial-star-off":"")} src={StarImg} />
                            <img alt="" className={"testimonial-star"+(this.props.stars<4?" testimonial-star-off":"")} src={StarImg} />
                        </div>
                    </div>
                    <div className="testimonial-single-btn-frame">
                        <div className="testimonial-single-btn"><img alt="" src={ArrowImg} /></div>
                    </div>
                </div>
            </NavLink>
        )
    }
}

export default TestimonialItem;