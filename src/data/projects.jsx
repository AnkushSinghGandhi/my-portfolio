import budiThumb from "@/assets/images/projects/budi.png";
import sdsThumb from "@/assets/images/projects/sds.png";
import unikariThumb from "@/assets/images/projects/unikari.png";
import optionaroThumb from "@/assets/images/projects/optionaro.png";
import desiDiariesThumb from "@/assets/images/projects/desidiaries.png";
import ngfThumb from "@/assets/images/projects/ngficecream.png";
import sevabhavThumb from "@/assets/images/projects/sevabhav.png";
import gramtoThumb from "@/assets/images/projects/gramto.png";
import rangReetThumb from "@/assets/images/projects/rangreet.png";
import processSchedulerThumb from "@/assets/images/projects/processscheduler.png";
import venomThumb from "@/assets/images/projects/venom.png";
import sharexThumb from "@/assets/images/projects/sharex.png";
import pokemonThumb from "@/assets/images/projects/pixelmon.png";

import vpnThumb from "@/assets/images/projects/vpn-project.svg";
import kernelThumb from "@/assets/images/projects/mini-kernel.svg";
import gitThumb from "@/assets/images/projects/git-clone.svg";
import redisThumb from "@/assets/images/projects/redis-clone.svg";
import snapThumb from "@/assets/images/projects/snap-package.svg";
import langThumb from "@/assets/images/projects/custom-lang.svg";
import serverThumb from "@/assets/images/projects/http-server.svg";
import { SiPostgresql } from "react-icons/si";

export const clientProjects = [
  {
    title: "Budi Travel - App",
    tech: ["Flutter", "Django", "MySQL", "DigitalOcean"],
    desc: "Travel booking platform where users can connect with agents and plan trips. Built from scratch with Flutter frontend and Laravel backend, deployed on DigitalOcean.",
    url: "https://apps.apple.com/in/app/budi-travel/id6464050697",
    thumbnail: budiThumb,
  },
  {
    title: "Option ARO - WebApp",
    tech: ["Flask", "Microservices", "AWS", "MongoDB", "Redis", "WebSockets"],
    desc: "Options analysis and trading insights platform with live global data feeds. Architected backend microservices, real-time streaming via WebSockets, and AWS deployment.",
    url: "https://optionaro.com",
    thumbnail: optionaroThumb,
  },
  {
    title: "Desi Diaries - App",
    tech: ["Flutter", "Laravel", "MySQL", "AWS"],
    desc: "Event booking and social networking platform enabling users to discover, host, and join events. Built entirely with Flutter and Django backend.",
    url: "https://apps.apple.com/in/app/desi-dairies/id1642359792",
    thumbnail: desiDiariesThumb,
  },
  {
    title: "NGF IceCreams - Landing Page",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Local ice cream brand website showcasing products and store details. Fully hand-coded static site.",
    url: "https://ngficecream.in",
    thumbnail: ngfThumb,
  },
  {
    title: "Sevabhav - Pharmacy Management",
    tech: ["Flask", "AWS", "MySQL"],
    desc: "Pharmacy management system built with Flask and MySQL, featuring medicine inventory, prescription tracking, and sales management.",
    url: "https://share.google/FFkYfFfmtL6JS0KuH",
    thumbnail: sevabhavThumb,
  },
  {
    title: "SDS Jewellers - Ecommerce",
    tech: ["React", "Django", "MySQL", "DigitalOcean"],
    desc: "A full-featured online jewelry store with secure authentication, product management, and integrated payment gateway. End-to-end build including backend APIs.",
    url: "https://sdsjewellers.in",
    thumbnail: sdsThumb,
  },
];

