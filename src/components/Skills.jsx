const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-10">

      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">

        {Object.entries(skills).map(([category, items]) => (

          <div
            key={category}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:shadow-[0_0_25px_#22d3ee] transition-all duration-500"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">

              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-900 px-4 py-2 rounded-lg"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills