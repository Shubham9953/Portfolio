// Skills Section Logo's

import Htmllogo from './assets/tech_logo/Htmllogo.png';
import Csslogo from './assets/tech_logo/Csslogo.png';
import Javascriptlogo from './assets/tech_logo/Javascriptlogo.png';
import Reactjslogo from './assets/tech_logo/Reactjslogo.png';
import Expressjslogo from './assets/tech_logo/Expressjslogo.png';
import Mongodblogo from './assets/tech_logo/Mongodblogo.png';
import Netlifylogo from './assets/tech_logo/Netlifylogo.png';
import Materialuilogo from './assets/tech_logo/Materialuilogo.png';
import Vscodelogo from './assets/tech_logo/Vscodelogo.png';
import Vercellogo from './assets/tech_logo/Vercellogo.png';
import Gitlogo from './assets/tech_logo/Gitlogo.png';
import Githublogo1 from './assets/tech_logo/Githublogo1.png';
import Figmalogo from './assets/tech_logo/Figmalogo.png';
import Mysqllogo from './assets/tech_logo/Mysqllogo.png';
import Nextjslogo from './assets/tech_logo/Nextjslogo.png';
import Tailwindlogo from './assets/tech_logo/Tailwindlogo.png';
import Postmanlogo from './assets/tech_logo/Postmanlogo.png';
import Nodejslogo from './assets/tech_logo/Nodejslogo.png';
import Bootstraplogo from './assets/tech_logo/Bootstraplogo.png';
import Reduxlogo from './assets/tech_logo/Reduxlogo.png';
import Hostingerlogo from './assets/tech_logo/Hostingerlogo.png';
import Postgresqllogo from './assets/tech_logo/Postgresqllogo.webp';

//Projects logo

import Netflixlogo from './assets/project logo/Netflixlogo.png'
import weatherlogo from './assets/project logo/weatherlogo.png'
import TicTaclogo from './assets/project logo/TicTaclogo.png'
import Calculatorlogo from './assets/project logo/Calculatorlogo.png'
import Disneylogo from './assets/project logo/Disneylogo.png'
import ImageGallery from './assets/project logo/ImageGallerylogo.png'
import TodoListlogo from './assets/project logo/TodoListlogo.png'
import MusicPlayerlogo from './assets/project logo/MusicPlayerlogo.png'
import AgeCalculatorlogo from './assets/project logo/AgeCalculatorlogo.png'
import DigitalCalculatorlogo from './assets/project logo/DigitalCalculatorlogo.png'


