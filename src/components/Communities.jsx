import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { communities } from "@/data/communities";
import CachedImage from "@/components/CachedImage";
import SponsorButtons from "@/components/SponsorButtons";
import { Network, Globe, Shield, Zap, ChevronRight, Activity, Package, Binary, X } from "lucide-react";

export default function Communities({ isPage }) {
  // Separate swag from other community logs
  const networkSyncs = communities.filter(c => !c.name.toLowerCase().includes("swag"));
  const assetArchive = communities.filter(c => c.name.toLowerCase().includes("swag"));
  const [selectedSwag, setSelectedSwag] = useState(null);

  return (
    <section
      className={`relative px-6 sm:px-12 lg:px-20 py-24 bg-black text-gray-100 overflow-hidden ${isPage ? "pt-32 sm:pt-44" : ""
        }`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono text-blue-400 tracking-[0.2em] uppercase">system.community_sync</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              SYNC_NETWORK
            </h1>
            <p className="text-gray-500 font-mono text-xs sm:text-sm leading-relaxed max-w-2xl">
              // ARCHIVED LOGS OF ACTIVE MEMBERSHIPS, OPEN SOURCE CONTRIBUTIONS, AND ECOSYSTEM INTEGRATIONS.
              SYNCHRONIZING WITH GLOBAL DEVELOPER NODES.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <div className="space-y-1">
              <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter">protocol: grid_social</p>
              <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter">sync_level: authorized</p>
              <p className="text-gray-600 text-[10px] font-mono uppercase tracking-tighter italic">// encrypted_tunnel: enabled</p>
            </div>
          </div>
        </motion.div>

        {/* Sponsor/Support Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-24 p-6 bg-neutral-900/20 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20">
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest">Support Core Development</p>
              <p className="text-[10px] font-mono text-gray-500">// FUELING SYSTEM INNOVATION & OPEN SOURCE FLOWS</p>
            </div>
          </div>
          <SponsorButtons />
        </motion.div>

        {/* SECTION 01: PHYSICAL_ASSET_RECON */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] font-mono text-pink-500">01</span>
            <h2 className="text-xl font-bold tracking-[0.2em] text-white uppercase">Physical_Asset_Recon</h2>
            <div className="h-[1px] flex-1 bg-neutral-800" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {assetArchive.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-pink-500/30 overflow-hidden transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedSwag(asset)}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <CachedImage
                    src={asset.image}
                    alt={asset.name}
                    className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-2 py-1 border border-pink-500/20 text-[10px] font-mono text-pink-400">
                    S_TYPE: PHYSICAL_ASSET
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{asset.name}</h3>
                    <Package className="w-5 h-5 text-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs font-mono text-gray-500 mb-6 group-hover:text-gray-400 transition-colors italic leading-relaxed">
                     // {asset.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {asset.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-neutral-600 group-hover:text-pink-400 transition-colors uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-neutral-800 group-hover:border-pink-500/30 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 02: NETWORK_SYNCHRONIZATION */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] font-mono text-blue-500">02</span>
            <h2 className="text-xl font-bold tracking-[0.2em] text-white uppercase">Network_Synchronization</h2>
            <div className="h-[1px] flex-1 bg-neutral-800" />
          </div>

          <div className="space-y-6">
            {networkSyncs.map((community, index) => (
              <SyncLogCard key={index} community={community} index={index} />
            ))}
          </div>
        </div>

        {/* Terminal Footer Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-neutral-900 flex flex-col items-center gap-4 text-center"
        >
          <Activity className="w-5 h-5 text-gray-800 animate-pulse" />
          <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em]">
            awaiting_further_synchronization_nodes...
          </p>
        </motion.div>
      </div>

      <SwagGalleryModal
        isOpen={!!selectedSwag}
        onClose={() => setSelectedSwag(null)}
        swag={selectedSwag}
      />
    </section>
  );
}

function SwagGalleryModal({ isOpen, onClose, swag }) {
  if (!swag) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-800 flex items-center justify-between sticky top-0 bg-neutral-900/95 z-10 backdrop-blur">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
                  {swag.name}
                  <span className="text-[10px] bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded border border-pink-500/20 font-mono">
                    GALLERY_VIEW
                  </span>
                </h3>
                <p className="text-gray-500 text-xs font-mono mt-1">// {swag.gallery?.length || 0} ASSETS ARCHIVED</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-800 rounded-lg transition-colors group"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                {swag.gallery?.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative rounded-lg overflow-hidden border border-neutral-800 group ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                      } ${idx === 3 ? "md:col-span-2" : ""}`}
                  >
                    <CachedImage
                      src={img}
                      alt={`${swag.name} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SyncLogCard({ community, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col md:flex-row bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all duration-500 overflow-hidden"
    >
      <div className="hidden md:block w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />

      <div className="relative w-full md:w-56 aspect-video md:aspect-square flex-shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800">
        <CachedImage
          src={community.image}
          alt={community.name}
          className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur text-white px-2 py-0.5 text-[9px] font-mono border border-white/5 uppercase tracking-tighter">
          ID: ENT_{String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-7 relative">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
          <div>
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors uppercase tracking-tight">
              {community.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                {community.role}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-mono text-gray-600 uppercase mb-0.5 tracking-tighter">SYNC_PERIOD</p>
            <p className="text-sm font-bold text-gray-400 group-hover:text-purple-400 transition-colors uppercase">{community.year}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-2xl group-hover:text-gray-400 transition-colors italic">
           // {community.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-800/50">
          {community.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-blue-500/5 border border-blue-500/10 text-[8px] font-mono text-blue-400/70 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all uppercase tracking-tighter"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
