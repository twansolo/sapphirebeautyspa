import { Button } from "@/app/components/ui/button"
import Image from 'next/image'

export default function HeroSectionOverlap() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-900">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Discover Your Radiance</h1>
          <p className="text-xl text-blue-100 mb-8">
            Indulge in luxurious treatments tailored for the modern individual at our boutique salon.
          </p>
          <div className="space-x-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">Book Appointment</Button>
            <Button variant="outline" className="text-white border-white hover:bg-blue-700">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 z-0">
        <Image
          src="/placeholder.png?height=800&width=800"
          alt="Elegant spa treatment"
          layout="fill"
          objectFit="cover"
          className="rounded-tl-full"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full opacity-20 filter blur-3xl"></div>
    </section>
  )
}