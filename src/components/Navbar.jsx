import { useState } from 'react'

function Navbar() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-cyan-400">
          Portfolio
        </h1>

        {/* Navbar Links */}

        <ul className="hidden md:flex gap-8 text-lg">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Theme Button */}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-cyan-400 text-black px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          Theme
        </button>

      </div>

    </nav>
  )
}

export default Navbar