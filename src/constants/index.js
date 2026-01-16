import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Full Stack Developer",
    icon: web,
    tools: ["Java", "Spring Boot", "React", "MySQL", "Git"],
  },
  {
    title: "Machine Learning & Data Analyst",
    icon: backend,
    tools: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "UI/UX Designer & Frontend Developer",
    icon: mobile,
    tools: ["Figma", "React", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Database Designer & SQL Developer",
    icon: creator,
    tools: ["MySQL", "MongoDB", "PostgreSQL", "ER Diagrams", "Indexing"],
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
    name: "React JS",
    icon: reactjs,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Development Intern-(MERN)",
    company_name: "Edunet Foundation",
    company_website: "https://edunetfoundation.org/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - March 2025",
    points: [
      "Developed and maintained web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      "Built a **Recipe Sharing App**, enabling users to upload, browse, and share recipes with an intuitive UI.",
      "Implemented features such as user authentication, recipe categorization, and real-time search functionality.",
      "Optimized website performance, ensuring fast load times and seamless user experience.",
    ],
  },
  {
    title: "B.Tech-Computer Science",
    company_name: "Guru Nanak Institute Of Technology-Hyderabad,Telangana(India)",
    company_website: "https://www.gnithyd.ac.in/",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - May 2025",
    points: [
      "Specialized in Computer Science with a focus on Software and Web Development.",
      "Developed strong technical skills in programming, web development, and software engineering.",
      "Actively participated in various coding competitions and tech events, gaining valuable experience in problem-solving and collaboration.",
    ],
  },
  {
    title: "Intermediate (+2)-PCM",
    company_name: "GreenLand International College-Biratnagar,Nepal",
    company_website: "http://greenlandcollege.edu.np/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Nov 2020",
    points: [
      "Completed Intermediate (+2) with a focus on Computer Science, Mathematics, English, and Physics.",
      "Gained strong foundational knowledge in programming, data structures, and computer applications.",
      "Participated in coding competitions, academic projects, and extracurricular activities.",
      "Developed problem-solving and analytical skills through coursework and practical assignments."
    ],
  },
  {
    title: "Schooling-Computer",
    company_name: "Premier Secondary School-Rajbiraj,Nepal",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Jan 2006 - Dec 2018",
    points: [
      "Completed schooling with a focus on Science and Computer Science.",
      "Studied key subjects including Computer Science, Mathematics, English, and Physics.",
      "Gained a foundational understanding of programming, logical reasoning, and analytical problem-solving.",
      "Actively participated in science exhibitions, coding activities, and academic competitions.",
    ],
  },
  
];

const projects = [
  {
    name: "Face Recognition System",
    description: "A React-based face recognition application that detects and recognizes faces with high accuracy using AI-powered algorithms. Features a seamless and responsive UI for an interactive user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient"
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient"
      },
      {
        name: "css",
        color: "green-text-gradient"
      },
      
      {
        name: "opencv",
        color: "blue-text-gradient"
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://github.com/User-Krishna/Face-Recognition-React",
  },
  {
    name: "Sports E-Commerce ",
    description:
      "A user-friendly online store for sports equipments and apparel, offering seamless browsing, secure payments, and personalized products recommendations for sports enthusiasts.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://github.com/User-Krishna/Sports_Ecommerce",
  },
  {
    name: "Nepal Tourism Website",
    description:
     "A vibrant and informative website showcasing the beauty and cultural heritage of Nepal. Features include detailed travel guides, destination information, booking options, and local experiences for travelers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://github.com/User-Krishna/tourism",
  },
  {
    name: "Multimedia Summarizer",
    description:
      "An AI-powered platform designed to automatically summarize multimedia content and personalized learning recommendations.",
    tags: [
      {
        name: "SpringBoot",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link: "https://github.com/User-Krishna/Multimedia-Summarizer-Learning-Assistant",
  },
  {
    name: "Faculty Allocation System",
    description:
      "A web-based application designed to automate the process of assigning faculty members based on availability.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    
    ],
    image: rollWeb,
    hosted_link: "https://github.com/User-Krishna/Optimized-Exam-Duty-Allocation-With-Smart-Invigilation-Scheduler",
  },
  {
    name: "Placement Management System",
    description:
     "A comprehensive web application designed to streamline the placement process for educational institutions.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://github.com/User-Krishna/Placement_Management_System",
  },
];
const certificates = [
  {
    id: 1,
    title: "Internship at Edunet Foundation(MERN)",
    image: cert1,
  },
  {
    id: 2,
    title: "Silver Medallist(2nd Rank in Academics)",
    image: cert2,
  },
  {
    id: 3,
    title: "Research Paper Published",
    image: cert3,
  },
  {
    id: 4,
    title: "Winner of QUIZZOTICA 2.0 Competition",
    image: cert4,
  },
  {
    id: 5,
    title: "Python Certificate",
    image: cert5,
  },
  {
    id: 6,
    title: "Data Science using Python",
    image: cert6,
  },
];
const personalInfo = {
  name: "Krishna",
  fullName: "Krishna Das",
  email: "dask84779@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in Java and
  JavaScript, and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problem, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/18NCcGzItlcy8AWkdrr9B8HraZPOoI4tT/view?usp=drivesdk",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/krishna-das-4b811922b/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/User-Krishna",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  certificates,
  navigationPaths,
  personalInfo,
  publicUrls,
};
