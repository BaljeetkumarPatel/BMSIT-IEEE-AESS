// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const MissionBriefingSection = () => {
//   const [open, setOpen] = useState(false);
//   const [activeMessage, setActiveMessage] = useState(null);
//   const navigate = useNavigate();

//   const messages = [
//     {
//       title: "Navigating the Future of Aerospace Research: Key Opportunities",
//       role: "FACULTY ADVISOR — PROF. Asha K",
//       date: "2024-07-24 16:00 GMT",
//       content:
//         "The aerospace research landscape is evolving rapidly. Students are encouraged to explore AI-driven flight control, satellite constellation optimization, and advanced materials for spacecraft."
//     },
//     {
//       title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
//       role: "CHAPTER CHAIR — Hemanth S",
//       date: "2024-07-25 14:30 GMT",
//       content:
//         "This quarter, our focus shifts to expanding our community engagement and technical footprint. We aim to initiate new research collaborations and strengthen industry partnerships."
//     },
//     {
//       title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
//       role: "CHAPTER CO-CHAIR — Saksham Agrawal",
//       date: "2024-07-25 14:30 GMT",
//       content:
//         "We are planning mentorship initiatives and advanced technical workshops to help members grow professionally."
//     },
//     {
//       title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
//       role: "CHAPTER SECRETARY — Baljeet Kumar Patel",
//       date: "2024-07-25 14:30 GMT",
//       content:
//         "Focus will remain on operational excellence, documentation, and smooth coordination across all IEEE AESS activities."
//     },
//     {
//       title: "Operational Update: Project Orion & Recruitment Drive",
//       role: "TECH HEAD — Balram Pai H",
//       date: "2024-07-23 10:15 GMT",
//       content:
//         "Project Orion development is progressing steadily with successful system integration tests."
//     }
//   ];

//   return (
//     <section id="missionbriefing" className="relative bg-[#050b1e] text-white py-24 px-6 overflow-hidden">

//       {/* HEADER */}
//       <div className="relative text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-cyan-300
//           drop-shadow-[0_0_14px_rgba(0,255,255,0.6)]">
//           MISSION BRIEFING
//         </h2>
//         <p className="mt-2 text-sm text-cyan-200/70">
//           Messages from our leadership team
//         </p>
//       </div>

//       {/* TOP 4 CARDS */}
//       <div className="relative max-w-5xl mx-auto space-y-8">
//         {messages.slice(0, 4).map((msg, i) => (
//           <div
//             key={i}
//             onClick={() => {
//               setActiveMessage(msg);
//               setOpen(true);
//             }}
//             className="cursor-pointer p-6 rounded-xl
//               bg-gradient-to-b from-[#0a1230] to-[#050b1e]
//               border border-white/10
//               shadow-[0_0_28px_rgba(0,255,255,0.12)]
//               hover:border-cyan-400/40 transition"
//           >
//             <div className="flex justify-between text-xs text-cyan-300/80 mb-3">
//               <span>{msg.role}</span>
//               <span>{msg.date}</span>
//             </div>

//             <h3 className="text-lg font-semibold mb-2">
//               {msg.title}
//             </h3>

//             <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
//               {msg.content}
//             </p>

//             <button className="mt-4 px-4 py-2 rounded-md
//               border border-cyan-400 text-cyan-400">
//               View Full Briefing
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* MORE BUTTON */}
//       <div className="mt-12 flex justify-center">
//         <button
//           onClick={() => navigate("/missionbriefing")}
//           className="px-6 py-3 rounded-full
//           bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
//         >
//           ➜ More Messages
//         </button>
//       </div>

//       {/* POPUP */}
//       {open && activeMessage && (
//         <MessagePopup message={activeMessage} onClose={() => setOpen(false)} />
//       )}

//     </section>
//   );
// };

// export default MissionBriefingSection;

// /* POPUP COMPONENT */
// const MessagePopup = ({ message, onClose }) => (
//   <div className="fixed inset-0 z-50 flex items-center justify-center
//                   bg-black/70 backdrop-blur-sm px-4">

//     <div className="relative max-w-2xl w-full
//                     bg-gradient-to-b from-[#0a1230] to-[#050b1e]
//                     border border-cyan-400/30 rounded-xl
//                     shadow-[0_0_40px_rgba(0,255,255,0.35)]
//                     p-6">

//       <button
//         onClick={onClose}
//         className="absolute top-3 right-3 text-cyan-400 text-xl"
//       >
//         ✕
//       </button>

//       <p className="text-xs text-cyan-300 mb-2">{message.role}</p>
//       <h3 className="text-xl font-semibold mb-2">{message.title}</h3>
//       <p className="text-xs text-gray-400 mb-4">{message.date}</p>

