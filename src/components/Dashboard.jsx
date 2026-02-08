import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="dashboard-container">
      {/* Hamburger */}
      <div
        className={`hamburger ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? "visible" : "hidden"}`}>
        <h2 className="sidebar-title">MyApp</h2>
        <ul>
          <li><button onClick={() => setActiveSection('home')}>Home</button></li>
          <li><button onClick={() => setActiveSection('about')}>About Us</button></li>
          <li><button onClick={() => setActiveSection('contact')}>Contact Us</button></li>
        </ul>
        <div className="sidebar-footer">
          <Link to="/" className="back-btn">Back to Login</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="fixed-header">
          <p>WELCOME ON SOD IN THE GTSS</p>
        </div>

        <div className="three-containers">
          {activeSection === 'home' && (
            <>
              <div className="container">
                <img src="/wwww.jpg" alt="Welcome" className="container-img" />
                <h2>Welcome</h2>
                <p>Welcome to your dashboard. This is the main area.</p>
              </div>
              <div className="container">
                <img src="/download.jpg" alt="Features" className="container-img" />
                <h2>Features</h2>
                <p>Explore our amazing features and tools.</p>
              </div>
              <div className="container">
                <img src="/Spiderman 2099.jpg" alt="Updates" className="container-img" />
                <h2>Updates</h2>
                <p>Check out the latest updates and news.</p>
              </div>
            </>
          )}
          {activeSection === 'about' && (
            <>
              <div className="container">
                <img src="/wwww.jpg" alt="Mission" className="container-img" />
                <h2>Our Mission</h2>
                <p>We strive to provide the best service to our users.</p>
              </div>
              <div className="container">
                <img src="/download.jpg" alt="Team" className="container-img" />
                <h2>Our Team</h2>
                <p>Meet our dedicated team of professionals.</p>
              </div>
              <div className="container">
                <img src="/Spiderman 2099.jpg" alt="Values" className="container-img" />
                <h2>Our Values</h2>
                <p>Innovation, integrity, and excellence drive us.</p>
              </div>
            </>
          )}
          {activeSection === 'contact' && (
            <>
              <div className="container">
                <img src="/wwww.jpg" alt="Email" className="container-img" />
                <h2>Email</h2>
                <p>contact@myapp.com</p>
              </div>
              <div className="container">
                <img src="/download.jpg" alt="Phone" className="container-img" />
                <h2>Phone</h2>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="container">
                <img src="/Spiderman 2099.jpg" alt="Address" className="container-img" />
                <h2>Address</h2>
                <p>123 Main Street, City, Country</p>
              </div>
            </>
          )}
        </div>


        {/* Footer */}
        <footer className="dashboard-footer">
          <a
            href="https://www.facebook.com/cyuzuzo.jean.bosco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/cjbos-co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
