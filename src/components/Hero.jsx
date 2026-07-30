import profile from '../assets/hero.png'
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaFolderOpen, FaGraduationCap } from 'react-icons/fa'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-6 md:px-12 pt-32 pb-16 overflow-hidden bg-transparent max-w-6xl mx-auto"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Left Side: Content */}
      <div className="z-10 flex-1 animate-fadeIn text-center md:text-left max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono tracking-wide text-xs uppercase font-semibold mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for Opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Nikhila Kodi</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 text-slate-300 flex items-center justify-center md:justify-start gap-2">
          <span>Software Developer & ML Enthusiast</span>
        </h2>

        <p className="text-slate-400 mt-5 leading-relaxed text-sm md:text-base">
          Passionate about building responsive, high-performance web platforms and intelligent AI/ML solutions. Armed with core computer science fundamentals in C, Python, and Java alongside modern Web technologies.
        </p>

        {/* Highlight Stats Badges */}
        <div className="grid grid-cols-3 gap-3 my-8 max-w-md mx-auto md:mx-0">
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-3 text-center backdrop-blur-sm">
            <div className="flex justify-center text-cyan-400 text-lg mb-1"><FaFolderOpen /></div>
            <div className="text-xl font-bold text-white">3+</div>
            <div className="text-[11px] text-slate-400">Deployed Projects</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-3 text-center backdrop-blur-sm">
            <div className="flex justify-center text-blue-400 text-lg mb-1"><FaCode /></div>
            <div className="text-xl font-bold text-white">4+</div>
            <div className="text-[11px] text-slate-400">Core Languages</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-3 text-center backdrop-blur-sm">
            <div className="flex justify-center text-emerald-400 text-lg mb-1"><FaGraduationCap /></div>
            <div className="text-xl font-bold text-white">CS</div>
            <div className="text-[11px] text-slate-400">Undergraduate</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 px-6 py-3.5 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan-500/15 text-sm"
          >
            <span>Explore Projects</span>
            <FaArrowRight className="text-xs" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/80 text-slate-200 px-6 py-3.5 rounded-xl font-semibold hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-[1.02] transition-all duration-300 text-sm"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
          <a
            href="https://www.linkedin.com/in/nikhilakodi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 rounded-xl flex items-center justify-center hover:scale-105 transition-all duration-300"
            title="LinkedIn Profile"
            id="hero-linkedin"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://github.com/Nikhila068/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 rounded-xl flex items-center justify-center hover:scale-105 transition-all duration-300"
            title="GitHub Profile"
            id="hero-github"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>

      {/* Right Side: Profile Image */}
      <div className="z-10 flex-shrink-0 flex items-center justify-center">
        <div className="relative group">
          {/* Subtle glow background circle */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition duration-500"></div>
          
          <img
            src={profile}
            alt="Nikhila Krishna Sri Kodi"
            className="float w-[260px] sm:w-[300px] md:w-[340px] aspect-square object-cover rounded-full border-2 border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative transition-all duration-500 group-hover:scale-[1.02]"
            id="hero-profile-avatar"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero