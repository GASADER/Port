// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import html from "./images/html-5 (1).png"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "GASADER";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  `I'm a former hotel receptionist who has been working for 3 years, trained from the
  Junior Software Developer Program Cohort 4 Generation Thailand program, which has skills in
  HTML, CSS, JavaScript, MAEN Stack and Behavioral skills and mindsets of Software Developer,
  Currently studying JAVA, Docker and looking for a job related to helping SMEs.`;

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="vscode-icons:file-type-html" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="vscode-icons:file-type-css" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="vscode-icons:file-type-js-official" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="vscode-icons:file-type-tailwind" className="display-4" />,
    name: "Tailwind",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="vscode-icons:file-type-light-next" className="display-4" />,
    name: "Next",
  },
  {
    id: 7,
    skill: <Icon icon="vscode-icons:file-type-node" className="display-4" />,
    name: "Node.JS",
  },
  {
    id: 8,
    skill: <Icon icon="devicon:express-wordmark" className="display-4" />,
    name: "Express",
  },
  {
    id: 9,
    skill: <Icon icon="vscode-icons:file-type-mongo" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 10,
    skill: <Icon icon="vscode-icons:file-type-git" className="display-4" />,
    name: "Git",
  },
  {
    id: 11,
    skill: <Icon icon="devicon:github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 12,
    skill: <Icon icon="logos:figma" className="display-4" />,
    name: "Figma",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = 'https://www.canva.com/design/DAFcmVeYqms/_tXZHWUP-BaCxIKGMphw0g/view?utm_content=DAFcmVeYqms&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink';

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Colmer_responsiveWeb", "React-Project-Sprint02-I-1", "Promptpay-QR"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "Colmer_responsiveWeb",
    image: html,
  },
  {
    name: "React-Project-Sprint02-I-1",
    image: Logo,
  },
  {
    name: "Promptpay-QR",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xknaagbo";
