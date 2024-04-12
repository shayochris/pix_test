import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

export default function Protected() {
  const { theme,ui } = useTheme();
  return (
    <div className={`fixed w-full h-screen top-0 left-0 ${theme} `}>
      <Outlet/>
    </div>
  )
}
