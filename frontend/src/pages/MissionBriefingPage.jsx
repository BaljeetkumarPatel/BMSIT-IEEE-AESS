import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PlanetBackground from "../components/PlanetBackground";
import Footer from "../components/Footer";
/* SAME DATA AS HOME (or more if you want) */
const messages = [
  {
    title: "Navigating the Future of Aerospace Research: Key Opportunities",
    role: "FACULTY ADVISOR — PROF. Asha K",
    date: "2024-07-24 16:00 GMT",
    content:
      "The aerospace research landscape is evolving rapidly. Students are encouraged to explore AI-driven flight control, satellite constellation optimization, and advanced materials for spacecraft."
  },
  {
    title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
    role: "CHAPTER CHAIR — Hemanth S",
    date: "2024-07-25 14:30 GMT",
    content:
      "This quarter, our focus shifts to expanding our community engagement and technical footprint. We aim to initiate new research collaborations and strengthen industry partnerships."
  },
  {
    title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
    role: "CHAPTER CO-CHAIR — Saksham Agrawal",
    date: "2024-07-25 14:30 GMT",
    content:
      "We are planning mentorship initiatives and advanced technical workshops to help members grow professionally."
  },
  {
    title: "Strategic Imperatives for Q3 2024: Expanding Our Reach",
    role: "CHAPTER SECRETARY — Baljeet Kumar Patel",
    date: "2024-07-25 14:30 GMT",
    content:
      "Focus will remain on operational excellence, documentation, and smooth coordination across all IEEE AESS activities."
  },
  {
    title: "Operational Update: Project Orion & Recruitment Drive",
    role: "TECH HEAD — Balram Pai H",
    date: "2024-07-23 10:15 GMT",
    content:
      "Project Orion development is progressing steadily with successful system integration tests. Recruitment for new team members is underway, focusing on avionics, data analysis, and mission planning."
  }
];

const MissionBriefingPage = () => {
  const [open, setOpen] = useState(false);
  const [activeMessage, setActiveMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    
    <section className="bg-[#050b1e] text-white py-24 px-6 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="
          fixed top-20 left-6 z-50
          flex items-center gap-2
          px-4 py-2 rounded-full
          bg-[#020617]
          border border-cyan-400/40
          text-cyan-400 text-sm tracking-widest
          hover:bg-cyan-400/10
        "
      >
        <ArrowLeft size={16} />
        BACK
      </button>
      <div className="max-w-5xl mx-auto space-y-8">
        {messages.map((msg, i) => (
          <div
            key={i}
            onClick={() => {
              setActiveMessage(msg);
              setOpen(true);
            }}
            className="cursor-pointer p-6 rounded-xl
              bg-gradient-to-b from-[#0a1230] to-[#050b1e]
              border border-white/10
              shadow-[0_0_28px_rgba(0,255,255,0.12)]
              hover:border-cyan-400/40 transition"
          >
            <div className="flex justify-between text-xs text-cyan-300/80 mb-3">
              <span>{msg.role}</span>
              <span>{msg.date}</span>
            </div>

            <h3 className="text-lg font-semibold mb-2">{msg.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-3">
              {msg.content}
            </p>
          </div>
        ))}
      </div>

      {open && activeMessage && (
        <MessagePopup message={activeMessage} onClose={() => setOpen(false)} />
      )}
    </section>
    <Footer />
    </>
  );
};

export default MissionBriefingPage;

/* POPUP (same styling as home) */
const MessagePopup = ({ message, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center
                  bg-black/70 backdrop-blur-sm px-4">

    <div className="relative max-w-2xl w-full
                    bg-gradient-to-b from-[#0a1230] to-[#050b1e]
                    border border-cyan-400/30 rounded-xl
                    shadow-[0_0_40px_rgba(0,255,255,0.35)]
                    p-6">

      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-cyan-400 text-xl"
      >
        ✕
      </button>

      <p className="text-xs text-cyan-300 mb-2">{message.role}</p>
      <h3 className="text-xl font-semibold mb-2">{message.title}</h3>
      <p className="text-xs text-gray-400 mb-4">{message.date}</p>

      <p className="text-sm text-gray-300 leading-relaxed">
        {message.content}
      </p>
    </div>
  </div>
);
