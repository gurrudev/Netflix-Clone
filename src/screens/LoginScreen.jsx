import React, { useState } from 'react'
import './LoginScreen.css'

import NetflixLogo from '../assets/img/logo.png'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(true);

    return (

        <div className='login-screen' >
            <div className="login-screen-bg">
                <img className='login-screen-logo' src={NetflixLogo} alt="" srcSet="" />
                <button onClick={() => setSignIn(true)} className='login-screen-btn'>Sign In</button>
                <div className="login-screen-gradient" />
            </div>
            <div className="login-screen-body" >

                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anyware, Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                        <div className="login-screen-input">
                            <form>
                                <input type="email" placeholder='Email Adderss' />
                                <button onClick={() => setSignIn(true)} className='login-screen-get-started'>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>

    )
}

export default LoginScreen