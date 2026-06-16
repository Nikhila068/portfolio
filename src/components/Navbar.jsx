import { useState } from 'react'

function Navbar() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/70 backdrop-blur-lg shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">

          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-cyan-400 text-black px-4 py-2 rounded-lg"
        >
          Theme
        </button>

      </div>

    </nav>
  )
}

export default Navbar