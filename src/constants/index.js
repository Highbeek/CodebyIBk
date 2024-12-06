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
  squareme,
  squaremeBg,
  umra,
  umraPage,
  umraDash,
  spoutBg,
  gift,
  bibleQ,
  furex,
  squaremeWeb,
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
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
    title: "Mobile Developer",
    company_name: "Squareme-Social Payment Platform",
    icon: squareme,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Contributed significantly to the development of Squareme, a social payment platform enabling users to send, request, and receive payments using phone numbers.",
      "Collaborated with backend engineers to integrate real-time payment processing using secure APIs.",
      "Implemented OAuth for secure user authentication, ensuring a safe and trustworthy transaction environment.",
      "Utilized React Native for cross-platform compatibility, resulting in a streamlined development process.",
      "Actively participated in bi-weekly sprint reviews, incorporating user feedback and continuous improvements.",
      "Achieved a 4.5-star rating on both the App Store and Google Play within the first three months of release.",
      "Played a key role in resolving critical bugs and implementing feature enhancements, contributing to a 20% month-over-month increase in active users.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Furex Texhnologies-crypto trading platform",
    icon: furex,
    iconBg: "#383E56",
    date: "July 2024 - November 2024",
    points: [
      "Optimized app performance and addressed technical issues to ensure a smooth and responsive user experience for crypto transactions",
      "Implemented scalable code and adhered to best practices for maintainable and efficient software development.",
      "Conducted comprehensive code reviews and provided actionable feedback to enhance team productivity and code quality",
      "Actively participated in bi-weekly sprint reviews, incorporating user feedback and continuous improvements.",
      "Collaborated with product managers, designers, and backend engineers to introduce and refine features like crypto trading, gift card exchanges, and digital asset management",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "De-Benedict  Initiative NGO",
    icon: "",
    iconBg: "#383E56",
    date: "April 2022 - August 2023",
    points: [
      "Developed and improved web pages, ensuring the website's design and functionality aligned with best practices in web development.",
      "Collaborated closely with designers and developers, utilizing Git/GitHub for efficient version control and seamless team collaboration.",
      "Developed and maintained web applications, utilizing React.js ",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Gomycode",
    icon: "",
    iconBg: "#383E56",
    date: "April 2022 - August 2023",
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
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Special thanks to Ibukun from the frontend team for his unwavering dedication and proactive approach. His ability to tackle challenges with confidence and deliver exceptional results was truly commendable.",
    name: "Yemi O.FCAS",
    designation: "Senior Developer",
    company: "De-Benedict NGO",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
  {
    testimonial:
      "Ibukun’s expertise and attention to detail were instrumental in the success of the SquareMe mobile app. He delivered exceptional results under tight deadlines.",
    name: "Valentine Ezike",
    designation: "Engineering Manager",
    company: "SquareMe",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
  },
];

const projects = [
  {
    name: "BibleQ",
    description:
      "A personal project designed to offer engaging and interactive Bible quizzes, promoting learning and exploration of biblical knowledge in a fun way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap || framer",
        color: "green-text-gradient",
      },
      {
        name: "responsiveness",
        color: "pink-text-gradient",
      },
    ],
    image: bibleQ,
    source_code_link: "https://github.com/Highbeek/Bible-Quiz",
    livepage_link:
      "https://bible-quiz-4h9tvfszl-highbeeks-projects.vercel.app/",
  },
  {
    name: "Gift - Awoh",
    description: "This is a portfolio project for Product Designer",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap || framer",
        color: "green-text-gradient",
      },
      {
        name: "responsiveness",
        color: "pink-text-gradient",
      },
    ],
    image: gift,
    source_code_link: "",
    livepage_link: "https://www.giftawoh.com/",
  },
  {
    name: "SPOUTPAY | Making payments for you throughout Africa",
    description: "A Finance App for Making payments  throughout Africa",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "react-native,navigation",
        color: "pink-text-gradient",
      },
    ],
    image: spoutBg,
    source_code_link: "",
    livepage_link:
      "https://play.google.com/store/search?q=spoutpay&c=apps&hl=en_US",
  },
  {
    name: "UMRA | Doctor's Dashboard",
    description:
      "A PERSONAL HEALTH COMPANION dashboard for Doctors  to manage their patients",
    tags: [
      {
        name: "react,nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "taiwind",
        color: "pink-text-gradient",
      },
    ],
    image: umraDash,
    source_code_link: "",
    livepage_link: "https://umra-doctors-app.vercel.app/dashboard",
  },
  {
    name: "UMRA | Landing page",
    description:
      "A PERSONAL HEALTH COMPANION to Monitor  blood pressure and sugar levels, receive personalized insights, and connect with healthcare professionals.",
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
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: umraPage,
    source_code_link: "",
    livepage_link: "https://umra-landing-page.vercel.app/",
  },
  {
    name: "Squareme App | P2P Payment App",
    description:
      "Simplify money transfers between friends with ease and security.\nAvailable on app store and google store",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "ios,android",
        color: "green-text-gradient",
      },
      {
        name: "react-navigation",
        color: "pink-text-gradient",
      },
    ],
    image: squaremeBg,
    source_code_link: "https://squareme.app/",
    livepage_link: "https://youtu.be/8ivbYXFlgUU",
  },
  {
    name: "Squareme Landing page | P2P Payment App",
    description:
      "Simplify money transfers between friends with ease and security.\nAvailable on app store and google store",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "animation,gsap,framer",
        color: "green-text-gradient",
      },
      {
        name: "taiwind",
        color: "pink-text-gradient",
      },
    ],
    image: squaremeWeb,
    source_code_link: "",
    livepage_link: "https://squareme.app/",
  },
  {
    name: "Payday Clone",
    description:
      "My Payday App Clone showcases my expertise in creating user-friendly finance management mobile apps.",
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
    name: "Doc Appointment",
    description:
      "The Doctors Appointment App simplifies scheduling appointments with doctors. Users can search for specialists, view profiles, check availability, and book appointments easily. ",
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
    livepage_link: "https://youtube.com/shorts/Di384hVqz8Q",
  },
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
    livepage_link: "https://ibdashboard.netlify.app",
  },
  {
    name: "Sapa",
    description:
      "saPA is  a fundraising app for spreading happiness and fostering mutual support, enabling users to explore, learn, and sign in to contribute and discover more.",
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
    livepage_link: "https://endsapa.netlify.app/",
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
    livepage_link: "https://ibdevlinkedinclone.netlify.app",
  },
  {
    name: "Pop & Chill",
    description:
      "Pop and Chill: A dynamic movie website with captivating landing page and background videos showcasing new movies. Users can watch trailers of any clicked movie.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-hooks",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: pop,
    source_code_link: "https://github.com/Highbeek/Pop-Chill",
    livepage_link: "https://popchill.netlify.app/",
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
    livepage_link: "https://mathwizz.netlify.app",
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
    livepage_link: "",
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

export { services, technologies, experiences, testimonials, projects, links };
