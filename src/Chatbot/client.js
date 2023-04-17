export class APIClient {
    constructor() {
        
    }
    apiUrl = 'http://localhost:3001/api/messages';

    async sendMessage(message) {
      try {
        // Use the fetch API to send a GET request to the API URL with the Content-Type header set to application/json
        const response = await fetch(this.apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
  
        // If the response status is not ok, throw an error
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
  
        // Parse the response JSON data and return the message property
        const data = await response.json();
        return data.message;
      } catch (error) {
        console.error(error);
        return 'Sorry, something went wrong.';
      }
    }
  }
  
  