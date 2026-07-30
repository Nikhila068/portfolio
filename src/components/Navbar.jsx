import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 pt-4 md:pt-6 transition-all duration-300">
      <nav 
        className={`mx-auto max-w-5xl rounded-2xl md:rounded-3xl transition-all duration-300 flex justify-between items-center px-6 md:px-8 py-3 md:py-3.5 bg-slate-950/60 backdrop-blur-md border ${
          scrolled 
            ? 'border-slate-800/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] bg-slate-950/80' 
            : 'border-slate-800/40'
        }`}
      >
        {/* Logo / Brand Name */}
        <a href="#home" className="text-xl font-black tracking-tight text-white flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse group-hover:scale-125 transition-transform"></span>
          NK
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href} 
                className={`transition-colors duration-200 relative py-1 ${
                  activeSection === link.id
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-fadeIn"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:text-cyan-300 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggler */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none transition-colors duration-200 p-1"
          aria-label="Toggle menu"
          id="mobile-nav-toggle"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden fixed top-24 left-6 right-6 p-6 rounded-2xl bg-slate-950/95 border border-slate-800/80 backdrop-blur-xl shadow-2xl transition-all duration-300 transform origin-top ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-medium text-slate-300 text-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className={`block py-2 rounded-xl transition ${
                  activeSection === link.id ? 'text-cyan-400 font-bold bg-slate-900/50' : 'hover:text-cyan-400'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col gap-4">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3 rounded-xl text-sm shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar