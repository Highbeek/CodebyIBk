import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  next,
  nodejs,
  expo,
  mongodb,
  firebase,
  git,
  figma,
  docker,
  bootstrap,
  meta,
  starbucks,
  dashboard,
  sapa,
  linkedin,
  pop,
  maths,
  vivid,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cart,
  doc,
  payday,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "expo",
    icon: expo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Gomycode",
    icon: "",
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Volunteered as part of an open-source contribution, collaborating with a team of developers to create and maintain web applications.",
      "Contributed to open-source projects as part of a development team, focusing on web applications and mobile apps.",
      "Developed and maintained web applications, utilizing React.js & React Native for responsive UI design and enhanced user experience.",
      "Employed Git for version control and effective collaboration with team members.",
      "Worked as a freelance web developer, specializing in React.js and related technologies.",
      "Collaborated with cross-functional teams to deliver high-quality products, ensuring responsive design and cross-browser compatibility.",
    ],
  },

  {
    title: "Business Analyst",
    company_name: "Mijan Logistic",
    icon: "",
    iconBg: "#383E56",
    date: "Nov 2020 - Apr 2022",
    points: [
      "Developed operational reporting in Excel and Power BI to increase revenue and identify areas for improvement.",
      "Increased revenue by over 20% through data analysis of market behaviors, vendor relationships, and workflows.",
      "Utilized Tableau and Power BI to analyze financial reporting, resulting in cost savings.",
      "Streamlined payment and expenditure monitoring, reducing errors by 23% through organized files",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I would like to speciallly thank Only Ibukun in the frontend team who was ready with zeal to deliver regardless weather he knows it all or not and i appreciate that will both didnt regret the journey.",
    name: "Yemi O.FCAS",
    designation: "Senior Developer",
    company: "De-Benedict NGO",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
];

const projects = [
  {
    id: 1,
    name: "Payday Clone",
    description:
      "The Payday App Clone showcases my expertise in developing functional and user-friendly mobile applications. Designed as a replica of the original Payday App, it offers users a seamless experience in managing their finances ",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "react-navigation",
        color: "pink-text-gradient",
      },
    ],
    image: payday,
    source_code_link: "https://github.com/Highbeek/Payday-clone",
    livepage_link: "https://youtu.be/8ivbYXFlgUU",
  },
  {
    id: 2,
    name: "Doc Appointment",
    description:
      "The Doctors Appointment App aims to simplify the process of scheduling appointments with doctors. It provides a comprehensive platform where users can search for doctors based on their specialties, view their profiles and availability, and book appointments at their preferred time slots. ",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "react-threejs",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: doc,
    source_code_link: "https://tinyurl.com/47dn8jnd",
    livepage_link: "",
  },
  {
    id: 3,
    name: "Dashboard",
    description:
      "An admin Dashboard that is aimed to allow user register and upload an excel/csv file , with a certain template, which gets analysed and user is able to view visualization of data.(In-view)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Highbeek/React-DashBoard",
    livepage_link: "https://ibdashboard.netlify.app",
  },
  {
    id: 4,
    name: "Sapa",
    description:
      "The website showcases 'saPA' a fundraising app focused on spreading happiness and fostering mutual support. It provides easy access to search, explore, learn about the platform, and sign in for users interested in contributing and discovering more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootsrap",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sapa,
    source_code_link: "https://github.com/Highbeek/Sapa-App",
    livepage_link: "",
  },
  {
    id: 5,
    name: "Linkedin Clone",
    description:
      "A LinkedIn clone offering user registration, login, and profile functionality, allowing users to post messages, view others' posts, and log out with a click on their profile image.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/Highbeek/LinkedIn-Clone",
    livepage_link: "",
  },
  {
    id: 6,
    name: "Pop & Chill",
    description:
      "Pop and Chill is a dynamic movie website featuring a captivating landing page with background videos showcasing new movies. Users can watch trailers of any movie they click on.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pop,
    source_code_link: "https://github.com/Highbeek/Pop-Chill",
    livepage_link: "https://popchill.netlify.app/",
  },
  {
    id: 7,
    name: "Mathwizz",
    description:
      "A basic arithmetic quiz game with randomly generated expressions. Players solve within a time limit, earning points for correct answers and losing tries for incorrect ones. High score is tracked.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: maths,
    source_code_link: "https://github.com/Highbeek/MathWiz",
    livepage_link: "https://mathwizz.netlify.app",
  },
  {
    id: 8,
    name: "Shoping Cart",
    description:
      "An minimal ecommerce project featuring a shopping cart and checkout section for seamless online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mui, styled-component",
        color: "pink-text-gradient",
      },
    ],
    image: cart,
    source_code_link: "https://github.com/",
    livepage_link: "",
  },
  {
    id: 9,
    name: "Vivid Realty",
    description:
      "A Real estate Websites that shows the houses avalabla and price",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Styled components",
        color: "pink-text-gradient",
      },
    ],
    image: vivid,
    source_code_link: "https://github.com/Highbeek/LinkedIn-Clone",
    livepage_link: "https://vividrealty.netlify.app",
  },
];

const links = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/ibukunagboola",
  },
  {
    platform: "twitter",
    url: "https://twitter.com/highbk",
  },
  {
    platform: "resume",
    url: "https://drive.google.com/file/d/1JRaSw4WZq6rehaCWfOGrjZ52ZPAe5Smo/view?usp=sharing",
  },
];


export { services, technologies, experiences, testimonials, projects,links  };
