import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'

const projects = [
  {
    title: 'BookNest',
    image: project1,
    desc: 'Online bookstore MERN stack application.',
  },

  {
    title: 'Portfolio Website',
    image: project2,
    desc: 'Modern responsive developer portfolio.',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-10 bg-slate-800">

      <h2 className="text-4xl font-bold text-center text-cyan-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-500"
          >

            <img
              src={project.image}
              alt="project"
              className="w-full"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {project.desc}
              </p>

              <div className="flex gap-4 mt-6">

  <a
    href="https://github.com/"
    target="_blank"
    className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
  >
    GitHub
  </a>

  <a
    href="https://your-live-demo-link.com"
    target="_blank"
    className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
  >
    Live Demo
  </a>
</div>            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects