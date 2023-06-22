import React from 'react';
import { APIClient } from './client.js';

//ActionProvider takes actions baised on the parsed message
const ActionProvider = ({ createChatBotMessage, setState, children }) => {

//Handle the parsed message from the MessageParser
  function handleMessage(message) {

    const apiCall = new APIClient();

    // Call the sendMessage method of the APIClient instance and handle the response
    apiCall.sendMessage(message).then(response => {
      
      // Create a new ChatBot message using the response from the API call
      const botMessage = createChatBotMessage(response);

      // Update the state of the ChatBot component by appending the new message to the existing list of messages
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
  }

//Methods to open links after clicking on the widgets
const handleForStudents = () => {
  const botMessage = createChatBotMessage(
    "Fantastic, I've got the following resources for registered Students",
    {
      widget: "studentOptions",
    }
  );

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};

const handleForApplicants = () => {
  const botMessage = createChatBotMessage(
    "Fantastic, I've got the following resources for Applicants",
    {
      widget: "applicantOptions",
    }
  );

  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};



  // Put the handleMessage function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
            handleForStudents,
            handleForApplicants
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;