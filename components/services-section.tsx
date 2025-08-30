"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Droplets, Car, Zap, Star, ArrowRight } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash & Wax",
    description: "Complete exterior cleaning with premium wax protection",
    features: ["Hand wash", "Clay bar treatment", "Premium wax application", "Tire shine"],
    price: "Starting at $89",
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description: "Deep cleaning and protection for your vehicle interior",
    features: ["Vacuum & steam clean", "Leather conditioning", "Dashboard protection", "Odor elimination"],
    price: "Starting at $129",
    popular: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting protection with ceramic coating technology",
    features: ["Paint correction", "Ceramic application", "2-year warranty", "Hydrophobic finish"],
    price: "Starting at $599",
    popular: true,
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Car,
    title: "Full Detail Package",
    description: "Complete interior and exterior transformation",
    features: ["Everything included", "Engine bay cleaning", "Headlight restoration", "Paint protection"],
    price: "Starting at $249",
    popular: false,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Express Detail",
    description: "Quick refresh for busy schedules",
    features: ["Exterior wash", "Interior vacuum", "Window cleaning", "90-minute service"],
    price: "Starting at $59",
    popular: false,
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Star,
    title: "Luxury Package",
    description: "Premium service for luxury and exotic vehicles",
    features: ["White glove service", "Premium products", "Paint correction", "Concierge pickup"],
    price: "Starting at $399",
    popular: false,
    color: "from-indigo-500 to-purple-500",
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Professional Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance leading-relaxed">
            From basic washes to premium ceramic coatings, we offer comprehensive car detailing services tailored to
            your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  service.popular ? "ring-2 ring-blue-400 ring-offset-2" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    POPULAR
                  </div>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-2">{service.price}</div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold`}
                  >
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-blue-100">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Not sure which service is right for you?</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Get a personalized recommendation and free quote based on your vehicle's needs.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