//       {/* FULL CONTENT */}
//       <p className="text-sm text-gray-300 leading-relaxed">
//         {message.content}
//       </p>
//     </div>
//   </div>
// );

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MissionBriefingSection = () => {
  const [open, setOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState(null);
  const navigate = useNavigate();

  const messages = [
    {
      title: "Navigating the Future of Aerospace Research: Key Opportunities",
      role: "FACULTY ADVISOR — PROF. Asha K",
      date: "2024-07-24 16:00 GMT",
      content:
        "The aerospace research landscape is evolving rapidly. Students are encouraged to explore AI-driven flight control, satellite constellation optimization, and advanced materials for spacecraft.",
    },
    {
      title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
      role: "CHAPTER CHAIR — Hemanth S",
      date: "2024-07-25 14:30 GMT",
      content:
        "This quarter, our focus shifts to expanding our community engagement and technical footprint. We aim to initiate new research collaborations and strengthen industry partnerships.",
    },
    {
      title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
      role: "CHAPTER CO-CHAIR — Saksham Agrawal",
      date: "2024-07-25 14:30 GMT",
      content:
        "We are planning mentorship initiatives and advanced technical workshops to help members grow professionally.",
    },
    {
      title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
      role: "CHAPTER SECRETARY — Baljeet Kumar Patel",
      date: "2024-07-25 14:30 GMT",
      content:
        "Focus will remain on operational excellence, documentation, and smooth coordination across all IEEE AESS activities.",
    },
    {
      title: "Operational Update: Project Orion & Recruitment Drive",
      role: "TECH HEAD — Balram Pai H",
      date: "2024-07-23 10:15 GMT",
      content:
        "Project Orion development is progressing steadily with successful system integration tests.",
    },
  ];

  return (
    <section
      id="missionbriefing"
      className="relative bg-[#050b1e] text-white
      py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
    >

      {/* HEADER */}
      <div className="relative text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300
          drop-shadow-[0_0_14px_rgba(0,255,255,0.6)]">
          MISSION BRIEFING
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-cyan-200/70">
          Messages from our leadership team
        </p>
      </div>

      {/* TOP 4 CARDS */}
      <div className="relative max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {messages.slice(0, 4).map((msg, i) => (
          <div
            key={i}
            onClick={() => {
              setActiveMessage(msg);
              setOpen(true);
            }}
            className="cursor-pointer rounded-xl
            p-4 sm:p-6
            bg-gradient-to-b from-[#0a1230] to-[#050b1e]
            border border-white/10
            shadow-[0_0_28px_rgba(0,255,255,0.12)]
            hover:border-cyan-400/40 transition"
          >
            {/* ROLE + DATE */}
            <div className="flex flex-col sm:flex-row
              sm:justify-between gap-1
              text-[11px] sm:text-xs text-cyan-300/80 mb-3">
              <span>{msg.role}</span>
              <span>{msg.date}</span>
            </div>

            <h3 className="text-base sm:text-lg font-semibold mb-2">
              {msg.title}
            </h3>

            <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
              {msg.content}
            </p>

            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-4 w-full sm:w-auto
              px-4 py-2 rounded-md
              border border-cyan-400 text-cyan-400 text-sm"
            >
              View Full Briefing
            </button>
          </div>
        ))}
      </div>

      {/* MORE BUTTON */}
      <div className="mt-10 sm:mt-12 flex justify-center">
        <button
          onClick={() => navigate("/missionbriefing")}
          className="px-6 py-3 rounded-full
          bg-cyan-500/20 text-cyan-300
          border border-cyan-400/40 text-sm"
        >
          ➜ More Messages
        </button>
      </div>

      {/* POPUP */}
      {open && activeMessage && (
        <MessagePopup message={activeMessage} onClose={() => setOpen(false)} />
      )}
    </section>
  );
};

export default MissionBriefingSection;

/* ================= POPUP ================= */
const MessagePopup = ({ message, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center
    bg-black/70 backdrop-blur-sm px-3 sm:px-4">

    <div className="relative max-w-2xl w-full
      bg-gradient-to-b from-[#0a1230] to-[#050b1e]
      border border-cyan-400/30 rounded-xl
      shadow-[0_0_40px_rgba(0,255,255,0.35)]
      p-4 sm:p-6">

      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-cyan-400 text-xl"
      >
        ✕
      </button>

      <p className="text-[11px] sm:text-xs text-cyan-300 mb-2">
        {message.role}
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mb-2">
        {message.title}
      </h3>

      <p className="text-[11px] sm:text-xs text-gray-400 mb-4">
        {message.date}
      </p>

      <p className="text-sm text-gray-300 leading-relaxed">
        {message.content}
      </p>
    </div>
  </div>
);
