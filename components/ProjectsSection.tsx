import React from "react"
import { Github, ExternalLink } from "lucide-react"
import { MotionSection } from "@/components/animations/motion-section"
import Image from "next/image"

const projects = [
  {
    id: 2,
    title: "JSbin Compiler",
    date: "Apr 2023 - May 2023",
    description: "Interactive web-based compiler for HTML, CSS, and JavaScript with real-time code editing and live preview.",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1721918520/x9m4ptze2alwqinhbjch.png",
    tags: ["React", "Redux"],
    category: "web app",
    github: "",
    webapp: ""
  },
  {
    id: 3,
    title: "Payitforwardjpn",
    date: "2025",
    description: "E-commerce platform dedicated to social good, enabling customers to make a difference with every purchase.",
    image: "/images/payit.png",
    tags: ["React", "API", "MongoDB"],
    category: "web app",
    webapp: "https://payitforwardjpn.com",
    featured: true
  },
  {
    id: 4,
    title: "Zolpastore",
    date: "2025",
    description: "Modern e-commerce platform featuring a comprehensive product catalog and seamless shopping experience.",
    image: "/images/zolpa.png",
    tags: ["React", "API", "MongoDB"],
    category: "web app",
    webapp: "https://zolpastore.com"
  },
  {
    id: 5,
    title: "Ultima Lifestyle",
    date: "2024",
    description: "Elegant e-commerce website showcasing premium lifestyle products with a refined user experience.",
    image: "/images/ultima.png",
    tags: ["React", "API", "MongoDB"],
    category: "web app",
    webapp: "https://ultima.com.np/"
  },
  {
    id: 7,
    title: "Appointment Booking",
    date: "Jun 2021",
    description: "Comprehensive booking system with Google authentication and calendar integration for efficient scheduling.",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1720172214/f2qwnx4hi81pijxn8o9r.png",
    tags: ["React", "AWS Auth", "Node"],
    category: "web app",
  }
]

const ProjectsSection = () => (
  <section id="projects" className="w-full py-12 md:py-16 bg-background dark:bg-zinc-950">
    <div className="container px-4 md:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          My Projects
        </h2>
        <p className="text-muted-foreground">
          A collection of my recent work and projects
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <MotionSection 
            key={project.id}
            className="group w-full h-full"
          >
            {/* Wrapping the card with anchor tag */}
            {project.webapp ? (
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row h-full p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="lg:w-1/3 w-full h-48 lg:h-auto overflow-hidden rounded-lg mb-4 lg:mb-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col ml-0 lg:ml-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 ml-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.webapp && (
                          <a 
                            href={project.webapp} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto mb-2">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.date && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {project.date}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ) : (
              <div className="flex flex-col lg:flex-row h-full p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
                <div className="lg:w-1/3 w-full h-48 lg:h-auto overflow-hidden rounded-lg mb-4 lg:mb-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col ml-0 lg:ml-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 ml-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.date && (
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {project.date}
                    </div>
                  )}
                </div>
              </div>
            )}
          </MotionSection>
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsSection
