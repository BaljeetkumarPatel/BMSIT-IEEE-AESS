// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import PlanetBackground from "./PlanetBackground";

// export default function MissionGallery({ data, limit, showMore }) {
//   const navigate = useNavigate();
//   const visibleItems = limit ? data.slice(0, limit) : data;

//   return (
//     <section id="missiongallery" className="relative w-full py-28 bg-[#050b1e] overflow-hidden">

//       {/* 🌍 PLANET BACKGROUND (SPREAD ALL OVER) */}
//       <PlanetBackground />

//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 z-0
//         bg-[radial-gradient(circle_at_top,rgba(0,234,255,0.15),transparent_60%)]" />

//       {/* TITLE */}
//       <div className="relative z-10 text-center mb-20">
//         <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest
//           text-cyan-400 drop-shadow-[0_0_35px_rgba(0,234,255,0.9)]">
//           MISSION GALLERY
//         </h2>
//         <p className="mt-4 text-white/70 text-sm tracking-wide">
//           Visual documentation of our journey
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6
//         grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//         {visibleItems.map((item, i) => (
//           <GalleryCard key={i} item={item} />
//         ))}
//       </div>

//       {/* MORE BUTTON (HOME ONLY) */}
//       {showMore && (
//         <div className="relative z-10 mt-20 flex justify-center">
//           <button
//             onClick={() => navigate("/mission-gallery")}
//             className="
//               px-10 py-3 rounded-full
//               bg-[#020617]
//               border border-cyan-400/40
//               text-cyan-400 tracking-widest text-sm
//               hover:bg-cyan-400/10
//             "
//           >
//             MORE →
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

// /* ================= CARD ================= */

// function GalleryCard({ item }) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.3 }}
//       className="
//         relative rounded-2xl overflow-hidden
//         bg-[#020b22]
//         border border-cyan-400/30
//         shadow-[0_0_40px_rgba(0,234,255,0.35)]
//       "
//     >
//       {/* IMAGE */}
//       <div className="h-[190px] overflow-hidden">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* TEXT PANEL */}
//       <div className="p-6 bg-[#041425] border-t border-cyan-400/20">
//         <h3 className="text-cyan-300 font-semibold mb-1">
//           {item.title}
//         </h3>
//         <p className="text-white/70 text-sm">
//           {item.subtitle}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PlanetBackground from "./PlanetBackground";

export default function MissionGallery({ data, limit, showMore }) {
  const navigate = useNavigate();
  const visibleItems = limit ? data.slice(0, limit) : data;

  return (
    <section
      id="missiongallery"
      className="relative w-full py-28 bg-[#050b1e] overflow-hidden"
    >
      <PlanetBackground />

      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle_at_top,rgba(0,234,255,0.15),transparent_60%)]"
      />

      <div className="relative z-10 text-center mb-20">
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-widest
          text-cyan-400 drop-shadow-[0_0_35px_rgba(0,234,255,0.9)]"
        >
          MISSION GALLERY
        </h2>
        <p className="mt-4 text-white/70 text-sm tracking-wide">
          Visual documentation of our journey
        </p>
      </div>

      {/* ✅ ONLY CHANGE IS HERE */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {visibleItems.map((item, i) => (
          <GalleryCard key={i} item={item} />
        ))}
      </div>

      {showMore && (
        <div className="relative z-10 mt-20 flex justify-center">
          <button
            onClick={() => navigate("/mission-gallery")}
            className="
              px-10 py-3 rounded-full
              bg-[#020617]
              border border-cyan-400/40
              text-cyan-400 tracking-widest text-sm
              hover:bg-cyan-400/10
            "
          >
            MORE →
          </button>
        </div>
      )}
    </section>
  );
}

function GalleryCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        relative rounded-2xl overflow-hidden
        bg-[#020b22]
        border border-cyan-400/30
        shadow-[0_0_40px_rgba(0,234,255,0.35)]
      "
    >
      <div className="h-[190px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 bg-[#041425] border-t border-cyan-400/20">
        <h3 className="text-cyan-300 font-semibold mb-1">
          {item.title}
        </h3>
        <p className="text-white/70 text-sm">
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  );
}
