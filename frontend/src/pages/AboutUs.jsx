import Footer from "../components/Footer";
export default function AboutUs() {
  return (
    <>
    <section className="relative w-full min-h-screen bg-[#050b1e] py-28 px-6 text-white">

      <div className="max-w-5xl mx-auto space-y-20">

        {/* ================= TITLE ================= */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest
            text-cyan-400 drop-shadow-[0_0_35px_rgba(0,234,255,0.9)]">
            ABOUT US
          </h1>
          <p className="mt-4 text-white/70">
            Learn about IEEE, IEEE AESS, and BMSIT IEEE AESS
          </p>
        </div>

        {/* ================= IEEE ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            What is IEEE?
          </h2>

          <p className="text-white/80 leading-relaxed mb-4">
            IEEE (Institute of Electrical and Electronics Engineers) is the
            world’s largest professional technical organization dedicated to
            advancing technology for the benefit of humanity. Founded in 1963,
            IEEE supports innovation through globally recognized standards,
            high-quality research publications, conferences, and professional
            education.
          </p>

          <p className="text-white/80 leading-relaxed mb-4">
            With more than 400,000 members across over 160 countries, IEEE plays
            a crucial role in shaping the future of electrical engineering,
            electronics, computer science, and emerging technologies.
          </p>

          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 underline"
          >
            Visit IEEE Official Website →
          </a>
        </section>

        {/* ================= AESS ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            What is IEEE AESS?
          </h2>

          <p className="text-white/80 leading-relaxed mb-4">
            The IEEE Aerospace and Electronic Systems Society (AESS) is a
            specialized society under IEEE that focuses on the organization,
            design, development, integration, and operation of complex systems
            operating in aerospace, defense, maritime, and terrestrial
            environments.
          </p>

          <p className="text-white/80 leading-relaxed mb-4">
            IEEE AESS covers technical domains such as radar and sonar systems,
            avionics, navigation, satellite and space systems, command and
            control, surveillance, autonomous systems, and electronic warfare.
          </p>

          <a
            href="https://aess.ieee.org"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 underline"
          >
            Visit IEEE AESS Website →
          </a>
        </section>

        {/* ================= BMSIT IEEE AESS ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            About BMSIT IEEE AESS Student Chapter
          </h2>

          <p className="text-white/80 leading-relaxed mb-4">
            The IEEE Aerospace and Electronic Systems Society (AESS) Student
            Chapter at BMS Institute of Technology (BMSIT) was introduced in
            2024 with the objective of promoting technical excellence and
            innovation among students interested in aerospace and electronic
            systems.
          </p>

          <p className="text-white/80 leading-relaxed mb-4">
            The chapter serves as a platform for students to explore and gain
            hands-on exposure in areas such as radar systems, avionics,
            satellite communication, navigation, signal processing, and
            autonomous technologies through workshops, projects, and expert
            interactions.
          </p>

          <p className="text-white/80 leading-relaxed">
            As part of the global IEEE AESS community, the BMSIT IEEE AESS
            Student Chapter enables students to develop leadership skills,
            research aptitude, professional ethics, and international
            networking opportunities while contributing to IEEE’s mission of
            advancing technology for humanity.
          </p>
        </section>

        {/* ================= WHY JOIN ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            Why Join IEEE & AESS?
          </h2>

          <ul className="list-disc list-inside text-white/80 space-y-2">
            <li>Global recognition and professional credibility</li>
            <li>Access to IEEE Xplore digital research library</li>
            <li>Exposure to industry standards and emerging technologies</li>
            <li>Networking with global professionals and researchers</li>
            <li>Leadership, volunteering, and career development opportunities</li>
          </ul>
        </section>

        {/* ================= LINKS ================= */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
            Important Links
          </h2>

          <ul className="space-y-2 text-cyan-400">
            <li>
              <a href="https://www.ieee.org" target="_blank" rel="noreferrer">
                IEEE Official Website
              </a>
            </li>
            <li>
              <a href="https://aess.ieee.org" target="_blank" rel="noreferrer">
                IEEE Aerospace & Electronic Systems Society
              </a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org" target="_blank" rel="noreferrer">
                IEEE Xplore Digital Library
              </a>
            </li>
            <li>
              <a href="https://www.ieee.org/membership/students" target="_blank" rel="noreferrer">
                IEEE Student Membership
              </a>
            </li>
          </ul>
        </section>

      </div>
    </section>
    {/* <Footer /> */}
    </>
  );
}
