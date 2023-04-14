import './App.css';
import './styles/Chatbot.css'

import React, {useState} from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'

import ActionProvider from './Chatbot/ActionProvider';
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';

import { Fab } from '@mui/material';

import LiveHelp from '@mui/icons-material/LiveHelp';

function App() {
  const [showBot, toggleBot] = useState(false);

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
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
    
      )
      }
    </div>
      <div style={{
           width: 'fit-content',
           right: '1%',
           position: 'fixed',
           bottom: '1%'

      }}>
      <Fab  color='warning' aria-label = "menu icon" onClick={() => toggleBot((prev) => !prev)}>
      <LiveHelp />
      </Fab>

      </div>

    </div>

  );
}

export default App;
