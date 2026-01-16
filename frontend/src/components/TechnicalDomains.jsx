const TechnicalDomains = () => {
  return (
    <section id="domains" className="relative bg-[#050b1e] text-white py-24 px-6 overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-300
          drop-shadow-[0_0_18px_rgba(0,255,255,0.7)]"
        >
          DOMAINS
        </h2>
        <p className="mt-2 text-sm text-cyan-200/70">
          Core areas of aerospace excellence
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* CARD 1 */}
        <div className="domain-card">
          <div className="icon bg-cyan-400/20 text-cyan-300">📡</div>
          <h3 className="domain-title">Radar Systems</h3>
          <p className="domain-text">
            Advanced radar signal processing, phased array systems,
            SAR, and target detection algorithms.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="domain-card">
          <div className="icon bg-green-400/20 text-green-300">✈️</div>
          <h3 className="domain-title text-green-300">Avionics</h3>
          <p className="domain-text">
            Flight control systems, cockpit displays,
            autopilot technology, and aircraft communication systems.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="domain-card">
          <div className="icon bg-cyan-400/20 text-cyan-300">🎯</div>
          <h3 className="domain-title">Navigation & GNSS</h3>
          <p className="domain-text">
            GPS technology, inertial navigation, satellite positioning,
            and autonomous guidance systems.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="domain-card">
          <div className="icon bg-cyan-400/20 text-cyan-300">🛰️</div>
          <h3 className="domain-title">Satellite Systems</h3>
          <p className="domain-text">
            Satellite communication, orbital mechanics,
            payload design, and space mission planning.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="domain-card">
          <div className="icon bg-green-400/20 text-green-300">🛡️</div>
          <h3 className="domain-title text-green-300">
            Defense Electronics
          </h3>
          <p className="domain-text">
            Electronic warfare, surveillance systems,
            secure communications, and countermeasure technologies.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="domain-card">
          <div className="icon bg-cyan-400/20 text-cyan-300">🤖</div>
          <h3 className="domain-title">AI in Aerospace</h3>
          <p className="domain-text">
            Machine learning for autonomous systems,
            predictive maintenance, and intelligent flight control.
          </p>
        </div>

      </div>

      {/* INLINE STYLES (EXACT MATCH) */}
      <style>
        {`
          .domain-card {
            padding: 28px;
            border-radius: 16px;
            background: linear-gradient(to bottom, #0a1d33, #050b1e);
            border: 1px solid rgba(0,255,255,0.25);
            box-shadow: 0 0 28px rgba(0,255,255,0.15);
            text-align: center;
          }

          .icon {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            margin: 0 auto 16px auto;
            box-shadow: 0 0 18px rgba(0,255,255,0.6);
          }

          .domain-title {
            font-size: 18px;
            font-weight: 600;
            color: #67e8f9;
            margin-bottom: 10px;
          }

          .domain-text {
            font-size: 14px;
            color: #cbd5e1;
            line-height: 1.6;
          }
        `}
      </style>

    </section>
  );
};

export default TechnicalDomains;
