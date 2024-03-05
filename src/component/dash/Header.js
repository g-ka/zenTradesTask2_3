import React from 'react';
import logo from '../../assets/image/dash/zenTrades_logo.png';

const Header = () => {
  return (
    <header>
      <div className='top_section'>
        <img src={logo} className='top_section_logo' />
        <p className='top_section_task'>
          Task-2/3
        </p>
      </div>      
    </header>
  )
}

export default Header