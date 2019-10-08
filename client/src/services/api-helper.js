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
  return conditions
}

// export const addToScreen = async (params) => {

//   return resp.data
// }

// export const deleteScores = async (scoreid) => {
//   const resp = await axios.delete(`${BASE_URL}/highscores/score/${scoreid}`);
//   return resp.data;
// };