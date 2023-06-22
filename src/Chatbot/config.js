
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import {ReactComponent as BotAvatar} from '../Icons/BotAvatar.svg';
import Options from "./widgets/options.js";

import List from "./widgets/listOptions.js";

//Configure bot with initial message, botname and botavatar
const config = {
  initialMessages: [createChatBotMessage(`Hi, how can I help you?`, 
  {widget: "Options",}),
  ],
  botName: 'Webchat HHN',
  customComponents: {
   // Replaces the default bot avatar
   botAvatar: (props) => <BotAvatar height={50} width={50} left={50} {...props} />,
   
 },

 //Register Options-Widgets
 widgets: [
  {
    widgetName: "Options",
    widgetFunc: (props) => <Options {...props} />,
  },

  {
    widgetName: "studentOptions",
    widgetFunc: (props) => <List {...props} />,
    props: {
      options: [
        {
        text: "Timetable",
        url: "https://splan.hs-heilbronn.de/splan/mobile?lan=de&acc=true&act=tt&sel=pg&pu=39&og=424&pg=WIN%203&sd=true&dfc=2023-07-19&loc=6&sa=false&cb=o",
        id: 1,
        },
        {
        text: "Semester schedule",
        url: "https://www.hs-heilbronn.de/de/semesterterminplan",
        id: 2,
        }
      ]
    }
  },

  {
    widgetName: "applicantOptions",
    widgetFunc: (props) => <List {...props} />,
    props: {
      options: [
        {
          text: "Courses",
          url: "https://www.hs-heilbronn.de/de/studienangebot?q=#collapse",
          id: 1
          },
        {
        text: "FAQ",
        url: "https://www.hs-heilbronn.de/de/FAQ",
        id: 2
        }
      ]
    }
  },

],

  
}

export default config