import AchievementsSection from "../components/AchievementsSection";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";

const AchievementsPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="relative min-h-screen bg-[#050b1e] overflow-hidden">
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
      <AchievementsSection showAll />;
    </div>
    <Footer />
    </>
  )
};

export default AchievementsPage;
