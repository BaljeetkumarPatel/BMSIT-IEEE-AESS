import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [lowPerf, setLowPerf] = useState(false);

  /* ================= PERFORMANCE AUTO-DETECT ================= */
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowCPU = navigator.hardwareConcurrency <= 4;

    if (prefersReducedMotion || lowCPU) setLowPerf(true);
  }, []);

  const starCount = lowPerf ? 40 : 120;
  const driftStarCount = lowPerf ? 20 : 60;

  const satellites = [
    { size: 360, duration: 22, dir: 1, icon: "🛰️", scale: 1 },
    { size: 480, duration: 30, dir: -1, icon: "🛰️", scale: 0.9 },
    { size: 600, duration: 42, dir: 1, icon: "📡", scale: 0.85 },
  ];

  return (
    <section
      id="about-section"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#050b1e] overflow-hidden"
    >

      {/* ================= STATIC STAR FIELD ================= */}
      <div className="absolute inset-0 z-0">
        {[...Array(starCount)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-200/40"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ================= DRIFTING STARS ================= */}
      <div className="absolute inset-0 z-0">
        {[...Array(driftStarCount)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyan-300 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `starDrift ${30 + Math.random() * 40}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* ================= PARALLAX STARS ================= */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 z-0">
        {[...Array(lowPerf ? 30 : 80)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              width: "2px",
              height: "2px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* ================= FLOATING ICONS ================= */}
      {!lowPerf &&
        [
          { icon: "🚀", left: "8%", top: "28%", dur: 6 },
          { icon: "🪐", left: "72%", top: "65%", dur: 11 },
          { icon: "☄️", left: "50%", top: "12%", dur: 7 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: item.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-10 text-cyan-400/40 text-2xl"
            style={{ left: item.left, top: item.top }}
          >
            {item.icon}
          </motion.div>
        ))}

      {/* ================= RADAR PULSE ================= */}
      {!lowPerf &&
        [...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [0.6, 1.3], opacity: [0.35, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeOut",
            }}
            className="absolute z-0 left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[420px] sm:w-[520px] h-[420px] sm:h-[520px]
            rounded-full border border-cyan-400/30"
          />
        ))}

      {/* ================= ORBITS ================= */}
      {(lowPerf ? satellites.slice(0, 1) : satellites).map((orb, i) => (
        <motion.div
          key={i}
          animate={{ rotate: orb.dir * 360 }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute z-10 left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2"
          style={{ width: orb.size, height: orb.size }}
        >
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2
            text-cyan-400 drop-shadow-[0_0_12px_#00eaff]"
            style={{ transform: `scale(${orb.scale})` }}
          >
            {orb.icon}
          </div>
        </motion.div>
      ))}

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-cyan-400 text-3xl sm:text-4xl font-extrabold tracking-widest
        drop-shadow-[0_0_20px_rgba(0,234,255,0.8)]">
          ABOUT IEEE AESS
        </h2>

        <p className="mt-4 text-white/80 max-w-3xl mx-auto text-sm sm:text-base">
          Pioneering the future of aerospace and electronic systems through
          innovation, research, and collaboration
        </p>

        {/* ================= INFO CARDS ================= */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <InfoCard icon="👁️" title="VISION" color="cyan"
            text="Advancing aerospace and electronic systems through innovation, education, and collaboration." />
          <InfoCard icon="🎯" title="MISSION" color="green"
            text="Empowering students with cutting-edge knowledge in radar, avionics, and space systems." />
          <InfoCard icon="🏁" title="OBJECTIVES" color="cyan"
            text="Organizing workshops, publications, and hands-on aerospace projects." />
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-16 sm:mt-20 bg-[#020b22] rounded-2xl
          border border-cyan-400/40
          shadow-[0_0_35px_rgba(0,234,255,0.35),inset_0_0_20px_rgba(0,234,255,0.15)]
          px-6 sm:px-12 py-8 sm:py-10">

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 text-center">
            <Stat value="500+" label="MEMBERS" />
            <Stat value="50+" label="EVENTS" accent="green" />
            <Stat value="25+" label="PROJECTS" />
            <Stat value="100%" label="INNOVATION" />
          </div>
        </div>
      </div>

      {/* ================= KEYFRAMES ================= */}
      <style>{`
        @keyframes starDrift {
          from { transform: translate(0, 0); }
          to { transform: translate(-150px, 150px); }
        }
      `}</style>
    </section>
  );
}

/* ================= INFO CARD ================= */
function InfoCard({ icon, title, text, color }) {
  const colorMap = {
    cyan: "border-cyan-400 text-cyan-400 shadow-[0_0_35px_rgba(0,234,255,0.35)]",
    green: "border-green-400 text-green-400 shadow-[0_0_35px_rgba(0,255,180,0.35)]",
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`p-8 sm:p-10 rounded-2xl bg-[#020617]/95
      backdrop-blur border ${colorMap[color]}`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold tracking-widest mb-4">{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">{text}</p>
    </motion.div>
  );
}

/* ================= STAT ================= */
function Stat({ value, label, accent = "cyan" }) {
  const color =
    accent === "green"
      ? "text-green-400 drop-shadow-[0_0_12px_rgba(0,255,180,0.8)]"
      : "text-cyan-400 drop-shadow-[0_0_12px_rgba(0,234,255,0.8)]";

  return (
    <div className="flex flex-col items-center gap-2">
      <h4 className={`text-3xl sm:text-4xl font-extrabold tracking-wide ${color}`}>
        {value}
      </h4>
      <p className="text-[10px] sm:text-[11px] tracking-widest text-white/60">
        {label}
      </p>
    </div>
  );
}
