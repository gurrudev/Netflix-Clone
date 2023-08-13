import React, { useEffect } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { auth } from '../helper/firebase'
import HomeScreen from '../src/screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import ProfileScreen from './screens/ProfileScreen'


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // console.log(userAuth)
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        // console.log('logged out')
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch]);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            {!user ? (
              <Route exact path="/" element={<LoginScreen />} />
            ) : (
              <>
                <Route exact path="/profile" element={<ProfileScreen />} />
                <Route exact path="/" element={<HomeScreen />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App  
