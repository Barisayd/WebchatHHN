const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const apiUrl = 'https://api.openai.com/v1/chat/completions';
// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
// Todo: remove apiKey from actual code
const apiKey = "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";

// parse request bodies as JSON
app.use(bodyParser.json());

// enable for requests from http://localhost:3000
app.use(cors({
  origin: '*'
}));

// Route to handle POST requests to /api/messages
app.post('/api/messages', async (req, res) => {
  // Get the message from the request body
  const message = req.body.userMessage;
  const prePrompt = req.body.prePrompt;

  try {
    const apiBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          //"content": "Act like you are the Chatbot of the University of Heilbronn aka HHN and answer the following prompt and format the message with the respect to only use 100 tokens with the API call: " + message
          "content": prePrompt + " " + message
        }
      ],
      "max_tokens": 100,
      "temperature": 0
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(apiBody)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const botResponse = data.choices[0].message.content;

    // Prepare the response JSON object
    const responseBody = { botMessage: botResponse };

    // Send the response JSON object as the HTTP response
    res.json(responseBody);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'API-Key:' + apiKey });
  }
});

// Start the server and listen on the specified port (either from the environment variable or 5000 by default)
const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Mock server running on port ${port}`));

// Export the server object for external use
module.exports = server;