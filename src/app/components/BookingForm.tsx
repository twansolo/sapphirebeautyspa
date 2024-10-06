'use client'

import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/app/components/ui/select"

export default function BookingForm() {
  return (
    <section id="book" className="w-full py-24 bg-gradient-to-b from-blue-500 to-blue-500/90 relative overflow-hidden">
      <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-blue-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-purple-300 rounded-full opacity-20 filter blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Book Your Experience</h2>
        <div className="max-w-md mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <Input placeholder="Your Name" className="bg-white bg-opacity-20 border-white text-white placeholder-white placeholder-opacity-75" />
            <Input type="email" placeholder="Your Email" className="bg-white bg-opacity-20 border-white text-white placeholder-white placeholder-opacity-75" />
            <Input type="tel" placeholder="Your Phone" className="bg-white bg-opacity-20 border-white text-white placeholder-white placeholder-opacity-75" />
            <Select>
              <SelectTrigger className="bg-white bg-opacity-20 border-white text-white">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="massage">Massage</SelectItem>
                <SelectItem value="facial">Facial</SelectItem>
                <SelectItem value="lash">Lash Extensions</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex space-x-4">
              <Input type="date" className="w-1/2 bg-white bg-opacity-20 border-white text-white" />
              <Input type="time" className="w-1/2 bg-white bg-opacity-20 border-white text-white" />
            </div>
            <Textarea placeholder="Special Requests" className="bg-white bg-opacity-20 border-white text-white placeholder-white placeholder-opacity-75" />
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Book Now</Button>
          </form>
        </div>
      </div>
    </section>
  )
}