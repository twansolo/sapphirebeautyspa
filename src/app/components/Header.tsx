'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-opacity-90 backdrop-blur-sm shadow-md' : 'bg-opacity-60'
    }`}
    style={{
      backgroundImage: `url('/marble-texture.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link className="flex items-center space-x-2" href="/">
            <span className="text-2xl font-bold text-blue-600 drop-shadow-md">Sapphire Spa</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'Services', 'Gallery', 'Testimonials', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                href={`/#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button onClick={() => {window.location.href = "#book"}} className="bg-blue-600 text-white hover:bg-blue-700 shadow-md">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}