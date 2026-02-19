import React from 'react'
import Sidebar from '../sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AppLayout = () => {

  const role = useSelector((s) => s.profile.role);
  
  return (
    <div className='flex'>
      <Sidebar role={role} />

      <main className='ml-64 flex-1 p-6 bg-secondary-bg min-h-screen py-16'>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout