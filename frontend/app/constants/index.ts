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
