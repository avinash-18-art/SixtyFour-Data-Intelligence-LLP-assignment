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
          <div style={{marginBottom: '20px'}}>
            <img
              src="https://cdn-icons-png.freepik.com/256/954/954591.png"
              alt="search"
              style={{width: 20, marginRight: 10}}
            />
            Search
          </div>
          <div style={{marginBottom: '20px'}}>
            <img
              src="https://cdn-icons.flaticon.com/png/512/4147/premium/4147933.png?token=exp=1649295944~hmac=7b9a6d0335f2209c16fcd8d4de1cb6f9"
              alt="monitor"
              style={{width: 20, marginRight: 10}}
            />
            monitor
          </div>
          <div style={{marginBottom: '20px'}}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg"
              alt="Question"
              style={{width: 20, marginRight: 10}}
            />
            Question
          </div>
          <div style={{marginBottom: '20px'}}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/10691/10691802.png"
              alt="Calender"
              style={{width: 20, marginRight: 10}}
            />
            Calender
          </div>
          <div style={{marginBottom: '20px'}}>
            <img
              src="https://cdn-icons-png.freepik.com/256/3211/3211645.png"
              alt="indurstry"
              style={{width: 20, marginRight: 10}}
            />
            Indurstry
          </div>
          <div style={{marginBottom: '20px'}}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5206/5206272.png"
              alt="Dollar"
              style={{width: 20, marginRight: 10}}
            />
            Dollar
          </div>
          <div style={{marginBottom: '20px'}}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/506/045/original/headphone-icon-in-flat-style-earphone-illustration-on-isolated-background-listen-music-sign-business-concept-vector.jpg"
              alt="Music"
              style={{width: 20, marginRight: 10}}
            />
            Music
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar
