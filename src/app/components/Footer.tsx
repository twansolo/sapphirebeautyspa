import Link from "next/link"

import { MapPin, Clock } from "lucide-react"

export default function Footer() {
    return (
    <footer className="w-full py-6 bg-gradient-to-b from-blue-900 to-black/90 text-white">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
    )
}