import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
import NetflixLogo from './assets/img/logo.png'

function Nav() {

    const [show, handleShow] = useState(false)

    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <>
            <div className={`nav ${show && "nav-black"}`}>
                <div className="nav-contents">
                    <img onClick={()=> navigate('/')} className='nav-logo' src={NetflixLogo} alt="" />
                    <img onClick={()=> navigate('/profile')} className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
                </div>
            </div>
        </>
    )
}

export default Nav