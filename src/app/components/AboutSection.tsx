import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/app/components/ui/card"

const employees = [
  {
    id: "emma-thompson",
    name: "Emma Thompson",
    role: "Lead Massage Therapist",
    image: "/placeholder.png?height=300&width=300&text=Emma",
    description: "With over 10 years of experience, Emma specializes in deep tissue and hot stone massages. Her healing touch has helped countless clients find relief and relaxation."
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Skincare Specialist",
    image: "/placeholder.png?height=300&width=300&text=Michael",
    description: "Michael is our expert in facial treatments and skincare. His knowledge of the latest beauty technologies ensures our clients always receive cutting-edge treatments."
  },
  {
    id: "sophia-rodriguez",
    name: "Sophia Rodriguez",
    role: "Lash Extension Artist",
    image: "/placeholder.png?height=300&width=300&text=Sophia",
    description: "Sophia's precision and artistic eye make her our go-to lash expert. She creates stunning, customized lash looks that enhance each client's natural beauty."
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Wellness Coach",
    image: "/placeholder.png?height=300&width=300&text=David",
    description: "As our wellness coach, David helps clients achieve holistic well-being. He combines nutrition advice with stress-reduction techniques for a comprehensive approach to health."
  }
]

export default function AboutSection() {
  return (
    <section id="team" className="w-full py-24 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
      <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-blue-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute right-1/3 bottom-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Meet Our Team</h2>
        <p className="text-xl text-blue-100 text-center mb-16 max-w-3xl mx-auto">
          At Sapphire Spa, our team of skilled professionals is dedicated to providing you with the ultimate relaxation and beauty experience. Each member brings a unique set of skills and a passion for wellness to ensure your visit exceeds expectations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {employees.map((employee) => (
            <Link href={`/team/${employee.id}`} key={employee.id}>
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none transition-transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={employee.image}
                      alt={employee.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">{employee.name}</h3>
                  <p className="text-blue-200 text-center mb-4">{employee.role}</p>
                  <p className="text-blue-100 text-center text-sm">{employee.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export { employees }