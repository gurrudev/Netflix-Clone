import React from 'react'
import './Nav.css'

import NetflixLogo from './assets/img/logo.png'

function Nav() {
    return (
        <>
            <div className="nav">
                <div className="nav-contents">
                    <img className='nav-logo' src={NetflixLogo} alt="" />
                   
                    <img className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
                </div>
            </div>
        </>
    )
}

export default Nav