'use client'

import { useState } from 'react'
import Image from "next/legacy/image"
import { Dialog, DialogContent, DialogTrigger } from "@/app/components/ui/dialog"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/placeholder.png?height=600&width=800&text=Spa+Interior', alt: 'Spa Interior' },
  { src: '/placeholder.png?height=600&width=800&text=Massage+Room', alt: 'Massage Room' },
  { src: '/placeholder.png?height=600&width=800&text=Facial+Treatment', alt: 'Facial Treatment' },
  { src: '/placeholder.png?height=600&width=800&text=Lash+Extensions', alt: 'Lash Extensions' },
  { src: '/placeholder.png?height=600&width=800&text=Relaxation+Area', alt: 'Relaxation Area' },
  { src: '/placeholder.png?height=600&width=800&text=Product+Display', alt: 'Product Display' },
]

export default function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="w-full py-24 bg-gradient-to-b from-blue-500/90 to-blue-500 relative overflow-hidden">
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative h-64 cursor-pointer overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-transparent border-none">
                <div className="relative">
                  <Image
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}