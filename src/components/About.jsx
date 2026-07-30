import { FaAward, FaUserCheck, FaGraduationCap } from 'react-icons/fa'

const certificates = [
  'AI for Management',
  'Virtual & Augmented Reality',
  'SmartBridge Internship',
]

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-900/10">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Bio Card */}
        <div className="bg-slate-900/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-800/80 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 text-xl shrink-0">
              <FaUserCheck />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Who I Am</h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                I am an enthusiastic Computer Science student and aspiring Software Developer, driven by a love for writing clean code and creating user-centric digital solutions. I specialize in core computing fundamentals and modern web styling.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4 text-sm md:text-base">
                With a robust academic foundation in computer science and practical exposure through hands-on projects, I enjoy bridging the gap between elegant styling and logical problem-solving.
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid: Education and Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Block */}
          <div className="bg-slate-900/20 backdrop-blur-md p-8 rounded-3xl border border-slate-900/80 flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 text-xl shrink-0">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Education</h3>
              <p className="text-slate-200 font-semibold text-sm">Bachelor of Computer Science</p>
              <p className="text-slate-400 text-xs mt-1">Student & Developer</p>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Focusing on programming structures, algorithms, database principles, and full-stack architecture modules.
              </p>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="bg-slate-900/20 backdrop-blur-md p-8 rounded-3xl border border-slate-900/80 flex gap-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 text-xl shrink-0">
              <FaAward />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3">Certifications</h3>
              <div className="flex flex-col gap-2.5">
                {certificates.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2.5 text-slate-300 text-sm hover:text-cyan-400 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About