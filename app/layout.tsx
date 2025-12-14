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
  description: "Fullstack Software Engineer from Nepal specializing in MERN Stack (MongoDB, Express.js, React, Node.js) and Golang development. Experienced in building scalable web applications, REST APIs, microservices, and cloud solutions. Check out my portfolio for projects, skills, and experience.",
  keywords: [
    "Sukraj Chaudhary",
    "Fullstack Software Engineer",
    "Web Developer Nepal",
    "Fullstack Developer Nepal",
    "MERN Stack Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "React Developer",
    "React.js Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Golang Developer",
    "Go Developer",
    "Go Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "REST API Developer",
    "GraphQL Developer",
    "Microservices Developer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Software Engineer Nepal",
    "Web Development Portfolio",
    "Software Engineer Portfolio",
    "Nepali Developer",
    "Remote Software Engineer",
    "Web Application Development",
    "Database Developer",
    "PostgreSQL Developer",
    "MySQL Developer",
    "Redis Developer",
    "Docker Developer",
    "Kubernetes Developer",
    "AWS Developer",
    "Cloud Developer",
    "Git Developer",
    "Agile Developer"
  ],
  authors: [{ name: 'Sukraj Chaudhary' }],
  creator: 'Sukraj Chaudhary',
  publisher: 'Sukraj Chaudhary',
  metadataBase: new URL('https://www.sukraj231.com.np'),
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
    locale: 'en_US',
    url: 'https://www.sukraj231.com.np',
    siteName: 'Sukraj Chaudhary | Portfolio',
    title: 'Sukraj Chaudhary | Fullstack MERN & Golang Developer',
    description: 'Fullstack Software Engineer specializing in MERN Stack (MongoDB, Express.js, React, Node.js) and Golang. Experienced in building scalable web applications, REST APIs, microservices, and cloud solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sukraj Chaudhary - Fullstack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sukraj Chaudhary | Fullstack MERN & Golang Developer',
    description: 'Fullstack Software Engineer specializing in MERN Stack (MongoDB, Express.js, React, Node.js) and Golang. Experienced in building scalable web applications, REST APIs, microservices, and cloud solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sukraj Chaudhary',
    url: 'https://www.sukraj231.com.np',
    jobTitle: 'Fullstack Software Engineer',
    description: 'Fullstack Software Engineer specializing in MERN Stack (MongoDB, Express.js, React, Node.js) and Golang development.',
    knowsAbout: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Golang',
      'JavaScript',
      'TypeScript',
      'Web Development',
      'Full Stack Development',
      'REST API',
      'Microservices',
    ],
    sameAs: [
      'https://github.com/sukrajchaudhary',
      'https://www.linkedin.com/in/sukrajchaudhary',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
