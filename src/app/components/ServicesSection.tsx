import Image from "next/image"
import { Button } from "@/app/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      title: "Luxurious Massages",
      description: "Unwind with our expertly crafted massage therapies.",
      image: "/placeholder.png?height=400&width=400",
    },
    {
      title: "Rejuvenating Facials",
      description: "Revitalize your skin with cutting-edge facial treatments.",
      image: "/placeholder.png?height=400&width=400",
    },
    {
      title: "Stunning Lash Extensions",
      description: "Enhance your natural beauty with premium lash services.",
      image: "/placeholder.png?height=400&width=400",
    },
  ]

  return (
    <section id="services" className="w-full py-24 bg-gray-400 relative overflow-hidden">
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Signature Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}