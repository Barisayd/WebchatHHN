import React from "react";

const CustomMessage = ({ message, handleButtonClick }) => {
  return (
    <div>
      <p>{message.content}</p>
      {message.buttons.map((button, index) => (
        <button key={index} onClick={() => handleButtonClick(button)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default CustomMessage;
