"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 rounded-full flex items-center justify-center">
                <Image src="/img/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Detailing for Chew</h3>
                <p className="text-sm opacity-80">Luxury in Every Detail</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Professional car detailing services serving the Twin Cities metro area with premium quality and
              exceptional customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="flex flex-col space-y-2 text-sm opacity-80">
              <span>Exterior Wash & Wax</span>
              <span>Interior Detailing</span>
              <span>Ceramic Coating</span>
              <span>Paint Correction</span>
              <span>Engine Bay Cleaning</span>
              <span>Mobile Service</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>870-316-1464</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>detailingforchew@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Twin Cities Metro Area</span>
              </div>
            </div>

            <div className="flex space-x-2 pt-2">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Detailing for Chew. All rights reserved. | Serving the Twin Cities Metro Area
          </p>
        </div>
      </div>
    </footer>
  )
}
