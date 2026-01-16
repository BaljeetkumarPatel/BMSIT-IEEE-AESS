

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function NoticesSection() {
//   const navigate = useNavigate();
//   const [activeNotice, setActiveNotice] = useState(null);

//   return (
//     <section className="relative w-full py-28 bg-[#050b1e] overflow-hidden">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,234,255,0.08),transparent_55%)]" />

//       {/* TITLE */}
//       <div className="relative z-10 text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest
//           text-cyan-400 drop-shadow-[0_0_25px_rgba(0,234,255,0.9)]">
//           NOTICES & ANNOUNCEMENTS
//         </h2>
//         <p className="mt-4 text-white/70 text-sm tracking-wide">
//           Stay updated with the latest from mission control
//         </p>
//       </div>

//       {/* SCANNING HUD LINE */}
//       <div className="relative z-10 max-w-4xl mx-auto mt-10 mb-20">
//         <div className="relative h-[3px] overflow-hidden bg-cyan-400/20 rounded-full">
//           <motion.div
//             animate={{ x: ["-40%", "100%"] }}
//             transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//             className="absolute top-0 left-0 h-full w-[40%]
//               bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
//           />
//           <motion.div
//             animate={{ x: ["-40%", "100%"] }}
//             transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
//             className="absolute -top-2 left-0 h-[8px] w-[40%]
//               bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-md"
//           />
//         </div>
//       </div>

//       {/* GRID */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//         {data.map((item, i) => (
//           <NoticeCard
//             key={i}
//             {...item}
//             onRead={() => setActiveNotice(item)}
//           />
//         ))}
//       </div>

//       {/* MORE BUTTON */}
//       <div className="relative z-10 mt-16 flex justify-center">
//         <button
//           onClick={() => navigate("/notices")}
//           className="px-8 py-3 rounded-full
//           bg-[#020617] border border-cyan-400/40
//           text-cyan-400 tracking-widest text-sm
//           hover:bg-cyan-400/10"
//         >
//           MORE →
//         </button>
//       </div>

//       {/* POPUP MODAL */}
//       <AnimatePresence>
//         {activeNotice && (
//           <NoticeModal
//             notice={activeNotice}
//             onClose={() => setActiveNotice(null)}
//           />
//         )}
//       </AnimatePresence>

//     </section>
//   );
// }

// /* ================= CARD ================= */

// function NoticeCard({ tag, tagColor, date, title, description, onRead }) {
//   const tagMap = {
//     red: "bg-red-500/20 text-red-400 border-red-400/40",
//     yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-400/40",
//     blue: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
//     green: "bg-green-500/20 text-green-400 border-green-400/40",
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       className="relative rounded-2xl bg-[#020b22]
//       border border-cyan-400/30
//       shadow-[0_0_30px_rgba(0,234,255,0.25)]
//       p-8 backdrop-blur overflow-hidden"
//     >

//       {/* SCAN LINE 1 */}
//       <motion.div
//         animate={{ x: ["-120%", "120%"] }}
//         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//         className="absolute top-0 left-0 h-[2px] w-[50%]
//         bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
//       />

//       {/* SCAN LINE 2 */}
//       <motion.div
//         animate={{ x: ["-120%", "120%"] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-0 left-0 h-[2px] w-[50%]
//         bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
//       />

//       {/* CONTENT */}
//       <div className="relative flex justify-between mb-4">
//         <span className={`text-[10px] px-3 py-1 rounded-full border ${tagMap[tagColor]}`}>
//           {tag}
//         </span>
//         <span className="text-[11px] text-white/50">{date}</span>
//       </div>

//       <h3 className="text-cyan-400 font-semibold mb-3">{title}</h3>
//       <p className="text-sm text-white/70 mb-6 line-clamp-3">{description}</p>

//       <button
//         onClick={onRead}
//         className="text-cyan-400 text-sm hover:underline"
//       >
//         Read More →
//       </button>
//     </motion.div>
//   );
// }

// /* ================= MODAL ================= */

// function NoticeModal({ notice, onClose }) {
//   return (
//     <motion.div
//       className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         initial={{ scale: 0.9, y: 30 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.9, y: 30 }}
//         className="relative max-w-2xl w-full
//         bg-[#020b22] border border-cyan-400/40
//         rounded-2xl p-8 shadow-[0_0_40px_rgba(0,234,255,0.4)]"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-cyan-400 text-xl"
//         >
//           ✕
//         </button>

//         <h3 className="text-cyan-400 text-xl font-semibold mb-4">
//           {notice.title}
//         </h3>

//         <p className="text-white/80 leading-relaxed">
//           {notice.description}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }

// /* ================= DATA ================= */

// const data = [
//   {
//     tag: "HIGH PRIORITY",
//     tagColor: "red",
//     date: "Dec 15, 2024",
//     title: "Annual Technical Symposium Registration Open",
//     description:
//       "Registration is now open for our flagship Annual Technical Symposium on Aerospace Systems. Join industry experts, researchers, and students for three days of cutting-edge presentations and workshops.",
//   },
//   {
//     tag: "MEDIUM PRIORITY",
//     tagColor: "yellow",
//     date: "Dec 10, 2024",
//     title: "Radar Systems Workshop – December 20",
//     description:
//       "Hands-on workshop on modern radar signal processing techniques. Learn about phased array systems, Doppler processing, and synthetic aperture radar from industry professionals.",
//   },
//   {
//     tag: "INFO",
//     tagColor: "blue",
//     date: "Dec 5, 2024",
//     title: "New Research Lab Inauguration",
//     description:
//       "We are excited to announce the inauguration of our new Avionics Research Lab equipped with state-of-the-art flight simulation systems and hardware-in-the-loop testing facilities.",
//   },
//   {
//     tag: "SUCCESS",
//     tagColor: "green",
//     date: "Dec 1, 2024",
//     title: "Student Team Wins National Aerospace Competition",
//     description:
//       "Congratulations to our student team for securing first place in the National Aerospace Design Competition with their innovative autonomous navigation system prototype.",
//   },
//   {
//     tag: "SUCCESS",
//     tagColor: "green",
//     date: "Dec 1, 2024",
//     title: "Student Team Wins National Aerospace Competition",
//     description:
//       "Congratulations to our student team for securing first place in the National Aerospace Design Competition with their innovative autonomous navigation system prototype.",
//   },
//   {
//     tag: "SUCCESS",
//     tagColor: "green",
//     date: "Dec 1, 2024",
//     title: "Student Team Wins National Aerospace Competition",
//     description:
//       "Congratulations to our student team for securing first place in the National Aerospace Design Competition with their innovative autonomous navigation system prototype.",
//   },
//   {
//     tag: "SUCCESS",
//     tagColor: "green",
//     date: "Dec 1, 2024",
//     title: "Student Team Wins National Aerospace Competition",
//     description:
//       "Congratulations to our student team for securing first place in the National Aerospace Design Competition with their innovative autonomous navigation system prototype.",
//   },
  
// ];


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Notices({ data, limit }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const visibleNotices = limit ? data.slice(0, limit) : data;

  return (
    <section className="relative w-full py-28 bg-[#050b1e] overflow-hidden">

      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest
        text-cyan-400 drop-shadow-[0_0_25px_rgba(0,234,255,0.9)]">
          NOTICES & ANNOUNCEMENTS
        </h2>
        <p className="mt-4 text-white/70 text-sm">
          Stay updated with the latest from mission control
        </p>
      </div>

      {/* HUD LINE */}
      <div className="max-w-4xl mx-auto mt-10 mb-20">
        <div className="relative h-[3px] overflow-hidden bg-cyan-400/20 rounded-full">
          <motion.div
            animate={{ x: ["-50%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-full w-[40%]
            bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {visibleNotices.map((n) => (
          <NoticeCard key={n.id} notice={n} onRead={() => setActive(n)} />
        ))}
      </div>

      {/* MORE BUTTON (HOME ONLY) */}
      {limit && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate("/notices")}
            className="px-8 py-3 rounded-full
            bg-[#020617] border border-cyan-400/40
            text-cyan-400 tracking-widest text-sm"
          >
            MORE →
          </button>
        </div>
      )}

      {/* POPUP */}
      <AnimatePresence>
        {active && (
          <Modal notice={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>

    </section>
  );
}

/* ===== CARD ===== */
function NoticeCard({ notice, onRead }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative rounded-2xl bg-[#020b22]
      border border-cyan-400/30
      shadow-[0_0_30px_rgba(0,234,255,0.25)]
      p-8 overflow-hidden"
    >
      {/* SCAN LINE TOP */}
      <motion.div
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 h-[2px] w-[50%]
        bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />

      {/* SCAN LINE BOTTOM */}
      <motion.div
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 h-[2px] w-[50%]
        bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
      />

      <div className="flex justify-between mb-4">
        <span className="text-[10px] px-3 py-1 border rounded-full text-cyan-300">
          {notice.tag}
        </span>
        <span className="text-[11px] text-white/50">{notice.date}</span>
      </div>

      <h3 className="text-cyan-400 font-semibold mb-3">
        {notice.title}
      </h3>

      <p className="text-sm text-white/70 mb-6 line-clamp-3">
        {notice.shortDescription}
      </p>

      <button
        onClick={onRead}
        className="text-cyan-400 text-sm hover:underline"
      >
        Read More →
      </button>
    </motion.div>
  );
}

/* ===== MODAL ===== */
function Modal({ notice, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-w-3xl w-full
        bg-[#020b22] border border-cyan-400/40
        rounded-2xl p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 text-xl"
        >
          ✕
        </button>

        <h3 className="text-cyan-400 text-2xl mb-6">
          {notice.title}
        </h3>

        <p className="text-white/80 whitespace-pre-line leading-relaxed">
          {notice.fullContent}
        </p>
      </motion.div>
    </motion.div>
  );
}
