import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProfile, login } from '../../../../services';
import { setToken } from '../../../../features/auth/authSlice';
import { setProfile } from '../../../../features/profile/profileSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const loginRes = login({ username, password});
    dispatch(setToken(loginRes.token));

    const profileRes = getProfile({ token: loginRes.token });
    dispatch(setProfile(profileRes));

    navigate("/");
  }
  
  return (
    <div className='min-h-screen flex items-center justify-center bg-secondary-bg'>
      <div className="bg-white p-7 rounded-md w-full max-w-md">
        <h1 className='text-2xl text-primary font-bold text-center mb-5'>Login</h1>
        <div className="flex flex-col gap-3">
          <div className='flex flex-col gap-2'>
            <label htmlFor="username" className='text-sm font-medium text-gray-500'>
              Username
            </label>
            <input id='username' name='username' type="text" onChange={(e) => setUsername(e.target.value)} className='w-full px-3 py-2.5 border border-default-medium text-md rounded-md' placeholder='username' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="password" className='text-sm font-medium text-gray-500'>
              Password
            </label>
            <input id='password' name='password' type="password" onChange={(e) => setPassword(e.target.value)} className='w-full px-3 py-2.5 border border-default-medium text-md rounded-md' placeholder='•••'/>
          </div>
        </div>
        <div className="mb-2 mt-7 flex flex-col gap-2">
          <button onClick={handleLogin} className="px-3 py-2.5 font-medium rounded-md text-white border border-transparent bg-primary cursor-pointer text-center">Login</button>
          <p className='cursor-pointer text-sm font-medium text-gray-500'>Forgot password?</p>
        </div>
      </div>
    </div>
  )
}

export default Login