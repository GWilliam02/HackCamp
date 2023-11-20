import { ThemeProvider } from 'styled-components';
import React from 'react';
import CpscBot from './CpscBot';
import backgroundImage from './resources/background.jpg'; // Adjust the path as needed

const otherFontTheme = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#FCFCFC',
    headerFontColor: '000000',
    headerFontSize: '16px',
    botBubbleColor: '#EBF8C4',
    botFontColor: '#000000',
    userBubbleColor: '#A8E7FF',
    userFontColor: '#'
  };

  const BotWrapper = () => (
    <ThemeProvider theme={otherFontTheme}>

      <CpscBot/>

    </ThemeProvider>
  );

  export default BotWrapper