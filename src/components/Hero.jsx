import profile from '../assets/hero.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-10 pt-28 bg-gradient-to-b from-slate-900 to-slate-800"
    >

      {/* Left */}

      <div className="animate-fadeIn">

        <h2 className="text-2xl text-cyan-400">
          Hello, I'm
        </h2>

        <h1 className="text-6xl font-bold mt-4">

          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Nikhila
          </span>

        </h1>

        <h2 className="text-3xl mt-6 font-bold text-white">
          FULL STACK DEVELOPER
        </h2>

        <p className="text-gray-300 mt-6 max-w-xl leading-8">
          Passionate Full Stack Developer focused on building responsive,
          modern and scalable web applications using MERN Stack.
        </p>

        {/* Buttons */}

        <div className="flex gap-6 mt-8">

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
            Resume
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex gap-6 mt-8 text-3xl">

          <a
            href="https://github.com/Nikhila068"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nikhilakodi/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      {/* Right */}

      <div>

        <img
          src={profile}
          alt="profile"
          className="w-[350px] rounded-full border-4 border-cyan-400 shadow-[0_0_40px_#22d3ee]"
        />

      </div>

    </section>
  )
}

export default Hero