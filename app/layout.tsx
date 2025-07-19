import type React from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Sukraj Chaudhary | Portfolio",
  description: "Software Engineer, Fullstack Developer, Engineer. Personal portfolio website showcasing my skills, experience, and projects.",
  keywords: [
    "Sukraj Chaudhary",
    "Software Engineer",
    "Fullstack Developer",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Frontend Developer",
    "Backend Developer",
    "Projects",
    "Experience",
    "Skills",
    "Education",
    "Contact"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
