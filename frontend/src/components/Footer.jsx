// import { Link } from "react-router-dom";
// import { Mail, Phone, MapPin, Eye } from "lucide-react";
// import { useEffect, useState } from "react";

// const Footer = () => {
//   const [visitors, setVisitors] = useState(0);

//   /* ================= VISITOR COUNTER ================= */
//   useEffect(() => {
//     const count = localStorage.getItem("visitorCount");
//     const newCount = count ? parseInt(count) + 1 : 1;
//     localStorage.setItem("visitorCount", newCount);
//     setVisitors(newCount);
//   }, []);

//   return (
//     <footer className="relative bg-[#050b1e] text-white pt-20 pb-10 px-6">

//       {/* ================= TOP GRID ================= */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

//         {/* BRAND */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <span className="text-cyan-400 text-xl font-bold">
//               IEEE AESS
//             </span>
//           </div>

//           <p className="text-sm text-gray-400 leading-relaxed">
//             Advancing aerospace and electronic systems through innovation,
//             research, and collaboration.
//           </p>
//         </div>

//         {/* QUICK LINKS (UNCHANGED) */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm text-gray-400">
//             <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
//             <li><Link to="/missionbriefing" className="hover:text-cyan-400">Mission Briefing</Link></li>
//             <li><Link to="/notices" className="hover:text-cyan-400">Notices</Link></li>
//             <li><Link to="/achievements" className="hover:text-cyan-400">Achievements</Link></li>
//             <li><Link to="/mission-gallery" className="hover:text-cyan-400">Gallery</Link></li>
//             <li><Link to="/team" className="hover:text-cyan-400">Our Team</Link></li>
//           </ul>
//         </div>

//         {/* CONTACT (UNCHANGED) */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Contact</h4>

//           <ul className="space-y-3 text-sm text-gray-400">
//             <li className="flex items-center gap-2">
//               <Mail size={16} className="text-cyan-400" />
//               baljeetpatel022@gmail.com
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone size={16} className="text-cyan-400" />
//               +91 6205528437
//             </li>
//             <li className="flex items-start gap-2">
//               <MapPin size={16} className="text-cyan-400 mt-0.5" />
//               <span>
//                 BMS Institute of Technology and Management <br />
//                 Yelahanka, Bangalore – 560064
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* ===== EXTRA SECTION (REPLACED QR) ===== */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Reach Us</h4>

//           <p className="text-sm text-gray-400 leading-relaxed mb-4">
//             BMS Institute of Technology & Management,<br />
//             Doddaballapur Main Road,<br />
//             Avalahalli, Yelahanka,<br />
//             Bengaluru – 560119
//           </p>

//           {/* PHOTO PLACEHOLDER */}
//           <div
//             className="
//               w-full h-28 mb-4
//               rounded-lg
//               bg-white/10
//               border border-cyan-400/40
//               flex items-center justify-center
//               text-xs text-cyan-400
//               shadow-[0_0_18px_rgba(0,255,255,0.4)]
//             "
//           >
//             Campus / Chapter Photo
//           </div>

//           {/* VISITOR COUNT */}
//           <div className="flex items-center gap-2 text-sm text-gray-400">
//             <Eye size={16} className="text-cyan-400" />
//             Total Visitors:
//             <span className="text-cyan-400 font-semibold ml-1">
//               {visitors}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* DIVIDER */}
//       <div className="max-w-7xl mx-auto my-10 border-t border-white/10" />

//       {/* BOTTOM TEXT */}
//       <div className="text-center text-sm text-gray-500">
//         © 2024 IEEE Aerospace and Electronic Systems Society. All rights reserved.
//         <br />
//         <span className="text-xs text-gray-600">
//           Designed for mission excellence
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Eye } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [visitors, setVisitors] = useState(0);

  /* ================= VISITOR COUNTER ================= */
  useEffect(() => {
    const count = localStorage.getItem("visitorCount");
    const newCount = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("visitorCount", newCount);
    setVisitors(newCount);
  }, []);

  return (
    <footer className="relative bg-[#050b1e] text-white pt-10 pb-5 px-6">

      {/* ================= TOP GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-cyan-400 text-xl font-bold">
              IEEE AESS
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Advancing aerospace and electronic systems through innovation,
            research, and collaboration.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link to="/missionbriefing" className="hover:text-cyan-400">Mission Briefing</Link></li>
            <li><Link to="/notices" className="hover:text-cyan-400">Notices</Link></li>
            <li><Link to="/achievements" className="hover:text-cyan-400">Achievements</Link></li>
            <li><Link to="/mission-gallery" className="hover:text-cyan-400">Gallery</Link></li>
            <li><Link to="/team" className="hover:text-cyan-400">Our Team</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-cyan-400" />
              baljeetpatel022@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-cyan-400" />
              +91 6205528437
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-cyan-400 mt-0.5" />
              <span>
                BMS Institute of Technology and Management <br />
                Yelahanka, Bangalore – 560064
              </span>
            </li>
          </ul>
        </div>

        {/* EXTRA SECTION */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Reach Us</h4>

          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            BMS Institute of Technology & Management,<br />
            Doddaballapur Main Road,<br />
            Avalahalli, Yelahanka,<br />
            Bengaluru – 560119
          </p>

          {/* PHOTO PLACEHOLDER */}
          <div
            className="
              w-full h-20 mb-3
              rounded-lg
              bg-white/10
              border border-cyan-400/40
              flex items-center justify-center
              text-xs text-cyan-400
              shadow-[0_0_18px_rgba(0,255,255,0.4)]
            "
          >
            QR to Join InfoBoard
          </div>

          {/* VISITOR COUNT */}
          {/* <div className="flex items-center gap-2 text-sm text-gray-400">
            <Eye size={16} className="text-cyan-400" />
            Total Visitors:
            <span className="text-cyan-400 font-semibold ml-1">
              {visitors}
            </span>
          </div> */}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto my-5 border-t border-white/10" />

      {/* BOTTOM TEXT */}
      <div className="text-center text-sm text-gray-500">
        © 2024 IEEE Aerospace and Electronic Systems Society. All rights reserved.
        <br />
        <span className="text-xs text-gray-600">
          Designed for mission excellence
        </span>
      </div>
    </footer>
  );
};

export default Footer;
