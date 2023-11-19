import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="w-[1280px] h-[832px] relative bg-neutral-50">
    <div className="w-[1240px] h-[2728px] left-[20px] top-[-1918px] absolute bg-white rounded-2xl">
        <div className="w-[419.69px] h-[419.69px] left-[-134.30px] top-[1397.58px] absolute bg-emerald-100 bg-opacity-50 rounded-full" />
        <div className="w-[600px] h-[600px] left-[107.02px] top-[2063.84px] absolute bg-cyan-200 bg-opacity-50 rounded-full" />
        <div className="w-[641.08px] h-[641.08px] left-[-308.47px] top-[266.50px] absolute bg-cyan-200 bg-opacity-50 rounded-full" />
        <div className="w-[563.44px] h-[563.44px] left-[969.49px] top-[645.28px] absolute bg-emerald-200 bg-opacity-50 rounded-full" />
        <div className="w-[647.38px] h-[647.38px] left-[582.32px] top-[1296.85px] absolute bg-lime-100 bg-opacity-50 rounded-full" />
        <div className="w-[500px] h-[500px] left-[925px] top-[1918px] absolute bg-emerald-100 bg-opacity-50 rounded-full" />
        <div className="w-[15px] h-[200px] left-[1215px] top-[2435px] absolute bg-zinc-300 rounded-[15px]" />
    </div>
    <div className="w-[1280px] h-[70px] left-0 top-0 absolute bg-neutral-50" />
    <div className="w-[1100px] h-[60px] pl-[21px] pr-2.5 py-2.5 left-[90px] top-[740px] absolute bg-stone-50 rounded-[5px] border border-zinc-400 justify-end items-center gap-[805px] inline-flex">
        <div className="text-neutral-400 text-xl font-normal font-['Inter']">Ask me a question</div>
        <div className="w-[90px] h-10 relative">
            <div className="w-[90px] h-10 left-0 top-0 absolute bg-emerald-300 bg-opacity-80 rounded-[15px]" />
            <div className="left-[12px] top-[8px] absolute text-black text-xl font-semibold font-['Inter']">ENTER</div>
        </div>
    </div>
    <div className="left-[19px] top-[21px] absolute text-black text-2xl font-normal font-['Inter']">Robo Science Advisor</div>
</div>
    </>
  )
}

export default App
