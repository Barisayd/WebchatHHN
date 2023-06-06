import React from 'react';
import './ActionProvider.js';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
  

    if (message.includes("studies")) {
      actions.handleStudies();
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