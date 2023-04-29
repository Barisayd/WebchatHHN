
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import {ReactComponent as BotAvatar} from '../Icons/BotAvatar.svg'

const config = {
<<<<<<< src/Chatbot/config.js
  botName: 'Webchat HHN',
  customComponents: {
   // Replaces the default bot avatar
   botAvatar: (props) => <BotAvatar height={50} width={50} left={50} {...props} />,

 },
  
=======
  initialMessages: [createChatBotMessage(`Hi, how can I help you?`)],
  botName: 'Webchat HHN'
>>>>>>> src/Chatbot/config.js
}

export default config