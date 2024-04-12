import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { NavLink } from 'react-router-dom';

//Icons
import { IoHome, 
  IoSearch, 
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
  IoAddCircleOutline, 
  IoSettingsOutline
} 
from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

export default function Sidebar() {
  const { ui, border,isDark } = useTheme();
  let linkStyle = `flex-a p-2 mb-2 rounded-lg capitalize ${isDark ? 'lg:hover:bg-[#282828]' : 'lg:hover:bg-gray-200'}`;

  const navItems = [
    {name: 'home', path: '/home', startIcon: <IoHome className='sidebar-icon mr-2' />},
    {name: 'Search', path: '/search', startIcon: <IoSearch className='sidebar-icon mr-2' />},
    {name: 'Messages', path: '/chats', startIcon: <IoChatbubbleEllipsesOutline className='sidebar-icon mr-2' />},
    {name: 'Notifications', path: '/notifications', startIcon: <IoNotificationsOutline className='sidebar-icon mr-2' />},
    {name: 'create', path: '/create', startIcon: <IoAddCircleOutline className='sidebar-icon mr-2' />},
    {name: 'profile', path: '/profile/id', startIcon: <CgProfile className='sidebar-icon mr-2' />},
    {name: 'settings', path: '/settings/id', startIcon: <IoSettingsOutline className='sidebar-icon mr-2' />},
    {name: 'logout', path: '/logout', startIcon: <MdLogout className='sidebar-icon mr-2' />},
    
  ]
  
  return (
    <div className={`hidden sm:block sticky top-0 left-0 sm:w-[10%] lg:w-[20%] h-full border-r ${border} p-3`}>
      <div className="p-2 mb-4">
        <p className="text-xl">Logo</p>
      </div>
      {
        navItems.map(item => (
          <div key={item.name} className={linkStyle} >
            <NavLink to={`${item.path}`} className='flex-a' >
              {item.startIcon}
              <span className='hidden lg:block' >{item.name}</span>
            </NavLink>
          </div>
        ))
      }
    </div>
  )
}
