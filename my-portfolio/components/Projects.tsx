const projects = [
  {
    title: 'Personal Notes App',
    description:
      '一個全端個人筆記應用程式，包含 .NET Core API、React 前端同 Next.js 前端。支援 JWT 認證、CRUD、分頁等功能。',
    tech: ['React', 'Next.js', 'TypeScript', '.NET 8', 'EF Core', 'JWT', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/longsmoke1001/DotNetRepo',
      demo: 'https://longsmoke1001.github.io/DotNetRepo/',
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">
          專案
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-slate-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  GitHub →
                </a>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}