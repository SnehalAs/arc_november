import React from "react";
import "./CTA.css";
import { CTA_MESSAGE, CTA_SUBTEXT, CTA_BUTTON_TEXT } from "./CTA.constants";

const CTA: React.FC = () => {
  return (
    <div className="cta">
      <div className="cta-text">
        
        <p>{CTA_SUBTEXT}</p>
        <strong>{CTA_MESSAGE}</strong>
      </div>
      <a href="#" className="cta-button">
        {CTA_BUTTON_TEXT}
        
      </a>
    </div>
  );
};

export default CTA;
