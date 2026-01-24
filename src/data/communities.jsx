import gssocLogo from "@/assets/images/communities/gssoc-logo.png";
import nitRourkelaLogo from "@/assets/images/communities/nit-rourkela-logo.png";
import githubLogo from "@/assets/images/communities/github-logo.png";
import msuLogo from "@/assets/images/communities/msu-logo.png";
import waccingeLogo from "@/assets/images/communities/waccinge-logo.png";
import hacktoberfestLogo from "@/assets/images/communities/hacktoberfest-logo.png";
import hackthisfallLogo from "@/assets/images/communities/hackthisfall-logo.png";
import codxcryptLogo from "@/assets/images/communities/codxcrypt-logo.png";
import eddiehubLogo from "@/assets/images/communities/eddiehub-logo.png";
import hackmountainLogo from "@/assets/images/communities/hackthemountain-logo.png";
import hackodishaLogo from "@/assets/images/communities/hackodisha-logo.png";
import githubSwag from "@/assets/images/swags/github-swag.png";
import hacktoberfestSwag from "@/assets/images/swags/hacktoberfest-swag.png";
import communitySwag from "@/assets/images/swags/community-swag.png";

// Dynamically import all swag images
const swagImages = import.meta.glob('@/assets/images/swags/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

// Helper to get images for a specific folder
const getSwagGallery = (folder) => {
  return Object.keys(swagImages)
    .filter(path => path.includes(`/swags/${folder}/`))
    .map(path => swagImages[path]);
};

export const communities = [
  {
    name: "GitHub Field Day 2021",
    role: "Participant",
    description: "Engaged with the GitHub community, learning about best practices, collaboration workflows, and connecting with developers worldwide.",
    image: githubLogo,
    year: "2023",
    tags: ["GitHub", "Collaboration", "Networking"]
  },
  {
    name: "GirlScript Summer of Code (GSSOC)",
    role: "Participant",
    description: "Built the SFC foundation's website from the ground up with over 20 young developers. Organized virtual meetups to teach Git and GitHub, helping many students get started with opensource. Replaced existing WordPress website in just three months. Ranked 169 with 1 project completed.",
    image: gssocLogo,
    year: "Mar 2021 - May 2021",
    tags: ["Open Source", "Mentorship", "Git", "Education"]
  },
  {
    name: "NIT Rourkela",
    role: "Mentor - HackOdisha 2.0",
    description: "Mentored students at HackOdisha 2.0, a major hackathon event organized by National Institute of Technology Rourkela. Focused on guiding participants through project development, technical problem-solving, and innovative solution building.",
    image: nitRourkelaLogo,
    year: "Aug 2022",
    tags: ["Mentorship", "Hackathon", "Education", "Innovation"]
  },
  {
    name: "HackOdisha 2.0",
    role: "Mentor",
    description: "Mentored participants at HackOdisha 2.0, a major hackathon event. Guided students through project development, technical problem-solving, and innovative solution building.",
    image: hackodishaLogo,
    year: "Sep 2022",
    tags: ["Mentorship", "Hackathon", "Community"]
  },
  {
    name: "National Service Scheme, Faculty of Technology & Engineering",
    role: "Mentor - Footprints'22 Hackathon",
    description: "HackPrints 1.0 is a student community based online hackathon. FootPrints is a National Level Technical Festival, which was incepted in 2001 by Sir C N Murthy.",
    image: msuLogo,
    year: "Feb 2022",
    tags: ["Mentorship", "Hackathon", "Education"]
  },
  {
    name: "W-Accinge Hackathon",
    role: "Mentor - W-Accinge Hackathon",
    description: "Mentored 7 teams with 4 participants in each team. Graded projects by uniqueness, conciseness, and clarity. Enabled young coders to understand Git basics and GitHub commands like clone, add, commit, push, etc.",
    image: waccingeLogo,
    year: "Jan 2022",
    tags: ["Mentorship", "Hackathon", "GitHub"]
  },
  {
    name: "Hacktoberfest",
    role: "Mentor & Organizer",
    description: "Mentored 10+ developers in starting their Open Source journey. Assisted developers in advancing careers by creating projects like social media bots and Chrome extensions. This initiative was highlighted by the official GitHub community. Organized and spoke about Contributing to Opensource.",
    image: hacktoberfestLogo,
    year: "Oct 2021",
    tags: ["Open Source", "Git", "Community", "Speaking"]
  },
  {
    name: "Hack This Fall 2.0",
    role: "Community Partner",
    description: "Part of a team of 32 community partners encouraging new hackers to build unique projects. Focused on creating meaningful solutions and learning opportunities while solving shared societal problems in various domains.",
    image: hackthisfallLogo,
    year: "Oct 2021",
    tags: ["Community", "Hackathon", "Innovation"]
  },
  {
    name: "CodXCrypt Community",
    role: "Contributor",
    description: "Open-source platform for coding enthusiasts sharing innovative code and projects. Aimed to provide a platform for coders to share creations and uplift the community with experienced mentors helping from scratch.",
    image: codxcryptLogo,
    year: "Sep 2021",
    tags: ["Open Source", "Community", "Mentorship"]
  },
  {
    name: "EddieHub Community",
    role: "Contributor",
    description: "Open Source community aimed at encouraging communication, best practices and technical expertise in an inclusive environment. Practice and share public speaking skills in a safe and welcoming community.",
    image: eddiehubLogo,
    year: "Sep 2020 - Present",
    tags: ["Open Source", "Speaking", "Mentorship"]
  },
  {
    name: "Hack The Mountains 2.0",
    role: "Hack Ambassador",
    description: "36-hour virtual hackathon by SUDAN'S TECH, a non-profit providing technical education. Focused on making students industry-ready through hands-on hackathon experience and technical knowledge sharing.",
    image: hackmountainLogo,
    year: "Apr 2021 - Jun 2021",
    tags: ["Hackathon", "Community", "Ambassador"]
  },
  {
    name: "Hacktoberfest Moments & Swag",
    role: "Participant Swag",
    description: "Collected exclusive badges, stickers, and merchandise from Hacktoberfest celebrations. Recognition of active participation in the annual open source event and community engagement.",
    image: hacktoberfestSwag,
    year: "Multiple Years",
    tags: ["Swag", "Hacktoberfest", "Recognition"],
    gallery: getSwagGallery('hacktoberfest')
  },
  {
    name: "GitHub Field Day Moments & Swags",
    role: "Community Swag",
    description: "Collected swag from GitHub Field Day events including stickers, t-shirts, and exclusive merchandise. Represents engagement with the global GitHub community.",
    image: githubSwag,
    year: "2023",
    tags: ["Swag", "GitHub", "Community"],
    gallery: getSwagGallery('github')
  },
  {
    name: "Community Moments & Swags",
    role: "Active Community Member",
    description: "Collected badges, stickers, and swag from various tech communities and conferences worldwide. Representing active participation across multiple hackathons, meetups, and developer ecosystems.",
    image: communitySwag,
    year: "Ongoing",
    tags: ["Swag", "Conferences", "Community"],
    gallery: getSwagGallery('community')
  },
];
