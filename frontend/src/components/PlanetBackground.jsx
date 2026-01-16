import { motion } from "framer-motion";

const planets = [
  { size: 120, top: "10%", left: "5%", duration: 40, opacity: 0.25 },
  { size: 180, top: "25%", left: "70%", duration: 55, opacity: 0.18 },
  { size: 90, top: "60%", left: "15%", duration: 35, opacity: 0.22 },
  { size: 140, top: "75%", left: "80%", duration: 50, opacity: 0.2 },
  { size: 70, top: "40%", left: "45%", duration: 30, opacity: 0.18 },
];

export default function PlanetBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {planets.map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          className="absolute rounded-full
            bg-[radial-gradient(circle_at_30%_30%,#7dd3fc,#0369a1,#020617)]
            blur-[1px]
            shadow-[0_0_60px_rgba(0,234,255,0.25)]"
        />
      ))}
    </div>
  );
}
