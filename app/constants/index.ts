export const NAV_LINKS: {
  label: string;
  path: string;
  key: string;
}[] = [
  {
    label: "About",
    path: "#about",
    key: "about",
  },
  {
    label: "Experience",
    path: "#experience",
    key: "experience",
  },
  {
    label: "Projects",
    path: "#projects",
    key: "projects",
  },
  {
    label: "Contact",
    path: "#contact",
    key: "contact",
  },
];

export const EXPERIENCE: {
  title: string;
  company: string;
  duration: {
    start: string;
    end: string;
  };
  description: string[];
  key: string;
}[] = [
  {
    title: "Machine Learning Developer",
    company: "Oakville Centre for Vision",
    duration: {
      start: "May 2024",
      end: "Present",
    },
    description: [
      "Collaborate on the 'Difference Goggles' project, focusing on developing low-cost eye tracking wearables for sports and rehabilitation applications.",
      "Engineered machine learning algorithms and conducted image/video processing using Python to improve eye tracking accuracy.",
      "Actively participated in Agile project management practices, enhancing team collaboration and project deliverables while adhering to the Software Development Life Cycle (SDLC).",
    ],
    key: "naryant-1",
  },
  {
    title: "Research Assistant",
    company: "Naryant (Formerly Inovex)",
    duration: {
      start: "Oct 2023",
      end: "Apr 2024",
    },
    description: [
      "Improved Urban Planning using Machine Learning, Traffic Simulation and Data Visualization.",
      "Utilized Simulation of Urban Mobility (SUMO) and OpenStreetMap (OSM) to model and analyze traffic patterns across 10+ urban zones, enhancing data accuracy for urban development projects.",
      "Synthesized a comprehensive dataset predicting traffic demand for the city of Oakville, utilizing simulation tools (SUMO, OSM).",
      "Collaborated with a team of 4 researchers to assimilate simulation data, bolstering collective strategic planning and decision-making.",
    ],
    key: "naryant-1",
  },
  {
    title: "Research Assistant",
    company: "Karmy Pain Clinic",
    duration: {
      start: "Dec 2022",
      end: "Aug 2023",
    },
    description: [
      "Engineered an AI-driven pain diagnostic system leveraging Python and MATLAB, improving patient diagnosis accuracy and treatment efficacy, reducing diagnosis time.",
      "Increased data processing accuracy by 30% with improved data analysis techniques.",
      "Contributed to a 5 person team's iterative development and optimization of an AI model, achieving significant accuracy gains based on patient feedback and trials.",
    ],
    key: "karmy-1",
  },
];

export const PROJECTS: {
  key: string;
  title: string;
  date: string;
  description: string[];
  link: string;
}[] = [
  {
    key: "mern-bookstore",
    title: "MERN Bookstore",
    date: "Dec 2023",
    description: [
      "Full-Stack Bookstore app created using the M(ongoDB) E(xpress) R(eact) N(ode) tech stack.",
      "Created frontend using Vite and TypeScript. TailwindCSS was used for styling.",
      "Users can create, read, and delete books.",
      "Uses MongoDB database to store the books data.",
    ],
    link: "https://github.com/pixelfox01/mern-bookstore-demo",
  },
  {
    key: "homebase-automation",
    title: "Homebase Automation",
    date: "Aug 2023",
    description: [
      "Python App that scrapes shift data from my Homebase account and adds it to my Google Calendar.",
      "Uses Playwright to run a headless browser and logs into my Homebase account.",
      "Scrapes shift data using BeautifulSoup4 to parse the HTML in Python.",
      "Adds shifts as events to my Google Calendar by utilizing the Google Developer API.",
    ],
    link: "https://github.com/pixelfox01/HomebaseAutomation",
  },
  {
    key: "personal-portfolio",
    title: "Personal Portfolio Website",
    date: "Nov 2023",
    description: [
      "Personal portfolio website to showcase my projects and experience.",
      "Created using NextJS and TypeScript.",
      "Used TailwindCSS for styling and responsiveness.",
    ],
    link: "https://github.com/pixelfox01/imranyafith-portfolio",
  },
];
