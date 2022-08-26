import React from 'react'
import Social from './Social'

const TeamRendered = ({chefImage, hText, pText}) => {
  return (
    <div className="chefTeam" >
      <img src={chefImage} alt='mine' className='chef-image' />
      <h2 style={{fontWeight:'bold', fontSize:'1.2rem'}}>{hText}</h2>
      <p>{pText}</p>
      <Social />
    </div>
  )
}

export default TeamRendered