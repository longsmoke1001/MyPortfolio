export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">
          關於我
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-700">
              背景
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              我係一位 Full-Stack Developer，擁有 HKUST 物理學學士學位，
              而家喺 PolyU 攻讀資訊科技碩士。
            </p>
            <p className="text-gray-600 leading-relaxed">
              我專注於後端開發（.NET Core）同前端開發（React / Next.js），
              並且熟悉雲端部署（Azure、GitHub Pages）。
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-700">
              學歷
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-slate-800">
                  HKUST BSc Physics
                </p>
                <p className="text-gray-600 text-sm">
                  Second Class Honours Division I
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  PolyU MScIT
                </p>
                <p className="text-gray-600 text-sm">
                  在讀（2026-2029）
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}