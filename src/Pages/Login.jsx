import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const { border } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = {
      username, password
    }
    console.log(formData);
  }
  return (
    <div className='w-[90%] lg:w-[25%] '>
      <form onSubmit={handleSubmit} className={`p-6 border ${border}`}>
        <div className="p-3 text-center">
          <p className='text-2xl font-semibold'>logo</p>
          <p className='' >Login to your account</p>
        </div>
        <div className="mb-2">
          <TextInput
            placeholder = {'username'}
            bordered = {true}
            rounded = {false}
            value = {username}
            onChange ={e => setUsername(e.target.value)}
            required = {true}
          />
        </div>
        <div className="mb-2">
          <TextInput
            placeholder = {'password'}
            bordered = {true}
            rounded = {false}
            type = {'password'}
            value = {password}
            onChange ={e => setPassword(e.target.value)}
            required = {true}
          />
        </div>
        <Button
          text = {'login'}
          background = {'bg-blue-500'}
          textColor = {'white'}
          block = {true}
        />
        
      </form>
      <div className={`p-4 border ${border} mt-3 text-center text-sm `} >
        <p>Already have an account  <Link to="/signup" className='text-blue-500' >signup</Link> </p>
        <div>
          <Link to="/home" className='underline text-blue-500' >Home</Link>
        </div>
      </div>
    </div>
  )
}
