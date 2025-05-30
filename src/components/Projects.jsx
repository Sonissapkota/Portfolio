const Projects = () => {
  const projects = [
    {
       title: "Full-Featured E-commerce Backend API with NestJS & PostgreSQL",
       description:
        "Developed a robust, scalable backend for an e-commerce application using NestJS and TypeScript, implementing RESTful APIs with PostgreSQL for efficient data management and retrieval.",
       tags: ["NestJS", "TypeScript", "PostgreSQL"],
       link: "#",
    },
    // {
    //   title: "Data Processing Pipeline",
    //   description:
    //     "A Python-based data processing pipeline that extracts, transforms, and loads data from various sources.",
    //   tags: ["Python", "Pandas", "SQL"],
    //   link: "#",
    // },
    // {
    //   title: "Authentication Microservice",
    //   description: "A secure authentication microservice with JWT implementation and role-based access control.",
    //   tags: ["Node.js", "JWT", "Security"],
    //   link: "#",
    // },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-white/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-medium mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 hover:border-gray-400 p-6 transition-all bg-white/80">
              <h3 className="text-xl font-medium mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs text-gray-600 px-2 py-1 bg-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-gray-800 hover:text-gray-600 hover:underline underline-offset-4 text-sm font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;