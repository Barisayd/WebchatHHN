import './App.css';
import './styles/Chatbot.css'

import React, {useState} from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './Chatbot/ActionProvider';
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';

import { Fab } from '@mui/material';
import {ReactComponent as BotIcon} from './Icons/BotIcon.svg'

function App() {
  const [showBot, toggleBot] = useState(false);

  // Prevent empty user input
  const validator = (input) => {
    if (input !== "" && input !== " ") return true;
    return false
}

// Toggle Bot with custom FloatingActionButton
  return (
    <div className="App" style={{
      position: 'absolute',
  }}>
    <div style={{
      position: 'fixed',
      right: '6%',
      bottom: '5%'
  }}>
    {showBot && (
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} validator={validator}/>
      )}
    </div>
      <div style={{
           width: 'fit-content',
           right: '1%',
           position: 'fixed',
           bottom: '1%'
      }}>
      <Fab size='large' onClick={() => toggleBot((prev) => !prev)}>
    <BotIcon/>
      </Fab>
      </div>
    </div>
  );
}

export default App;
