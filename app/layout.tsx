import type React from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const viewport = {
  themeColor: '#3b82f6',
}

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

import type { Metadata } from 'next';

// This will be used for the browser tab title and other metadata
export const metadata: Metadata = {
  title: "Sukraj Chaudhary | Fullstack Software Engineer | Nepal",
  description: "Fullstack Software Engineer from Nepal specializing in modern web technologies. Check out my portfolio for projects, skills, and experience in software development.",
  keywords: [
    "Sukraj Chaudhary",
    "Fullstack Software Engineer",
    "Web Developer Nepal",
    "Fullstack Developer Nepal",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Web Development Portfolio",
    "Software Engineer Portfolio",
    "Nepali Developer",
    "Remote Software Engineer",
    "Web Application Development",
    "Frontend Development",
    "Backend Development"
  ],
  authors: [{ name: 'Sukraj Chaudhary' }],
  creator: 'Sukraj Chaudhary',
  publisher: 'Sukraj Chaudhary',
  metadataBase: new URL('https://sukrajchaudhary.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3b82f6',
      },
    ],
  },
  manifest: '/site.webmanifest',
  // themeColor has been moved to viewport export
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sukraj Chaudhary | Portfolio',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'Sukraj Chaudhary | Portfolio',
    title: 'Sukraj Chaudhary | Portfolio',
    description: 'Software Engineer, Fullstack Developer, Engineer. Personal portfolio website showcasing my skills, experience, and projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sukraj Chaudhary | Portfolio',
    description: 'Software Engineer, Fullstack Developer, Engineer. Personal portfolio website showcasing my skills, experience, and projects.',
  },
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
