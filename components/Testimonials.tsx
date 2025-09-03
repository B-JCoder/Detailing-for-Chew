"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
    
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const testimonials = [
    {
      name: "Richard P.",
      location: "Sun City West, AZ",
      rating: 5,
      text: "Falcon Auto Detail made my car shine like new again. The wash and wax gave the paint an amazing gloss, and even my tires look showroom ready!",
      image: "/professional-man-smiling-headshot.png",
    },
    {
      name: "Laura G.",
      location: "Surprise, AZ",
      rating: 5,
      text: "The interior detailing was fantastic! They vacuumed, wiped down every surface, and applied protectant. My car smells fresh and feels brand new.",
      
      image: "/professional-asian-woman-headshot.png",
    },
    {
      name: "Mark S.",
      location: "Maricopa County, AZ",
      rating: 5,
      text: "Outstanding service and attention to detail. Windows crystal clear, carpets spotless, and the team was professional and on time. Highly recommended!",
      image: "/professional-man-with-beard-smiling-headshot.png",
    },
    {
      name: "Angela R.",
      location: "Sun City West, AZ",
      rating: 5,
      text: "I’ve tried other detailers before, but Falcon is by far the best. Quick, reliable, and my SUV looks better than when I drove it off the lot.",
      image: "/professional-woman-smiling-headshot.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-xl text-muted-white max-w-3xl mx-auto text-pretty">
            Here’s what happy customers across Sun City West, Surprise, and Maricopa County are saying about Falcon Auto Detail.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="min-h-[300px]">
            <CardContent className="p-8">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-card-foreground mb-6 text-pretty italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-card-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card hover:bg-muted text-card-foreground p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card hover:bg-muted text-card-foreground p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground bg-gradient-to-r from-[#004773] to-[#EF0205]"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  )
}
