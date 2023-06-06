import React from 'react';
import { APIClient } from './client.js';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  function handleMessage(message) {

    const apiCall = new APIClient();

    // Call the sendMessage method of the APIClient instance and handle the response
    apiCall.sendMessage(message).then(response => {
      console.log(response);
      
      // Create a new ChatBot message using the response from the API call
      const botMessage = createChatBotMessage(response);

      // Update the state of the ChatBot component by appending the new message to the existing list of messages
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
  }

  const handleStudies = () => {
    handleMessage("What kind of studies are availavle at HHN?")
  };

  // Put the handleMessage function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
            handleStudies
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;