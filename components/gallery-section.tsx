"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/luxury-sedan-after-professional-detailing-with-glo.png",
    alt: "Luxury sedan after detailing",
    category: "Exterior",
    title: "Premium Sedan Detail",
    description: "Complete exterior transformation with ceramic coating protection",
  },
  {
    src: "/car-interior-leather-seats-professionally-cleaned-.png",
    alt: "Clean car interior",
    category: "Interior",
    title: "Interior Deep Clean",
    description: "Professional leather conditioning and deep cleaning service",
  },
  {
    src: "/sports-car-with-ceramic-coating-showing-water-bead.png",
    alt: "Ceramic coating application",
    category: "Ceramic Coating",
    title: "Ceramic Protection",
    description: "Long-lasting ceramic coating with hydrophobic properties",
  },
  {
    src: "/suv-engine-bay-professionally-detailed-and-cleaned.png",
    alt: "Engine bay detailing",
    category: "Engine Bay",
    title: "Engine Bay Clean",
    description: "Thorough engine bay cleaning and protection service",
  },
  {
    src: "/luxury-car-headlights-restored-to-crystal-clear-co.png",
    alt: "Headlight restoration",
    category: "Restoration",
    title: "Headlight Restoration",
    description: "Crystal clear headlight restoration for improved visibility",
  },
  {
    src: "/convertible-car-with-perfect-paint-correction-and-.png",
    alt: "Paint correction results",
    category: "Paint Correction",
    title: "Paint Perfection",
    description: "Professional paint correction removing swirls and scratches",
  },
]

const categories = ["All", "Exterior", "Interior", "Ceramic Coating", "Engine Bay", "Restoration", "Paint Correction"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return
    setIsAnimating(true)
    setTimeout(() => {
      setSelectedCategory(category)
      setIsAnimating(false)
    }, 150)
  }

  const openLightbox = (index: number) => {
    setLightboxImage(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxImage === null) return
    const newIndex =
      direction === "prev"
        ? (lightboxImage - 1 + filteredImages.length) % filteredImages.length
        : (lightboxImage + 1) % filteredImages.length
    setLightboxImage(newIndex)
  }

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-cyan-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Our Work Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance leading-relaxed">
            See the transformation we bring to every vehicle. Quality results that speak for themselves.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-white border-2 border-blue-200 text-blue-700 hover:border-blue-400 hover:bg-blue-50 shadow-md"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
        >
          {filteredImages.map((image, index) => (
            <Card
              key={`${selectedCategory}-${index}`}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-0 bg-white/90 backdrop-blur-sm transform hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-xl mb-2">{image.title}</h3>
                  <p className="text-blue-100 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.description}
                  </p>
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 text-lg mb-6">Want to see your car featured here?</p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
          >
            Book Your Detail Today
          </Button>
        </div>
      </div>

      {lightboxImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[lightboxImage].src || "/placeholder.svg"}
              alt={filteredImages[lightboxImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full"
              onClick={() => navigateLightbox("prev")}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full"
              onClick={() => navigateLightbox("next")}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="font-bold text-xl mb-1">{filteredImages[lightboxImage].title}</h3>
              <p className="text-blue-100">{filteredImages[lightboxImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
