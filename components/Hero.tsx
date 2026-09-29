export default function Hero() {
  return (
    <section className="py-20 flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 text-white">
      <div className="text-center px-6">
        <img
          src="images/avatar.jpg"
          alt="Leo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Huang Long Yin, Leo
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Full-Stack Developer | .NET & Next.js
        </p>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          HKUST Physics Graduate | PolyU MScIT Student
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-slate-900 hover:bg-slate-200 px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}