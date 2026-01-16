
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function TeamSection({ data, limit, showMore }) {
//   const navigate = useNavigate();
//   const [year, setYear] = useState("ALL");
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);

//   const years = ["ALL", 2024, 2025, 2026];

//   // FILTER LOGIC
//   const filtered = data.filter((m) => {
//     const matchYear = year === "ALL" || m.year === year;
//     const matchName = m.name.toLowerCase().includes(search.toLowerCase());
//     return matchYear && matchName;
//   });

//   const visible = limit ? filtered.slice(0, limit) : filtered;

//   return (
//     <section className="relative w-full py-28 bg-[#050b1e]">

//       {/* TITLE */}
//       <div className="text-center mb-6">
//         <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest
//           text-cyan-400 drop-shadow-[0_0_35px_rgba(0,234,255,0.9)]">
//           MEET OUR TEAM
//         </h2>
//         <p className="mt-2 text-white/70 text-sm">
//           The people behind our mission
//         </p>
//       </div>

//       {/* SEARCH BUTTON + INPUT (BELOW TITLE) */}
//       <div className="flex flex-col items-center gap-4 mb-12">
//         <button
//           onClick={() => setShowSearch((p) => !p)}
//           className="
//             px-6 py-2 rounded-full
//             bg-[#020617]
//             border border-cyan-400/40
//             text-cyan-400 text-sm tracking-widest
//             hover:bg-cyan-400/10
//           "
//         >
//            SEARCH BY NAME
//         </button>

//         {showSearch && (
//           <input
//             type="text"
//             placeholder="Type member name..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="
//               w-[280px]
//               bg-[#020617]
//               border border-cyan-400/40
//               text-cyan-300 text-sm
//               px-4 py-2 rounded-lg
//               focus:outline-none
//               placeholder:text-white/40
//             "
//           />
//         )}
//       </div>

//       {/* YEAR FILTER (RIGHT SIDE) */}
//       <div className="max-w-7xl mx-auto px-6 flex justify-end mb-10">
//         <select
//           value={year}
//           onChange={(e) =>
//             setYear(e.target.value === "ALL" ? "ALL" : Number(e.target.value))
//           }
//           className="
//             bg-[#020617]
//             border border-cyan-400/40
//             text-cyan-300 text-sm
//             px-4 py-2 rounded-lg
//             focus:outline-none
//           "
//         >
//           {years.map((y) => (
//             <option key={y} value={y}>
//               {y}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* GRID */}
//       <div className="max-w-7xl mx-auto px-6
//         grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {visible.map((member, i) => (
//           <TeamCard key={i} member={member} />
//         ))}
//       </div>

//       {/* MORE BUTTON (HOME ONLY) */}
//       {showMore && (
//         <div className="mt-20 flex justify-center">
//           <button
//             onClick={() => navigate("/team")}
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

// function TeamCard({ member }) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ duration: 0.3 }}
//       className="
//         relative rounded-2xl overflow-hidden
//         bg-[#020b22]
//         border border-cyan-400/30
//         shadow-[0_0_35px_rgba(0,234,255,0.3)]
//       "
//     >
//       {/* YEAR BADGE */}
//       <div className="
//         absolute top-4 right-4 z-10
//         px-3 py-1 rounded-full
//         bg-cyan-400/20 border border-cyan-400/40
//         text-cyan-300 text-xs tracking-widest
//       ">
//         {member.year}
//       </div>

//       {/* PHOTO */}
//       <div className="
//         w-full
//         h-[220px]
//         bg-[#020617]
//         flex items-center justify-center
//         overflow-hidden
//       ">
//         <img
//           src={member.image}
//           alt={member.name}
//           className="
//             h-full
//             max-w-[85%]
//             object-contain
//           "
//         />
//       </div>


//       {/* INFO */}
//       <div className="p-6 text-center bg-[#041425]">
//         <h3 className="text-cyan-300 font-semibold text-lg">
//           {member.name}
//         </h3>
//         <p className="text-white/70 text-sm mt-1">
//           {member.position}
//         </p>

//         {member.description && (
//           <p className="text-white/60 text-sm mt-4">
//             {member.description}
//           </p>
//         )}
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TeamSection({ data, limit, showMore }) {
  const navigate = useNavigate();
  const [year, setYear] = useState("ALL");
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const years = ["ALL", 2024, 2025, 2026];

  // ================= FILTER LOGIC =================
  const filtered = data.filter((m) => {
    const matchYear = year === "ALL" || m.year === year;
    const matchName = m.name.toLowerCase().includes(search.toLowerCase());
    return matchYear && matchName;
  });

  // HOME → limit=8 | TEAM PAGE → show all
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="relative w-full py-28 bg-[#050b1e]">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest
          text-cyan-400 drop-shadow-[0_0_35px_rgba(0,234,255,0.9)]">
          MEET OUR TEAM
        </h2>
        <p className="mt-2 text-white/70 text-sm">
          The people behind our mission
        </p>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <button
          onClick={() => setShowSearch((p) => !p)}
          className="
            px-6 py-2 rounded-full
            bg-[#020617]
            border border-cyan-400/40
            text-cyan-400 text-sm tracking-widest
            hover:bg-cyan-400/10
          "
        >
          SEARCH BY NAME
        </button>

        {showSearch && (
          <input
            type="text"
            placeholder="Type member name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-[280px]
              bg-[#020617]
              border border-cyan-400/40
              text-cyan-300 text-sm
              px-4 py-2 rounded-lg
              focus:outline-none
              placeholder:text-white/40
            "
          />
        )}
      </div>

      {/* ================= YEAR FILTER ================= */}
      <div className="max-w-7xl mx-auto px-6 flex justify-end mb-10">
        <select
          value={year}
          onChange={(e) =>
            setYear(e.target.value === "ALL" ? "ALL" : Number(e.target.value))
          }
          className="
            bg-[#020617]
            border border-cyan-400/40
            text-cyan-300 text-sm
            px-4 py-2 rounded-lg
            focus:outline-none
          "
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* ================= GRID (4 PER ROW) ================= */}
      <div
        className="
          max-w-7xl mx-auto px-6
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-10
        "
      >
        {visible.map((member, i) => (
          <TeamCard key={i} member={member} />
        ))}
      </div>

      {/* ================= MORE BUTTON (HOME ONLY) ================= */}
      {showMore && (
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => navigate("/team")}
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

/* ================= TEAM CARD ================= */

function TeamCard({ member }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        relative rounded-2xl overflow-hidden
        bg-[#020b22]
        border border-cyan-400/30
        shadow-[0_0_35px_rgba(0,234,255,0.3)]
      "
    >
      {/* YEAR BADGE */}
      <div className="
        absolute top-4 right-4 z-10
        px-3 py-1 rounded-full
        bg-cyan-400/20 border border-cyan-400/40
        text-cyan-300 text-xs tracking-widest
      ">
        {member.year}
      </div>

      {/* PHOTO */}
      <div className="
        w-full h-[220px]
        bg-[#020617]
        
        overflow-hidden
      ">
        <img
          src={member.image}
          alt={member.name}
          className="
            h-full
            w-full
            object-cover
            object-top
          "
        />
      </div>

      {/* INFO */}
      <div className="p-6 text-center bg-[#041425]">
        <h3 className="text-cyan-300 font-semibold text-lg">
          {member.name}
        </h3>
        <p className="text-white/70 text-sm mt-1">
          {member.position}
        </p>

        {member.description && (
          <p className="text-white/60 text-sm mt-4">
            {member.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}


