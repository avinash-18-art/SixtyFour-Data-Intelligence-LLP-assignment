import React, {useState} from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

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
      <button onClick={toggleSidebar} style={{marginBottom: '10px'}}>
        {isOpen ? 'Collapse <<' : 'Expand >>'}
      </button>
      {isOpen && (
        <div>
          <div style={{marginBottom: '20px'}}>Home</div>
          <div style={{marginBottom: '20px'}}>Profile</div>
          <div style={{marginBottom: '20px'}}>Settings</div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
