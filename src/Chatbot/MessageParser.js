import React from 'react';
import './ActionProvider.js';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    
    if (!message) {
      console.log("empty message")
    } else {
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