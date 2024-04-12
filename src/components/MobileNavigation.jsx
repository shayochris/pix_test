import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

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
import { NavLink } from 'react-router-dom';

export default function MobileNavigation() {
  const {ui,border,theme} = useTheme();
  const navItems = [
    {name: 'home', path: '/home', startIcon: <IoHome className='sidebar-icon mr-2' />},
    {name: 'Search', path: '/search', startIcon: <IoSearch className='sidebar-icon mr-2' />},
    // {name: 'Messages', path: '/chats', startIcon: <IoChatbubbleEllipsesOutline className='sidebar-icon mr-2' />},
    {name: 'Notifications', path: '/notifications', startIcon: <IoNotificationsOutline className='sidebar-icon mr-2' />},
    // {name: 'create', path: '/create', startIcon: <IoAddCircleOutline className='sidebar-icon mr-2' />},
    {name: 'profile', path: '/profile/id', startIcon: <CgProfile className='sidebar-icon mr-2' />},
    {name: 'settings', path: '/settings/id', startIcon: <IoSettingsOutline className='sidebar-icon mr-2' />},
    {name: 'logout', path: '/login', startIcon: <MdLogout className='sidebar-icon mr-2' />},
    
  ]
  return (
    <div className={`sm:hidden fixed bottom-0 left-0 w-full p-2 border-t ${border} ${theme} flex items-center justify-around`}>
      {
        navItems.map(item => (
          <NavLink key={item.name} to={`${item.path}`} className='flex-a' >
            {item.startIcon}
            <span className='hidden lg:block' >{item.name}</span>
          </NavLink>
        ))
      }
    </div>
  )
}
