import { useState } from "react";

const GetInTouch = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mlggdavr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-[#050b1e] py-24 px-6 text-white overflow-hidden">

      {/* SECTION HEADING (OUTSIDE BOX) */}
      <div className="text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-300
          drop-shadow-[0_0_18px_rgba(0,255,255,0.7)]"
        >
          Get in Touch with IEEE AESS Chapter
        </h2>
        <p className="mt-2 text-sm text-cyan-200/70">
          We’d love to hear from you
        </p>
      </div>

      {/* FORM CARD */}
      <div
        className="max-w-xl mx-auto rounded-2xl p-8
        bg-gradient-to-b from-[#0a1230] to-[#050b1e]
        border border-cyan-400/30
        shadow-[0_0_40px_rgba(0,255,255,0.35)]"
      >

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME */}
          <div>
            <label className="block text-sm text-cyan-200 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg
                bg-black/40 text-white
                border border-white/10
                focus:outline-none focus:border-cyan-400
                placeholder-gray-400"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm text-cyan-200 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john.doe@example.com"
              className="w-full px-4 py-3 rounded-lg
                bg-black/40 text-white
                border border-white/10
                focus:outline-none focus:border-cyan-400
                placeholder-gray-400"
            />
          </div>

          {/* MOBILE NUMBER */}
          <div>
            <label className="block text-sm text-cyan-200 mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              required
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-lg
                bg-black/40 text-white
                border border-white/10
                focus:outline-none focus:border-cyan-400
                placeholder-gray-400"
            />
          </div>

          {/* SUBJECT */}
          <div>
            <label className="block text-sm text-cyan-200 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Inquiry about IEEE AESS"
              className="w-full px-4 py-3 rounded-lg
                bg-black/40 text-white
                border border-white/10
                focus:outline-none focus:border-cyan-400
                placeholder-gray-400"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm text-cyan-200 mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg
                bg-black/40 text-white
                border border-white/10
                focus:outline-none focus:border-cyan-400
                placeholder-gray-400 resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-lg font-semibold
              bg-blue-500 hover:bg-blue-600
              text-black
              shadow-[0_0_18px_rgba(59,130,246,0.7)]
              transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit Inquiry"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="text-green-400 text-sm text-center mt-4">
              ✅ Message sent successfully! We’ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
