import React from "react";
import "./Testimonial.css";

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial">
      <p className="testimonial-subtitle">3940+ Happy Hubnex Labs Users</p>
      <h2 className="testimonial-title">Driving results for leaders across the globe</h2>
      
      <div className="testimonial-author">
        <img
          src="src\assets\Slack-Logo.png" // Replace with the Slack logo
          alt="Slack logo"
          className="testimonial-logo"
        />
        <div>
        <h2 className="testimonial-title">Driving results for leaders across the globe</h2>
      
        <blockquote className="testimonial-quote">
        “People now recognise that having a good performance conversation means
        that something happens as a result. People now recognise that having a good performance conversation means
        that something happens as a result. People now recognise that having a good performance conversation means
        that something happens as a result”
      </blockquote>
          <strong>Slack</strong>
          <p>Product Company</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
