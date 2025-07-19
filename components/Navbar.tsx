import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-x-[3px] font-bold text-xl">
          <span className="inline-block w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#F59E42"/>
              <path d="M21 11C21 9.34315 19.2091 8 17 8H15C12.7909 8 11 9.34315 11 11C11 12.6569 12.7909 14 15 14H17C19.2091 14 21 15.3431 21 17C21 18.6569 19.2091 20 17 20H15C12.7909 20 11 18.6569 11 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </span>
          ukraj
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#home" className="text-sm font-medium transition-colors hover:text-amber-500">
            Home
          </Link>
          <Link href="#skills" className="text-sm font-medium transition-colors hover:text-amber-500">
            Skills
          </Link>
          <Link href="#experience" className="text-sm font-medium transition-colors hover:text-amber-500">
            Experience
          </Link>
          <Link href="#education" className="text-sm font-medium transition-colors hover:text-amber-500">
            Education
          </Link>
          <Link href="#projects" className="text-sm font-medium transition-colors hover:text-amber-500">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-amber-500">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 