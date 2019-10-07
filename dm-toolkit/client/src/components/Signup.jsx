import React from 'react'

const Signup = (props) => {
  const { username, password, email } = props.authFormData
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={props.handleSignup}>
        <input
          type='text'
          placeholder='email'
          name='email'
          value={email}
          onChange={props.authHandleChange}
        />
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
        <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup;