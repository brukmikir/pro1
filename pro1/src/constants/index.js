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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  laravel,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "introduction",
    title: "About",
  },
  {
    id: "projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Laravel Backend Developer",
    company_name: "Unified Mentorship",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Designed and developed backend systems using Laravel, focusing on clean architecture and scalability",
      "Worked with SQL Server for database design, optimization, and complex queries",
      "Implemented RESTful APIs and integrated frontend components using React",
      "Used tools like Mailtrap for email testing and Sanctum for API authentication",
    ],
  },
  
  {
    title: "Full stack Developer",
    company_name: "BDU-Makerspace",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js,Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
 {
  testimonial:
    "Biruk quickly understood our requirements and delivered a clean, modern website that exceeded our expectations. Communication was smooth and professional throughout.",
  name: "Sara Getachew",
  designation: "Client",
  company: "Addis Digital",
  image: "https://randomuser.me/api/portraits/women/65.jpg",
},
{
  testimonial:
    "Working with Biruk was a great experience. He built a reliable and scalable solution, and his attention to backend logic really stood out.",
  name: "Daniel Mekonnen",
  designation: "Client",
  company: "Blue Nile Solutions",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
},
{
  testimonial:
    "Biruk is a talented and disciplined developer with strong problem-solving skills. His ability to combine frontend design with solid backend architecture makes him a valuable asset to any team.",
  name: "Abel Tesfaye",
  designation: "CEO",
  company: "EthioTech Innovations",
  image: "https://randomuser.me/api/portraits/men/75.jpg",
}

];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/brukmikir/findjopp.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/brukmikir/pharmacy_management_system.git",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/brukmikir/pipiper.git",
  },
];

export { services, technologies, experiences, testimonials, projects };