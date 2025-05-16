import { Github, Linkedin, Twitter } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-medium mb-12">Contact Me</h2>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white/80 border border-gray-200 p-8">
            <h3 className="text-xl font-medium mb-6">Connect With Me</h3>
            <p className="text-gray-700 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm
              always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex space-x-6 items-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 hover:border-gray-500 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 hover:border-gray-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 hover:border-gray-500 transition-all"
                aria-label="X / Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8 text-gray-600">
              <p>
                Prefer email? Reach me at:{" "}
                <a href="mailto:john.doe@example.com" className="hover:underline">
                  john.doe@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;