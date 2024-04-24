import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        width: isOpen ? '200px' : '50px',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        transition: 'width 0.3s',
        padding: isOpen ? '10px' : '10px 0px',
        boxSizing: 'border-box',
      }}
    >
      <button onClick={toggleSidebar} style={{ marginBottom: '10px' }}>
        {isOpen ? 'Collapse <<' : 'Expand >>'}
      </button>
      {isOpen && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <img src="https://cdn-icons-png.freepik.com/256/954/954591.png" alt="Home" style={{ width: 20, marginRight: 10 }} />
            Home
          </div>
          <div style={{ marginBottom: '20px' }}>
            <img src="https://cdn-icons.flaticon.com/png/512/4147/premium/4147933.png?token=exp=1649295944~hmac=7b9a6d0335f2209c16fcd8d4de1cb6f9" alt="Profile" style={{ width: 20, marginRight: 10 }} />
            Profile
          </div>
          <div style={{ marginBottom: '20px' }}>
            <img src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg" alt="Settings" style={{ width: 20, marginRight: 10 }} />
            Settings
          </div>
          <div style={{ marginBottom: '20px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/10691/10691802.png" alt="Music" style={{ width: 20, marginRight: 10 }} />
            Music
          </div>
          <div style={{ marginBottom: '20px' }}>
            <img src="https://cdn-icons-png.freepik.com/256/3211/3211645.png" alt="Notifications" style={{ width: 20, marginRight: 10 }} />
            Notifications
          </div>
          <div style={{ marginBottom: '20px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/5206/5206272.png" alt="Gallery" style={{ width: 20, marginRight: 10 }} />
            Gallery
          </div>
          <div style={{ marginBottom: '20px' }}>
            <img src="https://static.vecteezy.com/system/resources/previews/022/506/045/original/headphone-icon-in-flat-style-earphone-illustration-on-isolated-background-listen-music-sign-business-concept-vector.jpg" alt="Support" style={{ width: 20, marginRight: 10 }} />
            Support
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
