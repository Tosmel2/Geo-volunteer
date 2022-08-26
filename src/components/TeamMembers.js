import React from 'react'
import TeamRendered from './TeamRendered';
import Team1 from '../../src/assets/Team1.png';
import Team2 from '../../src/assets/Team2.png';
import Team3 from '../../src/assets/Team3.png';
import Team4 from '../../src/assets/Team4.png';

const TeamMembers = () => {
  return (
    <div className="TeamContainer" >
      <h1>Meet Our Chief Chefs</h1>
      <div className='team'>
        <TeamRendered chefImage={Team1} hText={'Oyindamola T.'} pText={'Captain Chef'} />
        <TeamRendered chefImage={Team2} hText={'Full Name'} pText={'Chef'} />
        <TeamRendered chefImage={Team3} hText={'Dayo D1'} pText={'Captain Chef'} />
        <TeamRendered chefImage={Team4} hText={'Oyindamola'} pText={'Chef'} />
      </div>
    </div>
    )
}

export default TeamMembers