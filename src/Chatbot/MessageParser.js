import React from 'react';

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message)
  }
}

export default MessageParser;