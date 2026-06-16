import profile from '../assets/hero.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 pt-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >

      {/* Background Glow Effects */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-20"></div>

      <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-500 rounded-full blur-[150px] opacity-20"></div>

      {/* Left Side */}

      <div className="z-10 animate-fadeIn">

        <h2 className="text-2xl text-cyan-400 font-semibold">
          Hello, I'm
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">

          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Nikhila Krishna Sri Kodi
          </span>

        </h1>

        <h2 className="text-3xl mt-6 font-bold text-white">
          Full Stack Developer
        </h2>

        <p className="text-gray-300 mt-6 max-w-xl leading-8 text-lg">

          Passionate MERN Stack Developer focused on building
          modern, responsive and scalable web applications.

          Experienced in React.js, Node.js, Express.js
          and MongoDB.

        </p>

        {/* Buttons */}

        <div className="flex flex-wrap gap-6 mt-8">

          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-cyan-300 transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Download Resume
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex gap-6 mt-8 text-4xl">

          <a
            href="https://github.com/Nikhila068"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nikhilakodi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      {/* Right Side */}

      <div className="z-10">

        <img
          src={profile}
          alt="profile"
          className="float w-[300px] md:w-[400px] rounded-full border-4 border-cyan-400 shadow-[0_0_60px_#22d3ee] hover:scale-105 transition duration-500"
        />

      </div>

    </section>
  )
}

export default Hero