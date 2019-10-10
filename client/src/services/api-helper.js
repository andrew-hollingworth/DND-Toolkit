const axios = require('axios')
const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const signupUser = async (signupData) => {
  const resp = await api.post('/users', { user: signupData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const getUser = async (userId) => {
  const resp = await api.get(`/user/${userId}`)
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const updateUser = async (updateData, userId) => {
  const resp = await api.put(`/users/${userId}`, updateData);
  return resp.data.user;
}

export const deleteUser = async (userId) => {
  const resp = await api.delete(`/users/${userId}`)
  return resp.data.user
}

export const getConditions = async () => {
  let conditions = await api.get('/conditions')
  return conditions.data
}

export const getRests = async () => {
  let rests = await api.get('/rests')
  return rests.data
}

// //////////// SCREEN FUNCTIONS /////////////////////

export const createScreen = async (userId, name) => {
  let screen = await api.post(`/screens/users/${userId}`, name)
  return screen.data
}

export const getUserScreens = async (userId) => {
  let userScreens = await api.get(`/screens/users/${userId}`)
  return userScreens.data
}

export const getOneScreen = async (id) => {
  let oneScreen = await api.get(`/screens/${id}`)
  return oneScreen.data
}

export const deleteScreen = async (screenId) => {
  const resp = await api.delete(`/screens/${screenId}`)
  return resp.data
}

export const updateScreen = async (id, currentScreen) => {
  const resp = await api.put(`/screens/${id}`, { screen: currentScreen })
  return resp.data
}