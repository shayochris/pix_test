import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import Sidebar from '../components/Sidebar';
import MobileNavigation from '../components/MobileNavigation';

export default function Protected() {
  const { theme,ui } = useTheme();
  return (
    <div className={`wrapper flex ${theme} `}>
      <Sidebar/>
      <div className="mb-8  sm:mb-2 w-full sm:w-[90%] lg:w-[80%] overflow-y-scroll">
        <Outlet/>
      </div>
      <MobileNavigation/>
    </div>
  )
}
