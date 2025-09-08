"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Car } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100"
          : "bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div
              className={`w-22 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                isScrolled ? "bg-gradient-to-br from-blue-600 to-cyan-600" : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              <Image src="/img/logo.png" alt="Logo" width={100} height={100} className="object-contain" />
            </div>
            <div>
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                Detailing for Chew
              </h1>
              <p className={`text-sm transition-colors duration-300 ${isScrolled ? "text-blue-600" : "text-blue-100"}`}>
                Luxury in Every Detail
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["home", "services", "pricing", "gallery", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium capitalize transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div
              className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-slate-600" : "text-blue-100"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>870-316-1464</span>
            </div>
            <div
              className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-slate-600" : "text-blue-100"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>detailingforchew@gmail.com</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden transition-all duration-300 ${
              isScrolled ? "text-slate-700 hover:bg-blue-50" : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav
            className={`md:hidden mt-6 pb-6 border-t transition-all duration-300 ${
              isScrolled ? "border-blue-100" : "border-white/20"
            }`}
          >
            <div className="flex flex-col space-y-4 pt-6">
              {["home", "services", "pricing", "gallery", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left font-medium capitalize transition-all duration-300 hover:translate-x-2 ${
                    isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                  }`}
                >
                  {section}
                </button>
              ))}
              <div className={`pt-4 border-t space-y-3 ${isScrolled ? "border-blue-100" : "border-white/20"}`}>
                <div
                  className={`flex items-center space-x-2 text-sm font-medium ${
                    isScrolled ? "text-slate-600" : "text-blue-100"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>870-316-1464</span>
                </div>
                <div
                  className={`flex items-center space-x-2 text-sm font-medium ${
                    isScrolled ? "text-slate-600" : "text-blue-100"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>detailingforchew@gmail.com</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
