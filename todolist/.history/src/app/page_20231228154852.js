"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import videoFile from './video.mp4';




export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const delettask=(i)=>{
     let copytask =[...maintask];
     copytask.splice(i, 1);
     setmaintask(copytask); 


  }
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
  if(maintask.length>0){ rendertask = maintask.map((t,i) => {
    return (
      <li key={i} className='flex items-center justify-between'>
      <div className='flex justify-between mb-5 w-2/5'>
        <h5 className='text-2xl font-bold'>{t.title}</h5>
         <h className='text-2xl font-bold'>{t.desc}</h>
      </div>
        <button onClick={()=>{
          delettask(i)
        }} class="btn btn-danger " type="">task complete</button>
      </li>
    

    )

   })}
 
  return (
    <>
    
      <h1 className='hometext p-5 m-5 font-bold text-center text-5xl'>Todo List App</h1>
      <form onSubmit={submithandler}>
      <div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
  </div>
  <input
    type="text"
    className="form-control"
    placeholder="Enter your task"
    value={title}
    onChange={(e) => {
      settitle(e.target.value);
    }}
    aria-label="Text input with checkbox"
  />
  
    </div>  
       
    <div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
  </div>
  <input
    type="text"
    className="form-control "
    placeholder="Enter your description"
    value={desc}
    onChange={(e) => {
      setDesc(e.target.value);
    }}
    aria-label="Text input with checkbox"
  />
</div >

               
        
<div className="d-flex justify-content-center">
  <button
    className="rounded btn btn-success"
    type="submit"
  >
    Add Task
  </button>
</div>

      </form>
      <hr></hr>
      <div className='p-5 m - 6'>
        <ul>
          {rendertask}
        </ul>
      </div>
      <video controls width="400" height="300">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </>
  );
}
