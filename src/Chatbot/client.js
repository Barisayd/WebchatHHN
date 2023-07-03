export class APIClient {
  constructor() {
    this.apiUrl = localStorage.getItem("serviceURL"); // URL of server
    this.prePrompt = localStorage.getItem("customPrompt"); // custom Prompt before Usermessage
  }
  
  async sendMessage(message) {

    try {
      // store http response in variable 
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "userMessage": message, "prePrompt": this.prePrompt}) // Send message in the request body
      });

      // is response is not 200 throw error
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json(); // Parse the response JSON
      if (!responseData.botMessage) {
        return 'Sorry, something went wrong';
      }
      return responseData.botMessage; // Return the response data

    } catch (error) {
      console.error('Error while sending request:', error);
      return 'Sorry, something went wrong'; // Return an error message
    }
  }
}