export const labProjects = [
  {
    title: "DeltaStream - Option Analysis",
    tech: ["Python", "Flask", "Render", "Supabase", "Postgresql"],
    desc: "Flask web app for sharing videos, chatting, live streaming, booking events, and connecting with users in real-time.",
    url: "https://pixelmonbattle.xyz/",
    thumbnail: pokemonThumb,
  },
  {
    title: "ShareX Events",
    tech: ["Python", "Flask", "Mongodb"],
    desc: "Flask web app for sharing videos, chatting, live streaming, booking events, and connecting with users in real-time.",
    url: "https://github.com/AnkushSinghGandhi/sharex_flask",
    thumbnail: sharexThumb,
  },
  {
    title: "Pokemon Pixel Battle",
    tech: ["Python", "Flask", "Render", "Supabase", "Postgresql"],
    desc: "Flask web app for sharing videos, chatting, live streaming, booking events, and connecting with users in real-time.",
    url: "https://pixelmonbattle.xyz/",
    thumbnail: pokemonThumb,
  },
  {
    title: "Email Outreach Automation",
    tech: ["Python", "Flask", "Render", "Supabase", "Postgresql"],
    desc: "Flask web app for sharing videos, chatting, live streaming, booking events, and connecting with users in real-time.",
    url: "https://pixelmonbattle.xyz/",
    thumbnail: pokemonThumb,
  },
];

export const lowLevelProjects = [
  {
    title: "Realtime Process Scheduler",
    tech: ["Python", "Tkinter", "Matplotlib"],
    desc: "Python app for process management and scheduling, using algorithms like FCFS, SJF, EDF, RMS for process visualization.",
    url: "https://github.com/AnkushSinghGandhi/realtime_process_scheduler",
    thumbnail: processSchedulerThumb,
  },
  {
    title: "Custom VPN Implementation",
    tech: ["C", "Networking", "Encryption", "Sockets"],
    desc: "A custom VPN implementation from scratch using low-level socket programming, featuring TLS/SSL encryption, tunnel creation, and packet forwarding.",
    url: "https://github.com/AnkushSinghGandhi/custom-vpn",
    thumbnail: vpnThumb,
  },
  {
    title: "Mini Kernel",
    tech: ["C", "Assembly", "x86", "OS Development"],
    desc: "A simple operating system kernel built from scratch, implementing basic memory management, process scheduling, and system calls on x86 architecture.",
    url: "https://github.com/AnkushSinghGandhi/mini-kernel",
    thumbnail: kernelThumb,
  },
  {
    title: "Git Clone - Version Control",
    tech: ["C", "Data Structures", "File Systems"],
    desc: "A lightweight version control system mimicking Git's core functionality, including commits, branching, merging, and diff algorithms.",
    url: "https://github.com/AnkushSinghGandhi/git-clone",
    thumbnail: gitThumb,
  },
  {
    title: "Redis Clone - In-Memory DB",
    tech: ["C", "Data Structures", "Networking", "Concurrency"],
    desc: "A Redis-like in-memory key-value database with support for common data structures, persistence, and basic replication.",
    url: "https://github.com/AnkushSinghGandhi/redis-clone",
    thumbnail: redisThumb,
  },
  {
    title: "Snap Package Manager",
    tech: ["C", "System Programming", "Package Management"],
    desc: "A package manager implementation inspired by Snap, handling package installation, dependencies, sandboxing, and version management.",
    url: "https://github.com/AnkushSinghGandhi/snap-package-manager",
    thumbnail: snapThumb,
  },
  {
    title: "Custom Programming Language",
    tech: ["C", "Lexer", "Parser", "Compiler Design"],
    desc: "A compiled programming language built from scratch with custom lexer, parser, and bytecode interpreter, featuring basic types, functions, and control flow.",
    url: "https://github.com/AnkushSinghGandhi/custom-lang",
    thumbnail: langThumb,
  },
  {
    title: "Multi-threaded HTTP Server",
    tech: ["C", "POSIX Threads", "Networking", "HTTP Protocol"],
    desc: "A high-performance multi-threaded HTTP/1.1 server from scratch using POSIX threads, featuring request parsing, static file serving, and connection pooling.",
    url: "https://github.com/AnkushSinghGandhi/multithreaded-server",
    thumbnail: serverThumb,
  },
];
