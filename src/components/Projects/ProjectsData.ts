import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";

// Images
// 21st
import BirthdayImage1 from "../../../public/Images/21st_birthday_invite.png";
import BirthdayImage2 from "../../../public/Images/21st_birthday_invite_page2.png";
import BirthdayImage3 from "../../../public/Images/21st_birthday_invite_page3.png";
import BirthdayImage4 from "../../../public/Images/21st_birthday_invite_page4.png";
import BirthdayImage5 from "../../../public/Images/21st_birthday_invite_page5.png";

// Car website
import RnRAutomotive1 from "../../../public/Images/RnR_automotive.png";
import RnRAutomotive2 from "../../../public/Images/RnR_automotive_page2.png";
import RnRAutomotive3 from "../../../public/Images/RnR_automotive_page3.png";
import RnRAutomotive4 from "../../../public/Images/RnR_automotive_page4.png";
import RnRAutomotive5 from "../../../public/Images/RnR_automotive_page5.png";
import RnRAutomotive6 from "../../../public/Images/RnR_automotive_page6.png";

// Golf
import GolfWebsite1 from "../../../public/Images/golf_website.png";
import GolfWebsite2 from "../../../public/Images/Golf_website_page2.png";
import GolfWebsite3 from "../../../public/Images/Golf_website_page3.png";
import GolfWebsite4 from "../../../public/Images/Golf_website_page4.png";
import GolfWebsite5 from "../../../public/Images/Golf_website_page5.png";
import GolfWebsite6 from "../../../public/Images/Golf_website_page6.png";
import GolfWebsite7 from "../../../public/Images/Golf_website_page7.png";

// Card
import CardComponent from "../../../public/Images/Card_component.png";

// Text Analyser
import TextAnalyser1 from "../../../public/Images/Text-Analyser.png";
import TextAnalyser2 from "../../../public/Images/Text-Analyser_page2.png";

// Guess my number game
import GuessMyNumber1 from "../../../public/Images/Guess_my_number_game.png";
import GuessMyNumber2 from "../../../public/Images/Guess_my_number_game_page2.png";
import GuessMyNumber3 from "../../../public/Images/Guess_my_number_game_page3.png";
import GuessMyNumber4 from "../../../public/Images/Guess_my_number_game_page4.png";

// Pig game
import PigGame1 from "../../../public/Images/Pig_game.png";
import PigGame2 from "../../../public/Images/Pig_game_page2.png";
import PigGame3 from "../../../public/Images/Pig_game_page3.png";

// Omnifood
import Omnifood1 from "../../../public/Images/Omnifood.png";
import Omnifood2 from "../../../public/Images/Omnifood_page2.png";
import Omnifood3 from "../../../public/Images/Omnifood_page3.png";
import Omnifood4 from "../../../public/Images/Omnifood_page4.png";
import Omnifood5 from "../../../public/Images/Omnifood_page5.png";
import Omnifood6 from "../../../public/Images/Omnifood_page6.png";
import Omnifood7 from "../../../public/Images/Omnifood_page7.png";
import Omnifood8 from "../../../public/Images/Omnifood_page8.png";

// Bankist
import Bankist1 from "../../../public/Images/Bankist.png";
import Bankist2 from "../../../public/Images/Bankist_page2.png";
import Bankist3 from "../../../public/Images/Bankist_page3.png";
import Bankist4 from "../../../public/Images/Bankist_page4.png";
import Bankist5 from "../../../public/Images/Bankist_page5.png";
import Bankist6 from "../../../public/Images/Bankist_page6.png";

// Mapty
import Mapty1 from "../../../public/Images/Mapty.png";
import Mapty2 from "../../../public/Images/Mapty_page2.png";
import Mapty3 from "../../../public/Images/Mapty_page3.png";

// Trekt
import Trekt1 from "../../../public/Images/Trekt.png";
import Trekt2 from "../../../public/Images/Trekt_page2.png";
import Trekt3 from "../../../public/Images/Trekt_page3.png";

// Tik-Tak-Toe
import TikTakToe1 from "../../../public/Images/Tik-Tak-Toe_game.png";
import TikTakToe2 from "../../../public/Images/Tik-Tak-Toe_game_page2.png";
import TikTakToe3 from "../../../public/Images/Tik-Tak-Toe_game_page3.png";

export type projectsDataTypes = {
  name: string;
  image: any[];
  description: string;
  used: any[];
  github: any[];
  githubLink: string;
  urlName?: string;
  url?: string;
};

