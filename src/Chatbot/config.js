
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import {ReactComponent as BotAvatar} from '../Icons/BotAvatar.svg'

const config = {
  initialMessages: [createChatBotMessage(`Guten Tag, wie kann ich Dir behilflich sein?`)],
  botName: 'Webchat HHN',
  customComponents: {
   // Replaces the default bot avatar
   botAvatar: (props) => <BotAvatar height={50} width={50} left={50} {...props} />,

 },
  
}

export default config