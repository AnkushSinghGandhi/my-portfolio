import { motion } from "framer-motion";
import { recommendations } from "@/data/recommendations";
import { ExternalLink, Linkedin, Youtube, FileText } from "lucide-react";

const getTypeIcon = (type) => {
    switch (type) {
        case "linkedin":
            return <Linkedin className="w-4 h-4 text-[#0077b5]" />;
        case "youtube":
            return <Youtube className="w-4 h-4 text-[#ff0000]" />;
        default:
            return <FileText className="w-4 h-4 text-gray-400" />;
    }
};

export default function Recommendations({ isPage }) {
    return (
        <section
            className={`relative px-6 sm:px-12 lg:px-20 py-24 bg-black text-gray-100 overflow-hidden ${isPage ? "pt-32 sm:pt-40" : ""
                }`}
        >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                        RECOMMENDATIONS
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-mono max-w-xl">
            // CURATED RESOURCES I'M LEARNING FROM
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="space-y-12">
                    {recommendations.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                                <h3 className="text-lg font-bold text-white tracking-wide">
                                    {category.category}
                                </h3>
                                <span className="font-mono text-xs text-neutral-600">
                                    [{String(category.items.length).padStart(2, '0')}]
                                </span>
                            </div>

                            {/* Items */}
                            <div className="space-y-3">
                                {category.items.map((item, itemIndex) => (
                                    <motion.a
                                        key={itemIndex}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: catIndex * 0.1 + itemIndex * 0.05 }}
                                        className="group flex items-start gap-4 p-4 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300"
                                    >
                                        {/* Left Accent */}
                                        <div className="w-1 self-stretch bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Icon */}
                                        <div className="p-2 bg-neutral-800/50 border border-neutral-700 group-hover:border-purple-500/30 transition-colors">
                                            {getTypeIcon(item.type)}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h4 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors mb-1">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs font-mono text-purple-400">
                                                        {item.author}
                                                    </p>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-purple-400 flex-shrink-0 transition-colors" />
                                            </div>

                                            {item.description && (
                                                <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-400 transition-colors">
                                                    {item.description}
                                                </p>
                                            )}

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {item.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-2 py-0.5 bg-neutral-800/50 border border-neutral-700 text-[10px] font-mono text-gray-500 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
