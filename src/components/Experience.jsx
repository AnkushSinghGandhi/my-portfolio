import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, Binary } from "lucide-react";
import desiDiariesLogo from "@/assets/logos/desi-diaries.png";
import CachedImage from "@/components/CachedImage";

export default function Experience() {
  const experiences = [
    {
      id: "LOG_01",
      role: "Software Development Engineer",
      company: "Desi Diaries",
      logo: desiDiariesLogo,
      period: "May 2023 – Present",
      location: "Remote",
      details: [
        "Developed and maintained financial microservices using Flask, Django, REST APIs, Python, and MongoDB for real-time trading analytics, stock market data processing, and portfolio management systems.",
        "Integrated Global Data Feeds APIs, WebSockets, JSON, RESTful services, and third-party APIs to deliver live ATM price, VIX, PCR, options chain, and market depth data, improving data freshness by 40%.",
        "Engineered role-based portfolio and user management modules using Django and MySQL, and database optimization, reducing data inconsistencies by 25%.",
        "Implemented Redis caching, Celery task queues, JWT authentication, OAuth2, Docker, Kubernetes, Nginx, and microservices architecture to boost scalability, speed, and security.",
        "Automated CI/CD pipelines using GitHub Actions, Jenkins, Docker Compose, and AWS (EC2, S3, Lambda, RDS, EKS, ECS), reducing deployment time by 50%.",
        "Designed interactive dashboards and real-time market monitoring tools using Plotly, Matplotlib, Pandas, NumPy, and ETL pipelines, improving trader decision-making.",
      ],
    },
    {
      id: "LOG_02",
      role: "Flutter Developer",
      company: "Desi Diaries",
      logo: desiDiariesLogo,
      period: "Dec 2022 – May 2023",
      location: "Remote",
      details: [
        "Developed and maintained cross-platform mobile applications using Flutter, Dart, Android, iOS, and Firebase with responsive UI/UX and optimized performance.",
        "Built reusable Flutter widgets, custom animations, and implemented state management (Provider, Riverpod, GetX, Bloc).",
        "Integrated REST APIs, GraphQL, Laravel APIs, MySQL, and Firebase Firestore for real-time data sync, notifications, authentication, and chat modules.",
        "Collaborated with backend team on secure APIs (Laravel, PHP, MySQL, JWT), optimizing queries and response times.",
        "Worked on payment gateways (Razorpay, PayPal, Stripe), Google Maps, social media login, and third-party SDKs.",
        "Debugged and optimized apps using Flutter DevTools, Android Studio, Xcode, and Gradle, reducing crashes and improving stability.",
      ],
    },
  ];

  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-24 pt-32 sm:pt-44 bg-black text-white font-sans overflow-hidden min-h-screen">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-mono text-purple-400 tracking-[0.2em] uppercase">system.service_history</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-center md:text-left">
              EXPERIENCE ARCHIVE
            </h1>
            <p className="text-gray-500 font-mono text-xs sm:text-sm leading-relaxed max-w-2xl text-center md:text-left">
              // CHRONOLOGICAL LOG OF TECHNICAL DEPLOYMENTS, PROFESSIONAL SERVICE, AND SYSTEM ARCHITECTURE ROLES.
              UNIFIED RECORDS OF PREVIOUS CORE OPERATIONS.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <div className="space-y-1">
              <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter">sync_status: stable</p>
              <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter">total_logs: {experiences.length}</p>
              <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter italic">// last_verified: JAN_2026</p>
            </div>
          </div>
        </motion.div>

        {/* Experience Modules */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Left Gradient Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]" />

              <div className="p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left Column: ID and Logo */}
                  <div className="lg:w-1/4 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <Binary className="w-4 h-4 text-purple-500 opacity-50" />
                      <span className="text-[10px] font-mono text-gray-500 tracking-[0.3em]">{exp.id}</span>
                    </div>

                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white flex items-center justify-center border border-neutral-800 p-4 relative">
                      <CachedImage
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain grayscale-[0.6] group-hover:grayscale-0 transition-all duration-500"
                      />
                      {/* Logo Frame Accents */}
                      <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="lg:w-3/4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                          {exp.role.toUpperCase()}
                        </h2>
                        <h3 className="text-lg text-gray-400 font-mono tracking-tight sm:tracking-normal">
                          SYSTEM_ACCESS @ <span className="text-white group-hover:underline underline-offset-4 decoration-purple-500/50">{exp.company.toUpperCase()}</span>
                        </h3>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2 text-[10px] font-mono whitespace-nowrap">
                        <div className="flex items-center gap-2 text-gray-400 group-hover:text-purple-400 transition-colors">
                          <Calendar className="w-3 h-3" /> {exp.period.toUpperCase()}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 uppercase tracking-tighter">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 relative">
                      {/* Connection Line */}
                      <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-neutral-800" />

                      {exp.details.map((item, i) => (
                        <div key={i} className="flex gap-4 group/item">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-neutral-800 border border-neutral-700 shrink-0 group-hover/item:bg-purple-500 group-hover/item:border-purple-400 transition-colors relative z-10" />
                          <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Brackets */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neutral-800/50 group-hover:border-purple-500/30 transition-colors" />
              <div className="absolute bottom-0 right-1 w-8 h-8 border-b border-r border-neutral-800/50 group-hover:border-purple-500/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
