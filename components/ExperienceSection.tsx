import React from "react"
import { MotionSection } from "@/components/animations/motion-section"
import { FlowbiteTimeline, FlowbiteTimelineItem } from "@/components/flowbite-timeline"

const ExperienceSection = () => (
  <section id="experience" className="w-full py-12">
    <div className="container px-4 md:px-6">
      <MotionSection className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="section-heading">Experience</h2>
          <p className="max-w-[700px] text-muted-foreground ">
            My professional journey and work experience
          </p>
        </div>
      </MotionSection>
      <div className="mx-auto max-w-3xl pt-12">
        <FlowbiteTimeline>
          <FlowbiteTimelineItem
            title="Frontend Developer"
            organization="Quark InfoTech"
            date="Feb 2025 – Present · 6 mos | Kathmandu, Bāgmatī, Nepal · On-site"
            badges={["React.js", "Next.js", "Tailwind CSS", "RESTful APIs", "Performance Optimization", "Real-time Data", "E-commerce"]}
            link={{ text: "Zolpa Store (Live)", url: "https://zolpastore.com/" }}
          >
            <div className="font-semibold mb-1">Project: Zolpa Store (E-commerce)</div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Transitioned to full-time position on 21st February 2025 after successful internship</li>
              <li>Building scalable UI components, integrating APIs, and optimizing performance</li>
              <li>Collaborating with designers and backend engineers to deliver seamless UX</li>
              <li>Skills Learned: Production-level performance optimization, real-time data handling, and scalable frontend architecture</li>
              <li>Project URLs: <a href="https://zolpastore.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">zolpastore.com</a>, <a href="https://uat.zolpastore.com//" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">uat.zolpastor.com</a></li>
            </ul>
          </FlowbiteTimelineItem>
          <FlowbiteTimelineItem
            title="Frontend Developer (Intern)"
            organization="Quark InfoTech"
            date="Nov 2024 – Jan 2025 · 3 mos | Kathmandu, Bāgmatī, Nepal · On-site"
            badges={["React.js", "RESTful APIs", "Admin Dashboard", "Responsive Design", "Agile Workflows", "E-commerce"]}
          >
            <div className="font-semibold mb-1">Project: Ultima Lifestyle Admin (E-commerce)</div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Worked on the Ultima Lifestyle Admin panel using React.js and RESTful APIs</li>
              <li>Developed UI components and implemented responsive designs</li>
              <li>Skills Learned: Admin dashboard development, API integration, and agile workflows</li>
            </ul>
          </FlowbiteTimelineItem>
          <FlowbiteTimelineItem
            title="Frontend Developer (Intern)"
            organization="Panacea Solution Pvt. Ltd."
            date="Sep 2024 – Dec 2024 · 4 mos | Kathmandu, Bāgmatī, Nepal · Hybrid"
            badges={["React.js", "HTML", "CSS", "JavaScript", "Git", "Agile Methodologies", "School Management System"]}
          >
            <div className="font-semibold mb-1">Project: School Management System</div>
            <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside">
              <li>Developed responsive web pages for a school management system using HTML, CSS, JavaScript, and React.js</li>
              <li>Collaborated with teams to implement client-facing features</li>
              <li>Gained practical experience with Git and agile methodologies</li>
              <li>Skills Learned: React.js, building scalable UIs, team collaboration</li>
            </ul>
          </FlowbiteTimelineItem>
        </FlowbiteTimeline>
      </div>
    </div>
  </section>
)

export default ExperienceSection 