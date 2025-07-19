import React from "react"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { MotionSection } from "@/components/animations/motion-section"

const projects = [
  {
    id: 10,
    title: "JSbin Compiler",
    date: "Apr 2023 - May 2023",
    description: "Interactive web-based compiler for HTML, CSS, and JavaScript. Features real-time code editing, live preview, and instant feedback. Supports multiple code panels for seamless workflow. Ideal for learning, prototyping, and sharing code snippets.",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1721918520/x9m4ptze2alwqinhbjch.png",
    tags: ["React Js", "Redux"],
    category: "web app",
    github: "", // Add if available
    webapp: "", // Add if available
  },
  {
    id: 9,
    title: "Chat App",
    date: "Jun 2023 - Jul 2023",
    description: "A real-time chat application supporting instant messaging. Built with RESTful API, WebSocket, and Socket.io for seamless communication. Features user authentication, group chats, and message history. Designed for fast, reliable, and interactive conversations.",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1720170659/ya7yo74xgmgp05k5nyui.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    category: "web app",
    github: "https://github.com/Sukrajchaudhary/Mern-Chat-App",
    webapp: "https://sukrajchatapp.netlify.app/",
  },
  {
    id: 1,
    title: "E-commerce",
    description: "A full-stack MERN e-commerce platform for seamless product browsing and purchasing. Includes user authentication, product management, and secure checkout. Features order tracking, reviews, and admin dashboard. Optimized for performance and user experience.",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1720171341/i91t5iihqjafsv2nco4a.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux", "NodeMailer"],
    category: "web app",
    github: "https://github.com/Sukrajchaudhary/Sastobajar",
    webapp: "https://sastobajar.netlify.app/",
  },
  {
    id: 5,
    title: "Appoinment Booking",
    date: "Jun 2021",
    description: "Appointment booking web app with Google login and calendar integration. Users can schedule, view, and manage appointments easily. Features automated reminders, availability management, and secure authentication. Designed for clinics, salons, and service providers.",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1720172214/f2qwnx4hi81pijxn8o9r.png",
    tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
    category: "web app",
    github: "https://github.com/Sukrajchaudhary/HMS",
    webapp: "https://sukrajhms.netlify.app/",
  },
  {
    id: 6,
    title: "Blog App",
    description: "A blog application built with React and Breaking Bad API. Allows users to search and display character information. Features responsive design, fast search, and engaging UI. Great for fans and learners exploring API integration.",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1720171690/euy3bnrxz8xeyqaiy1ai.png",
    tags: ["React Js", "API", "Node JS", "Mongo DB"],
    category: "web app",
    github: "https://github.com/Sukrajchaudhary/MernINTREN",
    webapp: "https://sukrajblog.netlify.app/",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="w-full py-12 bg-background dark:bg-zinc-950">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="section-heading">Projects</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Some of my notable projects and work
          </p>
        </div>
      </div>
      {/* Responsive two-column grid of cards */}
      <div className="grid gap-8 pt-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <MotionSection key={project.id}>
            <article
              className="rounded-xl border-2 border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-row items-start gap-4 p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <a href={project.webapp || project.github || '#'} className="block shrink-0">
                <img
                  alt={project.title}
                  src={project.image}
                  className="size-32 sm:size-36 md:size-40 rounded-lg object-cover border border-gray-200 dark:border-zinc-800"
                  loading="lazy"
                />
              </a>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-medium sm:text-lg mb-1">
                    <a
                      href={project.webapp || project.github || '#'}
                      className="hover:underline text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="badge-outline"/>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4 mb-2">
                    {project.description}
                  </p>
                  {project.date && (
                    <div className="text-xs text-muted-foreground mt-1">{project.date}</div>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-3">
                  {project.github && project.github !== "" && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-400"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {project.webapp && project.webapp !== "" && (
                    <Link
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-400"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </MotionSection>
        ))}
      </div>
    </div>
  </section>
)

export default ProjectsSection 