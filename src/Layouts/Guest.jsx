import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext';

export default function Guest() {
  const { theme} = useTheme();
  return (
    <div className={`${theme} w-full h-screen  fixed top-0 left-0 flex items-center justify-center`}>
      <Outlet/>
    </div>
  )
}
