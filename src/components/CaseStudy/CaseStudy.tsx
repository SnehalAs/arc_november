import React from 'react';
import './CaseStudy.css';

const CaseStudy: React.FC = () => {
  const caseStudies = [
    {
      title: "What is Ad Exposure and Why It Matters?",
      description:
        "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.",
      image: "src/assets/caseStudy.jpg",  // Update with correct image path
      category: "FINANCE",
    },
    {
      title: "What is Ad Exposure and Why It Matters?",
      description:
        "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.",
      image: "src/assets/caseStudy.jpg",  // Update with correct image path
      category: "BUSINESS",
    },
  ];

  return (
    <section className="case-study-section">
      <div className="case-study-header">
        <h1>Case Study</h1>
        <p>
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </p>
        <button className="connect-sales-button">View All →</button>
      </div>

      <div className="case-study-content">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card">
            <img src={study.image} alt={study.title} />
            <h2>{study.title}</h2>
            <p>{study.description}</p>
            <a href="#">Read Full Article →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
