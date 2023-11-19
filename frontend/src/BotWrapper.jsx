import { ThemeProvider } from 'styled-components';
import React from 'react';
import CpscBot from './CpscBot';
import backgroundImage from './resources/background.jpg'; // Adjust the path as needed

const otherFontTheme = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#FABDFCE',
    headerFontColor: '000000',
    headerFontSize: '16px',
    botBubbleColor: '#A8E7FF',
    botFontColor: '#000000',
    userBubbleColor: '#EBF8C4',
    userFontColor: '#'
  };

  const BotWrapper = () => (
    <ThemeProvider theme={otherFontTheme}>

      <CpscBot/>

    </ThemeProvider>
  );

  export default BotWrapper