import React, { useEffect, useState } from 'react';
import Drawer from './components/Drawer'
import {
  loginUser, signupUser, verifyUser, updateUser, deleteUser,
  getConditions,
  createScreen, deleteScreen, getUserScreens, getOneScreen
} from './services/api-helper'
import './App.css';

const App = () => {
  const [authFormData, setAuthFormData] = useState({
    username: '',
    password: '',
    email: '',
  })
  const [updateFormData, setUpdateFormData] = useState({
    username: '',
    email: '',
    image: '',
  })
  const [newScreenData, setNewScreenData] = useState({
    name: '',
  })
  const [currentUser, setCurrentUser] = useState(null);
  const [conditions, setConditions] = useState(null)
  const [currentScreen, setCurrentScreen] = useState(null);
  const [userScreens, setUserScreens] = useState(null);

  const authHandleChange = (e) => {
    const { name, value } = e.target
    setAuthFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const updateHandleChange = (e) => {
    const { name, value } = e.target
    setUpdateFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(updateFormData).forEach((key) => {
      if (updateFormData[key]) {
        data[key] = updateFormData[key];
      }
    })
    const updatedUser = await updateUser(data, currentUser.id);
    setCurrentUser(updatedUser);
    await handleVerify();
  }

  const handleUserDelete = async (e) => {
    e.preventDefault();
    await deleteUser(currentUser.id);
    await handleLogout();
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(authFormData);
    setCurrentUser(currentUser);
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const currentUser = await signupUser(authFormData);
    await setCurrentUser(currentUser);
    handleVerify();
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.clear();
  }

  const handleVerify = async () => {
    const currentUser = await verifyUser()
    if (currentUser) {
      setCurrentUser(currentUser);
      const allScreens = await getUserScreens(currentUser.id);
      setUserScreens(allScreens);
    }
  }

  // SCREEN RELATED FUNCTIONS
  const handleScreenCreate = async (e) => {
    e.preventDefault();
    const user_id = currentUser.id
    const newScreen = await createScreen(user_id, newScreenData);
    setCurrentScreen(newScreen);
    const allScreens = await getUserScreens(currentUser.id);
    setUserScreens(allScreens);
  }

  const screenHandleChange = (e) => {
    const { name, value } = e.target
    setNewScreenData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCurrentScreenSelect = async (id) => {
    const newCurrentScreen = await getOneScreen(id);
    setCurrentScreen(newCurrentScreen)
  }

  // const handleScreenDelete = async (e) => {
  //   e.preventDefault();
  //   await deleteScreen()
  // }

  // GETTING MODULES
  const setConditionModule = async () => {
    const conditions = await getConditions();
    setConditions(conditions);
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
        updateFormData={updateFormData}
        updateHandleChange={updateHandleChange}
        handleUpdate={handleUpdate}
        handleSignup={handleSignup}
        handleUserDelete={handleUserDelete}
        setConditionModule={setConditionModule}
        conditionModule={conditions}
        handleScreenCreate={handleScreenCreate}
        screenHandleChange={screenHandleChange}
        newScreenData={newScreenData}
        userScreens={userScreens}
        handleCurrentScreenSelect={handleCurrentScreenSelect}
      />
    </div>
  )
}

export default App
