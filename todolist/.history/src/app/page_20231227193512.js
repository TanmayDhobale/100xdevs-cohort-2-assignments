import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className='hometext p-5 m-5 font-bold text-center text-5xl'>Todo List App</h1>
      <form>
        <input type="text" className='border border-gray-800 p-2 m-6' placeholder="Enter your task" />
        <input type="text" className='border border-gray-800 p-2 m-6' placeholder="Enter your description" />
        <button className='bg-black text-white  '  type="text">add task</button>
      </form>
    </>
    
  );
  
}
