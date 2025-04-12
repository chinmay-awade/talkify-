import './Navmenu.css'
import logo from '../assets/talkify.svg'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleTryFreeClick = () => {
        navigate('/login');
    };

    return (
    <div>
     
        <nav className="navbar navbar-expand-lg bg-body-white ">
     
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" height="40" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item px-1">
                    <a className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                       onClick={() => setActiveTab('home')} 
                       href="#">Home</a>
                  </li>
                  <li className="nav-item px-1">
                    <a className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
                       onClick={() => setActiveTab('products')} 
                       href="#">Products</a>
                  </li>
                  {/* <li className="nav-item dropdown px-1">
                    <a className={`nav-link dropdown-toggle ${activeTab === 'dropdown' ? 'active' : ''}`}
                       onClick={() => setActiveTab('dropdown')} 
                       href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li> */}
                  <li className="nav-item px-1">
                    <a className={`nav-link ${activeTab === 'integrations' ? 'active' : ''}`}
                       onClick={() => setActiveTab('integrations')} 
                       href="#">Integrations</a>
                  </li>
                  <li className="nav-item px-1">
                    <a className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`}
                       onClick={() => setActiveTab('pricing')} 
                       href="#">Pricings</a>
                  </li>
                  <li className="nav-item px-1">
                    <a className={`nav-link ${activeTab === 'solutions' ? 'active' : ''}`}
                       onClick={() => setActiveTab('solutions')} 
                       href="#">Solutions</a>
                  </li>
                  <li className="nav-item px-1">
                    <a className={`nav-link ${activeTab === 'resources' ? 'active' : ''}`}
                       onClick={(e) => {
                         e.preventDefault();
                         setActiveTab('resources');
                         window.open('https://centraze-limited-uk.gitbook.io/open-mobility-transport-docs', '_blank', 'noopener,noreferrer');
                       }}
                       href="#">Resources</a>
                  </li>
                </ul>
                <div className="d-flex gap-2 align-items-center">
                  <div className="text-end me-3">
                    <div className="small text-muted">Contact Sales</div>
                    <div className="fw-bold fs-5">0120 112577</div>
                  </div>
                  <button 
                    className="btn btn-outline-success try-free" 
                    onClick={handleTryFreeClick}
                  >
                    <i className=" fa-light fa-right-to-bracket fa-lg me-2"></i>
                    Try Free
                  </button>
                  <button className="btn btn-outline-success language-button" type="submit"><i className="fa-light fa-globe me-2 fa-lg"></i>EN</button>
                </div>
              </div>
            </div>
          </nav>
    </div>
    )
}

export default Navbar
