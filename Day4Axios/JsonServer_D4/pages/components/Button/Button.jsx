"use client"
import React from 'react'

const Button = ({btnName,handleClick}) => {
  // const handleClick=()=>{

  // }
  return (
    <div>
      <button className="font-bold border border-solid border-black py-1 px-3 rounded-md" onClick={()=>handleClick()}>{btnName}</button>
    </div>
  )
}

export default Button;