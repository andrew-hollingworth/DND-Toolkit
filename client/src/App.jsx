import React, { useEffect, useState } from 'react';
import Drawer from './components/Drawer'
import { loginUser, signupUser, verifyUser, getConditions } from './services/api-helper'
import './App.css';

const App = () => {
  const [authFormData, setAuthFormData] = useState({
    username: '',
    password: '',
    email: '',
  })
  const [currentUser, setCurrentUser] = useState(null);
  const [conditions, setConditions] = useState(null)

  const authHandleChange = (e) => {
    const { name, value } = e.target
    setAuthFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('handleLogin');
    const currentUser = await loginUser(authFormData);
    setCurrentUser(currentUser);
    await console.log('current user', currentUser);

  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const currentUser = await signupUser(authFormData);
    await setCurrentUser(currentUser);
    await handleVerify();
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

  // GETTING MODULES
  const conditionModule = async () => {
    const conditions = await getConditions()
    setConditions(conditions)
    console.log(conditions);
  }

  // USEEFFECT
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
        setConditionModule={conditionModule}
        conditionModule={conditions}
      />
    </div>
  )
}

export default App
