// import { motion } from "framer-motion";

// export default function MonthlyNewsletters() {
//   return (
//     <section className="relative w-full py-28 bg-[#050b1e] overflow-hidden">

//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,234,255,0.18),transparent_65%)]" />

//       {/* TITLE */}
//       <div className="relative z-10 text-center mb-24">
//         <h2 className="text-5xl font-extrabold tracking-[0.25em]
//           text-cyan-400 drop-shadow-[0_0_40px_rgba(0,234,255,0.9)]">
//           MONTHLY NEWSLETTERS
//         </h2>
//         <p className="mt-6 text-white/70 text-sm tracking-wide">
//           Mission reports and technical updates
//         </p>
//       </div>

//       {/* CARDS GRID */}
//       <div className="relative z-10 max-w-7xl mx-auto px-10
//         grid grid-cols-1 md:grid-cols-3 gap-14">
//         {data.map((item, i) => (
//           <NewsletterCard key={i} item={item} />
//         ))}
//       </div>

//     </section>
//   );
// }

// /* ================= CARD ================= */

// function NewsletterCard({ item }) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.25 }}
//       className="
//         relative rounded-[22px]
//         overflow-hidden
//         border border-cyan-400/35
//         shadow-[0_0_55px_rgba(0,234,255,0.35)]
//         bg-[#041425]
//       "
//     >
//       {/* ===== TOP HALF (PDF ICON AREA) ===== */}
//       <div
//         className="
//           h-[180px]
//           flex items-center justify-center
//           bg-gradient-to-b from-[#0c4a6e] to-[#072a46]
//           shadow-[inset_0_0_40px_rgba(0,234,255,0.25)]
//         "
//       >
//         <div
//           className="
//             w-16 h-16 rounded-xl
//             bg-cyan-400/20
//             flex items-center justify-center
//             shadow-[0_0_30px_rgba(0,234,255,0.7)]
//           "
//         >
//           <span className="text-cyan-300 font-bold tracking-widest text-sm">
//             PDF
//           </span>
//         </div>
//       </div>

//       {/* ===== BOTTOM HALF (TEXT + ACTIONS) ===== */}
//       <div
//         className="
//           px-8 py-6
//           bg-[#041425]
//           border-t border-cyan-400/20
//         "
//       >
//         {/* MONTH */}
//         <h3 className="text-cyan-300 text-sm font-semibold mb-2">
//           {item.month}
//         </h3>

//         {/* DESCRIPTION */}
//         <p className="text-white/75 text-sm leading-relaxed mb-4">
//           {item.description}
//         </p>

//         {/* ACTIONS */}
//         <div className="flex items-center gap-3
//           text-cyan-400 text-xs tracking-widest">
//           <a
//             href="/Aess.pdf"
//             download
//             className="hover:underline"
//           >
//             ↓ Download PDF
//           </a>

//           <span className="opacity-50">•</span>

//           <a
//             href="/Aess.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             👁 View PDF
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ================= DATA ================= */

// const data = [
//   {
//     month: "December 2024",
//     description:
//       "Featured: AI in Aerospace Navigation, Symposium Highlights, Research Updates",
//   },
//   {
//     month: "November 2024",
//     description:
//       "Featured: Radar Signal Processing, Workshop Series, Student Achievements",
//   },
//   {
//     month: "October 2024",
//     description:
//       "Featured: Satellite Communication Systems, Industry Talks, Lab Inauguration",
//   },
// ];

import { motion } from "framer-motion";

export default function MonthlyNewsletters() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-[#050b1e] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(0,234,255,0.18),transparent_65%)]"
      />

      {/* TITLE */}
      <div className="relative z-10 text-center mb-16 sm:mb-20 lg:mb-24 px-4">
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-extrabold
            tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.25em]
            text-cyan-400
            drop-shadow-[0_0_40px_rgba(0,234,255,0.9)]
          "
        >
          MONTHLY NEWSLETTERS
        </h2>

        <p className="mt-4 sm:mt-6 text-white/70 text-xs sm:text-sm tracking-wide">
          Mission reports and technical updates
        </p>
      </div>

      {/* CARDS GRID */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto
          px-4 sm:px-8 lg:px-10
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 sm:gap-10 lg:gap-14
        "
      >
        {data.map((item, i) => (
          <NewsletterCard key={i} item={item} />
        ))}
      </div>

    </section>
  );
}

/* ================= CARD ================= */

function NewsletterCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        relative rounded-[18px] sm:rounded-[22px]
        overflow-hidden
        border border-cyan-400/35
        shadow-[0_0_55px_rgba(0,234,255,0.35)]
        bg-[#041425]
      "
    >
      {/* ===== TOP HALF ===== */}
      <div
        className="
          h-[140px] sm:h-[160px] lg:h-[180px]
          flex items-center justify-center
          bg-gradient-to-b from-[#0c4a6e] to-[#072a46]
          shadow-[inset_0_0_40px_rgba(0,234,255,0.25)]
        "
      >
        <div
          className="
            w-14 h-14 sm:w-16 sm:h-16
            rounded-xl
            bg-cyan-400/20
            flex items-center justify-center
            shadow-[0_0_30px_rgba(0,234,255,0.7)]
          "
        >
          <span className="text-cyan-300 font-bold tracking-widest text-xs sm:text-sm">
            PDF
          </span>
        </div>
      </div>

      {/* ===== BOTTOM HALF ===== */}
      <div
        className="
          px-5 sm:px-6 lg:px-8
          py-5 sm:py-6
          bg-[#041425]
          border-t border-cyan-400/20
        "
      >
        <h3 className="text-cyan-300 text-xs sm:text-sm font-semibold mb-2">
          {item.month}
        </h3>

        <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        <div
          className="
            flex flex-wrap items-center gap-3
            text-cyan-400 text-[10px] sm:text-xs
            tracking-widest
          "
        >
          <a
            href="/Aess.pdf"
            download
            className="hover:underline"
          >
            ↓ Download PDF
          </a>

          <span className="opacity-50">•</span>

          <a
            href="/Aess.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            👁 View PDF
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= DATA ================= */

const data = [
  {
    month: "December 2024",
    description:
      "Featured: AI in Aerospace Navigation, Symposium Highlights, Research Updates",
  },
  {
    month: "November 2024",
    description:
      "Featured: Radar Signal Processing, Workshop Series, Student Achievements",
  },
  {
    month: "October 2024",
    description:
      "Featured: Satellite Communication Systems, Industry Talks, Lab Inauguration",
  },
];
