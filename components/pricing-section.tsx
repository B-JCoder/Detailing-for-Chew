"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Express Detail",
    price: "$89",
    duration: "90 minutes",
    description: "Perfect for regular maintenance",
    popular: false,
    features: ["Exterior hand wash", "Interior vacuum", "Window cleaning", "Tire shine", "Dashboard wipe down"],
  },
  {
    name: "Complete Detail",
    price: "$189",
    duration: "3-4 hours",
    description: "Our most popular comprehensive service",
    popular: true,
    features: [
      "Everything in Express",
      "Clay bar treatment",
      "Premium wax application",
      "Interior deep clean",
      "Leather conditioning",
      "Engine bay cleaning",
    ],
  },
  {
    name: "Luxury Package",
    price: "$349",
    duration: "6-8 hours",
    description: "Premium service for luxury vehicles",
    popular: false,
    features: [
      "Everything in Complete",
      "Paint correction",
      "Ceramic coating application",
      "Headlight restoration",
      "Premium interior protection",
      "White glove service",
      "2-year warranty",
    ],
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
            Choose the perfect package for your vehicle. All prices include mobile service within the Twin Cities metro
            area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-lg transition-all duration-300 ${
                plan.popular ? "border-primary border-2 scale-105" : "border-2 hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.duration}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                  }`}
                  onClick={scrollToContact}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
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
