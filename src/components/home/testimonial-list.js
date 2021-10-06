import React, { Component } from "react";

class TestimonialList extends Component{

    showTestimonial(id){
        [].forEach.call(document.querySelectorAll(".testimonial-item"),function(el){
            el.classList.remove("testimonial-item-on");
        });
        document.getElementById("testimonialList"+id).classList.add("testimonial-item-on");
        [].forEach.call(document.querySelectorAll(".testimonial-detail"),function(el){
            el.style.display="none";
            el.classList.remove("testimonial-detail-show");
        });
        document.getElementById("testimonialDetail"+id).style.opacity=0;
        document.getElementById("testimonialDetail"+id).style.display="block";
        setTimeout(()=>{
            document.getElementById("testimonialDetail"+id).classList.add("testimonial-detail-show");
        },0);
    }

    render(){
        return(
            <div id={"testimonialList"+this.props.id} className={"testimonial-item"+(this.props.id===1?" testimonial-item-on":"")} onClick={(id)=>{this.showTestimonial(this.props.id)}}>
                <div className="testimonial-avatar">
                    <div className="testimonial-pic" style={{backgroundImage:"url(testimonials/"+this.props.id+".jpg)"}}></div>
                </div>
                <div className="testimonial-info">
                    <div className="testimonial-name">{this.props.name}</div>
                    <div className="testimonial-role">{this.props.role}</div>
                </div>
            </div>
        )
    }

}

export default TestimonialList;