export default function Hero() {
  return (
    <section className="my-8 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Huang Long Yin, Leo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full-Stack Developer | .NET & Next.js
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          HKUST Physics Graduate | PolyU MScIT Student
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
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