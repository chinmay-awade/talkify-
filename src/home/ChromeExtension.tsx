import React from 'react';
import './ChromeExtention.css';

const ChromeExtensionPromo: React.FC = () => {
  return (
    <div className="extension-promo-container">
      <div className="extension-promo-content">
        <h2 className="extension-promo-title">
          Supercharge Your Workflow with Our Chrome Extension
        </h2>
        
        <ul className="extension-promo-features">
          <li className="extension-promo-feature-item">
            <span className="extension-promo-check-icon"><i className="fa-light fa-check me-2 fa-sm"/></span>
            Quick Access to Tools
          </li>
          <li className="extension-promo-feature-item">
          <span className="extension-promo-check-icon"><i className="fa-light fa-check me-2 fa-sm"/></span>
          Enhanced Productivity Features
          </li>
          <li className="extension-promo-feature-item">
          <span className="extension-promo-check-icon"><i className="fa-light fa-check me-2 fa-sm"/></span>
          Seamless Dashboard Integration
          </li>
        </ul>
        
        <button className="extension-promo-button">
          Download Chrome Extension
        </button>
      </div>
      
      <div className="extension-promo-image-container">
       
      </div>
    </div>
  );
};

export default ChromeExtensionPromo;