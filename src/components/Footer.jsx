function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-center text-gray-400">

      <h2 className="text-2xl font-bold text-cyan-400">
        Nikhila Krishna Sri Kodi 
      </h2>

      <p className="mt-4">
        FULL Stack Developer
      </p>

      <div className="flex justify-center gap-6 mt-6">

        <a
          href="https://github.com/Nikhila068"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nikhilakodi/"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>

      </div>

      <p className="mt-6 text-sm">
        © 2026 All Rights Reserved.
      </p>

    </footer>
  )
}

export default Footer