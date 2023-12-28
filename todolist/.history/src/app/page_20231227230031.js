"use client"
import React, { useState } from 'react';

export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submithandler = (e)=>{
    e.preventDefault();
    console.log(title)
    console.log(desc)
    setmaintask([...maintask,{title,desc}])
    settitle("")
    setDesc("")
    console.log(maintask)
  }
   let rendertask = <h1>NO task aviable </h1>
   rendertask = maintask.map((t,i) => {
    return (
      <div className='flex justify-between'>
        <h5>{t.title}</h5>
         <h6>{t.desc}</h6>
      </div>

    )

   })

  return (
    <>
      <h1 className='hometext p-5 m-5 font-bold text-center text-5xl'>Todo List App</h1>
      <form onSubmit={submithandler}>
        <input 
          type="text"
          className='border border-gray-800 p-2 m-6'
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className='border border-gray-800 p-2 m-6'
          placeholder="Enter your description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className='bg-black text-white m-5 p-2 border-3 rounded'
          type="submit"
          
        >
          Add Task
        </button>
      </form>
      <hr></hr>
      <div className='p-5 m - 6'>
        <ul>
          {rendertask}
        </ul>
      </div>

      
    </>
  );
}
