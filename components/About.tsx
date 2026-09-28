export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-700">
              Background
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              I'm a Full-Stack Developer with a BSc in Physics from HKUST,
              currently pursuing an MSc in Information Technology at PolyU.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I focus on backend development (.NET Core) and frontend
              development (React / Next.js), and I'm familiar with cloud
              deployment (Azure, GitHub Pages).
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-700">
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800">
                  HKUST BSc Physics
                </p>
                <p className="text-slate-600 text-sm">
                  Second Class Honours Division I
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  PolyU MScIT
                </p>
                <p className="text-slate-600 text-sm">
                  In progress (2026-2029)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}