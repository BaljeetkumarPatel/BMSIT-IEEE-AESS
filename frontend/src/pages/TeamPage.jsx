import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import TeamSection from "../components/TeamSection";
import { teamData } from "../data/teamData";
import Footer from "../components/Footer";

export default function TeamPage() {
  const navigate = useNavigate();

  return (
    <>
    <div className="relative min-h-screen bg-[#050b1e]">

      {/* BACK TO HOME BUTTON */}
      <button
        onClick={() => navigate("/")}
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
        HOME
      </button>

      <TeamSection data={teamData} />
    </div>
    <Footer />
    </>
  );
}
