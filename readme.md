- [Guide to setup project localy](#guide-to-setup-project-localy)
  - [Installation of dependencies](#installation-of-the-project-and-necessary-dependencies)
  - [Running the chatbot localy](#running-the-chatbot-localy)
- [Guide for scrivito example_app](#guide-for-scrivito-example_app)
  - [Disclaimer](#check-the-wikipage-installation-guide-to-setup-the-chatbot-with-scrivito-example_app-with-the-help-of-screenshots)
  - [Instructions for running the chatbot on scrivito](#instruction-for-running-the-chatbot-on-scrivito)
- [Server / API Configuration](# Configuring the chatbot and a server or API for processing requests from the chatbot.)
- [Readme from the used chatbot-kit (further documentation)](#readme-from-the-used-chatbot-kit)
__________
**Prerequisites:**
* IDE of your choice (we used VSC) 
  * If you use VSC there should be extensions for JS and Python
* Scrivito-Account for the Example_APP


# Guide to setup project localy

## Installation of the project and necessary dependencies  
  
**1. clone repository with**    
`git clone https://gitlab.com/baumclan/ps-ais-webchat.git`  (add the correct URL from HHN-Gitlab) 

**2. install dependencies for chatbot and mockserver**  
`npm install`  
`npm install express body-parser cors`  
if there is an error showing check the message, you might need to force the install:  
`npm install --force`  

**3. install python dependencies**   
`pip install fastapi`  
`pip install pydantic`  
`pip install uvicorn`  

## Running the Chatbot localy

**1. you are now able to start the chatbot with**  
`npm start`  
and host ist on http://localhost:3000  
attention: with the current version you are not able to communicate with the OpenAI-service, because the bot is configured to take an API Link from the scrivito example app:  
* in the client.js you need to add parameters like apiUrl and apiKey
* you need to add a new secret key from OpenAi or any other vendor
  
**2. To run mock server**      
`node path/to/mockserver/mockserver.js`  
You should see a message in the console indicating that the server is running on a specified port (either from the environment variable or 5000 by default).  
To test the server, you can send a GET request to the /api/messages route by visiting http://localhost:5000/api/messages in a web browser. If you get shown a json string like {"message":"Vielen Dank"}, it works.  
  
**3. to run fastApi**     
`python path/to/fastApi/fastApi`  

# Guide for scrivito example_app

### _Check the wikipage 'Installation Guide' to setup the chatbot with scrivito example_app with the help of screenshots_

## Instruction for running the chatbot on scrivito:
* install dependencies with the following commands (open a terminal inside your IDE located at the root directory):
  * `npm install`
  * `pip install fastapi` (kann man glaub auch direkt ", pydantic" mit übergeben)
  * `pip install pydantic`
  * `pip install uvicorn`
* open a new terminal inside your IDE
  * enter `npm start`
* open a new terminal inside your IDE
  * enter `node mockserver.js`
* open a new terminal inside your IDE
  * enter `python fastApi`


# Configuring the chatbot and a server or API for processing requests from the chatbot.

To properly connect the chatbot client to a server and receive appropriate responses, the server must be configured accordingly. Here is the information required to send requests from the chatbot client to the server and receive the appropriate responses.

### Chatbot-Client customization:

Within the chatbot, in the client.js file, the variable "this.apiUrl" can be customized with the corresponding URL of the server. This should be done through the according Scrivito input field.

Example:

```
this.apiUrl = 'http://localhost:5000/api/messages'; // URL of server
```
In addition, further key-value pairs can be specified in the "headers" attribute to provide bswp. authentication for the server.

Example:

```
headers: {
          'Key': 'Value'
        },
```
#### Server customization:

The server should listen for POST requests to the endpoint defined in the client and extract the contents of the request to generate an appropriate response. The requests have the following format:

```
{ "userMessage": userMessage }
```
The format of the body-response from the server to the chatbot client must be as follows:

```
{ "chatbotMessage": chatbotMessage }
```
The server may also include additional routes, database integrations, and other logic to support the specific use case of the chatbot.

Please note that the server configuration and logic implementation are beyond the scope of this documentation. The server must be customized according to the specific requirements.

# Readme from the used chatbot-kit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
