"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Droplets, Sparkles, Shield, Car, Zap, Star } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash",
    description: "Complete exterior cleaning with premium care",
    features: ["Hand wash", "Streak-free windows", "Tire shine"],
    price: "Starting at $75",
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Interior Detail",
    description: "Deep cleaning and protection for your vehicle interior",
    features: ["Vacuum", "Leather conditioning", "Dashboard protection", "Odor elimination"],
    price: "Starting at $150",
    popular: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "5-year ceramic protection with hydrophobic finish",
    features: ["Ceramic application", "5-year protection", "Hydrophobic finish"],
    price: "Starting at $599",
    popular: true,
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Car,
    title: "Full Detail Package",
    description: "Complete interior and exterior transformation",
    features: ["Interior package", "Exterior package"],
    price: "$200",
    popular: false,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Express Detail",
    description: "Quick refresh for busy schedules",
    features: ["Exterior wash", "Interior vacuum", "Window cleaning"],
    price: "Starting at $59",
    popular: false,
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Star,
    title: "Premium Interior",
    description: "Deep interior clean with stain removal & shampoo",
    features: ["Stain removal", "Steam cleaner", "Shampoo carpets", "Interior protection"],
    price: "$200",
    popular: false,
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Star,
    title: "Luxury Detail",
    description: "Complete premium service for ultimate care",
    features: ["Ceramic coating", "Paint correction", "Premium interior package"],
    price: "$750",
    popular: false,
    color: "from-pink-500 to-red-500",
  },
]

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose the perfect package for your vehicle. All prices include mobile service within the Twin Cities metro area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-all duration-300 ${
                  service.popular ? "border-primary border-2 scale-105" : "border-2 hover:border-primary/20"
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">{service.price}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${service.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}
                    onClick={scrollToContact}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom quote? Contact us for fleet services or specialty vehicles.
          </p>
          <Button variant="outline" onClick={scrollToContact}>
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
