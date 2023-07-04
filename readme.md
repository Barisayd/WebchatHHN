# for the next project team:  
  
clone repository with   
`git clone https://gitlab.com/baumclan/ps-ais-webchat.git`  (anpassen, wenn zu hochschulgitlab migriert) 

install prerequisites  
`npm install`  
if there is an error showing check the message, you might need to force the install:  
`npm install --force`  
  
you are now able to start the chatbot with   
`npm start`  
and host ist on http://localhost:3000  
attention: with the current version you are not able to communicate with the OpenAI-service, because the bot is configured to take an API Link from the scrivito example app:  
* in the client.js you need to add parameters like apiUrl and apiKey
* you need to add a new secret key from OpenAi or any other vendor
  
To run mock server:  
`node path/to/mockserver/mockserver.js`  
  
to run fastApi:  
`python path/to/fastApi/fastApi`  



# Instruction to build the chatbot-widget components, that need to be deployed to scrivito example_app:  
  

# Instruction to install the chatbot-widget on scrivito (follow pictured guide provided in wiki/artefakte für lanquillon):  
* drag and drop the following files to the root folder:  
  * `fastApi.py and mockserver.js`
* in the subfolder Widgets create an folder 'WebChatWidget' (named after the widget you created)
* drag and drop the files in the newly created folder (should consist: BotIcon.svg; WebChatWidget.scss; WebChatWidgetComponent.js; WebChatWidgetEditingConfig.js)
* in the same directory with 'generator-scrivito' or 'src' create a new folder 'public' and copy the generated 'static'-folder in there
* open the file 'WebChatWidgetComponent.js' and check if the filenames in line 25-27 are matching the corresponding files from static folder


# Instruction for running the chatbot on scrivito:
* install prerequisits with the following commands (open a terminal inside your IDE located at the root directory):
  * `npm install`
  * `pip install fastapi` (kann man glaub auch direkt ", pydantic" mit übergeben)
  * `pip install pydantic`
* open a new terminal inside your IDE
  * enter `npm start`
* open a new terminal inside your IDE
  * enter `node mockserver.js`
* open a new terminal inside your IDE
  * enter `python fastApi`