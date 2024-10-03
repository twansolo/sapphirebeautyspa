import Link from "next/link"
import { Scissors } from "lucide-react"

export default function Header() {
    return (<header className="px-4 lg:px-6 h-16 flex items-center bg-blue-900 text-white">
        <Link className="flex items-center justify-center" href="#">
          <Scissors className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">Sapphire Salon</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-200 transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-blue-200 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-200 transition-colors" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:text-blue-200 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>)
}