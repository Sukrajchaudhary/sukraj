import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Sukraj {" "}<span className="text-amber-500">Chaudhary</span>
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