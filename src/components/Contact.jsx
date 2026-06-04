function Contact() {
  return (
    <section id="contact" className="py-24 px-10">

      <h2 className="text-4xl font-bold text-center text-cyan-400">
        Contact Me
      </h2>

      <form className="max-w-3xl mx-auto mt-16 flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-xl bg-slate-800 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-xl bg-slate-800 outline-none"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          className="p-4 rounded-xl bg-slate-800 outline-none"
        ></textarea>

        <button
          className="bg-cyan-400 text-black py-4 rounded-xl font-bold"
        >
          Send Message
        </button>

      </form>

    </section>
  )
}

export default Contact