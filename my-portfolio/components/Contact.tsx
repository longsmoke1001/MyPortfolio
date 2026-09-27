export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">聯絡我</h2>
        <p className="text-gray-300 mb-12 text-lg">
          如果有任何機會或合作，歡迎聯絡我。
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="mailto:huangleo1001@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
          >
            Email
          </a>
          <a
            href="https://github.com/longsmoke1001"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}