export const ProjectsData: projectsDataTypes[] = [
  {
    name: "21st Birthday Invite",
    image: [
      BirthdayImage1,
      BirthdayImage2,
      BirthdayImage3,
      BirthdayImage4,
      BirthdayImage5,
    ],
    description: "I have created a birthday invitation for a 21st celebration.",
    used: [FaReact, FaHtml5, FaCss3Alt, IoLogoFirebase],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/jeanrie-21ste-prod",
  },
  //
  {
    name: "Car Service Website",
    image: [
      RnRAutomotive1,
      RnRAutomotive2,
      RnRAutomotive3,
      RnRAutomotive4,
      RnRAutomotive5,
      RnRAutomotive6,
    ],
    description: "I developed a car service website for a company.",
    used: [
      RiNextjsFill,
      RiTailwindCssFill,
      FaHtml5,
      SiTypescript,
      IoLogoFirebase,
    ],
    github: [FaGithub],
    githubLink: "https://github.com/nGen-Studios/rnr-automotive",
    urlName: "website link",
    url: "https://www.rnrautomotive.co.za",
  },
  //
  {
    name: "Golf Website",
    image: [
      GolfWebsite1,
      GolfWebsite2,
      GolfWebsite3,
      GolfWebsite4,
      GolfWebsite5,
      GolfWebsite6,
      GolfWebsite7,
    ],
    description: "I created a golf website as a practice project.",
    used: [FaHtml5, FaCss3Alt],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/Golf",
  },
  //
  {
    name: "Card Component",
    image: [CardComponent],
    description: "I designed a product card page as part of my coursework.",
    used: [FaHtml5, FaCss3Alt],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/card",
  },
  //
  {
    name: "Text Analyser",
    image: [TextAnalyser1, TextAnalyser2],
    description:
      "I developed a text analyser website that analyzes input text, providing metrics such as letter count, word count, sentence count, paragraph count, pronouns, the longest word, and estimated average reading time as part of my coursework.",
    used: [FaHtml5, FaCss3Alt, FaReact],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/Text_Analyser",
  },
  //
  {
    name: "Guess My Number Game",
    image: [GuessMyNumber1, GuessMyNumber2, GuessMyNumber3, GuessMyNumber4],
    description:
      "I developed a 'Guess My Number' game that provides feedback on whether the guessed number is higher or lower than the correct one, guiding the player to the correct answer within a limited number of attempts as part of my coursework.",
    used: [FaHtml5, FaCss3Alt, IoLogoJavascript],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/Guess-My-Number-Game",
  },
  //
  {
    name: "Pig Game",
    image: [PigGame1, PigGame2, PigGame3],
    description:
      "I developed a 'Pig' game for two players, where each player rolls a dice and can choose to either hold the accumulated amount or roll again to increase their score. If a player rolls a 1, they lose the points accumulated in that turn and skip their next turn. The first player to reach 100 points wins, and the game can then be restarted. The goal is to reach 100 points by adding up the rolled values as part of my coursework.",
    used: [FaHtml5, FaCss3Alt, IoLogoJavascript],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/pig-game",
  },
  //
  {
    name: "Omnifood Website",
    image: [
      Omnifood1,
      Omnifood2,
      Omnifood3,
      Omnifood4,
      Omnifood5,
      Omnifood6,
      Omnifood7,
      Omnifood8,
    ],
    description: "I designed a food-related website as part of my coursework.",
    used: [FaHtml5, FaCss3Alt, IoLogoJavascript],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/Omnifood",
  },
  //
  {
    name: "Bankist Website",
    image: [Bankist1, Bankist2, Bankist3, Bankist4, Bankist5, Bankist6],
    description: "I designed a banking website as part of my coursework.",
    used: [FaHtml5, FaCss3Alt, IoLogoJavascript],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/Bankist",
  },
  //
  {
    name: "Mapty Website",
    image: [Mapty1, Mapty2, Mapty3],
    description:
      "I developed a website that tracks the distance covered while running or cycling as part of my coursework.",
    used: [FaHtml5, FaCss3Alt, IoLogoJavascript],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/Mapty",
  },
  //
  {
    name: "Trekt Website",
    image: [Trekt1, Trekt2, Trekt3],
    description: "I developed a website as part of my coursework.",
    used: [FaHtml5, FaCss3Alt],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/trekt",
  },
  //
  {
    name: "Tik-Tak-Toe Game",
    image: [TikTakToe1, TikTakToe2, TikTakToe3],
    description:
      "I developed a Tic-Tac-Toe game by following a YouTube tutorial. This was my first coding project, and it sparked my interest in programming, motivating me to pursue further study in the field.",
    used: [FaHtml5, FaCss3Alt, IoLogoJavascript],
    github: [FaGithub],
    githubLink: "https://github.com/AngiQiii/tik-tak-toe",
  },
];
