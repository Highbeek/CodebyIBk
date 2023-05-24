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
    company_name: "Freelance",
    icon: "",
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Volunteered in open source projects",
    ],
  },

  {
    title: "Business Analyst",
    company_name: "Mijan Logistic",
    icon: "",
    iconBg: "#383E56",
    date: "Nov 2020 - Apr 2022",
    points: [
      "Built operational reporting in Excel and Power bi to find areas of improvement for operations resulting in annual incremental revenue.",
      "Increased revenue by over 20% through analysis of data surrounding market behaviors, vendor relationships,stakeholder goals, and workflows",
      "Researched and prepared presentations for the Management level regarding profitability",
      "Modeled data to generate reports comparing business process evolution, assisted management with appropriate KPIs based on improved operations, participated in product development, and planned and provided vital insights based on predictive modeling, which allowed Project managers to circumvent money owed by clients to the minimum.",
      "Analyzed financial reporting in Tableau and Power Bi, which led to improved savings from the ineffective vendor and business subscriptions",
      "Monitored all payments and expenditures, including payroll, purchase orders, invoices, and account statements, decreasing errors by 23% through organized digital and paper files.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
];

const projects = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export { services, technologies, experiences, testimonials, projects };
