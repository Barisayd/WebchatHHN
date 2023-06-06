export class APIClient {
  constructor() {

    this.apiUrl = localStorage.getItem("serviceURL");


    this.apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    console.log("Service URL:", this.serviceURL)
    
    
  }

  async sendMessage(message) {
    console.log('API-Key:' + this.apiKey);

    try {
      const apiBody = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Can you act like you are the Chatbot of the University" +
        "of Heilbronn aka HHN and answer the following prompt and format the message with the respect to only use 100 tokens with the API call: " + message}],
        "max_tokens": 100,
        "temperature": 0,
      }

      console.log(JSON.stringify(apiBody))

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.apiKey,
        },
        body: JSON.stringify(apiBody),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error(error);
      return 'Sorry, something went wrong.';
    }
  }
}
