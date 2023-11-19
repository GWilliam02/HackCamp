import React from 'react';
import backgroundImage from './resources/background.jpg'; // Adjust the path as needed
import CpscBot from './CpscBot';

import BotWrapper from './Botwrapper';

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




  <BotWrapper/>
      
    </div>
  );
}

// rem
// em 
// 16px


export default App;