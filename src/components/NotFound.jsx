import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/6.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '60px',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '3px double #4CAF50'
      }}>
        <h1 style={{fontSize: '120px', margin: '0', color: '#4CAF50', animation: 'bounce 2s ease-in-out infinite'}}>404</h1>
        <h2 style={{fontSize: '36px', margin: '20px 0', color: '#333'}}>Page Not Found</h2>
        <p style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
          The page you are looking for does not exist.
        </p>
        <Link to="/" style={{
          padding: '15px 40px',
          fontSize: '18px',
          fontWeight: '600',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'all 0.3s ease'
        }}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
