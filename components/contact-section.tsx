"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, CheckCircle, Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance leading-relaxed">
            Ready to give your car the luxury treatment it deserves? Contact us today for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl font-bold text-slate-800">Request a Quote</CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`h-12 ${errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-blue-500"} transition-colors duration-300`}
                        required
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`h-12 ${errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-blue-500"} transition-colors duration-300`}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 border-slate-200 focus:border-blue-500 transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-slate-700 font-medium">
                        Service Needed
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                       <SelectContent>
  <SelectItem value="express">Express Detail (Starting at $59)</SelectItem>
  <SelectItem value="exterior">Exterior Wash (Starting at $75)</SelectItem>
  <SelectItem value="interior">Interior Detailing (Starting at $150)</SelectItem>
  <SelectItem value="full">Full Detail Package (Starting at $200)</SelectItem>
  <SelectItem value="premium">Premium Interior (Starting at $200)</SelectItem>
  <SelectItem value="luxury">Luxury Detail (Starting at $750)</SelectItem>
  <SelectItem value="ceramic">Ceramic Coating (Starting at $599)</SelectItem>
  <SelectItem value="custom">Custom Quote</SelectItem>
</SelectContent>

                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vehicle and any specific needs..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="border-slate-200 focus:border-blue-500 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get Free Quote"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">Contact Information</CardTitle>
                <CardDescription className="text-lg text-slate-600">Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {[
                  { icon: Phone, title: "Phone", content: "870-316-1464", color: "from-green-500 to-emerald-500" },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "detailingforchew@gmail.com",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: MapPin,
                    title: "Service Area",
                    content: "Twin Cities Metro Area",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    content: "Mon-Sat: 8AM-6PM\nSunday: By Appointment",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-lg">{item.title}</p>
                      <p className="text-slate-600 whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

           <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
  <CardHeader>
    <CardTitle className="text-2xl font-bold text-slate-800">Follow Us</CardTitle>
    <CardDescription className="text-lg text-slate-600">
      Stay updated with our latest work and offers
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/profile.php?id=61578567300427"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 border-2 border-slate-200 hover:bg-blue-600 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </Button>
      </a>
    </div>
  </CardContent>
</Card>


            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-600 to-cyan-600 text-white hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Mobile Service Available</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      We come to you! Available throughout the Twin Cities metro area for your convenience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
