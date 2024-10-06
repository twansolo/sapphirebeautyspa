import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/app/components/ui/card"

const employees = [
  {
    id: "emi-abney",
    name: "Emi Abney",
    role: "Permanent Makeup | Tattoo | Lash Extension Artist",
    image: "/b42121318c4f88801c44e8881a95e0e9.jpeg?height=300&width=300&text=Emma",
    description: "",
  },
  {
    id: "anna-hudson",
    name: "Anna Hudson",
    role: "Lash Extension Artist",
    image: "/33980fc91ea88d419eac929322be2636.jpeg?height=300&width=300&text=Michael",
    description: "",
  },
  {
    id: "colby-jordan",
    name: "Colby Jordan",
    role: "Owner | Lash Extension Artist",
    image: "/3358305e63eb95643aa0a0d1441e366d.jpeg?height=300&width=300&text=Sophia",
    description: "Hi, I'm Colby, owner, esthetician, permanent makeup artist, and trainer behind Sapphire. I've been doing lash extensions for 8+ years, and have enjoyed every minute of it. I am continually taking new classes to better my techniques and bring in new services. Please reach out to me if you have any questions about any of our services.",
  },
  {
    id: "riley-boyer",
    name: "Riley Boyer",
    role: "Manifest Nails",
    image: "/64a7b7896c7416ae64fe154ee57f6d4e.jpeg?height=300&width=300&text=Riley",
    description: "",
  },
  {
    id: "jayden-emrich",
    name: "Jayden Emrich",
    role: "Bloom Beauty Tattoo",
    image: "/9cfd1b0b5d541287885c7aec48c3c3d9.jpeg?height=300&width=300&text=Olivia",
    description: ""
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 bg-gradient-to-t from-blue-500 to-blue-900 relative overflow-hidden">
      <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-blue-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute right-1/3 bottom-1/3 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Meet Our Team</h2>
        <p className="text-xl text-blue-100 text-center mb-16 max-w-3xl mx-auto">
          At Sapphire Spa, our team of skilled professionals is dedicated to providing you with the ultimate relaxation and beauty experience. Each member brings a unique set of skills and a passion for wellness to ensure your visit exceeds expectations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {employees.map((employee) => (
            <Link href={`/team/${employee.id}`} key={employee.id} className="flex">
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none transition-transform hover:scale-105 flex-grow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={employee.image}
                      alt={employee.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">{employee.name}</h3>
                  <p className="text-blue-200 text-center mb-4">{employee.role}</p>
                  <p className="text-blue-100 text-center text-sm flex-grow">{employee.description}</p>
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