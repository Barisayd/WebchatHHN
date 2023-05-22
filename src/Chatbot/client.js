export class APIClient {
  constructor() {
    this.apiUrl = 'http://localhost:5000/api/messages'; // URL of server
  }
  
  async sendMessage(message) {

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "message": message }) // Send message in the request body
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json(); // Parse the response JSON
      return responseData.message; // Return the response data
    } catch (error) {
      console.error('Error while sending request:', error);
      return 'Sorry, something went wrong.'; // Return an error message
    }
  }
}