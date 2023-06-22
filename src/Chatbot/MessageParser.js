import React from 'react';
import './ActionProvider.js';

//MessageParser checks user input and calls the methods in the ActionProvider
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    
    if (!message) {
      console.log("empty message")
    } else {

      //Call handleMessage Method of ActionProvider
      actions.handleMessage(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;