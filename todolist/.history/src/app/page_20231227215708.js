"use client"
import React, { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submithandler = 

  const addTask = () => {}
    // Logic to handle adding a task (not implemented in this example)
    console.log("Adding task:", title, desc);
  };

  return (
    <>
      <h1 className='hometext p-5 m-5 font-bold text-center text-5xl'>Todo List App</h1>
      <form onsubmit={}>
        <input 
          type="text"
          className='border border-gray-800 p-2 m-6'
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
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
          type="button"
          onClick={addTask}
        >
          Add Task
        </button>
      </form>
    </>
  );
}
