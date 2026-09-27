const skills = {
  Backend: [
    'C# / .NET 8',
    'ASP.NET Core',
    'Entity Framework Core',
    'JWT Authentication',
    'RESTful API',
    'SQLite / PostgreSQL',
  ],
  Frontend: [
    'React 19',
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS',
    'React Router',
    'Axios / fetch',
  ],
  Tools: [
    'Git / GitHub',
    'GitHub Actions',
    'Azure App Service',
    'Docker',
    'VS Code',
    'Postman',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}