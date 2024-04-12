import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import Button from '../components/Button';

export default function Home() {
  const { isDark, setTheme } = useTheme();
  return (
    <div className='m-2'>
      <Button
       background = {'blue-500'}
       textColor ={'white'}
       text = {isDark ? 'light' : 'dark'}
       onClick = {() =>{
        setTheme(isDark ? 'light' : 'dark');
       }}
      />
    </div>
  )
}
