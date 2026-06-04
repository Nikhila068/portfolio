const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB'],
  Tools: ['GitHub', 'VS Code'],
}

function Skills() {
  return (
    <section id="skills" className="py-32 px-10">

      <h2 className="text-4xl font-bold text-center text-cyan-400">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">

        {Object.entries(skills).map(([category, items], index) => (

          <div
            key={index}
            className="bg-slate-800 p-8 rounded-2xl hover:scale-105 transition duration-500"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">

              {items.map((skill, idx) => (

                <span
                  key={idx}
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