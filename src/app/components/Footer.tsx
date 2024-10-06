import Link from "next/link"

import { MapPin, Clock } from "lucide-react"

export default function Footer() {
    return (
    <footer className="w-full py-6 bg-blue-900 text-white">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <span className="text-2xl font-bold mb-2">Sapphire Spa</span>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>123 Relaxation Ave, Serenity City</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 9am-8pm, Sun: 10am-6pm</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
    )
}