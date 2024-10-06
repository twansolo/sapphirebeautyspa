import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { employees } from '@/app/components/AboutSection'

export default function StylistPage({ params }: { params: { id: string } }) {
  const stylist = employees.find(emp => emp.id === params.id)

  if (!stylist) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        <Link href="/#team">
          <Button variant="outline" className="mb-8 text-white border-white hover:bg-white hover:text-blue-600">
            Back to Team
          </Button>
        </Link>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="relative w-64 h-64 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={stylist.image}
              alt={stylist.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-grow">
            <h1 className="text-4xl font-bold text-white mb-2">{stylist.name}</h1>
            <h2 className="text-2xl text-blue-200 mb-4">{stylist.role}</h2>
            <p className="text-white text-lg mb-6">{stylist.description}</p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Specialties:</h3>
              <ul className="list-disc list-inside text-blue-100">
                <li>Specialty 1</li>
                <li>Specialty 2</li>
                <li>Specialty 3</li>
              </ul>
              <h3 className="text-xl font-semibold text-white">Certifications:</h3>
              <ul className="list-disc list-inside text-blue-100">
                <li>Certification 1</li>
                <li>Certification 2</li>
              </ul>
              <h3 className="text-xl font-semibold text-white">Availability:</h3>
              <p className="text-blue-100">Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button className="bg-white text-blue-600 hover:bg-blue-50">Book an Appointment with {stylist.name}</Button>
        </div>
      </div>
    </div>
  )
}