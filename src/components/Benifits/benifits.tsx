import React from 'react';
import './benifits.css';

const benefits = [
  {
    title: "Dedicated Project Manager",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    icon: "👨‍💼",
    image: "src/components/Benifits/benifits.png", 
  },
  {
    title: "100% Customer Satisfaction",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    icon: "😊",
    image: "src/components/Benifits/benifits1.png", 
    
  },
  {
    title: "On Time Delivery",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    icon: "⏱️",
    image: "src/components/Benifits/benifits2.png", 
    
  },
  
];

const Benefits: React.FC = () => {
  return (
    <div className="app">
      <h1 className="title" style={{
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
    
    color: "#333",
  }}>Benefits to Join Hubnex Labs</h1>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <img src={benefit.image} alt={benefit.title} className="benefit-image" />
            <div className="benefit-content">
              <div className="benefit-icon">{benefit.icon}</div>
              <h2 className="benefit-title">{benefit.title}</h2>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
