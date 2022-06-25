import React from 'react'
import reactImg from '../images/react.jpg';

function MainContent() {
  return (
    <div>
      <img className="react-img" src={reactImg} alt="React logo" />
      <h2>Fun facts about React</h2>
      <ul >
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default MainContent