import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MissionBriefingSection from "../components/MissionBriefing";
import Notices from "../components/Notices";
import { noticesData } from "../data/noticesData";
import MonthlyNewsletters from "../components/MonthlyNewsletters";
import EventsWorkshops from "../components/EventsWorkshops";
import TechnicalDomains from "../components/TechnicalDomains";
import AchievementsSection from "../components/AchievementsSection";
import MissionGallery from "../components/MissionGallery";
import { missionGalleryData } from "../data/missionGalleryData";
import GetInTouch from "../components/GetInTouch";
import TeamSection from "../components/TeamSection";
import { teamData } from "../data/teamData";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen ">
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <MissionBriefingSection />
      <Notices data={noticesData} limit={4} />
      <MonthlyNewsletters />
      <EventsWorkshops variant="home"/>
      <TechnicalDomains />
      <AchievementsSection />
      <MissionGallery
        data={missionGalleryData}
        limit={6}
        showMore
      />
      <GetInTouch />
      <TeamSection
        data={teamData.map(m => ({ ...m, hideDescription: true }))}
        limit={8}
        showMore
      />
      <Footer />
    </div>
  );
}