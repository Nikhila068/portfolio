import { useState } from 'react'
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaGithub, FaCopy, FaCheck } from 'react-icons/fa'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const emailAddress = 'kodinikhilakrishnasri@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-white tracking-tight">
            Contact Me
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-slate-900/20 backdrop-blur-md rounded-3xl border border-slate-800/80 overflow-hidden shadow-xl grid md:grid-cols-2">
          
          {/* Quick Info Block */}
          <div className="p-8 md:p-10 bg-slate-900/40 border-b md:border-b-0 md:border-r border-slate-800/60 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-slate-300/90 text-sm md:text-base leading-relaxed mb-8" id="contact-description-text">
                I'm always open to discussing new opportunities, creative collaborations, or just connecting.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center border border-cyan-500/20 text-sm shrink-0 mt-0.5">
                    <FaEnvelope />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] text-slate-500 uppercase font-mono">Email Address</p>
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-mono transition"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <FaCheck className="text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <FaCopy />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a href={`mailto:${emailAddress}`} className="text-slate-200 hover:text-cyan-400 transition text-sm break-all font-medium mt-0.5 block">
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center border border-cyan-500/20 text-sm shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-mono">Location</p>
                    <p className="text-slate-200 text-sm font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/nikhilakodi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-slate-300 hover:text-cyan-400 transition font-mono uppercase tracking-wider group"
              >
                <FaLinkedin className="text-base text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile &rarr;</span>
              </a>

              <a
                href="https://github.com/Nikhila068/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-slate-300 hover:text-cyan-400 transition font-mono uppercase tracking-wider group"
              >
                <FaGithub className="text-base text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>GitHub Profile &rarr;</span>
              </a>
            </div>
          </div>

          {/* Form Block */}
          <div className="p-8 md:p-10 relative bg-slate-950/20">
            {submitted ? (
              <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-fadeIn z-10">
                <FaCheckCircle className="text-emerald-400 text-5xl mb-4 animate-bounce" />
                <h4 className="text-xl font-bold text-white mb-2">Message Received!</h4>
                <p className="text-slate-300 text-xs max-w-xs leading-relaxed">
                  Thank you for reaching out, Nikhila will review your message and reply promptly.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-cyan-500/50 text-slate-200 text-sm outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-cyan-500/50 text-slate-200 text-sm outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Message</label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-cyan-500/50 text-slate-200 text-sm outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3.5 rounded-xl hover:from-cyan-400 hover:to-blue-500 hover:scale-[1.01] transition-all duration-300 text-sm shadow-md cursor-pointer mt-1"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