// Education Section Logo's
import solDUlogo from './assets/education logo/solDUlogo.png';
import CBSEnewlogo from './assets/education logo/CBSEnewlogo.svg';
import Bimtlogo from './assets/education logo/Bimtlogo.jpeg';
import Dicelogo from './assets/company_logo/Dicelogo.jpeg'



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: Htmllogo },
            { name: 'CSS', logo: Csslogo },
            { name: 'JavaScript', logo: Javascriptlogo },
            { name: 'React JS', logo: Reactjslogo },
            { name: 'Redux', logo: Reduxlogo },
            { name: 'Next JS', logo: Nextjslogo },
            { name: 'Tailwind CSS', logo: Tailwindlogo },
            { name: 'Material UI', logo: Materialuilogo },
            { name: 'Bootstrap', logo: Bootstraplogo },
        ],
    },

    {
        title: 'Backend',
        skills: [

            { name: 'Node JS', logo: Nodejslogo },
            { name: 'Express JS', logo: Expressjslogo },
            { name: 'MySQL', logo: Mysqllogo },
            { name: 'MongoDB', logo: Mongodblogo },
            { name: 'PosgreSql', logo: Postgresqllogo },


        ],
    },

    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: Gitlogo },
            { name: 'GitHub', logo: Githublogo1 },
            { name: 'VS Code', logo: Vscodelogo },
            { name: 'Postman', logo: Postmanlogo },
            { name: 'Vercel', logo: Vercellogo },
            { name: 'Netlify', logo: Netlifylogo },
            { name: 'Hostinger', logo: Hostingerlogo },
            { name: 'Figma', logo: Figmalogo },
        ],
    },

];


 export const projects = [
    {
      id: 0,
      title: "Live-Calculator",
      description: "I built a fully responsive and functional live calculator using ReactJS and TailwindCSS, with smooth performance and modern UI design. The calculator supports basic arithmetic operations and is optimized for both desktop and mobile devices, providing a seamless user experience.",
      image: Calculatorlogo,
      tags: ["ReactJS", "TailwindCSS","Vite" ],
      github: "https://github.com/Shubham9953/Calculator",
      webapp: "https://calculator-one-pearl-21.vercel.app/",
    },
    {
      id: 1,
      title: "Live-Weather-App",
      description: "I created a live weather app using React.js, Tailwind CSS, and Weather API. It displays real-time weather data for any city with a clean, responsive, and user-friendly interface.",
      image: weatherlogo,
      tags: ["Reactjs", "TailwindCSS","Weather API","Vite","Axios"],
      github: "https://github.com/Shubham9953/Live_Weather_app",
      webapp: "https://live-weather-app-lovat.vercel.app/",
    },
    {
      id: 2,
      title: "Tic-Tac-Toe Game",
      description: "I created a fully responsive Tic Tac Toe game using ReactJS and TailwindCSS, offering smooth gameplay and clean modern design. The game features a user-friendly interface, allowing players to enjoy classic Tic Tac Toe on both desktop and mobile devices.",
      image: TicTaclogo,
      tags: ["ReactJS", "TailwindCSS","Vite" ],
      github: "https://github.com/Shubham9953/Tic-TacoToe",
      webapp: "https://tic-taco-toe.vercel.app/",
    },
    {
      id: 3,
      title: "Netflix-clone",
      description: "I created a responsive Netflix clone using only HTML and CSS. The design replicates the official Netflix homepage, including navigation, hero section, and content layout. It works seamlessly on both desktop and mobile devices using media queries, showcasing my front-end skills without JavaScript or external frameworks.",
      image: Netflixlogo,
      tags: ["HTML", "CSS", ],
      github: "https://github.com/Shubham9953/netflix-clone",
      webapp: "https://netflix-clone-brown-kappa-84.vercel.app/",
    },
    {
      id: 4,
      title: "Disney-Clone",
      description: "I created a fully responsive Disney+ clone using Vite, React.js, Tailwind CSS, and Axios, powered by TheMovieDB API. It features smooth navigation, dynamic movie/show listings, and category-wise browsing, delivering a seamless streaming-like experience across all devices and screen sizes.",
      image: Disneylogo,
      tags: ["ReactJS", "TailwindCSS","Vite","Axios","TMDB API" ],
      github: "https://github.com/Shubham9953/Disney-clone",
      webapp: "https://disney-clone-shubham.vercel.app/",
    },
    {
      id: 5,
      title: "Image-Gallery",
      description: "I developed a fully responsive image gallery using HTML, CSS, and JavaScript. The gallery adapts seamlessly to all screen sizes, offering smooth transitions, interactive hover effects, and organized layouts. It enhances user experience by showcasing images elegantly while maintaining responsiveness, functionality, and a visually appealing design across devices.",
      image: ImageGallery,
      tags: ["HTML", "CSS","javaScript" ],
      github: "https://github.com/Shubham9953/Image-Gallery",
      webapp: "https://shubham-image-gallery.vercel.app/",
    },
    {
      id: 6,
      title: "Todo-List",
      description: "I built a fully functional To-Do List web app using HTML, CSS, and JavaScript. It allows users to create, update, and delete tasks with seamless data storage using localStorage, ensuring tasks persist even after refresh. A clean, responsive design enhances usability and provides a smooth user experience.",
      image: TodoListlogo,
      tags: ["HTML", "CSS","JAVASCRIPT" ],
      github: "https://github.com/Shubham9953/Todo-List-JS",
      webapp: "https://shubham-todo-list-js-sigma.vercel.app/",
    },
    {
      id: 7,
      title: "Music Player",
      description: "I built a fully functional music player using HTML, CSS, and JavaScript. It features a clean, responsive design, play/pause controls, track navigation, and dynamic song updates. Users can enjoy seamless audio playback directly in the browser, making it a lightweight, interactive, and visually appealing web application.",
      image: MusicPlayerlogo,
      tags: ["HTML", "CSS","JAVASCRIPT" ],
      github: "https://github.com/Shubham9953/Music-Player",
      webapp: "https://music-player-shubham.vercel.app/",
    },
    {
      id: 8,
      title: "Age Calculator",
      description: "I developed an Age Calculator using HTML, CSS, and JavaScript that calculates a person’s exact age based on their date of birth. The tool provides accurate results in years, months, and days, featuring a clean, responsive design for a seamless and user-friendly web experience.",
      image: AgeCalculatorlogo,
      tags: ["HTML", "CSS","JAVASCRIPT" ],
      github: "https://github.com/Shubham9953/Age-Calculator",
      webapp: "https://age-calculator-shubham.vercel.app/",
    },
    {
      id: 9,
      title: "Digital Calculator",
      description: "I created a fully functional Calculator using HTML, CSS, and JavaScript. It supports basic arithmetic operations with a clean, intuitive interface and responsive design. The app provides smooth, real-time calculations, enhancing user experience while demonstrating practical use of web development skills in building interactive and visually appealing applications.",
      image: DigitalCalculatorlogo,
      tags: ["HTML", "CSS","JAVASCRIPT" ],
      github: "https://github.com/Shubham9953/Calculator-Js",
      webapp: "https://shubham-calculator.vercel.app/",
    },
  ];


