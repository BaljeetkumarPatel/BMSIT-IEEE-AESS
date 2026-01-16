// src/pages/EventsPage.jsx
import EventsWorkshops from "../components/EventsWorkshops";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EventsPage = () => {
  const navigate = useNavigate();
  return (
    <>
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
      <EventsWorkshops variant="page" />
      <Footer />
    </>
  );
};

export default EventsPage;
