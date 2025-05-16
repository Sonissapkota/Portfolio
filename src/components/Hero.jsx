const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Hi, I'm Sonis Sapkota, <br />
          a Beginner Backend Developer
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Learning to build robust and efficient server-side solutions
        </p>
        <a
          href="#contact"
          className="inline-block border border-gray-800 text-gray-800 px-4 py-2 sm:px-6 sm:py-3 hover:bg-gray-800 hover:text-white transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
