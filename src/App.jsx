import "./App.css";

function App() {
  return (
    <div className="bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <img
            src="https://via.placeholder.com/180"
            alt="Profile"
            className="w-44 h-44 rounded-full mx-auto mb-6 border-4 border-cyan-400"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Catherine Orbe
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Front-End Developer specializing in React, Tailwind CSS, and
            responsive website development.
          </p>

          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition"
          >
            Hire Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          I am a Front-End Developer passionate about creating modern,
          responsive, and user-friendly websites. I enjoy transforming ideas
          into beautiful digital experiences using React, JavaScript, and
          Tailwind CSS.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "Responsive Design",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-5 rounded-lg text-center hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Project"
              className="w-full"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-3">
                Portfolio Website
              </h3>

              <p className="text-gray-400 mb-4">
                Modern responsive portfolio built using React and Tailwind CSS.
              </p>

              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Project"
              className="w-full"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-3">
                Landing Page
              </h3>

              <p className="text-gray-400 mb-4">
                High-converting landing page for business promotion.
              </p>

              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Project"
              className="w-full"
            />

            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-3">
                Business Website
              </h3>

              <p className="text-gray-400 mb-4">
                Responsive website designed for small businesses.
              </p>

              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                Website Development
              </h3>
              <p className="text-gray-400">
                Modern and responsive websites for businesses and individuals.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                Landing Pages
              </h3>
              <p className="text-gray-400">
                Beautiful pages designed to increase conversions.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-3">
                Website Maintenance
              </h3>
              <p className="text-gray-400">
                Bug fixes, updates, and website improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-8">
          Need a website or want to improve your online presence?
          Let's discuss your project.
        </p>

        <a
          href="mailto:your@email.com"
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition"
        >
          Contact Me
        </a>
      </section>

    </div>
  );
}

export default App;