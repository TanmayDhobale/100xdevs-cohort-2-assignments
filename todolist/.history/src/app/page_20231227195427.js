"use client"
import Image from 'next/image'

import { useState } from 'react';

export default function Home() {
  const page = () => {
    cosnt [ title , settitle]=useState("")
    cosnt [ desc , setdesc]=useState("")
  }
  return (
    <>
      <h1 className='hometext p-5 m-5 font-bold text-center text-5xl'>Todo List App</h1>
      <form>
        <input type="text" className='border border-gray-800 p-2 m-6' placeholder="Enter your "  value={title} onChange={(e)=> {
          settitle(e.target.value)
        } }/>
        <input type="text" className='border border-gray-800 p-2 m-6  ' placeholder="Enter your description" />
        <button className='bg-black text-white m-5 p-2 border-3  rounded '  type="text">add task</button>
      </form>
    </>
    
  );
  
}
