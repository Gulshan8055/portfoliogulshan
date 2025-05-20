import htmlLogo from "./assets/Skill-image/htmlLogo.png";
import cssLogo from "./assets/Skill-image/cssLogo.png";
import SassLogo from "./assets/Skill-image/SassLogo.png";
import reactLogo from "./assets/Skill-image/reactLogo.svg";
import TailwindLogo from "./assets/Skill-image/TailwindLogo.png";
import BootstrapLogo from "./assets/Skill-image/BootstrapLogo.png";

import NodeLogo from "./assets/Skill-image/nodeLogo.png";
import ExpressLogo from "./assets/Skill-image/ExpressLogo.png";
import MongoDBLogo from "./assets/Skill-image/MongoDBLogo.png";
import mysqlLogo from "./assets/Skill-image/mysqlLogo.png";

import cppLogo from "./assets/Skill-image/cppLogo.png";
import cLanguageLogo from "./assets/Skill-image/cppLogo.png";
import PythonLogo from "./assets/Skill-image/pythonLogo.png";
import javascriptLogo from "./assets/Skill-image/javascriptLogo.png";
import clanguageLogo from "./assets/Skill-image/clanguageLogo.png";

import GitLogo from "./assets/Skill-image/GitLogo.png";
import GithubLogo from "./assets/Skill-image/GitHubLogo.png";
import vercelLogo from "./assets/Skill-image/vercelLogo.png";
import NetlifyLogo from "./assets/Skill-image/NetlifyLogo.png";
import vsLogo from "./assets/Skill-image/vsLogo.png";
import viteLogo from "./assets/Skill-image/viteLogo.jpeg";

import gulshan from "./assets/myimage/gulshan.png";
import currency_converter from "./assets/Project_image/currency_converter.jpg";
import pasword_generator from "./assets/Project_image/pasword_generator.jpeg";
import corses from "./assets/Project_image/corses.jpeg";
import tiktaktoe from "./assets/Project_image/tiktaktoe.jpeg";

import toor1 from "./assets/Project_image/toor1.jpg";
import dgi from "./assets/Education-Image/dgi.jpeg";
import SVS from "./assets/Education-Image/SVS.png";
import GJPIC from "./assets/Education-Image/GJPIC.jpg";

export const skillsinfo = [
  {
    title: "Frontend",
    skills: [
      { name: "Html", logo: htmlLogo },
      { name: "css", logo: cssLogo },
      { name: "sass", logo: SassLogo },
      { name: "react.js", logo: reactLogo },
      { name: "Tailwind", logo: TailwindLogo },
      { name: "Bootstrap", logo: BootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: NodeLogo },
      { name: "Express.js", logo: ExpressLogo },
      { name: "MongoDB", logo: MongoDBLogo },
    ],
  },
  {
    title: "Language",
    skills: [
      { name: "cLanguage", logo: clanguageLogo },
      { name: "cpp", logo: cppLogo },
      { name: "Python", logo: PythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: GitLogo },
      { name: "GitHub", logo: GithubLogo },
      { name: "VS code", logo: vsLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: NetlifyLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: dgi,
    school: " Dronacharya group of institutions ",
    date: "July 2020 - May 2021",
    grade: "5.64",
    desc: "i am completed my high school from Dronacharya group of institutions ,Greter Noida, where i completed by b-tech from computer science and engineering branch.",
    Degree: "Bachelor of technology (Computer science and engineering)",
  },
  {
    id: 1,
    img: GJPIC,
    school: "Gyan joti public inter collage",
    date: "July 2020 - May 2021",
    grade: "6.867",
    desc: "i am completed my intermediate school from  Gyan joti public inter collage ,UP Board, where i studies science and mathmatics.",
    Degree: "UP Board (XII) science and Mathmtics",
  },
  {
    id: 2,
    img: SVS,
    school: "shiv vidya sadhan",
    date: "July 2018 - May 2019",
    grade: "6.64",
    desc: "i am completed my high school from shiv vidya sadhan uaccha madhyamik vidhyala ,UP Board, where i studies  science and mathmatics.",
    Degree: "UP Board (X) science and Mathmtics",
  },
];

export const projects = [
  {
    id: 0,
    title: "currency_converter",
    description:
      "A currency converter is a tool that helps users convert one currency into another based on the current exchange rate. It provides real-time or near-real-time rates, allowing individuals to understand the equivalent value of money when exchanging currencies. Currency converters are commonly used for travel, international transactions, online shopping, and business purposes. To build a currency converter, HTML is used to structure the user interface, CSS for styling and making the interface visually appealing, and JavaScript for dynamic functionality such as fetching the latest exchange rates and performing the conversions. React can be used to create an interactive and responsive user interface, managing state and efficiently updating the UI whenever the user inputs a new amount or currency type ",
    img: currency_converter,
    tags: ["HTML", "Css", "JavaScript", "React.js", "API"],
    github: "https:// github.com/gulshan8055",
    webapp: "https:// github.com/gulshan8055",
  },
  {
    id: 1,
    title: "Corse chosen",
    description:
      " This course guides you through the process of building interactive, responsive websites using HTML, CSS, and React. You will start by learning the basics of HTML and CSS to create well-structured, styled web pages. Then, the course will introduce React to make your website dynamic and interactive, teaching you how to build reusable components, manage state, and handle events. By the end of the course, you'll have a solid understanding of front-end development, and you'll be able to create modern websites with React that are both visually appealing and highly functional.",
    img: corses,
    tags: ["HTML", "Css", "JavaScript", "React.js", "API"],
    github: "https:// github.com/gulshan8055",
    webapp: "https:// github.com/gulshan8055",
  },
  {
    id: 2,
    title: "Password generator",
    description:
      "A Password Generating App is a tool that helps users create strong, unique, and secure passwords. The app generates passwords with a mix of uppercase and lowercase letters, numbers, and special characters, ensuring they meet security best practices. ",
    img: pasword_generator,
    tags: ["HTML", "Css", "JavaScript", "React.js", "API"],
    github: "https:// github.com/gulshan8055",
    webapp: "https:// github.com/gulshan8055",
  },
  {
    id: 3,
    title: "Tik Tak toe",
    description:
      "A Tic-Tac-Toe Web App is a digital version of the classic pencil-and-paper game where two players take turns marking spaces on a 3x3 grid with either X or O until one player wins by getting three of their marks in a row, horizontally, vertically, or diagonally. The web app allows users to play against a friend, with features like automatic turn switching, a win/lose indicator, and a reset button to start a new game. The app is typically built using HTML for the structure, CSS for styling the grid and user interface, and JavaScript to handle the game's logic and user interaction.",
    img: tiktaktoe,
    tags: ["HTML", "Css", "JavaScript"],
    github: "https:// github.com/gulshan8055",
    webapp: "https:// github.com/gulshan8055",
  },
  {
    id: 4,
    title: "toor with gk",
    description:
      "A Tour Website is an online platform designed to showcase and promote travel destinations, guided tours, and travel packages. The website typically features detailed information about various tour options, including itineraries, pricing, and highlights of each destination. Users can browse through different tours based on location, theme (e.g., adventure, culture, relaxation), and duration.The website may also have sections for customer support, FAQs, and a blog with travel tips. Built using HTML, CSS, and JavaScript, it provides an engaging, responsive experience with beautiful visuals and seamless navigation to help travelers find their next adventure easily.  ",
    img: toor1,
    tags: ["HTML", "Css", "JavaScript", "React.js", "API"],
    github: "https:// github.com/gulshan8055",
    webapp: "https:// github.com/gulshan8055",
  },
];
