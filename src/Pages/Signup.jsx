import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const { border } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = {
      email, password, name
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
            placeholder = {'Full Name'}
            bordered = {true}
            rounded = {false}
            value = {name}
            onChange ={e => setName(e.target.value)}
            required = {true}
          />
        </div>
        <div className="mb-2">
          <TextInput
            placeholder = {'email'}
            bordered = {true}
            rounded = {false}
            value = {email}
            onChange ={e => setEmail(e.target.value)}
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
          text = {'signup'}
          background = {'blue-500'}
          textColor = {'white'}
          block = {true}
        />
        
      </form>
      <div className={`p-4 border ${border} mt-3 text-center text-sm `} >
        <p>Already have an account  <Link to="/login" className='text-blue-500' >Login</Link> </p>
        <div>
          <Link to="/home" className='underline text-blue-500' >Home</Link>
        </div>
      </div>
    </div>
  )
}
