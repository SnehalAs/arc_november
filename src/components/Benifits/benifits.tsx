import React from 'react';
import './benifits.css';

const benefits = [
  {
    title: "Dedicated Project Manager",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    icon: "👨‍💼", // Placeholder for icons
    image: "src/components/Benifits/benifits.png", // Replace with your image
  },
  {
    title: "100% Customer Satisfaction",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    icon: "😊",
    image: "src/components/Benifits/benifits1.png", // Replace with your image
    
  },
  {
    title: "On Time Delivery",
    description: "lorem ipsum lorem ipsum lorem ipsum",
    icon: "⏱️",
    image: "src/components/Benifits/benifits2.png", // Replace with your image
    
  },
  // {
  //   title: "24/7 Round the Clock Support",
  //   description: "lorem ipsum lorem ipsum lorem ipsum",
  //   icon: "🕒",
  //   image: "src/components/Benifits/benifits3.png", // Replace with your image
    
  // },
  // {
  //   title: "Escrow Account Keeping Your Money Safe",
  //   description: "lorem ipsum lorem ipsum lorem ipsum",
  //   icon: "💰",
  //   image: "https://via.placeholder.com/300x200",
  // },
];

const Benefits: React.FC = () => {
  return (
    <div className="app">
      <h1 className="title">Benefits to Join Hubnex Labs</h1>
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
