import React, { useState } from 'react'
import SidebarItem from '../../../components/atoms/sidebar-item'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../features/auth/authSlice';

const Sidebar = ({ role }) => {

  const dispatch = useDispatch();
  const fullName = useSelector((s) => s.profile.fullName);
  const workEmail = useSelector((s) => s.profile.workEmail);
  
  const [showLogout, setShowLogout] = useState(false)

  function handleLogout() {
    dispatch(logout());

  }
  
  return (
      <aside id="default-sidebar" className="fixed bg-white top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
            <div className="flex flex-col justify-between h-full">
              <nav className='flex flex-col gap-2'>
                <SidebarItem to="/my">
                  My Reimbursements
                </SidebarItem>
                {role === "MANAGER" && (
                  <SidebarItem to="/inbox">
                    Inbox
                  </SidebarItem>
                )}
              </nav>
              <div className="relative">
                {
                  showLogout && (
                      <button
                        onClick={handleLogout}
                        className="w-full mb-2 border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-200 transition"
                      >
                        Logout
                      </button>
                  )
                }
                <div className="cursor-pointer bg-gray-100 px-3 py-4 hover:bg-gray-200" onClick={() => setShowLogout(!showLogout)}>
                  <p>{fullName ?? "-"}</p>
                  <p className='text-sm text-gray-500'>{workEmail ?? "-"}</p>
                </div>
              </div>
            </div>
        </div>
      </aside>
  )
}

export default Sidebar