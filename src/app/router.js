import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RequestForm from '../components/pages/request/form'
import RequestList from '../components/pages/request/list'
import AppLayout from './layouts/app-layout'
import RequestDetail from '../components/pages/request/detail'
import Login from '../components/pages/auth/login'
import { useSelector } from 'react-redux'

const Router = () => {

  const token = useSelector((s) => s.auth.token);
  
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route 
        path='/' 
        element={
          token ? <AppLayout /> : <Navigate to="/login" replace />
        }
      >
        <Route index element={<Navigate to="my" replace />} />
        <Route path="my" element={<RequestList />} />
        <Route path="my/:id" element={<RequestDetail />} />
        <Route path="new" element={<RequestForm />} />
        <Route path="inbox" element={<RequestList />} />
        <Route path="inbox/:id" element={<RequestDetail />} />
      </Route>
    </Routes>
  )
}

export default Router