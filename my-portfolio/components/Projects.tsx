const projects = [
  {
    title: 'Personal Notes App',
    description:
      'A full-stack personal notes application featuring a .NET Core API alongside React and Next.js front ends. Supports JWT authentication, CRUD operations, pagination, and more.',
    tech: ['React', 'Next.js', 'TypeScript', '.NET 8', 'EF Core', 'JWT', 'Tailwind CSS'],
    image: '/images/notes-app.png',
    links: {
      github: 'https://github.com/longsmoke1001/DotNetRepo',
      demo: 'https://longsmoke1001.github.io/nextjs-notes/',
    },
  },
  {
    title: 'Little Knight',
    description:
      'A 2D platformer game built with Unity. Players control a little knight, jumping and attacking through levels.',
    tech: ['Unity', 'C#', 'State Machine', 'Object Pooling'],
    image: '/images/little-knight.jpg',
    links: {
      github: 'https://github.com/longsmoke1001/game-3-6.0',
      demo: 'https://longsmoke1001.itch.io/little-knight',
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              )}
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