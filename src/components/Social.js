import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
// import './social.css'

const Social = () => {
  return (
    <div>
      <div className="cols-icon">
        <a href="https://linkedin.com/in/tosin-adewale-4b61041b0">
          <FaLinkedin className='social-icon' />
        </a>
        <a href="https://twitter.com/tosmel2">
        <FaTwitter className='social-icon' />
        </a>
      </div>
    </div>
  )
}

export default Social