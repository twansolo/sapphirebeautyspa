import { Button } from "@/app/components/ui/button"
import Image from "next/legacy/image"

export default function HeroSectionOverlap() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-blue-900">
      <div className="container mx-auto px-4 py-2 lg:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Sapphire Beauty Spa</h1>
          <p className="text-xl text-blue-100 mb-8">
            Sapphire is a day spa in Cedar Rapids that specializes in eyelash extensions, permanent makeup, body waxing & Korean facials.
          </p>
          <p className="text-xl text-blue-100 mb-8 hidden lg:block">
            Check out our portfolio today & feel free to contact us with any questions.
          </p>
          <div className="space-x-4">
            <Button variant="default">Book Appointment</Button>
            <Button variant="default">Explore Services</Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 z-0">
        <Image
          src="/hero.jpg?height=800&width=800"
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