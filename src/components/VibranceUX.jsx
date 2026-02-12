import { motion } from "framer-motion";
import { ExternalLink, Youtube, MessageCircle, Users, Smartphone, Calendar, Star, Download, Eye } from "lucide-react";

const VibranceUX = ({ isDark = false }) => {
    // Theme-aware colors
    const textPrimary = isDark ? "text-white" : "text-black";
    const textSecondary = isDark ? "text-neutral-400" : "text-gray-600";
    const textAccent = isDark ? "text-purple-400" : "text-purple-600";

    // Theme-aware backgrounds and borders - always dark cards
    const cardBg = "bg-neutral-900";
    const cardBorder = "border-neutral-800";
    const cardText = "text-white"; // Text inside cards is always white

    const features = [
        "Galaxy S8 Theme Store & UI",
        "Dream Launcher & Widgets",
        "Always On Display (AOD)",
        "Edge Panel & App Lock",
        "Pre-rooted (Magisk/SuperSU)",
        "Aroma Installer",
        "VoLTE Support",
        "Multi-window Mode",
        "Call Recording",
        "Dream Weather & Gallery",
        "Game Launcher & Tools",
        "Fully Deodexed & Debloated"
    ];

    const supportedDevices = [
        { name: "Galaxy On5 (G550T/G550T1/G550FY)", type: "official" },
        { name: "Galaxy On5 v1.5 & v2 (Community)", type: "port" },
        { name: "Galaxy J2 (SM-J200G/J200GU/J200F)", type: "port" },
        { name: "Galaxy J2 Pro/J2 6", type: "port" },
        { name: "Galaxy J3 6", type: "port" },
        { name: "Galaxy J7", type: "port" }
    ];

    const communityVideos = [
        {
            title: "Custom Rom for Galaxy On5 | VIBRANCE UX | FULLY STABLE | BEST ROM",
            channel: "Ankush Singh Gandhi (Original)",
            views: "5.2k",
            url: "https://youtu.be/Gr6TJSPBWP0?si=5ikrNXS5DTM1TigU",
            type: "original"
        },
        {
            title: "Vibrance UX for Galaxy On5 Installation | Advance Aroma",
            channel: "Ankush Singh Gandhi",
            views: "17k",
            url: "https://youtu.be/qBmRhRc_iw4?si=YO9ZRbpM4yigEM6Q",
            type: "original"
        },
        {
            title: "Custom Rom for Galaxy On5 |VIBRANCE UX V2.0|7.1.1|VoLte|Stable|",
            channel: "Jagtar Singh Sidhu",
            views: "12k",
            url: "https://youtu.be/V_eIHpUvg2A?si=k1rMs20UD-gGLGhD",
            type: "port",
            note: "Contributor: Custom Kernel"
        },
        {
            title: "Vibrance Ux Rom For Samsung Galaxy J2-6 J210F",
            channel: "TrickyboySid",
            views: "10k",
            url: "https://youtu.be/R0NyFOvPE6U?si=vk7SwzGJalSsMmED",
            type: "port"
        }
    ];

    const resources = [
        {
            name: "XDA Forums Thread",
            description: "Original development thread & community discussion",
            url: "https://xdaforums.com/search/73218650/?q=vibrance+ux&o=relevance",
            icon: MessageCircle
        },
        {
            name: "YouTube Coverage",
            description: "Installation guides & reviews by the community",
            url: "https://www.youtube.com/results?search_query=vibrance+ux+rom+samsung",
            icon: Youtube
        }
    ];

    const stats = [
        { label: "Downloads", value: "20K+", icon: Download },
        { label: "Devices Supported", value: "6+", icon: Smartphone },
        { label: "Community Videos", value: "15+", icon: Youtube },
        { label: "Year Created", value: "2017", icon: Calendar }
    ];

    return (
        <div className="relative z-10 max-w-7xl mx-auto">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center mb-12"
            >
                <h3 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-4`}>
                    Vibrance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">UX</span>
                </h3>

                <p className={`${textSecondary} max-w-2xl mx-auto text-base leading-relaxed`}>
                    A custom Android ROM I built <span className={`${textPrimary} font-black`}>during 12th grade</span> that brought
                    Galaxy S8/S9 features to budget Samsung devices. It gained <span className={`${textAccent} font-bold`}>thousands of users</span> worldwide.
                </p>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`p-5 ${cardBg} border ${cardBorder} text-center hover:border-purple-500/50 transition-colors`}
                    >
                        <stat.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                        <div className={`text-xl font-bold ${cardText} mb-1`}>{stat.value}</div>
                        <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left - Story & Features */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`${cardBg} border ${cardBorder} p-6`}
                >
                    <h4 className={`text-xl font-bold ${cardText} mb-4 flex items-center gap-3`}>
                        <Smartphone className="w-5 h-5 text-purple-400" />
                        The Story
                    </h4>

                    <div className="space-y-3 text-neutral-400 text-sm leading-relaxed mb-6">
                        <p>
                            While in high school, I wanted Galaxy S8/S9 features on my budget <span className={cardText}>Samsung Galaxy On 5</span>.
                            Instead of dreaming, I built <span className="text-purple-400">Vibrance UX</span>.
                        </p>
                        <p>
                            The ROM gained massive traction on <span className={cardText}>XDA Forums</span> and <span className={cardText}>YouTube</span>.
                            Community developers ported it to Galaxy J2, J7, and more. People still message me for download links!
                        </p>
                    </div>

                    <h5 className={`text-sm font-semibold ${cardText} mb-3`}>Key Features</h5>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs text-neutral-400">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    <h5 className={`text-sm font-semibold ${cardText} mb-3`}>Supported Devices</h5>
                    <div className="grid grid-cols-2 gap-2">
                        {supportedDevices.map((device, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs text-neutral-400">
                                <Smartphone className="w-3 h-3 text-purple-400 flex-shrink-0" />
                                <span>
                                    {device.name}
                                    {device.type === "port" && <span className="text-neutral-500"> (community ported)</span>}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right - Videos & Resources */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-4"
                >
                    <h4 className={`text-xl font-bold ${textPrimary} flex items-center gap-3`}>
                        <Users className="w-5 h-5 text-purple-400" />
                        Community Impact
                    </h4>

                    {/* Videos */}
                    <div className="space-y-3">
                        {communityVideos.map((video, index) => (
                            <a
                                key={index}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-4 ${cardBg} border ${cardBorder} hover:border-red-500/50 transition-all group`}
                            >
                                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Youtube className="w-6 h-6 text-red-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className={`${cardText} font-medium group-hover:text-red-400 transition-colors line-clamp-1`}>
                                        {video.title}
                                    </div>
                                    <div className="text-sm text-neutral-400 flex items-center flex-wrap gap-2 mt-1">
                                        <span>{video.channel}</span>
                                        {video.views && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                                                <div className="flex items-center gap-1">
                                                    <Eye className="w-3 h-3" />
                                                    <span>{video.views} views</span>
                                                </div>
                                            </>
                                        )}
                                        {video.note && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                                                <span className="text-[10px] text-purple-400 font-medium italic">{video.note}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-red-400 transition-colors flex-shrink-0" />
                            </a>
                        ))}
                    </div>

                    {/* Resources */}
                    <div className="grid grid-cols-2 gap-3 pt-3">
                        {resources.map((resource, index) => (
                            <a
                                key={index}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex flex-col items-center gap-3 p-5 ${cardBg} border ${cardBorder} hover:border-purple-500/50 transition-all group text-center`}
                            >
                                <resource.icon className="w-6 h-6 text-purple-400" />
                                <div>
                                    <div className={`${cardText} text-sm font-medium group-hover:text-purple-400 transition-colors`}>
                                        {resource.name}
                                    </div>
                                    <div className="text-xs text-neutral-500 mt-1">
                                        {resource.description}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default VibranceUX;
