import React from 'react'

export default function Button({ rounded = true, ...props }) {
  let style = 'py-2 px-3 text-sm';
  if(props.background){
    style += ` ${props.background}`;
  }
  if(props.text){
    style += ` text-${props.textColor}`
  }
  if(rounded){
    style += ` rounded-lg`
  }
  if(props.block){
    style += ' w-full';
  }
  console.log('button style',style);
  return (
    <button onClick={props.onClick} className={`${style} capitalize`} >
      {props.text}
    </button>
  )
}
