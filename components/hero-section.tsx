"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Play } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    { text: "Best detailing service in Twin Cities!", author: "Mike Johnson" },
    { text: "My car looks brand new every time!", author: "Sarah Davis" },
    { text: "Professional and reliable service.", author: "Tom Wilson" },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
 <section
  id="home"
  className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden"
>
  <div className="absolute inset-0 z-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <img
      src="/luxury-car-being-detailed-with-professional-equipm.png"
      alt="Professional car detailing service"
      className="w-full h-full object-cover opacity-15"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center pt-24"> {/* Added padding-top here */}
    <div
      className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
     <div className="flex items-center justify-center space-x-1 mb-2 animate-fade-in mt-2">
{/* Added margin-top here */}
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
        <span className="ml-2 text-slate-600 font-medium">Trusted by 500+ customers</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
        Premium Car
        <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Detailing
        </span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 text-balance max-w-2xl mx-auto font-medium leading-relaxed">
        Experience <span className="text-blue-600 font-semibold">luxury in every detail</span>. Professional car
        detailing services serving the Twin Cities metro area with unmatched quality and care.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Button
          size="lg"
          className="text-lg px-10 py-7 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full font-semibold"
          onClick={scrollToContact}
        >
          Get Free Quote
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg px-10 py-7 bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full font-semibold text-blue-700"
          onClick={() => {
            const element = document.getElementById("services")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <Play className="mr-2 w-5 h-5" />
          View Services
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[ 
          { title: "Professional Quality", desc: "Premium products and expert techniques", icon: "⭐" },
          { title: "Mobile Service", desc: "We come to you anywhere in Twin Cities", icon: "🚗" },
          { title: "Satisfaction Guaranteed", desc: "100% satisfaction or money back", icon: "✅" }
        ].map((benefit, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {benefit.icon}
            </div>
            <h3 className="font-bold text-lg mb-3 text-slate-800">{benefit.title}</h3>
            <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <div className="transition-all duration-500 ease-in-out">
            <p className="text-lg italic text-slate-700 mb-3">"{testimonials[currentTestimonial].text}"</p>
            <p className="font-semibold text-blue-600">- {testimonials[currentTestimonial].author}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
