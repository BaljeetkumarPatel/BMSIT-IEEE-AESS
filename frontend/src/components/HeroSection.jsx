import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const movingIconsLTR = ["🛰️", "☄️", "🚀", "🪐", "📡"];
const movingIconsRTL = ["🟣", "🔵", "🟠", "🛰️", "☄️"];

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  /* ================= MOUSE TRACK ================= */
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative bg-[#050b1e] text-white overflow-hidden">

      {/* ⭐ STARFIELD */}
      <div className="absolute inset-0 z-0">
        {[...Array(180)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white/40 rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ☄️ SHOOTING STARS */}
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[80px]
          bg-gradient-to-b from-cyan-300 to-transparent animate-shoot"
          style={{
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 4}s`,
          }}
        />
      ))}

      {/* 🌍 SOLAR SYSTEM */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      >
        <div className="relative w-[620px] h-[620px]">

          {/* PLANET ORBITS */}
          {[
            { size: 180, icon: "☿️", dur: 6 },
            { size: 220, icon: "♀️", dur: 8 },
            { size: 280, icon: "♂️", dur: 12 },
            { size: 340, icon: "🟠", dur: 16 },
            { size: 400, icon: "🪐", dur: 20 },
            { size: 460, icon: "🔵", dur: 24 },
            { size: 520, icon: "🟣", dur: 28 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
              rounded-full border border-cyan-400/20"
              style={{ width: p.size, height: p.size }}
            >
              <div
                className="absolute inset-0 animate-orbit"
                style={{ animationDuration: `${p.dur}s` }}
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl">
                  {p.icon}
                </span>
              </div>
            </div>
          ))}

          {/* 🌍 EARTH */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2
            w-64 h-64 rounded-full overflow-hidden animate-earth-rotate
            shadow-[0_0_90px_rgba(0,255,255,0.9)]">
            <img src="/earth.png" alt="Earth" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r
              from-black/60 via-transparent to-black/60" />
          </div>
        </div>
      </div>

      {/* 🌠 LEFT → RIGHT ARC MOVEMENT */}
      {movingIconsLTR.map((icon, i) => (
        <span
          key={`ltr-${i}`}
          className="absolute text-2xl text-cyan-400/30 animate-arc-ltr"
          style={{
            top: `${15 + i * 12}%`,
            animationDuration: `${26 + i * 6}s`,
            filter: `blur(${i * 0.5}px)`,
          }}
        >
          {icon}
        </span>
      ))}

      {/* 🌠 RIGHT → LEFT ARC MOVEMENT */}
      {movingIconsRTL.map((icon, i) => (
        <span
          key={`rtl-${i}`}
          className="absolute text-2xl text-cyan-400/30 animate-arc-rtl"
          style={{
            top: `${18 + i * 11}%`,
            animationDuration: `${30 + i * 5}s`,
            filter: `blur(${i * 0.5}px)`,
          }}
        >
          {icon}
        </span>
      ))}

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center z-10">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyan-300
          drop-shadow-[0_0_18px_rgba(0,255,255,0.6)]">
          IEEE AEROSPACE & <br /> ELECTRONIC <br /> SYSTEMS SOCIETY
        </h1>

        <p className="mt-6 text-green-400">
          Advancing Radar, Avionics, Navigation & Space Systems
        </p>


        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => navigate("/missionbriefing")}
            className="px-7 py-3 rounded-full bg-gradient-to-r
            from-cyan-400 to-blue-500 text-black hover:scale-105 transition"
          >
            🚀 Explore Mission
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-7 py-3 rounded-full border border-cyan-400"
          >
            Join Chapter
          </button>
        </div>

        {/* FLOATING CARDS */}
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card float-up">📡 Radar Systems</div>
          <div className="card float-down">✈️ Avionics</div>
          <div className="card float-up delay">🌐 Navigation</div>
        </div> */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="card glass float-up">
            <div className="card-icon text-cyan-400">📡</div>
            <h3 className="card-title">Radar Systems</h3>
            <p className="card-desc">Advanced detection technology</p>
          </div>

          <div className="card glass float-down">
            <div className="card-icon text-green-400">✈️</div>
            <h3 className="card-title">Avionics</h3>
            <p className="card-desc">Flight control systems</p>
          </div>

          <div className="card glass float-up delay">
            <div className="card-icon text-cyan-400">🌐</div>
            <h3 className="card-title">Navigation</h3>
            <p className="card-desc">Global positioning systems</p>
          </div>

        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .card {
          padding: 28px;
          background: rgba(10,20,50,0.75);
          border: 1px solid rgba(0,255,255,0.35);
          border-radius: 16px;
          box-shadow: 0 0 25px rgba(0,255,255,0.25);
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit { animation: orbit linear infinite; }

        @keyframes earthRotate {
          from { background-position: 0%; }
          to { background-position: 200%; }
        }
        .animate-earth-rotate { animation: earthRotate 18s linear infinite; }

        /* 🌠 ARC PATH LEFT → RIGHT (avoids Earth center) */
        @keyframes arcLTR {
          0%   { transform: translateX(-120px) translateY(0); opacity: 0; }
          20%  { opacity: 1; }
          50%  { transform: translateX(50vw) translateY(-120px); }
          80%  { opacity: 1; }
          100% { transform: translateX(calc(100vw + 120px)) translateY(0); opacity: 0; }
        }

        /* 🌠 ARC PATH RIGHT → LEFT */
        @keyframes arcRTL {
          0%   { transform: translateX(calc(100vw + 120px)) translateY(0); opacity: 0; }
          20%  { opacity: 1; }
          50%  { transform: translateX(50vw) translateY(120px); }
          80%  { opacity: 1; }
          100% { transform: translateX(-120px) translateY(0); opacity: 0; }
        }

        .animate-arc-ltr {
          animation: arcLTR linear infinite;
        }

        .animate-arc-rtl {
          animation: arcRTL linear infinite;
        }

        @keyframes shoot {
          from { transform: translateY(-100px) translateX(100px); opacity:1 }
          to { transform: translateY(300px) translateX(-300px); opacity:0 }
        }
        .animate-shoot { animation: shoot 3s linear infinite; }

        @keyframes upDown {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes downUp {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(16px); }
        }
        .float-up { animation: upDown 4s ease-in-out infinite; }
        .float-down { animation: downUp 4s ease-in-out infinite; }
        .delay { animation-delay: .4s; }
      `}</style>
    </section>
  );
};

export default HeroSection;
