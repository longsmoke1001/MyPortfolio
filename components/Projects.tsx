import Image from 'next/image';
const projects = [
  {
    title: 'Personal Notes App',
    description:
      'A full-stack personal notes application featuring a .NET Core API alongside React and Next.js front ends. Supports JWT authentication, CRUD operations, pagination, and more.',
    tech: ['React', 'Next.js', 'TypeScript', '.NET 8', 'EF Core', 'JWT', 'Tailwind CSS'],
    image: `images/notes-app.png`,
    links: [
      {
        label: 'Backend GitHub',
        url: 'https://github.com/longsmoke1001/DotNetRepo'
      },
      {
        label: 'Frontend GitHub',
        url: 'https://github.com/longsmoke1001/nextjs-notes'
      },
      {
        label: 'Demo',
        url: 'https://longsmoke1001.github.io/nextjs-notes/'
      }
    ]
  },
  {
    title: 'Little Knight',
    description:
      'A 2D platformer game built with Unity. Players control a little knight, jumping and attacking through levels.',
    tech: ['Unity', 'C#', 'State Machine', 'Object Pooling'],
    image: `images/little-knight.jpg`,
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/longsmoke1001/game-3-6.0'
      },
      {
        label: 'Demo',
        url: 'https://longsmoke1001.itch.io/little-knight'
      }
    ]
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
              className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              {project.image && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              )}
              <h3 className="text-2xl font-semibold mb-3 text-slate-800">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 font-medium"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}