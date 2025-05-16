const About = () => {
  return (
    <section className="py-16 md:py-40 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">About Me</h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              I'm a passionate backend developer with a focus on building efficient and scalable server-side applications.
              With a background in computer science, I enjoy solving complex problems and creating robust systems.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Currently, I'm expanding my knowledge in distributed systems and cloud architecture while working on personal
              projects to strengthen my skills in backend development.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Background</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              I hold a degree in Computer Science and have been fascinated by backend technologies since my early
              programming days. My journey began with building simple scripts and has evolved to developing complex
              distributed systems.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring
              aspiring developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
