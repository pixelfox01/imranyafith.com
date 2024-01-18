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
    title: "Research Assistant",
    company: "Naryant (Formerly Inovex)",
    duration: {
      start: "Oct 2023",
      end: "Present",
    },
    description: [
      "Improved Urban Planning using Machine Learning, Traffic Simulation and Data Visualization.",
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
      "Developed an automated pain diagnostic system using AI in Python and MATLAB to improve patient care.",
      "Improved efficiency of data collection by using Data Visualization in Matplotlib.",
    ],
    key: "karmy-1",
  },
  {
    title: "Program Tutor",
    company: "Sheridan College",
    duration: {
      start: "Sep 2022",
      end: "Sep 2023",
    },
    description: [
      "Guided and trained first-year students to excel in Programming Principles, an introductory Python course.",
    ],
    key: "sheridan-1",
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
      "Full-Stack Bookstore app created using the M(ongoDB)E(xpress)R(eact)N(ode) tech stack.",
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
