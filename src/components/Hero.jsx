const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-20 pt-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Hi, I'm Sonis Sapkota, <br />
          a Beginner Backend Developer
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Learning to build robust and efficient server-side solutions
        </p>
        <a
          href="#contact"
          className="inline-block border border-gray-800 text-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
