/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hi Guys..",
  title2: "Chayan",
  logo_name: "s.chayan()",
  nickname: "chayansinha24 / nmryk",
  full_name: "Chayan Sinha",
  subTitle:
    "Full Stack Developer, Aspiring Software Engineer,Enthusiastic Learner",
  resumeLink:
    "https://drive.google.com/file/d/1ht2fUtC7rk76ZwBOma0EMxpSM1Pf6ccA/view",
  mail: "mailto:csinha134@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/csinha134",
  linkedin: "https://www.linkedin.com/in/chayansinha/",
  gmail: "csinha134@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/chayan_sinha_",
  instagram: "https://www.instagram.com/chayan._.sinha/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Backend development using SpringBoot and exploring MERN Stack",
        "⚡ Former SWE Intern @ JP Morgan Chase & Co.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Thapar Institute of Engineering and Technology",
      subtitle: "Bachelor of Engineering , Computer Engineering",
      logo_path: "logo.png",
      alt_name: "TIET",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Studied  Software Development Concepts, Data Structures & Algorithms,DBMS,",
        "⚡ Learn Topics in Computer Networks,Computer Architecture,Operating System",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course.",
      ],
      website_link: "https://thapar.edu/",
    },
    {
      title: "Delhi Public School, Mathura Road",
      subtitle: "AISCCE , CBSE CLASS XII",
      logo_path: "dps.png",
      alt_name: "DPS",
      duration: "2006 - 2020",
      descriptions: [
        "⚡ I opted for Science Stream and have studied Physics , Chemistry , Mathematics , Computer Science",
        "⚡ I was the President of Indian Musical Society",
        "⚡ I was Vice President of Activity Council of our school ",
      ],
      website_link: "https://dpsmathuraroad.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Postman Student Expert",
      subtitle: "postmanstudent",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/7q7ahfsfQdeR3N9UWaqxcQ?identity__email=csinha134%40gmail.com",
      alt_name: "postman",
      color_code: "#FFFFFF",
    },
    {
      title: "Python Essential -2 Cisco",
      subtitle: "cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/f14e2efe-144e-49a2-b0b3-2fb51c0fb3ac",
      alt_name: "cisco",
      color_code: "#FFFFFF",
    },
    {
      title: "Goldman Sachs Virtual Intership",
      subtitle: "Goldman Sachs Internship",
      logo_path: "goldman.png",
      certificate_link:
        "https://drive.google.com/file/d/1nXpTBT52KR4jJXzt7FzbdI0FWz8rXNiU/view",
      alt_name: "gs",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: " Internship and Volunteership",
  description:
    "I've completed two internships. I love to build a network and communicate with people.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern ",
          company: "JP Morgan Chase & Co.",
          company_url: "",
          logo_path: "jp.png",
          duration: "Jun 2023 - Jul 2023",
          location: "Bengaluru , Karnataka",
          description:
            "RDC Team | CREDIT RISK | Worked on a full stack application to automate the tedious task of SRE (Site Reliability Engineering), I not only honed my technical skills but also gained a deeper understanding of real-world challenges and solutions.",
          color: "#0071C5",
        },
        {
          title: "Software Developer Intern",
          company: "Saptang Labs",
          company_url: " ",
          logo_path: "saptang.png",
          duration: "Jan 2023 - Mar 2023",
          location: "Work From Home",
          description:
            "Internship task was Analyzing the user’s tweets by continously monitoring their activities in order to identify political issues.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "OWASP Student Chapter",
          company: "Executive Member",
          company_url: "",
          logo_path: "owasp.png",
          duration: "Sep 2021 - Jun 2022",
          location: " ",
          description:
            "A part of the Student chapter responsible for conducting various events and recruiting new members in the society",
          color: "#4285F4",
        },
        {
          title: "DebSoc Literary Society",
          company: "Joint Convener",
          company_url: "",
          logo_path: "download.png",
          duration: "Aug 2021 - Jul 2022",
          location: " ",
          description:
            "A part of the Student chapter responsible for conducting various events and recruiting new members in the society",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    " Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "chayan.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@csinha134",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "findables.co",
      url: "https://github.com/csinha134/findables.co",
      description: "MERN Application | Lost and Found for Campus ",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "Portfolio-Website",
      url: "https://github.com/csinha134/myportfolio",
      description: "(This)My Portfolio using ReactJs",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Aakashवाणी",
      url: " ",
      description:
        "Computer Graphics + Streamlit application with realtime weather simulation",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "C++",
          iconifyClass: "logos-c",
        },
        {
          name: "streamlit",
          iconifyClass: "logos-streamlit",
        },
      ],
    },
    {
      name: "Vaatavaran",
      url: "https://github.com/arjundvn24/nasscom-temp ",
      description:
        "Employed advanced machine learning techniques, including XGBoost, LSTM, Prophet, Seasonal ETS, and SARIMAX, to predict the AQI and heatwave for Telangana",
      languages: [
        {
          name: "ML",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Samaachar4u",
      url: "https://github.com/arjundvn24/ethos_g/tree/arjun",
      description:
        "This tool to generate their complete sentiment analysis along with the predicted future sentiments to help their management teams",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "ML",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      name: "SentAL",
      url: "https://github.com/csinha134/SentAL",
      description:
        "A machine learning end to end flask web app for sentiment analysis model created using Scikit-learn & VADER",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
          color: "#E34F26",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
          color: "#1572B6",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
