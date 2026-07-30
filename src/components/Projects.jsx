import { useState } from 'react'
import emotionDetectionImg from '../assets/emotion_detection.jpg'
import neuroLensImg from '../assets/neurolens_cover.jpg'
import bookNestImg from '../assets/booknest.jpg'
import { FiArrowUpRight, FiX, FiInfo, FiLayers } from 'react-icons/fi'

const projects = [
  {
    id: 'emotion-detection',
    category: 'ai',
    categoryName: 'AI & Machine Learning',
    title: 'Emotion Detection Platform',
    image: emotionDetectionImg,
    desc: 'An AI-powered web platform that analyzes text or facial inputs to accurately detect and visualize emotions in real time. Built to provide direct insights into user sentiments with interactive graphical analytics.',
    details: [
      'Real-time sentiment and sentiment intensity visualization',
      'Interactive Streamlit UI with multi-format input parsing',
      'Integrates trained ML classifier models for deep textual analysis',
      'Provides actionable breakdown of primary and secondary emotions'
    ],
    liveLink: 'https://nikhila068-emotion-detection-platform-app-muytfe.streamlit.app/',
    tags: ['Python', 'Streamlit', 'Machine Learning', 'AI Models', 'Data Visualization'],
  },
  {
    id: 'neurolens',
    category: 'ai',
    categoryName: 'AI & Data Science',
    title: 'NeuroLens Platform',
    image: neuroLensImg,
    desc: 'A cutting-edge web platform that leverages advanced AI models to analyze and visualize neurological data, providing researchers and clinicians with actionable insights into brain activity and cognitive functions.',
    details: [
      'Deep neural network analysis for complex neurological data',
      'Interactive brain activity visualization dashboard',
      'Integrated TensorFlow/Keras predictive pipeline',
      'Custom web interface tailored for analytical clarity'
    ],
    liveLink: 'https://nuerolens.netlify.app/',
    tags: ['Python', 'TensorFlow', 'JavaScript', 'Keras', 'Data Visualization'],
  },
  {
    id: 'booknest',
    category: 'web',
    categoryName: 'Full Stack Web',
    title: 'BookNest Platform',
    image: bookNestImg,
    desc: 'A comprehensive web platform for book enthusiasts, offering personalized recommendations, community discussions, and seamless reading experiences.',
    details: [
      'Full-stack MERN architecture with clean REST APIs',
      'Personalized book discovery and wishlist management',
      'Responsive React UI with smooth navigation and state management',
      'Scalable MongoDB collection for titles, reviews, and reader profiles'
    ],
    liveLink: 'https://booksplot.netlify.app/',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS']
  }
]

function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all ${
              filter === 'ai'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            AI & ML Solutions
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all ${
              filter === 'web'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Full-Stack Web Apps
          </button>
        </div>

        {/* Projects Grid/List */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="backdrop-blur-md bg-slate-900/40 border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl hover:border-slate-700/80 transition-all duration-500 flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 md:p-8 group"
              id={`project-card-${project.id}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/40 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[240px] md:h-[280px] object-cover transition-all duration-700 group-hover:scale-105"
                  id={`project-image-${project.id}`}
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-[10px] font-mono px-3 py-1 rounded-full border border-cyan-500/20">
                  {project.categoryName}
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-950/80 text-cyan-400/90 text-xs px-3 py-1 rounded-lg font-mono border border-cyan-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/60">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition duration-300 shadow-md shadow-cyan-500/15 text-xs"
                    id={`live-demo-btn-${project.id}`}
                  >
                    <span>Launch Live Demo</span>
                    <FiArrowUpRight className="text-sm" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition"
                  >
                    <FiInfo className="text-sm text-cyan-400" />
                    <span>Quick Info</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white bg-slate-950 p-2 rounded-full border border-slate-800 transition"
              >
                <FiX className="text-lg" />
              </button>

              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase mb-2">
                <FiLayers />
                <span>{selectedProject.categoryName}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedProject.desc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">Key Highlights & Architecture</h4>
                <ul className="flex flex-col gap-2">
                  {selectedProject.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2.5">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="bg-slate-950 text-cyan-400 text-xs px-3 py-1 rounded-lg border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold transition"
                >
                  Close
                </button>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs hover:from-cyan-400 hover:to-blue-500 transition shadow-md"
                >
                  <span>Open Application</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Projects
