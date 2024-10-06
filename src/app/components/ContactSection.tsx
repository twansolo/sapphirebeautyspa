'use client'

import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="relative w-full py-24 overflow-hidden">
      {/* City skyline background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.png?height=1080&width=1920&text=City+Skyline')",
          filter: "brightness(0.3)"
        }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-blue-900"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact form */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/60"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/60"
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-white/60"
                  rows={4}
                  required
                />
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact information */}
            <div className="bg-blue-600 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-white">
                    <MapPin className="w-5 h-5 mr-2" />
                    1855 1st Ave SE <br />Lower Level<br />Cedar Rapids, IA 52402
                  </p>
                  <p className="flex items-center text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (555) 123-4567
                  </p>
                  <p className="flex items-center text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    info@sapphirespa.com
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Opening Hours</h4>
                <p className="text-white">Monday: <span className='uppercase'>Closed</span></p>
                <p className="text-white">Thursday: 9:00 AM - 5:00 PM</p>
                <p className="text-white">Friday: 7:30 AM - 4:30 PM</p>
                <p className="text-white">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-white">Sunday: <span className='uppercase'>Closed</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}