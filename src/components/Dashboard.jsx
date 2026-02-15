import React, { useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../utils/database";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [refresh, setRefresh] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePasswordVisibility = (userId) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setLoading(true);
      setTimeout(() => {
        database.deleteUser(id);
        setRefresh(refresh + 1);
        setLoading(false);
      }, 500);
    }
  };

  const handleSectionChange = (section) => {
    setLoading(true);
    setTimeout(() => {
      setActiveSection(section);
      setLoading(false);
    }, 300);
  };

  const filteredUsers = database.getUsers().filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.toString().includes(searchTerm)
  );

  return (
    <div className="dashboard-container">
      {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
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
          <li><button onClick={() => handleSectionChange('home')}>Home</button></li>
          <li><button onClick={() => handleSectionChange('about')}>About Us</button></li>
          <li><button onClick={() => handleSectionChange('contact')}>Contact Us</button></li>
          <li><button onClick={() => handleSectionChange('accounts')}>Accounts</button></li>
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
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/1.jpg" alt="Welcome" className="container-img" />
                <h2>Welcome</h2>
                <p>Welcome to your dashboard. This is the main area.</p>
              </div>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/2.jpg" alt="Features" className="container-img" />
                <h2>Features</h2>
                <p>Explore our amazing features and tools.</p>
              </div>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/3.jpg" alt="Updates" className="container-img" />
                <h2>Updates</h2>
                <p>Check out the latest updates and news.</p>
              </div>
            </>
          )}
          {activeSection === 'about' && (
            <>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/1.jpg" alt="Mission" className="container-img" />
                <h2>Our Mission</h2>
                <p>We strive to provide the best service to our users.</p>
              </div>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/2.jpg" alt="Team" className="container-img" />
                <h2>Our Team</h2>
                <p>Meet our dedicated team of professionals.</p>
              </div>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/3.jpg" alt="Values" className="container-img" />
                <h2>Our Values</h2>
                <p>Innovation, integrity, and excellence drive us.</p>
              </div>
            </>
          )}
          {activeSection === 'contact' && (
            <>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/1.jpg" alt="Email" className="container-img" />
                <h2>Email</h2>
                <p>contact@myapp.com</p>
              </div>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/2.jpg" alt="Phone" className="container-img" />
                <h2>Phone</h2>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="container" style={{backgroundColor: 'white'}}>
                <img src="/3.jpg" alt="Address" className="container-img" />
                <h2>Address</h2>
                <p>123 Main Street, City, Country</p>
              </div>
            </>
          )}
          {activeSection === 'accounts' && (
            <div className="container" style={{gridColumn: '1 / -1', maxWidth: '100%', borderRadius: '15px', width: 'auto', height: '500px', backgroundImage: 'url(/table.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <h2>User Accounts</h2>
              <input 
                type="text" 
                placeholder="Search by username or ID..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{width: '50%', padding: '10px', marginTop: '15px', marginBottom: '15px', borderRadius: '8px', border: '2px solid #ddd', fontSize: '16px', backgroundImage: 'url(/6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'black'}}
              />
              <div style={{overflowY: 'auto', flex: 1}}>
                <table style={{width: '100%', borderCollapse: 'separate', borderSpacing: '5px', backgroundImage: 'url(/table.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'black'}}>
                <thead>
                  <tr style={{backgroundColor: 'rgba(240, 240, 240, 0.95)'}}>
                    <th style={{border: '1px solid #ddd', padding: '12px', color: 'black', borderRadius: '8px'}}>ID</th>
                    <th style={{border: '1px solid #ddd', padding: '12px', color: 'black', borderRadius: '8px'}}>Username</th>
                    <th style={{border: '1px solid #ddd', padding: '12px', color: 'black', borderRadius: '8px'}}>Password</th>
                    <th style={{border: '1px solid #ddd', padding: '12px', color: 'black', borderRadius: '8px'}}>Created At</th>
                    <th style={{border: '1px solid #ddd', padding: '12px', color: 'black', borderRadius: '8px'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(user => (
                    <tr key={user.id}>
                      <td style={{border: '1px solid #ddd', padding: '12px', background: 'rgba(255, 255, 255, 0.85)', color: 'black', borderRadius: '8px'}}>{user.id}</td>
                      <td style={{border: '1px solid #ddd', padding: '12px', background: 'rgba(255, 255, 255, 0.85)', color: 'black', borderRadius: '8px'}}>{user.username}</td>
                      <td style={{border: '1px solid #ddd', padding: '12px', background: 'rgba(255, 255, 255, 0.85)', color: 'black', borderRadius: '8px'}}>
                        {visiblePasswords[user.id] ? user.password : '••••••••'}
                        <button onClick={() => togglePasswordVisibility(user.id)} style={{marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px'}}>
                          {visiblePasswords[user.id] ? '👁️' : '👁️‍🗨️'}
                        </button>
                      </td>
                      <td style={{border: '1px solid #ddd', padding: '12px', background: 'rgba(255, 255, 255, 0.85)', color: 'black', borderRadius: '8px'}}>{new Date(user.createdAt).toLocaleString()}</td>
                      <td style={{border: '1px solid #ddd', padding: '12px', background: 'rgba(255, 255, 255, 0.85)', color: 'black', borderRadius: '8px'}}>
                        <button onClick={() => handleDelete(user.id)} style={{backgroundColor: '#ff4444', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
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
