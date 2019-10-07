import React, { useEffect, useState } from 'react';
import Drawer from './components/Drawer'
import { loginUser, signupUser, verifyUser } from './services/api-helper'
import './App.css';

const App = () => {
  const [authFormData, setAuthFormData] = useState({
    username: '',
    password: '',
    email: '',
  })
  const [currentUser, setCurrentUser] = useState(null);

  const authHandleChange = (e) => {
    const { name, value } = e.target
    setAuthFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(authFormData);
    setCurrentUser(currentUser);
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const currentUser = await signupUser(authFormData);
    setCurrentUser(currentUser);
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.clear();
  }

  const handleVerify = async () => {
    const currentUser = await verifyUser()
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }

  useEffect(() => {
    handleVerify();
  }, [])

  return (
    <div>
      <Drawer
        currentUser={currentUser}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        authFormData={authFormData}
        authHandleChange={authHandleChange}
        handleSignup={handleSignup}
      />
    </div>
  )
}

export default App
