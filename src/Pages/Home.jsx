import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline, IoChatbubbleEllipsesOutline, IoChatbubbleOutline } from 'react-icons/io5';
import { BsThreeDots } from "react-icons/bs";
import { PiChatCircleBold } from "react-icons/pi";
import { FiSend } from "react-icons/fi";

import prosciuto from '../assets/prosciutto.jpg';
import { FaRegHeart } from 'react-icons/fa';
import { MdLightMode,MdDarkMode } from "react-icons/md";


export default function Home() {
  const { isDark, theme, border, setTheme } = useTheme();
  return (
    <div className=''>
      <div className={`sm:hidden flex-b border-b p-2  ${border} ${theme}`}>
        <p className={`text-xl font-semibold`}>logo</p>
        <div className="flex-a">
          <IoAddCircleOutline className='sidebar-icon font-semibold mr-1'/>
          <div onClick={()=>setTheme(isDark ? 'light' : 'dark')} >
            { isDark ? 
              (<MdLightMode className='sidebar-icon' />) : 
              (<MdDarkMode className='sidebar-icon ml-2' />)
            }
          </div>
        </div>
      </div>
      <div className='sm:p-4' >
        {
          [...Array(12)].map((_,id) => (
            <div key={id} className={`sm:w-[50%] sm:border ${border} rounded-lg mx-auto mb-3`}>
              <div className="flex-b p-2">
                <div className="flex-a">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className='ml-3' >
                    <p className='relative top-1 font-semibold'>username</p>
                    <p className='relative bottom-1 text-sm' >now</p>
                  </div>
                </div>
                <BsThreeDots className='icon'/>
              </div>
              <div className="bg-gray-400">
                <img src={prosciuto} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <div className="flex-a">
                  <FaRegHeart className='icon'/>
                  <PiChatCircleBold className='icon mx-3'/>
                  <FiSend className='icon'/>
                </div>
                <div className='text-sm '>
                  <p className='font-semibold' >1,234,567 likes</p>
                  <p className='my-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cum! Id, nihil? A corporis eos culpa rerum corrupti ad earum, quasi asperiores repudiandae! Excepturi dignissimos, pariatur est optio esse itaque!</p>
                </div>
              </div>
            </div>
          ))
        }


      </div>
      
    </div>
  )
}
