import { FaCode, FaTerminal, FaLaptopCode, FaCheckCircle, FaCss3Alt } from 'react-icons/fa'
import { SiPython, SiC, SiJavascript, SiHtml5, SiReact, SiStreamlit, SiTensorflow } from 'react-icons/si'

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <FaCode />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    skills: [
      { name: 'Python', level: 'Advanced', icon: <SiPython className="text-yellow-400" /> },
      { name: 'C Language', level: 'Proficient', icon: <SiC className="text-blue-400" /> },
      { name: 'Java (Core/Basics)', level: 'Intermediate', icon: <FaCode className="text-orange-400" /> },
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: <FaLaptopCode />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'HTML5', level: 'Advanced', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3 & Tailwind', level: 'Advanced', icon: <FaCss3Alt className="text-cyan-400" /> },
      { name: 'JavaScript (ES6+)', level: 'Proficient', icon: <SiJavascript className="text-yellow-300" /> },
      { name: 'React.js', level: 'Proficient', icon: <SiReact className="text-cyan-300" /> },
    ]
  },
  {
    id: 'tools',
    title: 'AI / Tools & Libraries',
    icon: <FaTerminal />,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    skills: [
      { name: 'Streamlit & ML', level: 'Proficient', icon: <SiStreamlit className="text-red-400" /> },
      { name: 'TensorFlow / Keras', level: 'Intermediate', icon: <SiTensorflow className="text-orange-400" /> },
      { name: 'VS Code & Git', level: 'Advanced', icon: <FaTerminal className="text-emerald-400" /> },
      { name: 'MS Office & Excel', level: 'Advanced', icon: <FaCheckCircle className="text-blue-300" /> },
    ]
  }
]

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">Technical Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-white tracking-tight">
            Skills
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Simplified Skills Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="backdrop-blur-md bg-slate-900/40 border border-slate-800/80 rounded-3xl p-7 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-800/60">
                  <div className={`w-11 h-11 ${cat.bgColor} rounded-2xl flex items-center justify-center border ${cat.borderColor} text-xl ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-3">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700/80 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{s.icon}</span>
                        <span className="text-xs font-semibold text-slate-200">
                          {s.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/90 bg-slate-900 px-2.5 py-1 rounded-md border border-cyan-500/10">
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
