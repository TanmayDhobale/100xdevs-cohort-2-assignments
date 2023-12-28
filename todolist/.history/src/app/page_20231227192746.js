import Image from 'next/image'

export default function Home() {
  return (
<>
<h1 className='hometext p-5 m-5 font-bold  text-center text-5xl  '>TOdo  - list app </h1>
<form>
  <input className='inputbtn 
  border-zinc-800 borde' type="text" />
</form>
</>

  )
}
