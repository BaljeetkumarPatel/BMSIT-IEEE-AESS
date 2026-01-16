import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "HOME", type: "route", value: "/" },
    { label: "ABOUT", type: "scroll", value: "about-section" },
    { label: "MESSAGES", type: "scroll", value: "missionbriefing" },
    { label: "NOTICES", type: "route", value: "/notices" },
    { label: "EVENTS", type: "scroll", value: "events" },
    { label: "DOMAINS", type: "scroll", value: "domains" },
    { label: "GALLERY", type: "scroll", value: "missiongallery" },
    { label: "CONTACT", type: "scroll", value: "contact" },
  ];

  // const handleClick = (item) => {
  //   setOpen(false);

  //   if (item.type === "route") {
  //     navigate(item.value);
  //     return;
  //   }

      const handleClick = (item) => {
      setOpen(false);

      // HOME special case
      if (item.label === "HOME") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
        return;
      }

      if (item.type === "route") {
        navigate(item.value);
        return;
      }

      // scroll sections always on HOME
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.value)?.scrollIntoView({
            behavior: "smooth",
          });
        }, 200);
      } else {
        document.getElementById(item.value)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

  //   // scroll sections always on HOME
  //   if (location.pathname !== "/") {
  //     navigate("/");
  //     setTimeout(() => {
  //       document.getElementById(item.value)?.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     }, 200);
  //   } else {
  //     document.getElementById(item.value)?.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="w-full bg-gradient-to-b from-[#0a1a3a] to-[#050b1e]
        border-b border-cyan-400/30
        shadow-[0_0_20px_rgba(0,234,255,0.25)]
        backdrop-blur-md z-50
        md:fixed md:top-0"
      >
        <div className="h-16 w-full flex items-center justify-between px-6 md:px-20">

          {/* LOGO → HOME */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/satellitelogo.png"
              alt="IEEE AESS"
              className="w-8 h-8 object-contain drop-shadow-[0_0_8px_#00eaff]"
            />
            <span className="text-cyan-400 font-bold tracking-wide">
              IEEE AESS
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleClick(item)}
                className="cursor-pointer text-white/80 hover:text-cyan-400 transition"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => setOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />

        {/* DRAWER */}
        <div
          className={`absolute left-0 top-0 h-full w-72
          bg-gradient-to-b from-[#0a1a3a] to-[#050b1e]
          shadow-[0_0_30px_rgba(0,234,255,0.3)]
          border-r border-cyan-400/30
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="h-16 flex items-center px-6 border-b border-cyan-400/20">
            <span className="text-cyan-400 font-bold">IEEE AESS</span>
          </div>

          <ul className="flex flex-col gap-6 px-6 py-6 text-sm">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleClick(item)}
                className="text-white/80 hover:text-cyan-400 transition cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
