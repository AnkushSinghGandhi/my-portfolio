import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Globe,
    Server,
    Cpu,
    GitBranch,
    Smartphone,
    Zap,
} from "lucide-react";

const services = [
    {
        id: "01",
        title: "Backend Development",
        sub: "Python • Django • Flask • FastAPI",
        description:
            "Scalable server-side architectures with clean code principles.",
        icon: Server,
    },
    {
        id: "02",
        title: "Database Architecture",
        sub: "MySQL • MongoDB • Redis",
        description:
            "Optimized database design with focus on performance and scalability.",
        icon: Database,
    },
    {
        id: "03",
        title: "Web Applications",
        sub: "React • Next.js • Full Stack",
        description:
            "End-to-end web solutions with modern UI/UX experiences.",
        icon: Globe,
    },
    {
        id: "04",
        title: "System Integration",
        sub: "APIs • Webhooks • Automation",
        description:
            "Connecting systems into cohesive automated workflows.",
        icon: Cpu,
    },
    {
        id: "05",
        title: "DevOps & CI/CD",
        sub: "Docker • GitHub Actions • AWS",
        description:
            "Automated pipelines for testing, building, and deployment.",
        icon: GitBranch,
    },
    {
        id: "06",
        title: "Application development",
        sub: "Flutter • iOS • Android • Cross-platform",
        description:
            "Developing high-performance, native and cross-platform mobile and desktop applications.",
        icon: Smartphone,
    },
    {
        id: "07",
        title: "Code Review & Audit",
        sub: "Best Practices • Optimization",
        description:
            "Thorough code analysis to improve quality and performance.",
        icon: Code2,
    },
    {
        id: "08",
        title: "Technical Consulting",
        sub: "Architecture • Strategy • Scaling",
        description:
            "Expert guidance on technology decisions and system design.",
        icon: Zap,
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-neutral-100 text-black px-6 sm:px-12 lg:px-20 py-24 relative overflow-hidden snap-start snap-always">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-purple-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-purple-600 tracking-[0.2em] uppercase">system.technical_services</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight text-black">
                        MY SERVICES
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-mono max-w-xl">
            // COMPREHENSIVE TECHNICAL SOLUTIONS
                    </p>
                </motion.div>

                {/* Services - 2 Column Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative flex items-stretch bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Left Gradient Accent Bar */}
                            <div className="w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="flex-1 p-6">
                                {/* Header Row: Icon + ID + Title */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-neutral-800/50 border border-neutral-700 group-hover:border-purple-500/30 group-hover:bg-purple-900/10 transition-all duration-300">
                                        <service.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-mono text-xs text-neutral-600 group-hover:text-purple-500 transition-colors">
                                                {service.id}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-xs font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors mt-1">
                                            {service.sub}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
