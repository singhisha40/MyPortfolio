export const personal = {
  name: 'Isha Singh',
  initials: 'IS',
  tagline: 'CSE Grad. Currently building things with MERN stack.',
  bio: "Full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js), with hands-on experience in REST API design, authentication, and containerized deployment workflows using Docker and CI/CD. Previously interned at Bhabha Atomic Research Centre (BARC) and Indian Oil Corporation Limited (IOCL), working on machine learning models. I enjoy learning new tools, adapting quickly to unfamiliar challenges, and improving through hands-on projects. Apart from coding, I love reading books and yoga.",
  degree: 'B.Tech Computer Science, NIT Arunachal Pradesh',
  focus: 'MERN Stack · DSA',
  status: 'Open to development opportunities',
  location: 'India',
  email: 'ishaknp16@gmail.com',
  github: 'https://github.com/singhisha40',
  linkedin: 'https://www.linkedin.com/in/isha-singh-28b88322a/',
  resume: '/link',          // resume PDF in /public/resume.pdf
}

export const skills = [
  {
    category: 'Languages and Tools',
    items: ['JavaScript', 'C/C++','SQL', 'Docker', 'CI/CD(Github Actions)'],
  },
  {
    category: 'Frontend · Backend',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'MVC Architecture'],
  },
  {
    category: 'CS Fundamentals',
    items: ['DSA', 'OOP', 'Git', 'Linux'],
  },
]

export const projects = [
  {
    num: '01',
    title: 'HavenStay',
    desc: 'A Full-Stack rental booking platform inspired by Airbnb, featuring secure user authentication, property listing management, review and rating functionality, and role-based access control. Built with RESTful architecture, Passport.js session authentication, server-side rendering using EJS, and MongoDB for scalable data persistence.',
    stack: [ 'Node.js', 'Express.js','MongoDB','EJS','Passport.js'],
    github: 'https://github.com/singhisha40/HavenStay',
    live: 'https://havenstay-8lo1.onrender.com/',
  },
  {
    num: '02',
    title: 'BataoGPT',
    desc: 'A Full-Stack AI chatbot application inspired by ChatGPT with real-time conversational workflows, persistent chat history, and structured backend integration using OpenRouter APIs. Containerized it using Docker (multi-stage builds for frontend/backend) and automated image builds and deployment to Docker Hub via a GitHub Actions CI/CD pipeline.',
    stack: ['React', 'Node.js', 'Express.js','MongoDB',' OpenRouter API', 'Vite', 'Docker'],
    github: 'https://github.com/singhisha40/GPT-Project',
    live: 'https://gpt-project-green.vercel.app/',
  },
  // {
  //   num: '03',
  //   title: 'StockCheck',
  //   desc: 'A Full-Stack trading platform with portfolio tracking, holdings management, and order processing functionalities through interactive dashboard workflows.',
  //   stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'Chart.js'],
  //   github: 'https://github.com/singhisha40/StockCheck',
  //   live: 'link',
  // },
  // {
  //   num: '04',
  //   title: 'ReachOut',
  //   desc: 'An Ongoing Full-Stack Video Calling Platform Project to reach out your friends anytime, anywhere!',
  //   stack: ['React', 'Node.js', 'Express.js', 'MongoDB',],
  //   github: 'https://github.com/singhisha40/ReachOut',
  //   live: 'link',
  // },
]
