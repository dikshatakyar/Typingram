import React from 'react'
import Logo from './assets/logo.png';

const Nav = () => {
    return (
        <div className='nav-container'>
        <div className='nav-left'>

            <img className='flash-logo' src={Logo}alt="logo" />
            <p className="flash-logo-text">Typingram</p>
        </div>
        </div>
    )
}

export default Nav
