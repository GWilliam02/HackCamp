import React from 'react';
import backgroundImage from './resources/background.jpg'; // Adjust the path as needed

const App = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',  // You can add other background properties here
      backgroundRepeat: 'no-repeat',
      height: '100vh',  // Set height to fill the entire viewport
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <div className="bg-neutral-50" 
      style={{
        width: '100vw',
        height: '10vh',
        position: 'fixed',
        top: 0,
      }}/>


  <input
    type="text"
    className="w-[1100px] h-[60px] pl-[21px] pr-2.5 py-2.5 bg-stone-50 rounded-[5px] border border-zinc-400 justify-end inline-flex"

    style={{
      width: '80vw',
      height: '7vh',
      position: 'fixed',
      bottom: 10,
    }}
    placeholder="Ask me a question"
  />

  

      
      {/* <div className="w-[1100px] h-[60px] pl-[21px] pr-2.5 py-2.5 bg-stone-50 rounded-[5px] border border-zinc-400 justify-end items-center gap-[805px] inline-flex">
    <div className="text-neutral-400 text-xl font-normal font-['Inter']">Ask me a question</div>
    <div className="w-[90px] h-10 relative">
        <div className="w-[90px] h-10 left-0 top-0 absolute bg-emerald-300 bg-opacity-80 rounded-[15px]" />
        <div className="left-[12px] top-[8px] absolute text-black text-xl font-semibold font-['Inter']">ENTER</div>
    </div>
</div> */}
      
    </div>
  );
}

// rem
// em 
// 16px


export default App;
