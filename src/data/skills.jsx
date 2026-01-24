import { FaReact, FaPython, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiLaravel, SiFlutter, SiFlask, SiDjango, SiFastapi, SiKubernetes, SiTerraform, SiJenkins, SiMysql, SiMongodb, SiRedis, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { Terminal } from "lucide-react";

export const skills = {
  "Web Platform": {
    Frontend: [
      { name: "Flutter", icon: <SiFlutter className="text-sky-400 w-6 h-6" /> },
      { name: "HTML 5", icon: <SiHtml5 className="text-orange-400 w-6 h-6" /> },
      { name: "CSS 3", icon: <SiCss3 className="text-sky-400 w-6 h-6" /> },
      { name: "Javascript", icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
      { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
    ],
    Backend: [
      { name: "Python", icon: <FaPython className="text-yellow-400 w-6 h-6" /> },
      { name: "Flask", icon: <SiFlask className="text-green-500 w-6 h-6" /> },
      { name: "Django", icon: <SiDjango className="text-green-600 w-6 h-6" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400 w-6 h-6" /> },
      { name: "Laravel", icon: <SiLaravel className="text-green-500 w-6 h-6" /> },
    ],
  },
  "Cloud & DevOps": {
    "Cloud Tools": [
      { name: "AWS", icon: <FaAws className="text-orange-400 w-6 h-6" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400 w-6 h-6" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 w-6 h-6" /> },
    ],
    "DevOps Tools": [
      { name: "CI/CD", icon: <Terminal className="text-gray-400 w-6 h-6" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-500 w-6 h-6" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-500 w-6 h-6" /> },
    ],
  },
  Database: {
    SQL: [
      { name: "MySQL", icon: <SiMysql className="text-sky-500 w-6 h-6" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500 w-6 h-6" /> },
    ],
    NoSQL: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-6 h-6" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500 w-6 h-6" /> },
    ],
  },
};
