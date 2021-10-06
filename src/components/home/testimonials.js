import React, { Component } from "react";
import TestimonialsData from "./../../data/testimonials.json";
import TestimonialDetail from "./testimonial-detail";
import TestimonialItem from "./testimonial-item";
import TestimonialList from "./testimonial-list";

class Testimonials extends Component{
    render(){
        return(
            <div className="testimonials">
                <div className="testimonials-intro">
                    <div className="testimonials-intro-title">¿Qué dicen nuestros clientes?</div>
                    <div className="testimonials-intro-text">La Fintech chilena especializada en servicios financieros para pequeñas y medianas empresas en Latinoamérica.</div>
                </div>
                <div className="testimonials-content">
                    <div className="testimonials-people noselect">
                        {TestimonialsData.testimonials.map(testimonial=>(
                            <TestimonialList key={testimonial.id} id={testimonial.id} name={testimonial.name} role={testimonial.role} stars={testimonial.stars} />
                        ))}
                    </div>
                    <div className="testimonials-detail">
                        {TestimonialsData.testimonials.map(testimonial=>(
                            <TestimonialDetail key={testimonial.id} id={testimonial.id} title={testimonial.title} content={testimonial.content} stars={testimonial.stars} />
                        ))}
                    </div>
                </div>
                <div className="testimonials-content-single noselect">
                    {TestimonialsData.testimonials.map(testimonial=>(
                        <TestimonialItem key={testimonial.id} id={testimonial.id} name={testimonial.name} role={testimonial.role} title={testimonial.title} stars={testimonial.stars} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Testimonials;