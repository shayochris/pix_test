import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext';

export default function TextInput({rounded=true, ...props}) {
  const { border,ui } = useTheme();
  let type = props.type || 'text';
  let style = `${ui} outline-none text-sm py-2 px-3`;
  if(props.bordered){
    style += ` border ${border}`;
  }
  if(rounded){
    style += ' rounded-lg';
  }
  return (
    <div className=''>
      <label className='mb-1 block text-sm text-gray-300' >{props.label}</label>
      <div className={`flex items-center justify-between ${style} ${ui} overflow-hidden `}>
        <input type={type} 
          className={`outline-none ${ui} w-full capitalize`} 
          placeholder={props.placeholder}
          value = {props.value}
          onChange={props.onChange}
          required={props.required} 
        />
        {props.endIcon &&  <span className='ml-1'>{props.endIcon}</span>  }
      </div>
    </div>
  )
}