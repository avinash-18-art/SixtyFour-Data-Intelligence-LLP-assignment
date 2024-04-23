import React from 'react'
import './index.css'

const Item = ({title, imageUrl}) => {
  return (
    <div style={{margin: '10px', textAlign: 'center'}}>
      <img
        src={imageUrl}
        alt={title}
        style={{width: '100px', height: '100px'}}
      />
      <h3>{title}</h3>
    </div>
  )
}

export default Item
