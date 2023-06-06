import { createChatBotMessage } from "react-chatbot-kit";
import { ReactComponent as BotAvatar } from '../Icons/BotAvatar.svg';
import { Widget as ChatWidget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const config = {
  initialMessages: [
    createChatBotMessage("Hi, how can I help you?"),
    createChatBotMessage("Please select one of the options below:", {
      withAvatar: true,
      delay: 500,
      widget: "options",
      widgetOptions: {
        options: [
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ],
      },
    }),
  ],
  botName: 'Webchat HHN',
  customComponents: {
    botAvatar: (props) => <BotAvatar height={50} width={50} left={50} {...props} />,
  },
  customActionHandler: (message) => {
    if (message.toLowerCase() === "option1") {
      addResponseMessage("You selected Option 1");
    } else if (message.toLowerCase() === "option2") {
      addResponseMessage("You selected Option 2");
    } else if (message.toLowerCase() === "option3") {
      addResponseMessage("You selected Option 3");
    }
  },
};

export default config;