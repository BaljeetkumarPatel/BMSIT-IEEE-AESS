import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= DATE PARSER ================= */
const parseDate = (dateStr) => {
  const clean = dateStr.split("–")[0];
  return new Date(clean);
};

const EventsWorkshops = ({ variant = "home" }) => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const events = [
    {
      side: "left",
      icon: "🚀",
      title: "Annual Technical Symposium",
      desc: "Three-day event featuring keynote speakers and technical sessions.",
      date: "Feb 1, 2026",
      location: "Main Auditorium",
      status: "upcoming",
      full: "Flagship IEEE AESS symposium with talks, posters, and networking.",
    },
    {
      side: "right",
      icon: "📡",
      title: "Radar Systems Workshop",
      desc: "Hands-on radar signal processing workshop.",
      date: "Jan 31, 2026",
      location: "Lab 301",
      status: "completed",
      full: "Hands-on FMCW radar and detection algorithms workshop.",
    },
    {
      side: "left",
      icon: "👥",
      title: "Industry Expert Lecture Series",
      desc: "Monthly lectures by aerospace leaders.",
      date: "Jan 15, 2026",
      location: "Seminar Hall",
      status: "ongoing",
      full: "Industry interaction sessions and career guidance.",
    },
    {
      side: "right",
      icon: "</>",
      title: "Avionics Hackathon",
      desc: "24-hour avionics software hackathon.",
      date: "Dec 10, 2025",
      location: "Computer Lab",
      status: "completed",
      full: "Hackathon on navigation and control systems.",
    },
    {
      side: "left",
      icon: "📡",
      title: "IEEE AESS 2026 Execom & Volcom Interview",
      desc: "Application form to join IEEE AESS 2026 Execom and Volcom.",
      date: "13 Jan 2026",
      location: "Online via Gmeet",
      status: "completed",
      full: "Application form to join IEEE AESS 2026 Execom and Volcom.",
    },
    {
      side: "right",
      icon: "📡",
      title: "IEEE AESS 2026 Execom & Volcom ISelected list",
      desc: "",
      date: "13 Jan 2026",
      location: "Online via Gmeet",
      status: "completed",
      full: "Application form to join IEEE AESS 2026 Execom and Volcom.",
    },
  ];

  /* ================= SORT ================= */
  const sortedEvents = [...events].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  /* ================= FILTER ================= */
  const filteredEvents = sortedEvents.filter((e) => {
    const f = filter === "all" || e.status === filter;
    const s = e.title.toLowerCase().includes(search.toLowerCase());
    return f && s;
  });

  const statusColor = {
    completed: "bg-green-500/15 text-green-400 border-green-400/40",
    ongoing: "bg-yellow-500/15 text-yellow-400 border-yellow-400/40",
    upcoming: "bg-cyan-500/15 text-cyan-400 border-cyan-400/40",
  };

  /* ================= EXTRA: EVENT LINKS (ONLY ADDITION) ================= */
  const eventLinks = {
    "Radar Systems Workshop": {
      pdf: "https://drive.google.com/file/d/1PWdnOf9bZHHugWFzDEs0qYMMYLvG2QFB/view?usp=drive_link",
      result:
        "https://drive.google.com/file/d/11jfxh9-nOUE6qyuMV09qpQzlayvd7ist/view?usp=drive_link",
    },
    "Annual Technical Symposium": {
      pdf: "https://drive.google.com/file/d/1PWdnOf9bZHHugWFzDEs0qYMMYLvG2QFB/view?usp=drive_link",
      register: "https://drive.google.com/file/d/1PWdnOf9bZHHugWFzDEs0qYMMYLvG2QFB/view?usp=drive_link",
    },
    "Industry Expert Lecture Series": {
      pdf: "https://dummy-link.com/lecture.pdf",
    },
    "Avionics Hackathon": {
      pdf: "https://dummy-link.com/hackathon.pdf",
      result: "https://dummy-link.com/hackathon-result.pdf",
    },
    "IEEE AESS 2026 Execom & Volcom Interview": {
      pdf: "https://dummy-link.com/interview.pdf",
      result: "https://dummy-link.com/interview-result.pdf",
    },
    "IEEE AESS 2026 Execom & Volcom ISelected list": {
      pdf: "https://dummy-link.com/selected.pdf",
      result: "https://dummy-link.com/final-result.pdf",
    },
  };

  /* ================= PLANETS ================= */
  const planets = [
    { size: 6, orbit: 80, speed: 10 },
    { size: 8, orbit: 110, speed: 14 },
    { size: 9, orbit: 145, speed: 18 },
    { size: 7, orbit: 180, speed: 22 },
    { size: 14, orbit: 220, speed: 30 },
    { size: 13, orbit: 270, speed: 38 },
    { size: 11, orbit: 320, speed: 45 },
    { size: 11, orbit: 370, speed: 52 },
  ];

  const floatIcons = ["🚀", "🛰️", "☄️", "🪐", "📡"];
  const links = activeEvent ? eventLinks[activeEvent.title] : null;

  return (
    <section
      id="events"
      className={`relative bg-[#050b1e] text-white px-6 overflow-hidden
      ${variant === "page" ? "pt-32 pb-24" : "py-24"}`}
    >
      {/* 🌌 STAR FIELD (UNCHANGED) */}
      <div className="absolute inset-0 z-0">
        {[...Array(160)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-cyan-200/40 rounded-full"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* 🪐 PLANETS (UNCHANGED) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {planets.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/20"
            style={{
              width: p.orbit * 2,
              height: p.orbit * 2,
              animation: `orbit ${p.speed}s linear infinite`,
            }}
          >
            <div
              className="absolute top-1/2 left-full -translate-y-1/2
              bg-cyan-300 rounded-full shadow-[0_0_12px_rgba(0,255,255,0.8)]"
              style={{ width: p.size, height: p.size }}
            />
          </div>
        ))}
      </div>

      {/* 🚀 FLOATING ICONS (UNCHANGED) */}
      {floatIcons.map((icon, i) => (
        <span
          key={i}
          className="absolute text-cyan-400/40 text-xl animate-float"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDuration: 20 + Math.random() * 20 + "s",
          }}
        >
          {icon}
        </span>
      ))}

      {/* ================= HEADER ================= */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">
          EVENTS & WORKSHOPS
        </h2>
        <p className="mt-2 text-sm text-cyan-200/70">
          Mission timeline and upcoming operations
        </p>
      </div>

      {/* ================= HOME ================= */}
      {variant === "home" && (
        <>
          {/* MOBILE → NORMAL CARDS */}
          <div className="md:hidden relative z-10 max-w-xl mx-auto space-y-6">
            {sortedEvents.slice(0, 4).map((event, i) => (
              <div
                key={i}
                onClick={() => setActiveEvent(event)}
                className="cursor-pointer p-6 rounded-xl
                bg-[#0a1230]/90 border border-cyan-400/30"
              >
                <h3 className="text-cyan-300 font-semibold mb-2">
                  {event.icon} {event.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{event.desc}</p>
                <p className="text-xs text-cyan-300/80">
                  📅 {event.date} | 📍 {event.location}
                </p>
              </div>
            ))}
          </div>

          {/* DESKTOP → TIMELINE (UNCHANGED) */}
          <div className="hidden md:block relative z-10 max-w-6xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px]
              bg-cyan-400/30 -translate-x-1/2" />

            <div className="space-y-20">
              {sortedEvents.slice(0, 4).map((event, i) => (
                <div
                  key={i}
                  className={`relative flex items-center
                  ${event.side === "left" ? "justify-start" : "justify-end"}`}
                >
                  <div className="absolute left-1/2 -translate-x-1/2 z-20
                    w-11 h-11 rounded-full
                    bg-gradient-to-b from-cyan-400 to-cyan-600
                    flex items-center justify-center
                    text-black font-bold text-lg">
                    {event.icon}
                  </div>

                  <div
                    onClick={() => setActiveEvent(event)}
                    className="cursor-pointer w-full md:w-[45%]
                    p-6 rounded-xl bg-[#0a1230]/90
                    border border-cyan-400/30"
                  >
                    <h3 className="text-cyan-300 font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">{event.desc}</p>
                    <p className="text-xs text-cyan-300/80">
                      📅 {event.date} | 📍 {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 text-center mt-24">
            <button
              onClick={() => navigate("/events")}
              className="px-14 py-4 rounded-full
              border border-cyan-400 text-cyan-300
              hover:bg-cyan-400/10 transition
              shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            >
              MORE EVENTS →
            </button>
          </div>
        </>
      )}

      {/* ================= EVENTS PAGE (UNCHANGED) ================= */}
      {variant === "page" && (
        <>
          <div className=" relative z-10 max-w-6xl mx-auto mb-12
              flex flex-col gap-4
              sm:flex-row sm:gap-0
              sm:justify-between sm:items-center">
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none px-6 py-2 rounded-full
                bg-[#020617]/90 text-cyan-300 text-xs tracking-widest
                border border-cyan-400/40 outline-none"
              >
                <option value="all">ALL EVENTS</option>
                <option value="completed">COMPLETED</option>
                <option value="ongoing">ONGOING</option>
                <option value="upcoming">UPCOMING</option>
              </select>
            </div>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search event..."
              className="w-[240px] px-4 py-2 rounded-lg
              bg-[#020617] border border-cyan-400/30 outline-none"
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <div
                key={i}
                onClick={() => setActiveEvent(event)}
                className="relative cursor-pointer p-6 rounded-2xl
                bg-[#0a1230]/90 border border-cyan-400/30"
              >
                <span
                  className={`absolute top-3 right-3 px-3 py-1 text-[10px]
                  rounded-full border ${statusColor[event.status]}`}
                >
                  {event.status.toUpperCase()}
                </span>

                <h3 className="text-cyan-300 font-semibold mb-2">
                  {event.icon} {event.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">{event.desc}</p>
                <p className="text-xs text-cyan-300/80">
                  📅 {event.date} | 📍 {event.location}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      
      {/* ================= MODAL ================= */}
      {/* ================= MODAL ================= */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative max-w-2xl w-full p-6 rounded-xl bg-[#0a1230] border border-cyan-400/30">

            {/* CLOSE */}
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-3 right-3 text-cyan-400 text-xl"
            >
              ✕
            </button>

            {/* TITLE */}
            <h3 className="text-cyan-300 font-semibold mb-2">
              {activeEvent.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-300 mb-6">
              {activeEvent.full}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 justify-end">

              {links?.pdf && (
                <a
                  href={links.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full
                  border border-cyan-400 text-cyan-300
                  hover:bg-cyan-400/10 transition"
                >
                  VIEW PDF
                </a>
              )}

              {links?.register && (
                <a
                  href={links.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full
                  bg-cyan-400 text-black font-semibold
                  hover:bg-cyan-300 transition"
                >
                  REGISTER
                </a>
              )}

              {links?.result && (
                <a
                  href={links.result}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full
                  bg-green-500 text-black font-semibold
                  hover:bg-green-400 transition"
                >
                  RESULT
                </a>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ================= ANIMATIONS (UNCHANGED) ================= */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0% { transform: translate(0,0); }
          50% { transform: translate(40px,-60px); }
          100% { transform: translate(0,0); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default EventsWorkshops;
