import { Projects, Skills } from "./interfaces";
import portfolio1 from "../../public/portfolio1.jpeg";
import portfolio2 from "../../public/portfolio2.jpg";
import portfolio3 from "../../public/portfolio3.png";
import portfolio4 from "../../public/portfolio4.png";
import portfolio5 from "../../public/portfolio5.jpeg";
import portfolio6 from "../../public/portfolio6.jpeg";

export const skills: Skills = [
  {
    name: "JavaScript",
    percentage: "70",
  },
  {
    name: "TypeScript",
    percentage: "50",
  },
  {
    name: "React",
    percentage: "85",
  },
  {
    name: "NodeJS",
    percentage: "60",
  },
  {
    name: "MongoDB",
    percentage: "58",
  },
  {
    name: "TailwindCSS",
    percentage: "75",
  },
];

export const projects: Projects = [
  {
    image: portfolio3,
    hrefImage: "https://adore1968.github.io/tasks-app-with-react/",
    title: "Tasks App with React",
    description:
      "In this project I practice the basic features of React by creating a simple application that uses useState. useEffect, component creation, LocalStorage and at the end it also lets you understand how to deploy a React web application for free using Github Pages.",
    url: "https://github.com/adore1968/tasks-app-with-react",
  },
  {
    image: portfolio2,
    hrefImage: "https://adore1968.github.io/Cocktails-with-TS/",
    title: "Fetching CocktailDB with React and TypeScript",
    description:
      "In this application I obtain the information provided by this database through fetch and hooks such as useEffect, in addition to defining the types of each of this data.",
    url: "https://github.com/adore1968/Cocktails-with-TS",
  },
  {
    image: portfolio6,
    hrefImage: "https://adore1968.github.io/React-Rick-and-Morty-REST-API/",
    title: "React, Rick and Morty REST Api",
    description:
      "In this project I practice the basics of React by creating a simple application using the Rick And Morty REST API. In this example we will create a web application that allows us to display the characters from the television series; in addition to using Vitejs to create the project and finally deploy it for free in a static file deployment service such as Github Pages.",
    url: "https://github.com/adore1968/React-Rick-and-Morty-REST-API",
  },
  {
    image: portfolio1,
    hrefImage: "https://crud-with-local-storage-and-nextjs-pbtc.vercel.app/",
    title: "CRUD App with Local Storage and Nextjs",
    description:
      "In this project I integrate Redux Toolkit into Nextjs (using app folder or app directory) in addition to using Typescript, React, API Context and Nextjs bases, plus we will also use its methods to request data using fetch below, and set it to its state.",
    url: "https://github.com/adore1968/crud-with-local-storage-and-nextjs",
  },

  {
    image: portfolio4,
    hrefImage: "https://adore1968.github.io/React-And-Redux-Toolkit-CRUD/",
    title: "React and Redux Toolkit CRUD",
    description:
      "In this practical example I will create a CRUD (Create, Read, Update, Delete) web application from scratch, using vitejs, react router dom and redux-toolkit. To finally add TailwindCSS to my project as a CSS framework",
    url: "https://github.com/adore1968/React-And-Redux-Toolkit-CRUD",
  },
  {
    image: portfolio5,
    hrefImage: "https://github.com/adore1968/mern-crud-auth",
    title: "Nodejs React Mongodb Login and CRUD (App FullStack)",
    description:
      "In this project I learned to create a Fullstack web application using Nodejs as a Backend and Mongodb as a NoSQL database, and React as a frontend application using modules such as react-hook-form, react-router-dom, and others, in addition to using JSON Web Tokens, cookies and develop a REST API.",
    url: "https://github.com/adore1968/mern-crud-auth",
  },
];
