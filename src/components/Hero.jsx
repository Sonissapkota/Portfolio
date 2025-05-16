const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Hi, I&apos;m Sonis Sapkota, <br />a Beginner Backend Developer
          </h2>
          <p className="text-lg text-gray-700 mb-8">Building robust and efficient server-side solutions</p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 border border-gray-400 text-gray-800 hover:border-gray-600 transition-all"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
