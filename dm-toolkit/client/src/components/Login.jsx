import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const { username, password } = props.authFormData
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={props.handleLogin}>
        <input
          type='text'
          placeholder='username'
          name='username'
          value={username}
          onChange={props.authHandleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={props.authHandleChange}
        />
        <button>Login</button>
        <Link to='/signup'>Signup</Link>
      </form>
    </div>
  )
}

export default Login;