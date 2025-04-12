import React, { useState } from 'react';
import './Pricing.css';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: PlanFeature[];
  ctaText: string;
}

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  
  const handleToggleChange = () => {
    setIsYearly(!isYearly);
  };

  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'Try out the basics at no cost',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        { text: '1 Chatbot', included: true },
        { text: '500 messages/month', included: true },
        { text: 'Basic templates', included: true },
        { text: 'Community support', included: true },
        { text: 'Basic analytics', included: false },
        { text: 'Email support', included: false },
        { text: 'Advanced features', included: false },
      ],
      ctaText: 'Get Started'
    },
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for individuals and small projects',
      monthlyPrice: 499,
      yearlyPrice: 4999,
      features: [
        { text: '2 Chatbots', included: true },
        { text: '2,000 messages/month', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Email support', included: true },
        { text: 'Custom templates', included: true },
        { text: 'Advanced integrations', included: false },
        { text: 'Priority support', included: false },
      ],
      ctaText: 'Choose Starter'
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Ideal for growing businesses',
      monthlyPrice: 1499,
      yearlyPrice: 14999,
      features: [
        { text: '5 Chatbots', included: true },
        { text: '15,000 messages/month', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Email & chat support', included: true },
        { text: 'Custom templates', included: true },
        { text: 'Advanced integrations', included: true },
        { text: 'Priority support', included: false },
      ],
      ctaText: 'Choose Pro'
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For large scale operations',
      monthlyPrice: 4999,
      yearlyPrice: 49999,
      features: [
        { text: 'Unlimited Chatbots', included: true },
        { text: 'Unlimited messages', included: true },
        { text: 'Custom analytics dashboard', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Custom templates & branding', included: true },
        { text: 'Advanced integrations & API', included: true },
        { text: 'Priority support', included: true },
      ],
      ctaText: 'Contact Sales'
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">Choose Your Plan</h2>
        <p className="pricing-subtitle">
          Select the perfect plan for your needs and scale as you grow
        </p>
        
        <div className="pricing-toggle-container">
          <div className="pricing-toggle">
            <span 
              className={!isYearly ? 'active' : ''} 
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </span>
            <div className="toggle-switch-container">
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={isYearly} 
                  onChange={handleToggleChange} 
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <span 
              className={isYearly ? 'active' : ''} 
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </span>
          </div>
          <div className="save-badge">Save 15%</div>
        </div>
      </div>
      
      <div className="pricing-cards">
        {plans.map((plan) => (
          <div className="pricing-card-column" key={plan.id}>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="pricing-card-price">
                {plan.monthlyPrice === null ? (
                  <span className="price-free">Free Forever</span>
                ) : (
                  <>
                    <span className="price-currency">₹</span>
                    <span className="price-amount">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="price-period">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </>
                )}
              </div>
              <div className="pricing-card-features">
                {plan.features.map((feature, index) => (
                  <div 
                    className={`feature-item ${feature.included ? 'included' : 'not-included'}`} 
                    key={index}
                  >
                    <i className={`bi ${feature.included ? 'bi-check-circle-fill' : 'bi-x-circle'}`}></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="pricing-card-cta">
                <button className={`cta-button ${plan.id === 'business' ? 'business-cta' : ''}`} >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pricing-faq">
        <p>
          Have questions about our plans? <a href="#faq">Check out our FAQ</a> or <a href="#contact">contact us</a>.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
