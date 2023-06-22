import React from "react";
import "../../styles/Options.css";

//Define initial Options to guide the user 
const Options = (props) => {
  const options = [
    { text: "For Students",
      handler: props.actionProvider.handleForStudents, 
      id: 1 },
    { text: "For Applicants", 
      handler: props.actionProvider.handleForApplicants, 
      id: 2 }

  ];

  //Create Option-Buttons
  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;