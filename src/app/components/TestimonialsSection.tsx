import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Emma S.",
      image: "/placeholder.png?height=100&width=100&text=Emma",
      rating: 5,
      text: "The lash extensions were perfect! Natural-looking and long-lasting. I'll definitely be coming back for more treatments.",
    },
    {
      name: "Michael R.",
      image: "/placeholder.png?height=100&width=100&text=Michael",
      rating: 5,
      text: "From the moment I walked in, I felt pampered. The massage was heavenly, and the facial left my skin glowing. A true luxury experience!",
    },
    {
      name: "Sophia L.",
      image: "/placeholder.png?height=100&width=100&text=Sophia",
      rating: 5,
      text: "Absolutely amazing experience! The staff was professional and attentive. I left feeling refreshed and rejuvenated. Highly recommend!",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-24 bg-gradient-to-b from-blue-500 to-blue-900 relative overflow-hidden">
      <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-blue-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute right-1/3 bottom-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}