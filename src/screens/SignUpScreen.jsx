import React, { useRef } from 'react'
import './SignUpScreen.css'
import {auth} from '../firebase'

function SignUpScreen() {

  const emailRef =useRef(null)
  const passwordRef =useRef(null)

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value, 
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(err => {
      alert(err.message);
    });
  }
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value, 
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(err => {
      alert(err.message);
    });
  }

  return (
    <div className='signup-screen'>
      <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder='Email' ref={emailRef} name="email"  />
          <input type="password" ref={passwordRef} placeholder='Password' name="password"  />
          <button type="submit" onClick={signIn}>Sign In</button>

          <h4>
            <span id='grey'>New to Netflix? </span>
            <a className='signup-link' onClick={register}>Sign Up now.</a> 
          </h4>
      </form>
    </div>
  )
}

export default SignUpScreen