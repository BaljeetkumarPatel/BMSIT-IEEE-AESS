

// import { useNavigate } from "react-router-dom";

// const AchievementsSection = ({ showAll = false }) => {
//   const navigate = useNavigate();

//   const achievements = [
//     {
//       icon: "🏆",
//       title: "National Aerospace Competition",
//       subtitle: "First Place - 2024",
//       desc:
//         "Team developed innovative autonomous navigation system with AI-based obstacle avoidance.",
//       color: "text-yellow-400"
//     },
//     {
//       icon: "📄",
//       title: "Research Publications",
//       subtitle: "15+ Papers - 2024",
//       desc:
//         "Students published research in top-tier IEEE conferences on radar and avionics topics.",
//       color: "text-green-400"
//     },
//     {
//       icon: "🛰️",
//       title: "Satellite Launch Project",
//       subtitle: "CubeSat Mission - 2024",
//       desc:
//         "Successfully designed and launched educational CubeSat for atmospheric research.",
//       color: "text-emerald-400"
//     },
//     {
//       icon: "🤝",
//       title: "Industry Partnerships",
//       subtitle: "10+ Collaborations",
//       desc:
//         "Established partnerships with leading aerospace companies for internships and projects.",
//       color: "text-purple-400"
//     },
//     {
//       icon: "🚀",
//       title: "Student Innovation Grants",
//       subtitle: "Funded Projects",
//       desc:
//         "Multiple student-led aerospace innovation projects received institutional funding.",
//       color: "text-cyan-400"
//     }
//   ];

//   const visible = showAll ? achievements : achievements.slice(0, 4);

//   return (
//     <section className="relative bg-[#050b1e] text-white py-24 px-6 overflow-hidden">

//       {/* ===== BACKGROUND DECORATIONS ===== */}
//       <div className="absolute inset-0 pointer-events-none">

//         {/* Stars */}
//         {[...Array(25)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute w-[2px] h-[2px] bg-cyan-300/40 rounded-full
//             animate-pulse"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDuration: `${3 + Math.random() * 5}s`
//             }}
//           />
//         ))}

//         {/* Radar Rings */}
//         <div className="absolute -top-32 -left-32 w-[420px] h-[420px]
//           rounded-full border border-cyan-400/20
//           shadow-[0_0_40px_rgba(0,255,255,0.15)]" />

//         <div className="absolute -bottom-40 right-[-100px] w-[360px] h-[360px]
//           rounded-full border border-cyan-400/15
//           shadow-[0_0_40px_rgba(0,255,255,0.12)]" />

//         {/* Planet */}
//         <div className="absolute top-1/3 right-[-120px]
//           w-[260px] h-[260px] rounded-full
//           bg-gradient-to-b from-cyan-500/10 to-transparent
//           shadow-[0_0_60px_rgba(0,255,255,0.18)]" />
//       </div>
//       {/* ===== END BACKGROUND ===== */}


