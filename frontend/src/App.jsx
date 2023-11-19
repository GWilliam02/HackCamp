import React from 'react';
import backgroundImage from './resources/background.jpg'; // Adjust the path as needed
import CpscBot from './CpscBot';

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
    className="pl-[21px] pr-2.5 py-2.5 bg-stone-50 rounded-[5px] border border-zinc-400 justify-end inline-flex"

    style={{
      width: '80vw',
      height: '7vh',
      position: 'fixed',
      bottom: 10,
    }}
    placeholder="Ask me a question"
  />

  <CpscBot/>
      
    </div>
  );
}

// rem
// em 
// 16px


export default App;