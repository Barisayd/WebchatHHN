const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Middleware to enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Route to handle GET requests to /api/messages
app.get('/api/messages', (req, res) => {
    // Get the message from the request
    const message = req.query.message;
  
    // Prepare the response JSON object
    const response = { message: 'Vielen Dank' };
  
    // Send the response JSON object as the HTTP response
    res.json(response);
  });
  
  // Start the server and listen on the specified port (either from the environment variable or 5000 by default)
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server running on port ${port}`));