//       {/* HEADER */}
//       <div className="relative text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-cyan-300
//           drop-shadow-[0_0_18px_rgba(0,255,255,0.7)]">
//           ACHIEVEMENTS & HIGHLIGHTS
//         </h2>
//         <p className="mt-2 text-sm text-cyan-200/70">
//           Mission success stories
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {visible.map((item, i) => (
//           <div
//             key={i}
//             className="p-6 rounded-xl
//               bg-gradient-to-b from-[#0a1230] to-[#050b1e]
//               border border-cyan-400/25
//               shadow-[0_0_28px_rgba(0,255,255,0.15)]"
//           >
//             <div className="flex items-start gap-4">
//               <div
//                 className={`w-12 h-12 rounded-full flex items-center justify-center
//                 bg-black/40 text-xl ${item.color}
//                 shadow-[0_0_14px_rgba(0,255,255,0.6)]`}
//               >
//                 {item.icon}
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-cyan-300">
//                   {item.title}
//                 </h3>
//                 <p className={`text-sm ${item.color}`}>
//                   {item.subtitle}
//                 </p>
//               </div>
//             </div>

//             <p className="mt-4 text-sm text-gray-300 leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* MORE BUTTON */}
//       {!showAll && achievements.length > 4 && (
//         <div className="relative mt-14 flex justify-center">
//           <button
//             onClick={() => navigate("/achievements")}
//             className="px-6 py-3 rounded-full
//             bg-cyan-500/20 text-cyan-300
//             border border-cyan-400/40
//             shadow-[0_0_20px_rgba(0,255,255,0.4)]"
//           >
//             ➜ More Highlights
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AchievementsSection;

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AchievementsSection = ({ showAll = false }) => {
  const navigate = useNavigate();

  /* ===== PARALLAX EFFECT ===== */
  useEffect(() => {
    const handleMove = (e) => {
      document.querySelectorAll(".parallax").forEach((el) => {
        const speed = el.getAttribute("data-speed");
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const achievements = [
    {
      icon: "🏆",
      title: "National Aerospace Competition",
      subtitle: "First Place - 2024",
      desc:
        "Team developed innovative autonomous navigation system with AI-based obstacle avoidance.",
      color: "text-yellow-400"
    },
    {
      icon: "📄",
      title: "Research Publications",
      subtitle: "15+ Papers - 2024",
      desc:
        "Students published research in top-tier IEEE conferences on radar and avionics topics.",
      color: "text-green-400"
    },
    {
      icon: "🛰️",
      title: "Satellite Launch Project",
      subtitle: "CubeSat Mission - 2024",
      desc:
        "Successfully designed and launched educational CubeSat for atmospheric research.",
      color: "text-emerald-400"
    },
    {
      icon: "🤝",
      title: "Industry Partnerships",
      subtitle: "10+ Collaborations",
      desc:
        "Established partnerships with leading aerospace companies for internships and projects.",
      color: "text-purple-400"
    },
    {
      icon: "🚀",
      title: "Student Innovation Grants",
      subtitle: "Funded Projects",
      desc:
        "Multiple student-led aerospace innovation projects received institutional funding.",
      color: "text-cyan-400"
    }
  ];

  const visible = showAll ? achievements : achievements.slice(0, 4);

  return (
    <section className="relative bg-[#050b1e] text-white py-24 px-6 overflow-hidden">

      {/* ===== BACKGROUND FX ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* STARS */}
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyan-300/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}

        {/* SHOOTING STARS */}
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="shooting-star"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}

        {/* RADAR RINGS */}
        <div
          className="parallax absolute -top-40 -left-40 w-[420px] h-[420px]
          rounded-full border border-cyan-400/20 radar-spin"
          data-speed="0.02"
        />

        <div
          className="parallax absolute -bottom-40 right-[-120px] w-[360px] h-[360px]
          rounded-full border border-cyan-400/15 radar-spin-slow"
          data-speed="0.04"
        />

        {/* PLANET */}
        <div
          className="parallax absolute top-1/3 right-[-120px]
          w-[260px] h-[260px] rounded-full
          bg-gradient-to-b from-cyan-500/10 to-transparent
          shadow-[0_0_60px_rgba(0,255,255,0.18)]"
          data-speed="0.06"
        />
      </div>
      {/* ===== END BACKGROUND ===== */}


      {/* HEADER */}
      <div className="relative text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300
          drop-shadow-[0_0_18px_rgba(0,255,255,0.7)]">
          ACHIEVEMENTS & HIGHLIGHTS
        </h2>
        <p className="mt-2 text-sm text-cyan-200/70">
          Mission success stories
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {visible.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl
              bg-gradient-to-b from-[#0a1230] to-[#050b1e]
              border border-cyan-400/25
              shadow-[0_0_28px_rgba(0,255,255,0.15)]"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center
                bg-black/40 text-xl ${item.color}
                shadow-[0_0_14px_rgba(0,255,255,0.6)]`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-300">
                  {item.title}
                </h3>
                <p className={`text-sm ${item.color}`}>
                  {item.subtitle}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* MORE BUTTON */}
      {!showAll && achievements.length > 4 && (
        <div className="relative mt-14 flex justify-center">
          <button
            onClick={() => navigate("/achievements")}
            className="px-6 py-3 rounded-full
            bg-cyan-500/20 text-cyan-300
            border border-cyan-400/40
            shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          >
            ➜ More Highlights
          </button>
        </div>
      )}

      {/* ===== INLINE ANIMATIONS ===== */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .radar-spin {
            animation: spin 40s linear infinite;
          }

          .radar-spin-slow {
            animation: spin 70s linear infinite;
          }

          @keyframes shooting {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 0;
            }
            10% { opacity: 1; }
            100% {
              transform: translateX(-400px) translateY(200px);
              opacity: 0;
            }
          }

          .shooting-star {
            position: absolute;
            width: 120px;
            height: 2px;
            background: linear-gradient(
              90deg,
              rgba(0,255,255,0.8),
              transparent
            );
            animation: shooting 4s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AchievementsSection;
