const certificates = [
  'AI for Management',
  'Virtual & Augmented Reality',
  'SmartBridge Internship',
]

function Certificates() {
  return (
    <section className="py-32 px-10 bg-slate-800">

      <h2 className="text-4xl font-bold text-center text-cyan-400">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-6xl mx-auto">

        {certificates.map((item, index) => (

          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-500"
          >

            <h3 className="text-xl font-semibold">
              {item}
            </h3>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Certificates