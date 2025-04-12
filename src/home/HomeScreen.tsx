import React, { useState, useRef, useEffect } from 'react';
import './Home.css'
// import translationImage from '../assets/lang-barriers/Group 1.png';
// import translationImageTwo from '../assets/lang-barriers/Group 2.png';
// import translationImageThree from '../assets/lang-barriers/Group 3.png';
// import translationImageFour from '../assets/lang-barriers/Group 4.png';
import SectionOneImage from '../assets/chatbotintro.png';
import contactFormImage from '../assets/form-contact.png';
import ProductBadge from '../assets/top-post-badge.svg';  // Adjust the path accordingly
import ChromeExtention from './ChromeExtension';
// import box1 from '../assets/features/Rectangle 371.png'
// import chatbotImage from '../assets/chatbot/chatbot.png';
// import resImage from '../assets/res/Group 6.png';
// import resImageTwo from '../assets/res/Group 7.png';
// import resImageThree from '../assets/res/Group 8.png';
// import resImageFour from '../assets/res/Group 10.png';


import Pricing from './Pricing';



type FAQItem = {
    id: string;
    question: string;
    answer: string;
};


const HomeScreen: React.FC = () => {
    const tabs = [
        { id: 'add', label: 'Add knowledge' },
        { id: 'customize', label: 'Customize' },
        { id: 'leads', label: 'Collect leads' },
        { id: 'share', label: 'Share' },
        { id: 'analyze', label: 'Analyze' }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const getContent = (tabId: string) => {
        switch (tabId) {
            case 'add':
                return (
                    <div className="content-row">
                        <div className="content-col">
                            <img src="/api/placeholder/400/320" alt="Knowledge base" className="tab-image" />
                        </div>
                        <div className="content-col">
                            <h3 className="content-heading">Add Knowledge</h3>
                            <p className="content-text">Upload your documents or connect to existing knowledge bases to power your chatbot with relevant information.</p>
                            <button className="content-button">Learn more</button>
                        </div>
                    </div>
                );
            case 'customize':
                return (
                    <div className="content-row">
                        <div className="content-col">
                            <h3 className="content-heading">Customize Your Bot</h3>
                            <p className="content-text">Personalize the appearance and behavior to match your brand and meet your specific needs.</p>
                            <button className="content-button">Start customizing</button>
                        </div>
                        <div className="content-col">
                            <img src="/api/placeholder/400/320" alt="Customization options" className="tab-image" />
                        </div>
                    </div>
                );
            case 'leads':
                return (
                    <div className="content-row">
                        <div className="content-col">
                            <img src="/api/placeholder/400/320" alt="Lead generation" className="tab-image" />
                        </div>
                        <div className="content-col">
                            <h3 className="content-heading">Collect Leads</h3>
                            <p className="content-text">Turn conversations into conversions with automated lead capture and qualification.</p>
                            <button className="content-button">Set up lead capture</button>
                        </div>
                    </div>
                );
            case 'share':
                return (
                    <div className="content-row">
                        <div className="content-col">
                            <h3 className="content-heading">Share Everywhere</h3>
                            <p className="content-text">Easily embed your chatbot on websites, share via direct link, or integrate with messaging platforms.</p>
                            <button className="content-button">Deployment options</button>
                        </div>
                        <div className="content-col">
                            <img src="/api/placeholder/400/320" alt="Sharing options" className="tab-image" />
                        </div>
                    </div>
                );
            case 'analyze':
                return (
                    <div className="content-row">
                        <div className="content-col">
                            <img src="/api/placeholder/400/320" alt="Analytics dashboard" className="tab-image" />
                        </div>
                        <div className="content-col">
                            <h3 className="content-heading">Powerful Analytics</h3>
                            <p className="content-text">Gain insights into user interactions and optimize your chatbot's performance over time.</p>
                            <button className="content-button">Explore analytics</button>
                        </div>
                    </div>
                );
            default:
                return <div>Select a tab</div>;
        }
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const testimonialRef = useRef<HTMLDivElement>(null);
    const lineStopRef = useRef<HTMLDivElement>(null);
    const [, setLineWidth] = useState('100%');

    useEffect(() => {
        const calculateLineStop = () => {
            if (lineStopRef.current) {
                const stopElement = lineStopRef.current;
                const stopRect = stopElement.getBoundingClientRect();
                const parentRect = stopElement.parentElement?.getBoundingClientRect();
                if (parentRect) {
                    const rightDistance = parentRect.right - stopRect.left;
                    setLineWidth(`${rightDistance}px`);
                }
            }
        };

        calculateLineStop();
        window.addEventListener('resize', calculateLineStop);
        return () => window.removeEventListener('resize', calculateLineStop);
    }, []);

    const testimonialColors = [
        '#849DFF',
        '#C4E1F9',
        '#FFE5EF',
        '#FFEFB4',
        '#FFF8F0',
        '#ffffff'
    ];

    const handleSlide = (direction: 'prev' | 'next') => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        const totalSlides = 5;

        let newSlide = direction === 'next'
            ? (currentSlide + 1) % totalSlides
            : (currentSlide - 1 + totalSlides) % totalSlides;

        setCurrentSlide(newSlide);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlide('next');
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    // FAQ Section
    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const faqItems: FAQItem[] = [
        {
            id: 'faq1',
            question: 'How does the AI chatbot builder work?',
            answer: 'Our AI chatbot builder allows you to upload your knowledge base, customize the chatbot, and deploy it easily.'
        },
        {
            id: 'faq2',
            question: 'Do I need coding knowledge to build a chatbot?',
            answer: 'No coding required! Our interface is simple and user-friendly for everyone.'
        },
        {
            id: 'faq3',
            question: 'Can I customize how my chatbot looks?',
            answer: 'Yes, you can fully customize the appearance, colors, avatar, and even tone of your chatbot.'
        },
        {
            id: 'faq4',
            question: 'How do I connect the chatbot to my CRM or marketing tools?',
            answer: 'Use our Zapier integration to connect with thousands of tools including CRMs and email platforms.'
        },
        {
            id: 'faq5',
            question: 'What type of analytics will I get?',
            answer: 'Track interactions, conversions, and usage patterns with our detailed analytics dashboard.'
        },
        {
            id: 'faq6',
            question: 'How quickly can I get my chatbot up and running?',
            answer: 'You can get started in as little as 30 minutes with our ready-made templates.'
        },
        {
            id: 'faq7',
            question: 'How quickly can I get my chatbot up and running?',
            answer: 'You can get started in as little as 30 minutes with our ready-made templates.'
        },
        {
            id: 'faq8',
            question: 'How quickly can I get my chatbot up and running?',
            answer: 'You can get started in as little as 30 minutes with our ready-made templates.'
        },
        {
            id: 'faq9',
            question: 'How quickly can I get my chatbot up and running?',
            answer: 'You can get started in as little as 30 minutes with our ready-made templates.'
        },
        {
            id: 'faq10',
            question: 'How quickly can I get my chatbot up and running?',
            answer: 'You can get started in as little as 30 minutes with our ready-made templates.'
        }
    ];

    const toggleItem = (id: string) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    // Check scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);  // If user has scrolled down, show the button
      } else {
        setIsScrolled(false);  // If at the top, hide the button
      }
    };
  
    // Add event listener on mount, and clean it up on unmount
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>

            <div className="fab-container">
                <button className="fab-button">
                    <i className="fa-solid fa-message"></i> {/* Or use any icon you like */}
                </button>
            </div>
            <div className={`custom-fab-container ${isScrolled ? 'visible' : 'hidden'}`}>
            <button className="custom-fab-button">
                    <img src={ProductBadge} alt="Product Badge" className="fab-img" />
                </button>
            </div>
            <div>
                <section className='section-one'>
                    <div className="container mt-3 mb-3">
                        <div className="row align-items-center">
                            <div className="col-sm d-flex flex-column heading-one-content">
                                <h1 className="head-one">
                                    Build, Deploy & Scale Smart Chatbots with Ease
                                </h1>
                                <h6 className="para-desc">
                                    Empower your business with our no-code chatbot builder. Launch intelligent, AI-driven bots in minutes – fully customizable, multilingual, and integrated with the latest LLMs. <br /><br />
                                    Over 17+ powerful features to automate support, boost engagement, and drive growth.
                                </h6>
                                <div className="d-flex flex-column gap-3 section-one-buttons">
                                    <button type="button" className="btn btn-primary discover-now">Discover our Platform</button>
                                    <button type="button" className="btn btn-light journey-now">Start Your Journey Now!</button>
                                </div>
                            </div>
                            <div className="col-sm line-stop" ref={lineStopRef}>
                                <img
                                    src={SectionOneImage}
                                    alt="Chatbot Platform Preview"
                                    className="img-fluid"
                                    width={1900}
                                />
                            </div>
                        </div>
                    </div>

                </section>


                <div className="tabs-container">
                    <div className="tabs-header">
                        <h1 className="tabs-title">An easy-to-use AI chatbot builder</h1>
                        <p className="tabs-subtitle">with the power of Zapier</p>
                    </div>

                    <div className="tabs-buttons-container">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`tab-button ${activeTab === tab.id ? 'tab-button-active' : ''}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="tabs-content-container">
                        {getContent(activeTab)}
                    </div>

                    <p className="tabs-footer">
                        Design a chatbot that matches your brand, then boost interactions with suggestions, keyword buttons, and more.
                    </p>
                </div>

                
                <section>
                    <div className=''>
                        <div className='container text-center'>
                            <h1 className='head-one'>Say GoodBye to Language barriers</h1>
                        </div>
                        <div style={{ margin: '0 120px' }}>
                            <div className="row gap-5 mt-5">
                                <div className="col-sm descp-three position-relative">
                                    <div className='corner-box'></div>
                                    <div className='d-flex lb-one'>
                                        <div>
                                            {/* <img
                                                src={translationImageThree}
                                                width={1900}
                                                height="auto"
                                                alt="Translation Description"
                                                className="img-fluid"
                                            /> */}
                                        </div>
                                        <div className=''><h2 className='lang-barriers'>Build AI-Powered Chatbots<br /> Without Writing Code</h2>
                                            <p className='lang-decsript'>
                                                Design and deploy intelligent chatbots effortlessly using our drag-and-drop builder. Whether for support, sales, or engagement — launch your chatbot in minutes with no technical experience required.
                                            </p>

                                            <button type="button" className="btn btn-light lang-bar-button">
                                                Try It Live <i className="fa-light fa-arrow-right ms-1 me-3"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm descp-four position-relative">
                                    <div className='corner-box'></div>
                                    <div className='d-flex lb-one'>
                                        <div className=''><h2 className='lang-barriers'>One Platform.<br />Infinite Possibilities.</h2>
                                            <p className='lang-decsript'>
                                                Manage, train, and customize all your chatbots from a single intuitive dashboard. Track performance, set automation flows, and optimize every interaction in real time.
                                            </p>
                                            <button type="button" className="btn btn-light lang-bar-button">
                                                Connect Your Bot <i className="fa-light fa-arrow-right ms-1 me-3"></i>
                                            </button>
                                        </div>
                                        <div>
                                            {/* <img
                                                src={translationImageTwo}
                                                width={2100}
                                                height="auto"
                                                alt="Translation Description"
                                                className="img-fluid"
                                            /> */}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style={{ margin: '0 120px' }}>
                            <div className="row gap-5 mt-5">
                                <div className="col-sm descp-one position-relative">
                                    <div className='corner-box'></div>
                                    <div className='d-flex lb-one'>
                                        <div>
                                            {/* <img
                                                src={translationImage}
                                                width={1900}
                                                height="auto"
                                                alt="Translation Description"
                                                className="img-fluid"
                                            /> */}
                                        </div>
                                        <div className=''>
                                            <h2 className='lang-barriers'>Smarter Conversations<br />Powered by LLMs</h2>
                                            <p className='lang-decsript'>
                                                Integrate advanced Large Language Models to give your chatbots deep understanding, natural responses, and human-like intelligence. Deliver support and answers your users will love.
                                            </p>

                                            <button type="button" className="btn btn-light lang-bar-button">
                                                Explore Features <i className="fa-light fa-arrow-right ms-1 me-3"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm descp-two position-relative">
                                    <div className='corner-box'></div>
                                    <div className='d-flex gap-5 lb-one'>
                                        <div className=''><h2 className='lang-barriers'>Plug & Play Across<br />Your Favorite Platforms</h2>
                                            <p className='lang-decsript'>
                                                Easily integrate your chatbot with websites, apps, CRMs, or messaging tools. Deploy your assistant exactly where your users are — with a single click.
                                            </p>

                                            <button type="button" className="btn btn-light lang-bar-button">
                                                Launch in Minutes <i className="fa-light fa-arrow-right ms-1 me-3"></i>
                                            </button>
                                        </div>
                                        <div>
                                            {/* <img
                                                src={translationImageFour}
                                                width={1200}
                                                height="auto"
                                                alt="Translation Description"
                                                className="img-fluid"
                                            /> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="chatbot-promo-container">
                    <div className="container-fluid">
                        <div className="row" style={{ minHeight: '520px' }}>
                            <div className="col-md-5 promo-left">
                                <h1 className="promo-title">Leverage a chatbot API to build an AI Chatbot</h1>
                                <p className="promo-text">
                                    Want to go deeper than the usual chatbot platform? Modern solutions like Crisp
                                    let you craft AI-native workflows using a dedicated chatbot API. Available in 5
                                    different API libraries, we've made it easier for you to connect your data to our
                                    customer service platform. Simply connect a third-party LLM tool such as
                                    Dialogflow, OpenAI, Llama or Claude to bring AI to your customer experience!
                                </p>
                                <button className="btn btn-primary learn-more-btn">Learn more</button>
                            </div>
                            <div className="col-md-7 promo-right">
                                <div className="code-window">
                                    <div className="code-window-header">
                                        <div className="window-dots">
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                        </div>
                                    </div>
                                    <div className="code-window-content">
                                        <pre className="code-block">
                                            <code>
                                                <div className="code-line"><span className="code-comment">// Receive a message from a visitor</span></div>
                                                <div className="code-line"><span className="code-function">CrispClient.on</span>(<span className="code-string">"message:send"</span>, <span className="code-keyword">async</span> (message) =&gt; {'{'}</div>
                                                <div className="code-line">  <span className="code-keyword">const</span> sessionId  = message.session_id;</div>
                                                <div className="code-line">  <span className="code-keyword">const</span> userMessage = message.text;</div>
                                                <div className="code-line"></div>
                                                <div className="code-line">  <span className="code-keyword">const</span> response = <span className="code-keyword">await</span> openai.chat.completions.<span className="code-function">create</span>({'{'}</div>
                                                <div className="code-line">    <span className="code-property">model</span>    : <span className="code-string">"gpt-4o"</span>,</div>
                                                <div className="code-line">    <span className="code-property">messages</span> : [{'{'} <span className="code-property">role</span>: <span className="code-string">"user"</span>, <span className="code-property">content</span>: userMessage {'}'}]</div>
                                                <div className="code-line">  {'}'});</div>
                                                <div className="code-line"></div>
                                                <div className="code-line">  <span className="code-keyword">const</span> aiReply = response.choices[0].message.content;</div>
                                                <div className="code-line"></div>
                                                <div className="code-line">  <span className="code-function">CrispClient.website.sendMessageInConversation</span>(</div>
                                                <div className="code-line">    message.website_id, sessionId,</div>
                                                <div className="code-line">    {'{'}</div>
                                                <div className="code-line">      <span className="code-property">type</span>    : <span className="code-string">"text"</span>,</div>
                                                <div className="code-line">      <span className="code-property">content</span> : aiReply,</div>
                                                <div className="code-line">      <span className="code-property">from</span>    : <span className="code-string">"operator"</span>,</div>
                                                <div className="code-line">      <span className="code-property">origin</span>  : <span className="code-string">"chat"</span></div>
                                                <div className="code-line">    {'}'}</div>
                                                <div className="code-line">  );</div>
                                                <div className="code-line">{'}'});</div>
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='chatbot'>
                    <div>

                        <div className="container">
                            <div className="row justify-content-center align-items-center chatbot-content">
                                <div className="col-sm">
                                    <div className='d-flex flex-column gap-5'>
                                        <h1 className='head-one'>Revolutionizing User Engagement <br></br>with Regional AI-Powered <br></br>Chatbots</h1>
                                        <h6 className='para-desc'>Our regional chatbots leverage advanced AI and natural language processing (NLP) to interact in over 22 Indian languages. Designed to understand cultural nuances, these chatbots ensure every conversation feels personal and natural.</h6>
                                        <div className='d-flex flex-column gap-3 section-one-buttons'>
                                            <button type="button" className="btn btn-primary discover-now">Request a Chatbot Demo</button>
                                            <button type="button" className="btn btn-light journey-now">Start Building Chatbot Today!</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className='chatbot-visual'>
                                        {/* <img
                                            src={chatbotImage}
                                            alt="AI Chatbot"
                                            className="img-fluid mb-4"
                                            width={350}
                                        /> */}
                                        <div className='chatbot-features'>
                                            <div className='row row-cols-4 g-3'>
                                                <div className='col text-center'>
                                                    <div className='circle-feature d-flex justify-content-center align-items-center'>
                                                        <i className="fa-light fa-language fa-xl"></i>
                                                    </div>
                                                    <p className='mt-3 feature-text'>Multilingual Support</p>
                                                </div>
                                                <div className='col text-center'>
                                                    <div className='circle-feature d-flex justify-content-center align-items-center'>
                                                        <i className="fa-light fa-brain fa-xl"></i>
                                                    </div>
                                                    <p className='mt-3 feature-text'>Smart Context Understanding</p>
                                                </div>
                                                <div className='col text-center'>
                                                    <div className='circle-feature d-flex justify-content-center align-items-center'>
                                                        <i className="fa-light fa-timer fa-xl"></i>
                                                    </div>
                                                    <p className='mt-3 feature-text'>24/7 Availability</p>
                                                </div>
                                                <div className='col text-center'>
                                                    <div className='circle-feature d-flex justify-content-center align-items-center'>
                                                        <i className="fa-light fa-sliders fa-xl"></i>
                                                    </div>
                                                    <p className='mt-3 feature-text'>Customizable Workflows</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div style={{ margin: '0 120px' }}>
                            <div className="row gap-5">

                                {/* Tool Section */}
                                <div className="col res">
                                    <span className="res-span-1">Tools</span>
                                    <h5 className="res-head">Bot Coverage Estimator</h5>
                                    <div>
                                        {/* <img src={resImage} width={120} height="auto" alt="Tool" className="img-fluid" /> */}
                                    </div>
                                    <p className="para-desc mt-5">
                                        Estimate how far your chatbot can go by analyzing language reach, audience adaptability, and global readiness.
                                    </p>
                                </div>

                                <div className="col res-2"></div>

                                {/* Guide Section */}
                                <div className="col res-3">
                                    <span className="res-span-1">Guide</span>
                                    <h5 className="res-head">
                                        Building Chatbots for<br />International Audiences in 2025
                                    </h5>
                                    <div>
                                        {/* <img src={resImageTwo} width={120} height="auto" alt="Guide" className="img-fluid" /> */}
                                    </div>
                                    <p className="para-desc mt-5">
                                        Learn how to design bots that can adapt to users from different regions, communicate naturally, and deliver accurate, real-time support.
                                    </p>
                                </div>

                                {/* Ebook + Blog Row */}
                                <div className="row gap-5">

                                    {/* E-Book Section */}
                                    <div className="col-sm res-des-one position-relative">
                                        <div className="corner-box"></div>
                                        <div className="lb-one">
                                            <div className="d-flex gap-4 align-items-center">
                                                <div>
                                                    <span className="res-span-1">E-Books</span>
                                                    <h5 className="res-head">
                                                        Localization Techniques for Scalable Chatbots
                                                    </h5>
                                                    <p className="para-desc">
                                                        Discover practical methods to make your chatbot resonate with diverse users—ensuring tone, terminology, and context match regional expectations.
                                                    </p>
                                                </div>
                                                <div>
                                                    {/* <img src={resImageThree} width={120} height="auto" alt="Ebook" className="img-fluid" /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Blog Section */}
                                    <div className="col-sm res-des-two position-relative">
                                        <div className="corner-box"></div>
                                        <div className="lb-one">
                                            <div className="d-flex gap-4 align-items-center">
                                                <div>
                                                    <span className="res-span-1">Blogs</span>
                                                    <h5 className="res-head">
                                                        How Global-Ready Chatbots Are Changing Customer Support
                                                    </h5>
                                                    <p className="para-desc">
                                                        Explore why bots that adapt to different languages, regions, and communication styles are becoming essential for global businesses.
                                                    </p>
                                                </div>
                                                <div>
                                                    {/* <img src={resImageFour} width={120} height="auto" alt="Blog" className="img-fluid" /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className='features'>
                    <div className='container text-center'>
                        <h1 className='head-one'>Why We Stand Out: Pioneering<br />Global-Ready Digital Solutions</h1>
                        <p className='features-desc'>Discover how we make digital engagement seamless, inclusive, and tailored to regional audiences.</p>
                    </div>

                    <div>
                        <div className="container">
                            <div className="row gap-3">

                                {/* Feature 1 */}
                                <div className="col-sm">
                                    <div>
                                        {/* <img src={box1} width={2100} height="auto" alt="Translation Description" className="img-fluid" /> */}
                                    </div>
                                    <h5 className='mt-3 feature-heading-1'>Instant Language Switching</h5>
                                    <p className='feature-para'>
                                        Enable users to interact in their preferred language, with real-time adaptation that respects tone and local context.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="col-sm">
                                    <div>
                                        {/* <img src={box1} width={2100} height="auto" alt="Translation Description" className="img-fluid" /> */}
                                    </div>
                                    <h5 className='mt-3 feature-heading-1'>Pan-India Language Coverage</h5>
                                    <p className='feature-para'>
                                        From Hindi to Manipuri, reach communities across India and deliver content that resonates—right out of the box.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="col-sm">
                                    <div>
                                        {/* <img src={box1} width={2100} height="auto" alt="Translation Description" className="img-fluid" /> */}
                                    </div>
                                    <h5 className='mt-3 feature-heading-1'>Scalable AI-Powered Chatbots</h5>
                                    <p className='feature-para'>
                                        Deploy bots that understand regional expressions, support dynamic conversations, and grow with your business.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="col-sm">
                                    <div>
                                        {/* <img src={box1} width={2100} height="auto" alt="Translation Description" className="img-fluid" /> */}
                                    </div>
                                    <h5 className='mt-3 feature-heading-1'>Effortless Integration</h5>
                                    <p className='feature-para'>
                                        Easily embed our tech into your website or app—backed by ongoing support and guidance from our technical team.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='testimonials'>
                    <div className="container-fluid px-0">
                        <div className="row align-items-center testimonials-text g-0">
                            <div className="col-md-3 pe-4 ps-lg-7">
                                <h2 className="testimonial-heading">What Our Users Say</h2>
                                <p className='para-desc'>
                                    Talkify has empowered businesses around the globe to scale faster and connect deeper with multilingual audiences. Here's what our users have to say.
                                </p>
                            </div>
                            <div className="col-md-9 px-0">
                                <div className="testimonial-slider position-relative overflow-hidden">
                                    <div
                                        className="testimonial-container d-flex"
                                        ref={testimonialRef}
                                        style={{
                                            transform: `translateX(-${currentSlide * 33.33}%)`,
                                            transition: 'transform 0.5s ease-in-out'
                                        }}
                                    >
                                        {[...Array(2)].map((_, groupIndex) => (
                                            <React.Fragment key={groupIndex}>
                                                <div className="testimonial-item" key={1}>
                                                    <div className="testimonial-box" style={{ backgroundColor: testimonialColors[0] }}>
                                                        <p className="testimonial-text">
                                                            “Talkify helped us increase engagement by 3x across our non-English speaking customers. The AI accuracy is spot on.”
                                                        </p>
                                                        <div className="testimonial-author">
                                                            <div className="profile-circle"></div> {/* Profile circle on the left */}
                                                            <div className="author-info">
                                                                <h5>Raj Patel</h5>
                                                                <p>Co-founder, StartScale</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="testimonial-item" key={2}>
                                                    <div className="testimonial-box" style={{ backgroundColor: testimonialColors[1] }}>
                                                        <p className="testimonial-text">
                                                            “As a startup expanding into Europe, Talkify gave us a fast, reliable way to localize our support in 10+ languages.”
                                                        </p>
                                                        <div className="testimonial-author">
                                                            <div className="profile-circle"></div> {/* Profile circle on the left */}
                                                            <div className="author-info">
                                                                <h5>Raj Patel</h5>
                                                                <p>Co-founder, StartScale</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="testimonial-item" key={3}>
                                                    <div className="testimonial-box" style={{ backgroundColor: testimonialColors[2] }}>
                                                        <p className="testimonial-text">
                                                            “The chatbot understands regional dialects far better than anything we’ve tried before. Our customers love it.”
                                                        </p>
                                                        <div className="testimonial-author">
                                                            <div className="profile-circle"></div> {/* Profile circle on the left */}
                                                            <div className="author-info">
                                                                <h5>Raj Patel</h5>
                                                                <p>Co-founder, StartScale</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="testimonial-item" key={4}>
                                                    <div className="testimonial-box" style={{ backgroundColor: testimonialColors[3] }}>
                                                        <p className="testimonial-text">
                                                            “We saw a 25% uptick in conversions just by integrating Talkify into our sales funnel across Latin America.”
                                                        </p>
                                                        <div className="testimonial-author">
                                                            <div className="profile-circle"></div> {/* Profile circle on the left */}
                                                            <div className="author-info">
                                                                <h5>Raj Patel</h5>
                                                                <p>Co-founder, StartScale</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>

                                    <div className="testimonial-navigation">
                                        <div className="nav-arrow prev"
                                            onClick={() => handleSlide('prev')}
                                            aria-label="Previous testimonial"
                                        >
                                            <i className="fa-light fa-arrow-left fa-xl"></i>
                                        </div>
                                        <div className="nav-arrow next"
                                            onClick={() => handleSlide('next')}
                                            aria-label="Next testimonial"
                                        >
                                            <i className="fa-light fa-arrow-right fa-xl"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='form'>
                    <div>
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm d-flex flex-column gap-3 justify-content-center">
                                    <img
                                        src={contactFormImage}

                                        height="70px"
                                        alt="Translation Description"
                                        className="img-fluid image-blogs"
                                    />
                                    <div className='head-one-1-content'>
                                        <h1 className='head-one-1'>Let's Build a Multilingual<br></br>
                                            Future Together</h1>
                                        <p className='para-desc-1'>Fill out the form below and we'll get back to you shortly.</p>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <form>
                                        <div className="row mb-3">
                                            <h4 className='para-desc mb-5'>Have a question? <br></br>Fill out the form, and we'll get back to you
                                                within 24 hours!</h4>
                                            <div className="col me-3">
                                                <input type="text" className="form-control" placeholder="First Name" required />
                                            </div>
                                            <div className="col me-3">
                                                <input type="text" className="form-control" placeholder="Last Name" required />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col me-3">
                                                <input type="email" className="form-control" placeholder="Email" required />
                                            </div>
                                            <div className="col me-3">
                                                <input type="tel" className="form-control" placeholder="Phone Number" required />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Company Name" required />
                                        </div>

                                        <div className="mb-3">
                                            <textarea className="form-control" rows={4} placeholder="Description" required></textarea>
                                        </div>

                                        <div className="row align-items-center">

                                            <div className="col text-end">
                                                <button type="submit" className="btn btn-primary form-button">Submit the Form</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                


                <Pricing />

                <ChromeExtention/>
                <div className="faq-section">
                    <div className="faq-header">
                        <h2 className="faq-title">Frequently Asked Questions</h2>
                        <p className="faq-subtitle">Everything you need to know about our AI chatbot builder</p>
                    </div>

                    <div className="faq-container">
                        {faqItems.map((item) => (
                            <div key={item.id} className="faq-item">
                                <button
                                    className={`faq-question ${openItemId === item.id ? 'active' : ''}`}
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <span>{item.question}</span>
                                    <i className={`fa-light ${openItemId === item.id ? 'fa-minus' : 'fa-plus'} fa-lg`}></i>
                                </button>

                                {openItemId === item.id && (
                                    <div className="faq-answer open">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="faq-cta">
                        <p>Don't see your question here?</p>
                        <button className="faq-button">Contact Support</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen