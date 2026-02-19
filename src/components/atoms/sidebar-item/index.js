import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const SidebarItem = ({ to, children }) => {
  
  return (
      <NavLink to={to} className={({ isActive }) => `px-2 py-1.5 rounded-md ${ isActive ? "bg-primary text-white" : "hover:bg-gray-200"}`}>
          {children}
      </NavLink>
  )
}

export default SidebarItem