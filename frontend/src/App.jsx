

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MissionBriefingPage from "./pages/MissionBriefingPage";
import Navbar from "./components/Navbar";
import NoticesPage from "./pages/NoticesPage";
import AchievementsPage from "./pages/AchievementsPage";
import MissionGalleryPage from "./pages/MissionGalleryPage";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import EventsPage from "./pages/EventsPage";

export default function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missionbriefing" element={<MissionBriefingPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/mission-gallery" element={<MissionGalleryPage />}/>
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