export const education = [
    {
      id: 0,
      img: solDUlogo,
      school: "SOL Delhi University",
      date:  "2022 - 2025",
      
      desc: "I have completed my Bachelor of Arts (B.A.) Programme from the School of Open Learning, Delhi University. This course helped me build a strong foundation in subjects like humanities, social sciences, and communication. I am now ready to apply my skills and knowledge in real-world opportunities and grow professionally.",
      degree: "Bachelor of Arts - (B.A. Programme)",
    },

     {
      id: 1,
      img: Dicelogo,
      school: "Dice Academy",
      date: "2024 - 2025",
      desc: "I have completed a 1-year Full Stack Developer course from Dice Academy, earning a certified qualification. The program provided hands-on experience in front-end and back-end technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. I’m now confident in building complete web applications and ready for professional development roles.",
      degree: "FullStack Devloper",
    },
     
    {
      id: 2,
      img: Bimtlogo,
      school: "BIMT Campus Sangam Vihar New Delhi 110080",
      date: "2021 - 2022",
      desc: "I have completed a 1-year Advance Diploma in Computer Application, gaining practical knowledge in software tools, programming, and office applications. This course enhanced my skills in MS Office, HTML, css, Frontend Devlopment and basic networking. It has prepared me to handle various computer-related tasks efficiently in both technical and administrative roles.",
      degree: "Advance Diploma In Computer Aplication - (ADCA)",
    },

    {
      id: 3,
      img: CBSEnewlogo,
      school: "G.B.S.S School Tkd. Ext. No. 3 New Delhi",
      date: "2020 - 2021",
      desc: "I have completed my class 12th education from G.B.S.S School TKD. EXT. No.3, New Delhi, under the CBSE board",
      degree: "CBSE (XII) - Art's With Ecconomics ",
    },

     {
      id: 4,
      img: CBSEnewlogo,
      school: "G.B.S.S School J-Block sangam Vihar New Delhi 110080",
      date: "2017 - 2018",
      desc: "I have completed my class 10th education from Sarvodaya Bal Vidyalaya School, New Delhi, under the CBSE board",
      degree: "CBSE (X) - All Subject ",
    },
];
