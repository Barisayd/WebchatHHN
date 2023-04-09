import './App.css';
import React, {useState} from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
//import { Button } from './components/Floatingbutton';



import ActionProvider from './Chatbot/ActionProvider';
import config from './Chatbot/config';
import MessageParser from './Chatbot/MessageParser';



function App() {

  const [showBot, toggleBot] = useState(false);
  
  return (
    <div className="App">
      {showBot && (
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
     
      )
      }

  <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
   
    </div>
    
  );
}

export default App;
